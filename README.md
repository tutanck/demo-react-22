# Primitives

1. Component
2. View
3. Hook
4. Page
5. Route

# En détails

## Component

Le **Component** est le plus petit élément du système.
Son rôle est l'affichage de la donnée en provenance des niveaux supérieurs et la transmission des ordres vers les niveaux supérieurs.
Ni plus ni moins.

Recommandations:

- Ne doit idéalement détenir **aucune** logique (ni métier, ni technique)
- Connection à la logique **uniquement** via les props.
- Les imports (dépendances) sont **uniquement** des dépendances envers les composants enfants.
- Tous les composants enfants sont des composants (Pas de view, ni de hooks, ou autres éléments appartenant aux niveaux supérieurs)
- Couplage fort avec le style: le composant détient son style.

## View

La **View** représente la jonction entre les composants et la logique. La view ne détient pas à proprement parler la logique mais l'expose à ces composants enfants. Elle peut aussi utiliser ses propres props pour initialiser le hook sous-jacent.

## Hook

Le **Hook** détient la logique utilisable par une ou plusieurs views. Il est une composition d'un ou plusieurs hooks sous-jacents et régit en totalité le fonctionnement des views qui l'utilisent.

Recommandations:

- Doit idéalement n'importer qu'**un seul hook** (la logique) et en exposer les clés aux composants sous-jacents via les props.
- Idéalement ne pas composer les view entres elles mais plutôt le faire au niveau des pages.

## Page

La **Page** représente le point d'entrée d'une ou plusieurs View.
Chaque page doit être associée à une url sinon il s'agit d'une view.

## Route

La **Route** est la jonction entre une page est une Url.

# Diff

**cons**

\- On crée plus de fichiers

\- Slow start

**pros**

\+ On modifie un seul fichier par type de chnagement

\+ Moins de temps à débuguer (tout est transparent)

\+ Forte interchangeabilité de toutes les parties du code

\+ -> Refactos de plus en plus rapides 

\+ Temps de développement inversement exponentiel

# Nouveautés

- Routage déclaratif avec **React router v6**
- "_From Async to sequence_" avec **@tutanck/react-async**
- Styled Components
