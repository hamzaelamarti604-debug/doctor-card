/* ====================================================================
   ✏️  config.js — LE SEUL FICHIER À MODIFIER POUR GÉRER LES MÉDECINS
   --------------------------------------------------------------------
   AJOUTER UN MÉDECIN :
     1. Copiez un bloc complet  { ... },  (de l'accolade ouvrante "{"
        jusqu'à "}," inclus) dans la liste DOCTORS plus bas.
     2. Collez-le juste après un autre bloc.
     3. Changez les informations (et surtout "slug").
   L'adresse du profil sera automatiquement :  votre-site.com/<slug>

   RÈGLES :
     • Gardez les guillemets "..." et la virgule à la fin de chaque ligne.
     • Un champ facultatif laissé vide ("") disparaît de la page.
     • Ne modifiez jamais le nom des champs (à gauche des deux-points).
   ==================================================================== */

/* ---- Réglages généraux ---- */
const SETTINGS = {
  siteUrl: "",            // Vide = automatique (domaine actuel). Ou forcez : "https://monsite.com"
  showDirectory: false,   // true = la page d'accueil liste tous les profils (utile pour vos démos)
  showThemePicker: false  // true = pastilles de test des couleurs (démo client)
};

/* ---- Marque affichée en bas de chaque carte ---- */
const BRAND = { name: "MediCard", tagline: "Carte de visite numérique" };

/* ====================================================================
   LISTE DES MÉDECINS — un bloc { ... }, par médecin
   ==================================================================== */
