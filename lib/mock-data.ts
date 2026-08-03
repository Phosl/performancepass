import type { Benefit, MiniCourse, PartnerStore, TrainingVideo } from "./types";

export const videos: TrainingVideo[] = [
  {
    id: "v1", slug: "potenza-nella-corsa", title: "Potenza nella corsa", eyebrow: "Running Lab", duration: 18,
    level: "Intermedio", access: "premium", tags: ["tecnica", "esplosività"], sports: ["Corsa"], goals: ["Velocità", "Forza"],
    image: "/images/generated/running-performance.webp", imageAlt: "Atleta durante una sessione di corsa ad alta intensità", accent: "orange",
    description: "Una sessione breve e mirata per rendere la falcata più reattiva e trasferire forza a ogni appoggio."
  },
  {
    id: "v2", slug: "mobilita-pre-workout", title: "Mobilità pre-workout", eyebrow: "Daily Motion", duration: 12,
    level: "Principiante", access: "free", tags: ["mobilità", "warm-up"], sports: ["Fitness", "Yoga", "Tennis"], goals: ["Mobilità", "Benessere"],
    image: "/images/generated/mobility-performance.webp", imageAlt: "Atleta che esegue un esercizio di mobilità", accent: "violet",
    description: "Dodici minuti per preparare anche, spalle e colonna prima di qualsiasi allenamento."
  },
  {
    id: "v3", slug: "core-per-atleti", title: "Core per atleti", eyebrow: "Strength Studio", duration: 24,
    level: "Intermedio", access: "premium", tags: ["core", "stabilità"], sports: ["Fitness", "Corsa", "Ciclismo", "Tennis"], goals: ["Forza", "Resistenza"],
    image: "/images/generated/strength-performance.webp", imageAlt: "Atleta in allenamento funzionale per il core", accent: "lime",
    description: "Controllo, stabilità e forza trasferibile allo sport con una sequenza senza attrezzi."
  },
  {
    id: "v4", slug: "recupero-attivo", title: "Recupero attivo", eyebrow: "Reset Session", duration: 16,
    level: "Principiante", access: "free", tags: ["recupero", "respiro"], sports: ["Yoga", "Fitness", "Corsa"], goals: ["Benessere", "Mobilità"],
    image: "/images/generated/recovery-performance.webp", imageAlt: "Atleta in una posizione rilassata di recupero", accent: "sand",
    description: "Movimenti a bassa intensità e respirazione per favorire il recupero tra due giornate di carico."
  },
  {
    id: "v5", slug: "salite-in-bici", title: "Salite più efficienti", eyebrow: "Cycling Academy", duration: 28,
    level: "Avanzato", access: "premium", tags: ["soglia", "tecnica"], sports: ["Ciclismo"], goals: ["Resistenza", "Velocità"],
    image: "/images/generated/cycling-performance.webp", imageAlt: "Ciclista impegnato in una salita", accent: "blue",
    description: "Gestisci cadenza, posizione e intensità per affrontare le salite con meno dispersioni."
  },
  {
    id: "v6", slug: "forza-total-body", title: "Forza total body", eyebrow: "Strength Studio", duration: 32,
    level: "Intermedio", access: "free", tags: ["forza", "total body"], sports: ["Fitness"], goals: ["Forza"],
    image: "/images/generated/strength-performance.webp", imageAlt: "Atleta durante un allenamento total body", accent: "lime",
    description: "Un circuito completo e progressivo per costruire forza con movimenti essenziali."
  },
  {
    id: "v7", slug: "respirazione-nel-nuoto", title: "Respirazione nel nuoto", eyebrow: "Swim Focus", duration: 20,
    level: "Principiante", access: "premium", tags: ["respirazione", "tecnica"], sports: ["Nuoto"], goals: ["Resistenza", "Benessere"],
    image: "/images/generated/swimming-performance.webp", imageAlt: "Nuotatore durante una sessione tecnica in piscina", accent: "blue",
    description: "Coordina bracciata e respiro per nuotare più a lungo con un assetto migliore."
  },
  {
    id: "v8", slug: "footwork-tennis", title: "Footwork essenziale", eyebrow: "Court Skills", duration: 22,
    level: "Intermedio", access: "premium", tags: ["agilità", "coordinazione"], sports: ["Tennis"], goals: ["Velocità", "Resistenza"],
    image: "/images/generated/tennis-performance.webp", imageAlt: "Tennista che lavora sugli spostamenti in campo", accent: "orange",
    description: "Schemi di movimento per arrivare meglio sulla palla e recuperare rapidamente la posizione."
  },
  {
    id: "v9", slug: "yoga-per-sportivi", title: "Yoga per sportivi", eyebrow: "Flow Room", duration: 30,
    level: "Principiante", access: "free", tags: ["yoga", "flessibilità"], sports: ["Yoga", "Corsa", "Ciclismo"], goals: ["Mobilità", "Benessere"],
    image: "/images/generated/mobility-performance.webp", imageAlt: "Atleta in una sequenza yoga per la mobilità", accent: "violet",
    description: "Una pratica fluida per liberare le catene muscolari più sollecitate nello sport."
  },
  {
    id: "v10", slug: "interval-training", title: "Interval training", eyebrow: "Performance Lab", duration: 26,
    level: "Avanzato", access: "premium", tags: ["hiit", "cardio"], sports: ["Fitness", "Corsa"], goals: ["Resistenza", "Velocità"],
    image: "/images/generated/running-performance.webp", imageAlt: "Atleta durante ripetute ad alta intensità", accent: "orange",
    description: "Blocchi ad alta intensità studiati per spingere il motore aerobico senza perdere qualità."
  },
  {
    id: "v11", slug: "stretching-serale", title: "Stretching serale", eyebrow: "Daily Motion", duration: 14,
    level: "Principiante", access: "free", tags: ["stretching", "relax"], sports: ["Yoga", "Fitness"], goals: ["Mobilità", "Benessere"],
    image: "/images/generated/recovery-performance.webp", imageAlt: "Atleta che esegue stretching in un ambiente tranquillo", accent: "sand",
    description: "Una routine calma per ridurre la tensione e chiudere la giornata con più leggerezza."
  },
  {
    id: "v12", slug: "endurance-ride", title: "Endurance ride", eyebrow: "Cycling Academy", duration: 45,
    level: "Intermedio", access: "premium", tags: ["zona 2", "endurance"], sports: ["Ciclismo"], goals: ["Resistenza"],
    image: "/images/generated/cycling-performance.webp", imageAlt: "Ciclista durante un allenamento di resistenza", accent: "blue",
    description: "Costruisci una base aerobica solida con una sessione guidata a intensità controllata."
  }
];

