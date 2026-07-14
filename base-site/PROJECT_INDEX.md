# Justin Bogner Portfolio — Project Index

**Canonical URL:** <https://cambrianminds.com/>  
**Contact:** <contact@cambrianminds.com>  
**Last Updated:** 2026-06-24

---

## Structure Overview

```
base-site/
├── index.html              # Portfolio hub (main landing page)
├── styles.css              # Root-level styling
├── global-nav.css          # Shared floating navigation styles
├── global-nav.js           # Shared navigation injection script
├── hub.js                  # Root-level JavaScript
├── llms.txt                # LLM knowledge base
├── sitemap.xml             # Root sitemap
├── netlify.toml            # Netlify deployment config
├── netlify-api-payload.json
├── robots.txt
├── favicon.svg
├── maid-site/              # Bioethics policy packet (9 HTML docs + 15 TeX/PDF)
├── manual-site/            # Philosophy self-help (1 HTML + TeX/PDF)
├── maria-page/             # Children's fable (1 HTML + MD + PDF)
├── mathematics-site/       # Physics memoir (1 HTML)
├── ra-site/                # Archaeology/physics (1 HTML + CSS + JS + 5 assets)
├── the-disappeared-site/   # Investigative UAP research (2 HTML + 2 TeX + 2 PDF + BIB + MD)
├── tss-site/               # Neuroscience/AI book (1 HTML + 5 articles + CSS + JS)
└── we-kidnapped-the-president-page/  # Constitutional law essay (1 HTML)
```

---

## Document Classification by Type

### HTML Files (20 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `base-site/` | `index.html` | Portfolio hub landing page |
| `maid-site/` | `index.html`, `about.html`, `ask.html`, `clinical_brief.html`, `documents.html`, `essay.html`, `form.html`, `framework.html`, `legal_foundations.html`, `media.html`, `objections.html` | Policy packet navigation and content |
| `tss-site/` | `index.html`, `articles/*.html` (5 files) | Book landing + article collection |
| `ra-site/` | `index.html` | Archaeology framework presentation |
| `the-disappeared-site/` | `briefing.html` | Investigative dossier |
| `manual-site/` | `index.html` | Philosophy guide |
| `maria-page/` | `index.html` | Children's fable presentation |
| `we-kidnapped-the-president-page/` | `index.html` | Constitutional essay |

### CSS Files (4 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `base-site/` | `styles.css`, `global-nav.css` | Root styling + shared nav |
| `maid-site/` | `style.css` | Policy packet styling |
| `ra-site/` | `styles.css` | Archaeology site styling |
| `tss-site/` | `styles.css` | Serpent's Sentence styling |

### JavaScript Files (3 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `base-site/` | `hub.js`, `global-nav.js` | Root functionality + shared nav injection |
| `ra-site/` | `script.js` | Archaeology site interactions |
| `maid-site/` | `nav.js` | Policy packet navigation |
| `tss-site/` | `scripts.js` | Serpent's Sentence interactions |

### TeX/LaTeX Files (17 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `maid-site/tex/` | `00_master_policy.tex`, `01_legislative_brief.tex`, `02_advocacy_brief.tex`, `03_academic_paper.tex`, `04_clinical_brief.tex`, `05_model_reporting_form.tex`, `05_one_pager.tex`, `06_model_reporting_form_us.tex`, `07_journal_clinical.tex`, `08_journal_policy.tex`, `09_essay_the_walrus.tex`, `autonomy_exit_essay.tex`, `campaign.sty`, `model_bill_canada.tex`, `model_bill_us.tex` | Policy packet source documents |
| `manual-site/` | `manual.tex` | Philosophy guide source |
| `the-disappeared-site/` | `research_report.tex`, `the_vector_episode_2.tex` | Investigative research source |

### PDF Files (17 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `maid-site/pdfs/` | 14 PDF files matching TeX sources | Policy packet downloadable documents |
| `manual-site/` | `manual.pdf` | Philosophy guide |
| `maria-page/` | `maria.pdf` | Children's fable |
| `ra-site/` | `resonance_architecture_framework.pdf` | Archaeology framework |
| `the-disappeared-site/` | `research_report.pdf`, `the_vector_episode_2.pdf` | Investigative research |

### Markdown Files (2 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `maria-page/` | `maria.md` | Fable source text |
| `the-disappeared-site/` | `source_notes.md` | Research notes |

### Configuration/Data Files (5 total)

| Location | Files | Purpose |
|----------|-------|---------|
| `base-site/` | `netlify.toml`, `netlify-api-payload.json`, `sitemap.xml`, `robots.txt`, `llms.txt` | Deployment and SEO |
| `maid-site/` | `vercel.json`, `sitemap.xml` | Vercel deployment config |

---

## Content Summaries by Section

### 1. MAiD Reform Policy (`maid-site/`)

**Domain:** Bioethics, Health Policy  
**Core Thesis:** Medical Aid in Dying eligibility should rest on decisional capacity rather than suffering-based criteria.

**Document Suite:**

- **Master Policy Packet** - Complete policy framework
- **Legislative Brief** - For policymakers and staffers
- **Advocacy Brief** - For disability rights advocates
- **Academic Paper** - Peer-review format
- **Clinical Brief** - For healthcare professionals
- **Model Reporting Forms** - Canada and US variants
- **Journal Submissions** - Clinical and policy journals
- **Companion Essay** - Autobiographical/political register
- **One-Pager** - Executive summary

**Navigation Structure:** Overview → Framework → Documents → Objections → The Ask → Essay → About → Press

