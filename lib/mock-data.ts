import type { MiniCourse, TrainingVideo } from "./types";

export const videos: TrainingVideo[] = [
  {
    id: "v1", slug: "primi-30-metri", title: "I primi 30 metri", eyebrow: "Sprint Lab", duration: 18,
    level: "Intermedio", access: "member", tags: ["blocchi", "accelerazione"], disciplines: ["Velocità", "Prove multiple"], goals: ["Velocità", "Tecnica"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Velocista in uscita dai blocchi su una pista di atletica", accent: "orange",
    description: "Posizione, spinta e progressione per trasformare l’uscita dai blocchi in un’accelerazione efficace."
  },
  {
    id: "v2", slug: "drills-postura-appoggio", title: "Drills: postura e appoggio", eyebrow: "Tecnica essenziale", duration: 12,
    level: "Principiante", access: "preview", tags: ["drills", "appoggio"], disciplines: ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Prove multiple"], goals: ["Tecnica", "Velocità"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Atleta che esegue esercizi tecnici di corsa in pista", accent: "lime",
    description: "Una sequenza semplice per allineare postura, appoggio e azione delle braccia prima della seduta."
  },
  {
    id: "v3", slug: "ritmo-tra-ostacoli", title: "Ritmo tra gli ostacoli", eyebrow: "Hurdles Room", duration: 24,
    level: "Intermedio", access: "member", tags: ["ritmo", "barriere"], disciplines: ["Ostacoli", "Prove multiple"], goals: ["Tecnica", "Velocità"],
    image: "/images/generated/athletics-hurdles.webp", imageAlt: "Ostacolista durante il passaggio di una barriera", accent: "violet",
    description: "Attacco, richiamo e passi intermedi: costruisci un ritmo stabile senza forzare il gesto."
  },
  {
    id: "v4", slug: "doppia-soglia", title: "Doppia soglia, senza confusione", eyebrow: "Endurance Lab", duration: 26,
    level: "Avanzato", access: "member", tags: ["soglia", "metodo"], disciplines: ["Mezzofondo e fondo"], goals: ["Resistenza", "Preparazione gara"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Mezzofondista durante una seduta di ritmo controllato", accent: "blue",
    description: "Principi, intensità e recuperi per capire quando il lavoro di soglia sostiene davvero la prestazione."
  },
  {
    id: "v5", slug: "lungo-specifico", title: "Il lungo specifico", eyebrow: "Distance Session", duration: 32,
    level: "Intermedio", access: "preview", tags: ["fondo", "ritmo gara"], disciplines: ["Mezzofondo e fondo"], goals: ["Resistenza", "Preparazione gara"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Atleta di fondo in allenamento sulla pista", accent: "blue",
    description: "Impara a distribuire ritmo e qualità nel lungo per arrivare alla gara con una base più solida."
  },
  {
    id: "v6", slug: "salto-in-lungo-rincorsa-stacco", title: "Rincorsa e stacco nel lungo", eyebrow: "Jump Studio", duration: 22,
    level: "Intermedio", access: "member", tags: ["rincorsa", "stacco"], disciplines: ["Salti", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Saltatore durante lo stacco nel salto in lungo", accent: "orange",
    description: "Trova una rincorsa ripetibile e porta velocità sull’asse di stacco senza perdere controllo."
  },
  {
    id: "v7", slug: "salto-in-alto-curva", title: "Costruire la curva nell’alto", eyebrow: "Jump Studio", duration: 20,
    level: "Principiante", access: "preview", tags: ["curva", "elevazione"], disciplines: ["Salti", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Atleta durante una sessione tecnica dedicata ai salti", accent: "lime",
    description: "Riferimenti pratici per impostare la curva, preparare lo stacco e arrivare alla pedana con fiducia."
  },
  {
    id: "v8", slug: "getto-peso-catena-spinta", title: "La catena di spinta nel peso", eyebrow: "Throws Lab", duration: 24,
    level: "Intermedio", access: "member", tags: ["peso", "spinta"], disciplines: ["Lanci", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-throws.webp", imageAlt: "Lanciatore nella pedana del getto del peso", accent: "sand",
    description: "Dai piedi alla mano: coordina le spinte e trasferisci forza all’attrezzo senza spezzare il gesto."
  },
  {
    id: "v9", slug: "giavellotto-rincorsa-blocco", title: "Rincorsa e blocco nel giavellotto", eyebrow: "Throws Lab", duration: 28,
    level: "Avanzato", access: "member", tags: ["giavellotto", "blocco"], disciplines: ["Lanci", "Prove multiple"], goals: ["Tecnica", "Forza esplosiva"],
    image: "/images/generated/athletics-throws.webp", imageAlt: "Atleta che prepara un lancio del giavellotto in pista", accent: "orange",
    description: "Sequenza, passi incrociati e blocco finale per trasformare la velocità della rincorsa in lancio."
  },
  {
    id: "v10", slug: "marcia-bacino-contatto-ritmo", title: "Bacino, contatto, ritmo", eyebrow: "Race Walk Focus", duration: 19,
    level: "Principiante", access: "preview", tags: ["marcia", "contatto"], disciplines: ["Marcia"], goals: ["Tecnica", "Resistenza"],
    image: "/images/generated/athletics-endurance.webp", imageAlt: "Atleta impegnato in una sessione tecnica di marcia", accent: "violet",
    description: "Tre riferimenti essenziali per rendere il passo fluido, economico e coerente con la tecnica di marcia."
  },
  {
    id: "v11", slug: "girata-forza-esplosiva", title: "La girata per la forza esplosiva", eyebrow: "Performance Lab", duration: 30,
    level: "Avanzato", access: "member", tags: ["girata", "potenza"], disciplines: ["Velocità", "Ostacoli", "Salti", "Lanci", "Prove multiple"], goals: ["Forza esplosiva", "Preparazione gara"],
    image: "/images/generated/athletics-strength.webp", imageAlt: "Atleta che esegue una girata tecnica con il bilanciere", accent: "lime",
    description: "Impugnatura, accelerazione e ricezione: le fasi chiave per usare la girata nella preparazione atletica."
  },
  {
    id: "v12", slug: "visualizzare-la-gara", title: "Visualizzare la gara", eyebrow: "Mental Performance", duration: 14,
    level: "Principiante", access: "preview", tags: ["focus", "routine"], disciplines: ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Salti", "Lanci", "Marcia", "Prove multiple"], goals: ["Preparazione gara", "Tecnica"],
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Atleta concentrato prima di una sessione sulla pista", accent: "violet",
    description: "Una routine guidata per anticipare gesti, sensazioni e imprevisti prima di entrare in gara."
  }
];

export const courses: MiniCourse[] = [
  {
    id: "c1", title: "Dai blocchi al traguardo", subtitle: "Accelerazione, transizione e mantenimento della velocità.", category: "VELOCITÀ", level: "Intermedio",
    image: "/images/generated/athletics-sprint.webp", imageAlt: "Velocista in allenamento sulla pista",
    lessons: [
      { title: "La posizione sui blocchi", duration: 8, access: "preview" },
      { title: "I primi sei appoggi", duration: 11, access: "preview" },
      { title: "Entrare nella fase lanciata", duration: 14, access: "member" },
      { title: "Mantenere senza irrigidirsi", duration: 10, access: "member" }
    ]
  },
  {
    id: "c2", title: "Saltare più lontano", subtitle: "Costruisci una rincorsa precisa e uno stacco efficace.", category: "SALTI", level: "Principiante",
    image: "/images/generated/athletics-jumps.webp", imageAlt: "Atleta durante il salto in lungo",
    lessons: [
      { title: "Misurare la rincorsa", duration: 9, access: "preview" },
      { title: "Postura negli ultimi appoggi", duration: 12, access: "preview" },
      { title: "Stacco e azione libera", duration: 15, access: "member" },
      { title: "Volo e atterraggio", duration: 13, access: "member" }
    ]
  },
  {
    id: "c3", title: "Forza esplosiva per l’atletica", subtitle: "Dalla sala pesi alla pista, senza perdere specificità.", category: "PERFORMANCE", level: "Intermedio",
    image: "/images/generated/athletics-strength.webp", imageAlt: "Atleta in una sessione di forza esplosiva",
    lessons: [
      { title: "Forza e velocità: il rapporto", duration: 7, access: "preview" },
      { title: "Atterraggi e stiffness", duration: 10, access: "preview" },
      { title: "La girata tecnica", duration: 12, access: "member" },
      { title: "Trasferire il lavoro in pista", duration: 9, access: "member" }
    ]
  }
];

export const findVideoBySlug = (slug: string) => videos.find((video) => video.slug === slug);
