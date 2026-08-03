# Performance Pass

Demo frontend premium dedicata all’atletica leggera, realizzata con Next.js App Router, TypeScript, SCSS Modules, GSAP, React Context e LocalStorage.

## Avvio locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`.

Per canonical, sitemap e Open Graph in produzione, copiare `.env.example` e impostare `NEXT_PUBLIC_SITE_URL` con il dominio pubblico definitivo. Il token `GOOGLE_SITE_VERIFICATION` è opzionale e va valorizzato soltanto dopo aver registrato il sito in Search Console.

## Flussi inclusi

- home con intro GSAP, hero, contenuti, mini-corsi e vantaggi;
- transizioni di pagina GSAP con velo, destinazione e supporto reduced motion;
- fotografie originali di atletica e mockup della card fisica generati per la demo;
- footer premium con newsletter demo, navigazione completa e pagine legali;
- onboarding in quattro step con salvataggio locale;
- dashboard personalizzata in base a specialità, livello e obiettivo;
- catalogo di 12 video con filtri, badge e preferiti;
- tre mini-corsi con due lezioni Free e lezioni Premium bloccate;
- vantaggi partner mock con copia codice e directory di 16 negozi affiliati;
- profilo atletico modificabile e attivazione Free, Premium o Pro in modalità demo;
- pagine video statiche con URL semantici e metadata dedicati.
- SEO App Router con canonical, Open Graph, Twitter card, JSON-LD, robots, sitemap e manifest.

I dati mock vivono in `lib/mock-data.ts`, il contratto del profilo in `lib/types.ts` e la persistenza versionata in `lib/profile-storage.ts`. Il placeholder Supabase in `lib/supabase/client.ts` documenta le tabelle e i confini di sicurezza previsti per la fase successiva.