export const courses: MiniCourse[] = [
  {
    id: "c1", title: "Correre forte, correre bene", subtitle: "Tecnica, ritmo e recupero in un percorso pratico.", category: "RUNNING", level: "Intermedio",
    image: "/images/generated/running-performance.webp", imageAlt: "Runner su una pista durante un allenamento tecnico",
    lessons: [
      { title: "Il tuo passo efficiente", duration: 8, free: true },
      { title: "Respirazione e ritmo", duration: 11, free: true },
      { title: "Costruire la velocità", duration: 14, free: false },
      { title: "Recuperare per migliorare", duration: 10, free: false }
    ]
  },
  {
    id: "c2", title: "Fondamenta di forza", subtitle: "I pattern essenziali per ogni atleta.", category: "STRENGTH", level: "Principiante",
    image: "/images/generated/strength-performance.webp", imageAlt: "Atleta che allena la forza con esercizi funzionali",
    lessons: [
      { title: "Controllo e postura", duration: 9, free: true },
      { title: "Spinta e trazione", duration: 12, free: true },
      { title: "Forza unilaterale", duration: 15, free: false },
      { title: "Il tuo primo programma", duration: 13, free: false }
    ]
  },
  {
    id: "c3", title: "Recovery intelligente", subtitle: "Trasforma il riposo in parte dell’allenamento.", category: "RECOVERY", level: "Principiante",
    image: "/images/generated/recovery-performance.webp", imageAlt: "Atleta durante una sessione guidata di recupero",
    lessons: [
      { title: "Leggere i segnali", duration: 7, free: true },
      { title: "Mobilità quotidiana", duration: 10, free: true },
      { title: "Sonno e performance", duration: 12, free: false },
      { title: "Pianificare il recupero", duration: 9, free: false }
    ]
  }
];

export const benefits: Benefit[] = [
  { id: "b1", partner: "NOVA FUEL", category: "NUTRIZIONE", title: "-20% sul primo ordine", description: "Nutrizione sportiva essenziale, formulata per allenamento e recupero.", value: "20%", code: "PASS20", accent: "lime" },
  { id: "b2", partner: "PACE LAB", category: "RUNNING", title: "Analisi della corsa inclusa", description: "Valutazione tecnica in store con report personalizzato.", value: "FREE", code: "RUNPASS", accent: "orange" },
  { id: "b3", partner: "NORTH CLUB", category: "TRAINING", title: "Un mese a metà prezzo", description: "Accedi a classi, recovery room e sessioni open gym.", value: "-50%", code: "NORTH50", accent: "blue" },
  { id: "b4", partner: "FORM", category: "EQUIPMENT", title: "Kit mobility riservato", description: "Una selezione compatta per mobilità e recupero quotidiano.", value: "-15%", code: "FORM15", accent: "violet" },
  { id: "b5", partner: "ALTURA", category: "OUTDOOR", title: "Spedizione express gratuita", description: "Abbigliamento tecnico progettato per muoversi in ogni condizione.", value: "0€", code: "FASTPASS", accent: "orange" },
  { id: "b6", partner: "FLOW WATER", category: "HYDRATION", title: "Bundle atleta esclusivo", description: "Idratazione e sali minerali in un formato riservato ai membri.", value: "+25%", code: "FLOW25", accent: "blue" }
];

