# Matricole 2026/2027

Sito statico dedicato alle matricole dei corsi di laurea del **Dipartimento di Informatica** di Sapienza Universita di Roma.

La pagina permette alle nuove studentesse e ai nuovi studenti di:

- individuare il proprio corso di laurea;
- raggiungere, tramite collegamenti esterni, i relativi gruppi WhatsApp e Telegram;
- aprire, sempre tramite collegamenti esterni, la sezione pertinente della **wiki di SapienzaStudents.net**;
- consultare le informazioni essenziali in italiano o in inglese.

Questa pagina offre un accesso immediato ai canali e ai contenuti piu utili all'inizio del percorso accademico.

## Caratteristiche

- pagina statica e responsiva;
- interfaccia leggera e accessibile;
- contenuti disponibili in italiano e inglese;
- collegamenti centralizzati ai gruppi e alle pagine della wiki;
- statistiche aggregate tramite GoatCounter.

## Tecnologie

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [GoatCounter](https://www.goatcounter.com/)

## Requisiti di build

- Node.js 22 o versione successiva, con Corepack integrato;
- Yarn Berry.

## Sviluppo locale

```bash
# Abilita Corepack
corepack enable

# Installa le dipendenze
yarn install

# Avvia il server di sviluppo
yarn dev
```

Il server di sviluppo viene esposto, di default, all'indirizzo `http://localhost:4321`.

## Build di produzione

```bash
# Genera il sito statico
yarn build

# Visualizza in anteprima la build
yarn preview
```

I file generati vengono salvati nella cartella `dist/`.

## Struttura principale

- `src/pages/`: pagina e varianti linguistiche;
- `src/components/`: componenti dell'interfaccia;
- `src/content/`: corsi, collegamenti e traduzioni;
- `src/assets/`: stile globale e risorse grafiche;
- `public/`: file statici e script del contatore;
- `deploy/`: configurazione per il deployment tramite container e Caddy.

## Styling

Lo stile globale del sito e definito in `src/assets/global.css`.
