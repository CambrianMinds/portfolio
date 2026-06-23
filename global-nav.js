/**
 * global-nav.js
 * Injects a floating global navigation menu into the page.
 * Works from root index.html and all project subdirectories.
 */
(function() {
    // Determine if we're at the portfolio root (index.html at root or in PORTFOLIO-site)
    const pathname = window.location.pathname;
    const isRoot = pathname === '/' || 
                   pathname.endsWith('/index.html') && !pathname.includes('/PORTFOLIO-site/') ||
                   pathname.endsWith('/PORTFOLIO-site/') ||
                   pathname.endsWith('/PORTFOLIO-site/index.html');
    
    // Determine root prefix for subdirectory projects
    // In production (Netlify): projects are at /ra-site/, /tss-site/, etc. -> need ../
    // In local file://: projects are in subdirectories of PORTFOLIO-site -> need ../
    let rootPrefix = '';
    
    const projectDirs = [
        '/ra-site/', '/tss-site/', '/maid-site/', 
        '/we-kidnapped-the-president-page/', '/the-disappeared-site/', 
        '/maria-page/', '/tmoc-built/', '/tmoc-website/'
    ];
    
    const inProjectDir = projectDirs.some(dir => pathname.includes(dir));
    
    if (inProjectDir) {
        rootPrefix = '../';
    } else if (window.location.protocol === 'file:' && !isRoot) {
        // Local file system fallback for any other subdirectory
        rootPrefix = '../';
    }

    // Projects list
    const links = [
        { name: 'Portfolio Hub', url: rootPrefix + 'index.html', isHeader: true },
        { name: 'Resonance Architecture', url: rootPrefix + 'ra-site/index.html' },
        { name: "The Serpent's Sentence", url: rootPrefix + 'tss-site/index.html' },
        { name: 'The Mathematics of Connection', url: rootPrefix + 'tmoc-built/index.html' },
        { name: 'MAiD Reform Policy', url: rootPrefix + 'maid-site/index.html' },
        { name: 'Notable Disappearances', url: rootPrefix + 'the-disappeared-site/briefing.html' },
        { name: 'We Kidnapped the President', url: rootPrefix + 'we-kidnapped-the-president-page/index.html' },
        { name: 'Maria', url: rootPrefix + 'maria-page/index.html' }
    ];

    // Create DOM elements
    const navContainer = document.createElement('div');
    navContainer.id = 'jb-global-nav';

    const btn = document.createElement('button');
    btn.id = 'jb-global-nav-btn';
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    btn.setAttribute('aria-label', 'Global Navigation');

    const menu = document.createElement('div');
    menu.id = 'jb-global-nav-menu';

    // Populate links
    links.forEach(link => {
        if (link.isHeader) {
            const header = document.createElement('div');
            header.className = 'jb-nav-header';
            header.innerText = 'Main';
            menu.appendChild(header);

            const a = document.createElement('a');
            a.href = link.url;
            a.innerText = link.name;
            a.style.fontWeight = 'bold';
            menu.appendChild(a);

            const subHeader = document.createElement('div');
            subHeader.className = 'jb-nav-header';
            subHeader.innerText = 'Projects';
            subHeader.style.marginTop = '8px';
            menu.appendChild(subHeader);
        } else {
            const a = document.createElement('a');
            a.href = link.url;
            a.innerText = link.name;
            menu.appendChild(a);
        }
    });

    navContainer.appendChild(menu);
    navContainer.appendChild(btn);
    document.body.appendChild(navContainer);

    // Toggle menu
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navContainer.classList.toggle('active');
        if (navContainer.classList.contains('active')) {
            btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>';
        } else {
            btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
        }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target)) {
            navContainer.classList.remove('active');
            btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
        }
    });
})();
