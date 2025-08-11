# Architecture du Projet

## Structure des Dossiers

```
needacoffee/
├── app/                    # App Router (Next.js 15+)
│   ├── layout.tsx         # Layout principal avec métadonnées
│   ├── page.tsx           # Page française (par défaut)
│   ├── en/
│   │   └── page.tsx       # Page anglaise
│   └── globals.css        # Styles globaux
├── components/             # Composants React
│   ├── ui/                # Composants de base réutilisables
│   │   ├── Card.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── Link.tsx
│   └── sections/          # Sections de page
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── About.tsx
│       ├── Work.tsx
│       ├── Projects.tsx
│       ├── Community.tsx
│       └── Contact.tsx
├── docs/                  # Documentation
│   ├── i18n.md
│   └── architecture.md
├── lib/                   # Utilitaires et configuration
│   ├── fonts.ts           # Configuration des fonts
│   └── i18n-app.ts        # Système i18n compatible App Router
├── locales/               # Fichiers de traduction
│   ├── en.json
│   └── fr.json
└── public/                # Assets statiques
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── og-image.jpg
    ├── site.webmanifest
    ├── robots.txt
    └── sitemap.xml
```

## Composants

### UI Components (`components/ui/`)

Composants de base réutilisables :

- `Card.tsx` : Conteneur avec style cohérent
- `Link.tsx` : Lien avec gestion des liens externes
- `LanguageSwitcher.tsx` : Sélecteur de langue

### Section Components (`components/sections/`)

Sections de page extraites pour la réutilisabilité :

- `Hero.tsx` : Section d'en-tête principale
- `Skills.tsx` : Section des compétences
- `About.tsx` : Section à propos
- `Work.tsx` : Section travail/projets
- `Projects.tsx` : Section projets personnels
- `Community.tsx` : Section communauté
- `Contact.tsx` : Section contact

## Scripts Disponibles

```bash
# Développement
npm run dev              # Serveur de développement avec Turbopack
npm run build            # Build de production
npm run start            # Serveur de production

# Qualité du code
npm run lint             # Vérification ESLint
npm run lint:fix         # Correction automatique ESLint
npm run type-check       # Vérification TypeScript
npm run format           # Formatage avec Biome
npm run format:check     # Vérification du formatage
npm run check            # Toutes les vérifications
```

## Bonnes Pratiques

1. **Organisation** : Composants organisés par type (ui, sections)
2. **Réutilisabilité** : Composants UI génériques et réutilisables
3. **TypeScript** : Types stricts et interfaces claires
4. **Accessibilité** : aria-labels, structure sémantique
5. **Performance** : Optimisations Next.js activées
6. **Qualité** : Scripts de vérification automatisés

## Internationalisation

- Système i18n personnalisé avec fallback
- Support français (par défaut) et anglais
- Routes `/` (français) et `/en` (anglais)
- Compatible App Router avec `i18n-app.ts`

## Configuration

- **Next.js 15.4.4** avec App Router
- **TypeScript** strict
- **Tailwind CSS v4** avec thème sombre/clair
- **Biome** pour le formatting et linting
- **ESLint** avec configuration Next.js

## Métadonnées et SEO

- Métadonnées complètes dans `app/layout.tsx`
- Favicons et manifest dans `/public/`
- Open Graph et Twitter Cards configurés
- Structure de données JSON-LD
- Optimisations pour les moteurs de recherche
