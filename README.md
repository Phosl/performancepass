# Performance Pass

Demo frontend premium per sportivi realizzata con Next.js App Router, TypeScript, SCSS Modules, GSAP, React Context e LocalStorage.

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`.

## Flussi inclusi

- home con intro GSAP, hero, contenuti, mini-corsi e vantaggi;
- onboarding in quattro step con salvataggio locale;
- dashboard personalizzata in base a sport, livello e obiettivo;
- catalogo di 12 video con filtri, badge e preferiti;
- tre mini-corsi con due lezioni Free e lezioni Premium bloccate;
- vantaggi partner mock con copia codice;
- profilo modificabile e attivazione Premium in modalità demo;
- pagine video statiche con URL semantici e metadata dedicati.

I dati mock vivono in `lib/mock-data.ts`, il contratto del profilo in `lib/types.ts` e la persistenza in `context/AthleteContext.tsx`. Il placeholder Supabase in `lib/supabase/client.ts` documenta le tabelle e i confini di sicurezza previsti per la fase successiva.
