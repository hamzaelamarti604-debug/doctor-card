# Template « Carte de visite numérique médecin »

## Contenu du dossier
| Fichier | Rôle |
|---|---|
| `config.js` | ✏️ **Le seul fichier à modifier** : toutes les informations du médecin |
| `index.html` | 🔒 Le design et la structure (ne pas toucher) |
| `photo.jpg` | (à ajouter) la photo du médecin, puis `photo: "photo.jpg"` dans `config.js` |

## Créer la carte d'un nouveau médecin (5 minutes)
1. Copier tout le dossier et le renommer avec l'identifiant voulu, par exemple `dr-salma`.
2. Ouvrir `config.js` et remplacer les informations (prénom, nom, spécialité, téléphone, adresse, horaires, liens…).
3. Ajouter la photo dans le dossier et indiquer son nom dans `photo:`.
4. Mettre l'adresse finale dans `profileUrl:` (ex. `https://monsite.com/dr-salma`) : c'est elle qui alimente le QR code.
5. Mettre le dossier en ligne (Netlify, Vercel, Cloudflare Pages ou votre hébergeur) : l'URL sera `monsite.com/dr-salma/`.
6. Écrire cette URL sur la carte NFC (application « NFC Tools » ou équivalent).

## Champs facultatifs (vides = éléments masqués)
- `whatsapp` → bouton + ligne WhatsApp
- `appointmentUrl` → bouton « Prendre rendez-vous » (lien Doctolib, `tel:+212…`, `https://wa.me/212…`)
- `instagram`, `facebook`, `linkedin`, `website` → un bouton par lien rempli
- `stats`, `expertise`, `career` → mettre `[]` pour masquer la section
- `subSpecialty`, `experience`, `clinic`, `bio`, `photo`
- `hours` : un jour à `""` = fermé

## Couleurs
`theme:` accepte `"or"`, `"ocean"`, `"emeraude"`, `"royal"` ou `"rose"`.

## Remarques
- Le bouton « Ajouter aux contacts » (.vcf) fonctionne une fois le site hébergé en https.
- Pour modifier le design de tous les médecins, remplacer `index.html` dans chaque dossier.
