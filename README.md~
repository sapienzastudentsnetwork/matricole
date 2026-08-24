# Matricole 2026/2027 Landing Page

Landing page statica, mobile-first e bilingue (IT/EN) per i gruppi matricole del Dipartimento di Informatica — Sapienza Students Network.

Built con **Astro 5**, **Tailwind CSS 4**, e **daisyUI 5**.

## Struttura

```
.
├── public/                  # Asset statici (immagini)
│   ├── ssn-crest.png
│   └── ssn-logo.png
├── src/
│   ├── assets/
│   │   └── global.css      # Tema personalizzato + daisyUI
│   ├── components/         # Componenti riutilizzabili
│   │   ├── icons/          # Icone SVG
│   │   ├── CourseCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HowSection.astro
│   │   ├── CoursesSection.astro
│   │   ├── LanguageToggle.astro
│   │   └── WikiCallout.astro
│   ├── content/
│   │   ├── courses.js      # Dati dei corsi
│   │   └── translations.js # Testi IT/EN
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       └── index.astro
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
└── .yarnrc.yml
```

## Sviluppo

### Prerequisiti
- Node.js 22+ (con Corepack integrato)
- Yarn Berry

### Comandi

```bash
# Abilita Corepack
corepack enable

# Installa dipendenze
yarn install

# Avvia server di sviluppo
yarn dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build di produzione

```bash
# Genera sito statico
yarn build

# Anteprima build
yarn preview
```

Il sito viene generato nella cartella `dist/`.

## Tema

I colori dei corsi sono definiti in `src/assets/global.css`:
- `--color-subject-burgundy: #6d3438` (ACSAI)
- `--color-subject-navy: #23395b` (Informatica A-L, M-Z)
- `--color-subject-petrol: #1f3d4d` (Informatica a distanza)
- `--color-subject-forest: #3b4c3b` (Computer Science)
- `--color-subject-olive: #5d5635` (Cybersecurity)
- `--color-subject-plum: #4b365f` (Data Science)

Il tema dark `studentNavyDark` e' definito nello stesso file.

## Lingua

La lingua si seleziona tramite parametro URL:
- Italiano: `http://localhost:3000/?lang=it`
- Inglese: `http://localhost:3000/?lang=en`

## Dati

I corsi sono definiti in `src/content/courses.js`.
I testi sono in `src/content/translations.js`.

## Deploy

Il progetto genera file statici in `dist/`. Puoi deployare su:
- GitHub Pages
- Netlify
- Vercel
- Qualsiasi server statico