const DOCTORS = [

  /* ───────────── MÉDECIN 1 (entièrement commenté : sert de modèle) ───────────── */
  {
    slug:         "dr-Nazzi",            // ← L'URL : monsite.com/dr-nazzi  (minuscules, tirets, sans accent ni espace, UNIQUE)

    /* Identité */
    title:        "Dr",                    // Titre : "Dr", "Pr"…
    firstName:    "Mbarek",
    lastName:     "Nazzi",
    specialty:    "Cardiologue",
    subSpecialty: "Cardiologie interventionnelle & prévention",   // Sous-titre court (facultatif)
    photo:        "",                      // Ex : "photos/dr-yassine.jpg"  ou lien https://…  — vide = initiales
    clinic:       "Cabinet Dr Nazzi",    // Clinique / cabinet
    experience:   "35 ans",
    bio:          "Cardiologue, ancien médecin colonel, le Dr Nazzi est diplômé de la Faculté de Médecine et de Pharmacie de Rabat. Après sa spécialisation en cardiologie, il a exercé au sein de l’Hôpital Militaire de Rabat, puis a dirigé le service de cardiologie de l’Hôpital Militaire de Meknès. Après sa carrière militaire, il a fondé son propre cabinet, où il exerce depuis lors. Fort de nombreuses formations et diplômes complémentaires, le Dr Nazzi accompagne ses patients dans la prévention, le diagnostic et le suivi des maladies cardiovasculaires. il s’investit également dans le développement de la cardiologie au Maroc en tant que Président de la Société Marocaine de Cardiologie.",

    /* Contact */
    phone:        "+212535526677",         // Format international, SANS espaces
    whatsapp:     "",                      // Facultatif. Ex : "+212600000000" → bouton + ligne WhatsApp
    email:        "Mbarek.nazzi@gmail.com",
    address:      "N°2 Ave Ali Benyoussef, Meknes",
    mapsUrl:      "https://www.google.com/maps/place/Cabinet+Dr+Nazzi+Mbarek/@33.9037649,-5.5542728,17z/data=!3m1!4b1!4m6!3m5!1s0xda04539191f1abb:0xe79fee7cef816cd8!8m2!3d33.9037649!4d-5.5542728!16s%2Fg%2F11c5bpy148?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",                      // Facultatif : lien Google Maps exact. Vide = itinéraire généré depuis l'adresse

    /* Horaires : "HH:MM-HH:MM" — "" = fermé */
    hours: { lun: "08:00-15:00", mar: "08:00-15:00", mer: "08:00-15:00", jeu: "08:00-15:00", ven: "08:00-15:00", sam: "", dim: "" },

    /* Réseaux (liens complets ; "" = bouton masqué) */
    instagram:    "https://instagram.com/",
    facebook:     "https://facebook.com/",
    linkedin:     "https://linkedin.com/",
    website:      "https://www.dr-elamrani.example",

    /* Rendez-vous (facultatif) : lien Doctolib… ou "tel:+212600000000" ou "https://wa.me/212600000000" */
    appointmentUrl: "",

    /* Couleurs : "or" | "ocean" | "emeraude" | "royal" | "rose" */
    theme:        "ocean",

    /* Sections facultatives (mettre [] pour masquer) */
    stats: [                               // v = texte affiché, p = remplissage de l'anneau (0 à 100), l = légende
      { v: "35",     p: 75, l: "ans d'expérience" },
      { v: "8 500+", p: 85, l: "patients suivis" },
      { v: "99%",    p: 98, l: "de satisfaction" }
    ],
    expertise: [" Echocardiographie-Doppler trans-thoracique", "Hypertension artérielle", "Rythmologie", "Test d'effort", "Holter Tensionnel", "Echo-Doppler vasculaire"],
    career: [                              // y = année, t = description
      { y: "1989",        t: "Début de formation médicale spécialisée en cardiologie — Hôpital Militaire d'Instruction Mohammed V" },
      { y: "1994",        t: "diplôme national de cardiologie  — Faculté de Médecine de l'Université Mohammed V de Rabat " },
      { y: "1996",        t: "Professeur agrégé de cardiologie - Faculté de Médecine de Rabat" },
      { y: "1999-2000",        t: "Chef du service de cardiologie à Rabat — Hôpital Militaire d'Instruction Mohammed V" },
      { y: "2000-2013",        t: "Chef du service de cardiologie à Meknes — Hôpital Militaire Moulay Ismail" },
      { y: "2003",        t: "Diplôme universitaire en tabacologie — Université de Reims, en France" },
      { y: "2013",        t: "Début de l’exercice en secteur privé" },
      { y: "2020",        t: "Formation en cardiologie pédiatrique — Université Abulcasis de Rabat" },
      { y: "2021-2022",        t: "Diplôme universitaire en imagerie cardiovasculaire multimodale — Formation réalisée à Paris, en France" },
      { y: "2026", t: "Président de la Société Marocaine de Cardiologie " }
    ]
  },

  /* ───────────── MÉDECIN 2 ───────────── */
  {
    slug: "dr-sara",
    title: "Dr", firstName: "Sara", lastName: "Benali",
    specialty: "Pédiatre", subSpecialty: "Santé de l'enfant & suivi du nourrisson",
    photo: "", clinic: "Cabinet Les Petits Pas", experience: "12 ans",
    bio: "Pédiatre à Casablanca, le Dr Benali suit les enfants de la naissance à l'adolescence. Consultations de suivi, vaccinations et conseils aux parents dans un cadre rassurant et bienveillant.",
    phone: "+212611111111", whatsapp: "+212611111111",
    email: "contact@dr-benali.example",
    address: "45 Boulevard Zerktouni, Casablanca, Maroc", mapsUrl: "",
    hours: { lun: "09:00-17:30", mar: "09:00-17:30", mer: "09:00-17:30", jeu: "09:00-17:30", ven: "09:00-17:30", sam: "09:00-12:30", dim: "" },
    instagram: "https://instagram.com/", facebook: "", linkedin: "https://linkedin.com/", website: "",
    appointmentUrl: "https://www.doctolib.fr/",
    theme: "emeraude",
    stats: [ { v: "12", p: 70, l: "ans d'expérience" }, { v: "6 000+", p: 75, l: "enfants suivis" }, { v: "99%", p: 99, l: "de satisfaction" } ],
    expertise: ["Suivi du nourrisson", "Vaccinations", "Allergies", "Croissance & nutrition", "Troubles du sommeil"],
    career: [ { y: "2010", t: "Doctorat en médecine — Casablanca" }, { y: "2015", t: "Spécialisation en pédiatrie — CHU Ibn Rochd" }, { y: "Aujourd'hui", t: "Fondatrice du Cabinet Les Petits Pas" } ]
  },

  /* ───────────── MÉDECIN 3 (sans chiffres clés ni parcours : ces sections sont masquées) ───────────── */
  {
    slug: "dr-ahmed",
    title: "Dr", firstName: "Ahmed", lastName: "Tazi",
    specialty: "Chirurgien-dentiste", subSpecialty: "Implantologie & esthétique du sourire",
    photo: "", clinic: "Centre Dentaire Atlas", experience: "10 ans",
    bio: "Chirurgien-dentiste à Marrakech, le Dr Tazi propose des soins complets : prévention, esthétique du sourire et implantologie, avec une technologie moderne et indolore.",
    phone: "+212622222222", whatsapp: "",
    email: "contact@dr-tazi.example",
    address: "8 Rue de la Liberté, Guéliz, Marrakech, Maroc",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gueliz+Marrakech",
    hours: { lun: "09:00-19:00", mar: "09:00-19:00", mer: "09:00-19:00", jeu: "09:00-19:00", ven: "09:00-19:00", sam: "09:00-14:00", dim: "" },
    instagram: "https://instagram.com/", facebook: "https://facebook.com/", linkedin: "", website: "",
    appointmentUrl: "",
    theme: "royal",
    stats: [],
    expertise: ["Implants dentaires", "Blanchiment", "Orthodontie invisible", "Soins conservateurs"],
    career: []
  },
    {
    slug: "dr-hamza",
    title: "Dr", firstName: "hamza", lastName: "el-amarti",
    specialty: "endocrinologie", subSpecialty: "Implantologie & esthétique du sourire",
    photo: "", clinic: "Centre Dentaire Atlas", experience: "10 ans",
    bio: "Chirurgien-dentiste à Marrakech, le Dr Tazi propose des soins complets : prévention, esthétique du sourire et implantologie, avec une technologie moderne et indolore.",
    phone: "+212656916627", whatsapp: "",
    email: "contact@dr-tazi.example",
    address: "8 Rue de la Liberté, Guéliz, Marrakech, Maroc",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gueliz+Marrakech",
    hours: { lun: "09:00-19:00", mar: "09:00-19:00", mer: "09:00-19:00", jeu: "09:00-19:00", ven: "09:00-19:00", sam: "09:00-14:00", dim: "" },
    instagram: "https://instagram.com/", facebook: "https://facebook.com/", linkedin: "", website: "",
    appointmentUrl: "",
    theme: "royal",
    stats: [],
    expertise: ["Implants dentaires", "Blanchiment", "Orthodontie invisible", "Soins conservateurs"],
    career: []
  }
 
  /* ➕ AJOUTEZ ICI UN NOUVEAU MÉDECIN : n'oubliez pas la virgule après le "}" du médecin précédent */
];
