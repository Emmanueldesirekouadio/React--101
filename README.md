# React-101 — Exercice “Annuaire des universités”

Exercice de révision (niveau débutant) : routing, hooks, fetch API, context, et un peu de Tailwind.

## Résultat attendu
Vous devez obtenir :
- `/universities` : recherche par **pays** (+ **nom** optionnel), skeleton pendant le chargement, favoris, filtre “favoris uniquement”
- `/universities/:country/:name` : page détail (params d’URL) + favoris

## Démarrage
```bash
npm.cmd install
npm.cmd run dev
```
Puis ouvrir `http://localhost:5173/universities`.

## Données (API)
Une **API** = une URL qui renvoie du JSON.

Ici :
- `https://universities.hipolabs.com/search?country=Morocco`
- `https://universities.hipolabs.com/search?country=France&name=tech`

> Postman (vu en cours) sert à tester ces URLs. Dans React, on fait pareil via `fetch`.

## Routes (autocomplétion)
Toutes les routes sont centralisées dans `src/routes.js` :
- `RoutePage.UNIVERSITIES`
- `RoutePage.UNIVERSITY_DETAILS`
- `RoutePage.universityDetails(country, name)` (génère le lien vers le détail)

## Étapes d’implémentation (ordre conseillé)

### 1) Brancher les routes
- Modifier `src/router.jsx`
  - ajouter la page liste sur `RoutePage.UNIVERSITIES`
  - ajouter la page détail sur `RoutePage.UNIVERSITY_DETAILS`
  - garder une route `*` (404)
- Vérifier le layout `src/layout/Layout.jsx` : le composant `<Outlet />` doit être présent (sinon aucune page ne s’affiche).
- Mettre à jour la navbar `src/components/Navbar.jsx` pour utiliser `RoutePage.*` (pas de string “/about” en dur).

### 2) Mettre en place les favoris (global)
- Provider : `src/context/FavoritesContext.jsx`
  - stocke `favorites` et expose `toggleFavorite` + `isFavorite`
  - (bonus déjà fait) persiste dans `localStorage`
- Hook : `src/context/useFavorites.js` (permet d’utiliser facilement le contexte)
- Important : brancher le provider dans `src/main.jsx` (sinon `useFavorites()` plante).
- Clé stable : `src/utils/universityKey.js` (`country::name`)

### 3) Factoriser le fetch (custom hook)
- Créer/compléter `src/hooks/useFetch.js`
  - entrées : `url`
  - sorties : `{ data, loading, error }`
  - `useEffect` relance le fetch quand `url` change

### 4) Implémenter la page Liste `/universities`
Fichier : `src/pages/Universities.jsx`
- États (`useState`) : `country`, `name`, `onlyFavorites`, `url`
- Construire l’URL avec `encodeURIComponent` (si `country` est vide ⇒ `url = null`)
- Déclencher la recherche au clic “Rechercher” : `setUrl(...)` (pas de fetch direct dans le bouton)
- Affichage :
  - `loading` ⇒ `src/components/UniversitiesSkeleton.jsx`
  - `error` ⇒ message “Erreur: …”
  - sinon ⇒ liste de cartes `src/components/UniversityCard.jsx`
- `useRef` + `useEffect` : focus auto sur l’input “Pays”
- Filtre favoris : si `onlyFavorites` est coché, n’afficher que les favoris

UI utilisée :
- `src/components/UniversitiesSearchBar.jsx` (inputs + boutons)
- `src/components/UniversityCard.jsx` (bouton favoris + lien détail via `RoutePage.universityDetails(...)`)

### 5) Implémenter la page Détail `/universities/:country/:name`
Fichier : `src/pages/UniversityDetails.jsx`
- Lire les params avec `useParams()`
- Refaire un fetch avec ces params
- `loading` ⇒ `src/components/UniversityDetailsSkeleton.jsx`
- Bouton favoris (même logique que la liste)
- Lien “Retour” vers `RoutePage.UNIVERSITIES`

## Comment vérifier que c’est OK (checklist)
- La liste s’affiche après “Rechercher”
- Le skeleton apparaît pendant le chargement
- Un clic “Détails” ouvre bien une nouvelle page avec l’URL `/universities/.../...`
- Les favoris fonctionnent sur liste + détail, et le filtre “favoris uniquement” marche

## En cas de blocage (méthode simple)
1) Console : lire l’erreur
2) Network : vérifier l’URL appelée
3) Vérifier `country` non vide et paramètres encodés