### 2. The Serpent's Sentence (`tss-site/`)

**Domain:** Philosophy, Neuroscience, AI  
**Core Thesis:** Language acquisition was the cognitive event that broke humans out of pre-linguistic unity; AI represents a second cognitive explosion.

**Articles:**

1. Are Humans the Trilobites of Consciousness?
2. Language Was Humanity's Fall from Grace
3. The Neuroscience Hidden in the Garden of Eden
4. The Voice in Your Head Is Not You
5. Why AI Will Never Experience What You Call "I"

### 3. Resonance Architecture (`ra-site/`)

**Domain:** Archaeology, Applied Physics  
**Core Thesis:** Ancient megalithic cultures systematically employed vibroacoustic phenomena for precision stoneworking.

**Anomaly Set (5 predictions):**

1. Logistical Transport - Vibration reduces friction
2. Anomalous Drill Cores - Ultrasonic abrasion evidence
3. Polygonal Precision - Sub-millimeter gaps at Sacsayhuamán
4. Systematic Boss Placement - Transducer contact points
5. Acoustic Enclosures - Deliberate resonant frequencies

### 4. Notable Disappearances (`the-disappeared-site/`)

**Domain:** Investigative Research, UAP  
**Core Thesis:** Statistically anomalous cluster of scientist deaths/disappearances linked to classified aerospace programs.

**Key Figures Documented:**

- Amy C. Eskridge (34, Institute for Exotic Science)
- Michael D. Hicks (59, NASA JPL)
- Monica J. Reza (60, NASA JPL / Aerojet)
- Carl Grillmair (67, Caltech)
- W. Neil McCasland (68, USAF Major General)

### 5. The Mathematics of Connection (`mathematics-site/`)

**Domain:** Physics, Memoir, Consciousness Studies  
**Core Thesis:** Consciousness as fundamental substrate field beneath spacetime with falsifiable predictions.

**Predictions:**

- Bell-test outcomes (S > 2√2)
- DESI dark-energy correlation (w₀ ≈ -0.91)
- Solitonic dark matter

### 6. Owner's Manual for the Meat Suit (`manual-site/`)

**Domain:** Philosophy, Self-Help  
**Core Thesis:** Philosophical guide to embodiment, attention, and inhabiting a biological machine.

### 7. We Kidnapped the President (`we-kidnapped-the-president-page/`)

**Domain:** Constitutional Law, Civic Policy  
**Core Thesis:** Analysis of unauthorized executive military operations (Operation Midnight Hammer, Operation Absolute Resolve) as accountability mechanisms.

### 8. Maria (`maria-page/`)

**Domain:** Fiction, Children's Fable  
**Core Thesis:** Institutional power dynamics through the story of a museum mongoose whose exhibit is moved to a less prominent position.

---

## Cross-Reference Mapping

### Shared Assets

- `global-nav.css` + `global-nav.js` → All project subdirectories (floating navigation menu)
- `styles.css` → Root styling, referenced by all projects
- `hub.js` → Root-level functionality

### Navigation Relationships

```
index.html (root) → All 8 project index.html files
maid-site/ documents interlink via nav.js navigation
tss-site/ articles link back to parent index.html
ra-site/ assets referenced in index.html
the-disappeared-site/ references research_report.tex and references.bib
```

### Source-to-Output Relationships

```
maid-site/tex/*.tex → maid-site/pdfs/*.pdf (compiled LaTeX)
maid-site/tex/*.tex → maid-site/*.html (content source)
manual-site/manual.tex → manual-site/manual.pdf
the-disappeared-site/research_report.tex → research_report.pdf
the-disappeared-site/the_vector_episode_2.tex → the_vector_episode_2.pdf
```

---

## Key Insights

### Organizational Patterns

1. **Modular Architecture:** Each project lives in its own subdirectory with self-contained assets
2. **Shared Navigation:** Consistent floating nav across all projects via `global-nav.js`
3. **Source Parity:** TeX sources provided alongside PDFs for policy documents
4. **SEO Consistency:** All HTML files include Open Graph, Twitter, and JSON-LD structured data

### Missing Files

- No `package.json` (static site, no build process)
- No `assets/` folder at root level (referenced in sitemap but missing)

### Recently Added/Fixed

- ✅ Created `README.md` at root level
- ✅ Enhanced `.gitignore` with standard patterns
- ✅ Fixed missing `og-image.jpg` → using `favicon.svg` for Open Graph images
- ✅ Added mobile breakpoints to `ra-site/styles.css` (600px)
- ✅ Optimized `maria-page/index.html` for mobile (reduced background shapes, PDF viewer)

### Mobile Optimization Status

All 10 pages have viewport meta tags and responsive CSS breakpoints. See `CROSS_LINKS_REPORT.md` for details.

### Deployment Configuration

- **Primary:** Netlify (`netlify.toml`)
- **Secondary:** Vercel (`maid-site/vercel.json`)
- **Domain:** cambrianminds.com (canonical)

### Content Themes

All projects explore variations on:

- **Emergence** - Consciousness, language, and technological emergence
- **Recursion** - Self-reference in systems and cognition
- **Coherence** - Connectedness across physical and conceptual domains
- **Participation** - Agency in institutional and cosmic contexts

---

## Actionable Next Steps

1. **Verify PDF/TeX parity** - Ensure all TeX files compile to matching PDFs
2. **Create root assets folder** - Add `og-image.jpg` for social sharing (optional, currently using favicon.svg)
3. **Test mobile navigation** - Verify global-nav.js works correctly on all devices
