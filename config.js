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
    slug:         "dr-yassine",            // ← L'URL : monsite.com/dr-yassine  (minuscules, tirets, sans accent ni espace, UNIQUE)

    /* Identité */
    title:        "Dr",                    // Titre : "Dr", "Pr"…
    firstName:    "Yassine",
    lastName:     "El Amrani",
    specialty:    "Cardiologue",
    subSpecialty: "Cardiologie interventionnelle & prévention",   // Sous-titre court (facultatif)
    photo:        "",                      // Ex : "photos/dr-yassine.jpg"  ou lien https://…  — vide = initiales
    clinic:       "Clinique Al Madina",    // Clinique / cabinet
    experience:   "15 ans",
    bio:          "Cardiologue diplômé de la Faculté de Médecine de Rabat, le Dr El Amrani accompagne ses patients dans la prévention, le diagnostic et le suivi des maladies cardiovasculaires. Une approche à l'écoute, rigoureuse et personnalisée.",

    /* Contact */
    phone:        "+212600000000",         // Format international, SANS espaces
    whatsapp:     "",                      // Facultatif. Ex : "+212600000000" → bouton + ligne WhatsApp
    email:        "contact@dr-elamrani.example",
    address:      "12 Avenue Mohammed V, Agdal, Rabat, Maroc",
    mapsUrl:      "",                      // Facultatif : lien Google Maps exact. Vide = itinéraire généré depuis l'adresse

    /* Horaires : "HH:MM-HH:MM" — "" = fermé */
    hours: { lun: "09:00-18:00", mar: "09:00-18:00", mer: "09:00-18:00", jeu: "09:00-18:00", ven: "09:00-18:00", sam: "09:00-13:00", dim: "" },

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
      { v: "15",     p: 75, l: "ans d'expérience" },
      { v: "8 500+", p: 85, l: "patients suivis" },
      { v: "98%",    p: 98, l: "de satisfaction" }
    ],
    expertise: ["Échocardiographie", "Hypertension artérielle", "Prévention cardiovasculaire", "Rythmologie", "Test d'effort"],
    career: [                              // y = année, t = description
      { y: "2009",        t: "Doctorat en médecine — Faculté de Médecine de Rabat" },
      { y: "2014",        t: "Spécialisation en cardiologie — CHU Ibn Sina" },
      { y: "2016",        t: "Cardiologie interventionnelle — Paris" },
      { y: "Aujourd'hui", t: "Cardiologue à la Clinique Al Madina" }
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
