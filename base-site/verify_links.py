import os
import re
from html.parser import HTMLParser

class LinkChecker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    
    def handle_starttag(self, tag, attrs):
        for attr_name, attr_value in attrs:
            if attr_name in ('href', 'src') and attr_value:
                # Skip external links, mailto, tel, and anchors (#fragment)
                if (attr_value.startswith(('http://', 'https://', '#', 'mailto:', 'tel:')) or
                    '#' in attr_value.split('?')[0]):
                    continue
                # Skip query strings with fragments
                clean_val = attr_value.split('#')[0].split('?')[0]
                if clean_val:
                    self.links.append(clean_val)

def check_html_file(html_file):
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    checker = LinkChecker()
    checker.feed(content)
    
    file_dir = os.path.dirname(html_file)
    missing = []
    
    for link in checker.links:
        if link.startswith('../'):
            target = os.path.normpath(os.path.join(file_dir, link))
        else:
            target = os.path.normpath(os.path.join(file_dir, link))
        
        if not os.path.exists(target):
            missing.append(link)
    
    return missing

def list_assets(directory):
    assets = []
    asset_path = os.path.join(directory, 'assets')
    if os.path.exists(asset_path):
        for f in os.listdir(asset_path):
            assets.append(f)
    return assets

def main():
    base_dir = 'd:/PORTFOLIO-site'
    
    sites = {
        'maid-site': ['maid-site/index.html', 'maid-site/about.html', 'maid-site/ask.html', 
                      'maid-site/clinical_brief.html', 'maid-site/documents.html', 
                      'maid-site/essay.html', 'maid-site/form.html', 'maid-site/framework.html', 
                      'maid-site/legal_foundations.html', 'maid-site/media.html', 
                      'maid-site/objections.html'],
        'ra-site': ['ra-site/index.html'],
        'tss-site': ['tss-site/index.html'],
        'maria-page': ['maria-page/index.html'],
        'the-disappeared-site': ['the-disappeared-site/briefing.html'],
        'tmoc-built': ['tmoc-built/index.html'],
        'we-kidnapped-the-president-page': ['we-kidnapped-the-president-page/index.html']
    }
    
    all_missing = {}
    
    print("=== CHECKING LINKED FILES ===\n")
    
    for site, files in sites.items():
        print(f"--- {site} ---")
        for rel_file in files:
            full_path = os.path.join(base_dir, rel_file)
            if os.path.exists(full_path):
                missing = check_html_file(full_path)
                if missing:
                    all_missing[rel_file] = missing
                    for m in missing:
                        print(f"  MISSING: {m}")
                else:
                    print(f"  {os.path.basename(full_path)}: OK")
            else:
                print(f"  NOT FOUND: {rel_file}")
        print()
    
    print("\n=== ASSETS CHECK ===\n")
    for site in sites.keys():
        assets = list_assets(os.path.join(base_dir, site))
        if assets:
            print(f"{site}/assets: {len(assets)} files")
    
    print("\n=== SUMMARY ===")
    if all_missing:
        print(f"\nFound {sum(len(v) for v in all_missing.values())} missing file references:")
        for html_file, missing in all_missing.items():
            print(f"  {html_file}:")
            for m in missing:
                print(f"    - {m}")
    else:
        print("\nAll linked files are present!")

if __name__ == '__main__':
    main()