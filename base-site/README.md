# Justin Bogner Portfolio

**Independent researcher exploring consciousness, language, and the architectures that connect them.**

https://cambrianminds.com/

---

## Projects

| Project | Domain | Description |
|---------|--------|-------------|
| [The Mathematics of Connection](mathematics-site/index.html) | Physics · Memoir | Consciousness as fundamental substrate field with falsifiable predictions |
| [Owner's Manual for the Meat Suit](manual-site/index.html) | Philosophy · Self-Help | Guide to embodiment, attention, and inhabiting a biological machine |
| [The Serpent's Sentence](tss-site/index.html) | Philosophy · Neuroscience | Language origins, consciousness, and artificial minds |
| [Resonance Architecture](ra-site/index.html) | Archaeology · Physics | Vibroacoustic hypothesis for ancient megalithic precision stoneworking |
| [Notable Disappearances](the-disappeared-site/briefing.html) | Investigative · UAP | Scientist disappearances and legal obfuscation patterns |
| [MAiD Reform Policy](maid-site/index.html) | Bioethics · Policy | Capacity-based Medical Aid in Dying reform packet |
| [We Kidnapped the President](we-kidnapped-the-president-page/index.html) | Constitutional Law | Analysis of unauthorized executive military operations |
| [Maria](maria-page/index.html) | Fiction · Children's | Fable about institutional power and attention |

---

## Structure

```
base-site/
├── index.html              # Portfolio hub
├── styles.css              # Root styling
├── global-nav.js           # Shared floating navigation
├── global-nav.css          # Navigation styles
├── netlify.toml            # Netlify deployment
├── sitemap.xml             # SEO sitemap
└── [project]/              # Each project in its own subdirectory
    ├── index.html
    ├── style.css (optional)
    ├── scripts.js (optional)
    └── assets/ (optional)
```

---

## Development

This is a static site with no build process. Serve locally with any HTTP server:

```bash
# Python
python -m http.server 8000

# Or Netlify CLI
netlify dev
```

---

## Deployment

- **Primary:** Netlify (root `netlify.toml`)
- **Secondary:** Vercel (`maid-site/vercel.json`)

---

## Contact

contact@cambrianminds.com