import type { Benefit, MiniCourse, PartnerStore, TrainingVideo } from "./types";

export const videos: TrainingVideo[] = [
  {
    id: "v1", slug: "primi-30-metri", title: "I primi 30 metri", eyebrow: "Sprint Lab", duration: 18,
    level: "Intermedio", access: "premium", tags: ["blocchi", "accelerazione"], disciplines: ["Velocità", "Prove multiple"], goals: ["Velocità", "Tecnica"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Velocista in uscita dai blocchi su una pista di atletica", accent: "orange",
    description: "Posizione, spinta e progressione per trasformare l’uscita dai blocchi in un’accelerazione efficace."
  },
  {
    id: "v2", slug: "drills-postura-appoggio", title: "Drills: postura e appoggio", eyebrow: "Tecnica essenziale", duration: 12,
    level: "Principiante", access: "free", tags: ["drills", "appoggio"], disciplines: ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Prove multiple"], goals: ["Tecnica", "Velocità"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Atleta che esegue esercizi tecnici di corsa in pista", accent: "lime",
    description: "Una sequenza semplice per allineare postura, appoggio e azione delle braccia prima della seduta."
  },
  {
    id: "v3", slug: "ritmo-tra-ostacoli", title: "Ritmo tra gli ostacoli", eyebrow: "Hurdles Room", duration: 24,
    level: "Intermedio", access: "premium", tags: ["ritmo", "barriere"], disciplines: ["Ostacoli", "Prove multiple"], goals: ["Tecnica", "Velocità"],
    image: "/images/generated/athletics-hurdles.webp", imageAlt: "Ostacolista durante il passaggio di una barriera", accent: "violet",
    description: "Attacco, richiamo e passi intermedi: costruisci un ritmo stabile senza forzare il gesto."
  },
  {
    id: "v4", slug: "doppia-soglia", title: "Doppia soglia, senza confusione", eyebrow: "Endurance Lab", duration: 26,
    level: "Avanzato", access: "premium", tags: ["soglia", "metodo"], disciplines: ["Mezzofondo e fondo"], goals: ["Resistenza", "Preparazione gara"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Mezzofondista durante una seduta di ritmo controllato", accent: "blue",
    description: "Principi, intensità e recuperi per capire quando il lavoro di soglia sostiene davvero la prestazione."
  },
  {
    id: "v5", slug: "lungo-specifico", title: "Il lungo specifico", eyebrow: "Distance Session", duration: 32,
    level: "Intermedio", access: "free", tags: ["fondo", "ritmo gara"], disciplines: ["Mezzofondo e fondo"], goals: ["Resistenza", "Preparazione gara"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Atleta di fondo in allenamento sulla pista", accent: "blue",
    description: "Impara a distribuire ritmo e qualità nel lungo per arrivare alla gara con una base più solida."
  },
  {
    id: "v6", slug: "salto-in-lungo-rincorsa-stacco", title: "Rincorsa e stacco nel lungo", eyebrow: "Jump Studio", duration: 22,
    level: "Intermedio", access: "premium", tags: ["rincorsa", "stacco"], disciplines: ["Salti", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Saltatore durante lo stacco nel salto in lungo", accent: "orange",
    description: "Trova una rincorsa ripetibile e porta velocità sull’asse di stacco senza perdere controllo."
  },
  {
    id: "v7", slug: "salto-in-alto-curva", title: "Costruire la curva nell’alto", eyebrow: "Jump Studio", duration: 20,
    level: "Principiante", access: "free", tags: ["curva", "elevazione"], disciplines: ["Salti", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Atleta durante una sessione tecnica dedicata ai salti", accent: "lime",
    description: "Riferimenti pratici per impostare la curva, preparare lo stacco e arrivare alla pedana con fiducia."
  },
  {
    id: "v8", slug: "getto-peso-catena-spinta", title: "La catena di spinta nel peso", eyebrow: "Throws Lab", duration: 24,
    level: "Intermedio", access: "premium", tags: ["peso", "spinta"], disciplines: ["Lanci", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-throws.webp", imageAlt: "Lanciatore nella pedana del getto del peso", accent: "sand",
    description: "Dai piedi alla mano: coordina le spinte e trasferisci forza all’attrezzo senza spezzare il gesto."
  },
  {
    id: "v9", slug: "giavellotto-rincorsa-blocco", title: "Rincorsa e blocco nel giavellotto", eyebrow: "Throws Lab", duration: 28,
    level: "Avanzato", access: "premium", tags: ["giavellotto", "blocco"], disciplines: ["Lanci", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-throws.webp", imageAlt: "Atleta che prepara un lancio del giavellotto in pista", accent: "orange",
    description: "Sequenza, passi incrociati e blocco finale per trasformare la velocità della rincorsa in lancio."
  },
  {
    id: "v10", slug: "marcia-bacino-contatto-ritmo", title: "Bacino, contatto, ritmo", eyebrow: "Race Walk Focus", duration: 19,
    level: "Principiante", access: "free", tags: ["marcia", "contatto"], disciplines: ["Marcia"], goals: ["Tecnica", "Resistenza"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Atleta impegnato in una sessione tecnica di marcia", accent: "violet",
    description: "Tre riferimenti essenziali per rendere il passo fluido, economico e coerente con la tecnica di marcia."
  },
  {
    id: "v11", slug: "girata-forza-esplosiva", title: "La girata per la forza esplosiva", eyebrow: "Performance Lab", duration: 30,
    level: "Avanzato", access: "premium", tags: ["girata", "potenza"], disciplines: ["Velocità", "Ostacoli", "Salti", "Lanci", "Prove multiple"], goals: ["Forza esplosiva", "Preparazione gara"],
    image: "/images/generated/athletics-strength.webp", imageAlt: "Atleta che esegue una girata tecnica con il bilanciere", accent: "lime",
    description: "Impugnatura, accelerazione e ricezione: le fasi chiave per usare la girata nella preparazione atletica."
  },
  {
    id: "v12", slug: "visualizzare-la-gara", title: "Visualizzare la gara", eyebrow: "Mental Performance", duration: 14,
    level: "Principiante", access: "free", tags: ["focus", "routine"], disciplines: ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Salti", "Lanci", "Marcia", "Prove multiple"], goals: ["Preparazione gara", "Tecnica"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Atleta concentrato prima di una sessione sulla pista", accent: "violet",
    description: "Una routine guidata per anticipare gesti, sensazioni e imprevisti prima di entrare in gara."
  }
];

export const courses: MiniCourse[] = [
  {
    id: "c1", title: "Dai blocchi al traguardo", subtitle: "Accelerazione, transizione e mantenimento della velocità.", category: "VELOCITÀ", level: "Intermedio",
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Velocista in allenamento sulla pista",
    lessons: [
      { title: "La posizione sui blocchi", duration: 8, free: true },
      { title: "I primi sei appoggi", duration: 11, free: true },
      { title: "Entrare nella fase lanciata", duration: 14, free: false },
      { title: "Mantenere senza irrigidirsi", duration: 10, free: false }
    ]
  },
  {
    id: "c2", title: "Saltare più lontano", subtitle: "Costruisci una rincorsa precisa e uno stacco efficace.", category: "SALTI", level: "Principiante",
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Atleta durante il salto in lungo",
    lessons: [
      { title: "Misurare la rincorsa", duration: 9, free: true },
      { title: "Postura negli ultimi appoggi", duration: 12, free: true },
      { title: "Stacco e azione libera", duration: 15, free: false },
      { title: "Volo e atterraggio", duration: 13, free: false }
    ]
  },
  {
    id: "c3", title: "Forza esplosiva per l’atletica", subtitle: "Dalla sala pesi alla pista, senza perdere specificità.", category: "PERFORMANCE", level: "Intermedio",
    image: "/images/generated/athletics-strength.webp", imageAlt: "Atleta in una sessione di forza esplosiva",
    lessons: [
      { title: "Forza e velocità: il rapporto", duration: 7, free: true },
      { title: "Atterraggi e stiffness", duration: 10, free: true },
      { title: "La girata tecnica", duration: 12, free: false },
      { title: "Trasferire il lavoro in pista", duration: 9, free: false }
    ]
  }
];

export const benefits: Benefit[] = [
  { id: "b1", partner: "SPIKE ROOM", category: "ATTREZZATURA", title: "-20% sulle prime chiodate", description: "Consulenza e scelta della scarpa in base a specialità, appoggio e livello.", value: "20%", code: "SPIKE20", accent: "lime" },
  { id: "b2", partner: "PACE LAB", category: "ANALISI", title: "Test tecnico incluso", description: "Analisi video di corsa, appoggi e accelerazione con report personalizzato.", value: "FREE", code: "PACETEST", accent: "orange" },
  { id: "b3", partner: "TRACK CLUB", category: "IMPIANTI", title: "Tre ingressi in pista", description: "Accesso open track in fasce dedicate per completare le tue sessioni.", value: "3X", code: "TRACK3", accent: "blue" },
  { id: "b4", partner: "RECOVERY LANE", category: "RECOVERY", title: "Screening funzionale -25%", description: "Valutazione per mobilità, carico e prevenzione degli infortuni.", value: "-25%", code: "LANE25", accent: "violet" },
  { id: "b5", partner: "NOVA FUEL", category: "NUTRIZIONE", title: "Bundle gara riservato", description: "Idratazione e nutrizione pratica per riscaldamento, gara e recupero.", value: "+20%", code: "RACE20", accent: "orange" },
  { id: "b6", partner: "RACE ENTRY", category: "GARE", title: "Fee di servizio azzerata", description: "Iscrizione agevolata a meeting, gare su strada e cross selezionati.", value: "0€", code: "PASSON", accent: "blue" }
];

export const partnerStores: PartnerStore[] = [
  { id: "p1", name: "SPIKE ROOM", category: "Attrezzatura", description: "Chiodate e calzature tecniche selezionate per ogni specialità.", availability: "Online + In store", location: "Milano · Online", memberBenefit: "Fino al 20%", accent: "lime" },
  { id: "p2", name: "PACE LAB", category: "Servizi", description: "Analisi video di corsa, partenza e appoggio con report tecnico.", availability: "In store", location: "Milano", memberBenefit: "Test incluso", accent: "orange" },
  { id: "p3", name: "TRACK CLUB", category: "Training", description: "Pista, pedane e sessioni open track in fasce dedicate.", availability: "In store", location: "Roma · Torino", memberBenefit: "3 ingressi", accent: "blue" },
  { id: "p4", name: "STARTLINE", category: "Training", description: "Preparazione per velocità e ostacoli in piccoli gruppi.", availability: "In store", location: "Bologna", memberBenefit: "Trial gratuito", accent: "violet" },
  { id: "p5", name: "NOVA FUEL", category: "Nutrizione", description: "Nutrizione essenziale per sedute, gare e recupero.", availability: "Online", location: "Italia", memberBenefit: "Bundle +20%", accent: "orange" },
  { id: "p6", name: "PHOTO FINISH", category: "Servizi", description: "Cronometraggio, split e videoanalisi per test e meeting.", availability: "In store", location: "Italia", memberBenefit: "Prima sessione -20%", accent: "blue" },
  { id: "p7", name: "JUMP WORKS", category: "Attrezzatura", description: "Accessori per rincorse, pedane e allenamento dei salti.", availability: "Online", location: "Europa", memberBenefit: "Sconto 15%", accent: "lime" },
  { id: "p8", name: "THROW HOUSE", category: "Attrezzatura", description: "Attrezzi certificati e kit tecnici per tutte le categorie.", availability: "Online + In store", location: "Firenze · Online", memberBenefit: "Noleggio -15%", accent: "sand" },
  { id: "p9", name: "RECOVERY LANE", category: "Recovery", description: "Valutazioni funzionali e recupero per chi si allena in pista.", availability: "In store", location: "Roma", memberBenefit: "Screening -25%", accent: "violet" },
  { id: "p10", name: "KINEO STUDIO", category: "Recovery", description: "Fisioterapia sportiva e rientro progressivo all’allenamento.", availability: "In store", location: "Torino", memberBenefit: "Prima visita -20%", accent: "sand" },
  { id: "p11", name: "FLOW WATER", category: "Nutrizione", description: "Idratazione e sali minerali per allenamento e gara.", availability: "Online", location: "Italia", memberBenefit: "Bundle +25%", accent: "blue" },
  { id: "p12", name: "FIELD NOTES", category: "Servizi", description: "Programmazione digitale e diario tecnico per atleti e coach.", availability: "Online", location: "Italia", memberBenefit: "2 mesi inclusi", accent: "orange" },
  { id: "p13", name: "RACE ENTRY", category: "Servizi", description: "Iscrizioni semplificate a meeting, cross e gare su strada.", availability: "Online", location: "Italia", memberBenefit: "Fee azzerata", accent: "lime" },
  { id: "p14", name: "CORE BLOCK", category: "Training", description: "Forza e preparazione atletica con progressioni dedicate.", availability: "In store", location: "Milano · Verona", memberBenefit: "Valutazione inclusa", accent: "violet" },
  { id: "p15", name: "ALTURA", category: "Outdoor", description: "Abbigliamento tecnico per pista, cross e corsa su strada.", availability: "Online + In store", location: "Trento · Online", memberBenefit: "Sconto 12%", accent: "orange" },
  { id: "p16", name: "EVERYDAY ATHLETE", category: "Attrezzatura", description: "Borse, accessori e strumenti essenziali per il campo.", availability: "Online", location: "Europa", memberBenefit: "Sconto 10%", accent: "sand" }
];

export const findVideoBySlug = (slug: string) => videos.find((video) => video.slug === slug);
