/* ====================================================================
   ✏️  MODIFIEZ UNIQUEMENT CE FICHIER (config.js)
   Tout le reste du fichier se met à jour automatiquement.
   • Gardez les guillemets "..." et les virgules à la fin de chaque ligne.
   • Un champ facultatif laissé vide ("") disparaît de la page.
   ==================================================================== */
const DOCTOR = {

  /* ---- 1. IDENTITÉ --------------------------------------------- */
  title:        "Dr",                    // Titre devant le nom : "Dr", "Pr"…
  firstName:    "Yassine",               // Prénom
  lastName:     "El Amrani",             // Nom
  specialty:    "Cardiologue",           // Spécialité (sous le nom)
  subSpecialty: "Cardiologie interventionnelle & prévention", // Sous-spécialité / description courte
  photo:        "",                      // Photo : "photo.jpg" (fichier placé dans le même dossier)
                                         //   ou lien https://…  — vide = avatar avec les initiales
  clinic:       "Clinique Al Madina",    // Clinique / cabinet
  experience:   "15 ans",                // Expérience
  bio:          "Cardiologue diplômé de la Faculté de Médecine de Rabat, le Dr El Amrani accompagne ses patients dans la prévention, le diagnostic et le suivi des maladies cardiovasculaires. Une approche à l'écoute, rigoureuse et personnalisée.",

  /* ---- 2. CONTACT ---------------------------------------------- */
  phone:    "+212600000000",             // Téléphone, format international SANS espaces
  whatsapp: "",                          // FACULTATIF. Ex : "+212600000000" → ajoute le bouton + la ligne WhatsApp
  email:    "contact@dr-elamrani.example",
  address:  "12 Avenue Mohammed V, Agdal, Rabat, Maroc",   // Sert aussi au bouton « Itinéraire »

  /* ---- 3. HORAIRES  (format "HH:MM-HH:MM" ; "" = fermé) -------- */
  hours: {
    lun: "09:00-18:00",
    mar: "09:00-18:00",
    mer: "09:00-18:00",
    jeu: "09:00-18:00",
    ven: "09:00-18:00",
    sam: "09:00-13:00",
    dim: ""
  },

  /* ---- 4. RÉSEAUX SOCIAUX (liens complets ; "" = bouton masqué) */
  instagram: "https://instagram.com/",
  facebook:  "https://facebook.com/",
  linkedin:  "https://linkedin.com/",
  website:   "https://www.dr-elamrani.example",   // « Site personnel »

  /* ---- 5. PRISE DE RENDEZ-VOUS (FACULTATIF) --------------------- */
  // Vide = pas de bouton. Sinon : lien Doctolib / site de réservation,
  // ou "tel:+212600000000", ou "https://wa.me/212600000000"
  appointmentUrl: "",

  /* ---- 6. URL DU PROFIL (utilisée pour le QR code) -------------- */
  profileUrl: "https://monsite.com/dr-yassine",

  /* ---- 7. COULEURS : "or" | "ocean" | "emeraude" | "royal" | "rose" */
  theme: "ocean",

  /* ---- 8. SECTIONS FACULTATIVES (mettre [] pour masquer) -------- */
  // Chiffres clés : v = texte affiché, p = remplissage de l'anneau (0 à 100), l = légende
  stats: [
    { v: "15",     p: 75, l: "ans d'expérience" },
    { v: "8 500+", p: 85, l: "patients suivis" },
    { v: "98%",    p: 98, l: "de satisfaction" }
  ],
  // Domaines d'expertise (étiquettes colorées)
  expertise: ["Échocardiographie", "Hypertension artérielle", "Prévention cardiovasculaire", "Rythmologie", "Test d'effort"],
  // Parcours : y = année, t = description
  career: [
    { y: "2009",        t: "Doctorat en médecine — Faculté de Médecine de Rabat" },
    { y: "2014",        t: "Spécialisation en cardiologie — CHU Ibn Sina" },
    { y: "2016",        t: "Cardiologie interventionnelle — Paris" },
    { y: "Aujourd'hui", t: "Cardiologue à la Clinique Al Madina" }
  ]
};

/* ---- Marque affichée en bas de page ---- */
const BRAND = { name: "MediCard", tagline: "Carte de visite numérique" };

/* ---- Réglages ---- */
const SETTINGS = { showThemePicker: false };   // true = affiche des pastilles pour tester les couleurs (démo client)