export const partnerStores: PartnerStore[] = [
  { id: "p1", name: "NOVA FUEL", category: "Nutrizione", description: "Nutrizione sportiva essenziale per allenamento, gara e recupero.", availability: "Online", location: "Italia", memberBenefit: "Fino al 20%", accent: "lime" },
  { id: "p2", name: "PACE LAB", category: "Servizi", description: "Analisi della corsa, fitting e consulenza tecnica per runner.", availability: "In store", location: "Milano", memberBenefit: "Analisi inclusa", accent: "orange" },
  { id: "p3", name: "NORTH CLUB", category: "Training", description: "Training club con classi, open gym e spazi dedicati al recovery.", availability: "In store", location: "Milano · Torino", memberBenefit: "Primo mese -50%", accent: "blue" },
  { id: "p4", name: "FORM", category: "Attrezzatura", description: "Accessori compatti per mobilità, forza e allenamento quotidiano.", availability: "Online + In store", location: "Italia", memberBenefit: "Sconto 15%", accent: "violet" },
  { id: "p5", name: "ALTURA", category: "Outdoor", description: "Abbigliamento tecnico progettato per muoversi in ogni condizione.", availability: "Online", location: "Europa", memberBenefit: "Express gratuita", accent: "orange" },
  { id: "p6", name: "FLOW WATER", category: "Nutrizione", description: "Idratazione funzionale e sali minerali per sportivi.", availability: "Online", location: "Italia", memberBenefit: "Bundle +25%", accent: "blue" },
  { id: "p7", name: "KINEO STUDIO", category: "Recovery", description: "Fisioterapia sportiva, valutazioni funzionali e recupero attivo.", availability: "In store", location: "Roma", memberBenefit: "Prima visita -20%", accent: "sand" },
  { id: "p8", name: "RIDE ROOM", category: "Training", description: "Indoor cycling, test di soglia e programmi per ogni livello.", availability: "In store", location: "Bologna", memberBenefit: "2 classi incluse", accent: "blue" },
  { id: "p9", name: "TERRAIN", category: "Outdoor", description: "Calzature e attrezzatura per trail, hiking e avventure veloci.", availability: "Online + In store", location: "Trento · Online", memberBenefit: "Sconto 12%", accent: "lime" },
  { id: "p10", name: "SOMA LAB", category: "Recovery", description: "Massaggio sportivo, crioterapia e protocolli di recupero.", availability: "In store", location: "Milano", memberBenefit: "Recovery -15%", accent: "violet" },
  { id: "p11", name: "CADENCE", category: "Attrezzatura", description: "Accessori e componenti selezionati per ciclismo strada e gravel.", availability: "Online + In store", location: "Verona · Online", memberBenefit: "Bike fit -20%", accent: "blue" },
  { id: "p12", name: "BASE CAMP", category: "Training", description: "Programmazione atletica e sessioni small group ad alta qualità.", availability: "In store", location: "Firenze", memberBenefit: "Trial gratuito", accent: "orange" },
  { id: "p13", name: "PURE FORM", category: "Nutrizione", description: "Snack proteici e ingredienti semplici per una routine sostenibile.", availability: "Online", location: "Italia", memberBenefit: "Sconto 15%", accent: "sand" },
  { id: "p14", name: "MATCH POINT", category: "Attrezzatura", description: "Racchette, corde e consulenza specializzata per sport di campo.", availability: "In store", location: "Roma · Napoli", memberBenefit: "Incordatura inclusa", accent: "lime" },
  { id: "p15", name: "MOTION CLINIC", category: "Servizi", description: "Valutazione biomeccanica e prevenzione degli infortuni.", availability: "In store", location: "Torino", memberBenefit: "Screening -25%", accent: "violet" },
  { id: "p16", name: "EVERYDAY ATHLETE", category: "Attrezzatura", description: "Essenziali premium per allenarsi bene dentro e fuori dalla palestra.", availability: "Online", location: "Europa", memberBenefit: "Sconto 10%", accent: "sand" }
];

export const findVideoBySlug = (slug: string) => videos.find((video) => video.slug === slug);
