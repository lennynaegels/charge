# Charge

Application de suivi pour une prise de masse à domicile sur 52 semaines.
Programme d'entraînement, recettes, liste de courses et analyse de progression.
Tout fonctionne hors ligne, sans compte et sans serveur.

---

## Installer sur ton téléphone Android (5 minutes)

### 1. Créer le dépôt
1. Va sur [github.com](https://github.com) et crée un compte si tu n'en as pas.
2. Clique sur **New repository**.
3. Nom : `charge`. Coche **Public**. Clique sur **Create repository**.

### 2. Envoyer les fichiers
1. Sur la page du dépôt, clique **uploading an existing file**.
2. Dépose ces 6 fichiers :
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icone-192.png`
   - `icone-512.png`
   - `icone-maskable.png`
3. Clique **Commit changes**.

### 3. Publier
1. Onglet **Settings** → menu **Pages** (colonne de gauche).
2. Sous *Branch*, choisis **main** et **/ (root)**. Clique **Save**.
3. Attends une à deux minutes. L'adresse apparaît en haut de la page :
   `https://TON-PSEUDO.github.io/charge/`

### 4. Ajouter à l'écran d'accueil
1. Ouvre cette adresse dans **Chrome** sur ton téléphone.
2. Menu **⋮** → **Ajouter à l'écran d'accueil**.
3. L'icône apparaît comme une vraie application, en plein écran, et fonctionne
   même sans réseau une fois la première visite effectuée.

> Tu peux aussi simplement ouvrir `index.html` depuis ton téléphone sans passer
> par GitHub. Tout marche, sauf le mode plein écran et l'icône sur l'accueil.

---

## Ce que contient l'application

| Onglet | Contenu |
|---|---|
| **Auj.** | Calories restantes, macros, séance du jour, poids, heures de livraison, ressenti |
| **Séance** | Séance guidée, saisie reps/RIR/lest, minuteur de repos, guide de tempo, bibliothèque des 47 mouvements, protocoles d'imprévu |
| **Repas** | 27 recettes avec grammages, étapes et coût ; création de tes propres recettes |
| **Courses** | Menu de la semaine, liste agrégée par rayon, budget calculé |
| **Suivi** | Courbe de poids en moyenne 7 jours, mensurations, assiduité, analyse bihebdomadaire, les 52 semaines |

### Le programme
Cinq blocs sur l'année : Fondations (S1–8), Accumulation (S9–16),
Intensification (S17–28), Lestage (S29–40), Consolidation (S41–52).
Deloads automatiques aux semaines 8, 16, 24, 32, 40 et 48.

### Les calories
Recalculées en continu depuis la moyenne de poids sur 7 jours
(Mifflin-St Jeor × 1,4 × 1,10 pour la correction hardgainer), plus le surplus de
phase, plus les calories brûlées en livraison. Les heures de vélo saisies chaque
jour s'ajoutent automatiquement à la cible.

### L'analyse
Tous les 14 jours, l'application compare le rythme réel de prise de poids à la
cible (+0,25 % à +0,5 % du poids par semaine) et propose un ajustement.
Elle vérifie d'abord l'assiduité : si les repas ne sont pas tenus, elle refuse
d'augmenter les calories et dit pourquoi.

---

## Sauvegarde

Les données sont stockées uniquement dans le navigateur de ton téléphone.
**Exporte-les une fois par mois** depuis l'onglet Suivi ou les réglages : un
fichier JSON est téléchargé. Il se réimporte en un clic sur un autre appareil.

Vider les données de navigation de Chrome efface tout. L'export est le seul filet.

---

## Avertissement

Outil de suivi personnel, pas un avis médical. Aucun diagnostic, aucune
prescription. Avec un IMC inférieur à 18,5, une consultation et une prise de
sang restent la première étape : elles écartent les causes (thyroïde, cœliaquie,
malabsorption, carences) qui rendraient une année d'efforts sans effet.
