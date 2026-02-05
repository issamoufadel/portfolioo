# SPÉCIFICATIONS TECHNIQUES
## Portfolio Issam Oufadel - Site Web Personnel

**Version:** 1.0  
**Date:** 05 février 2026  
**Auteur:** Claude AI  
**Client:** Issam Oufadel

---

## 1. VUE D'ENSEMBLE DU PROJET

### 1.1 Objectif
Développer un portfolio web moderne pour un ingénieur d'État en Génie Mécanique avec une esthétique terminal/système distinctive et professionnelle.

### 1.2 Public Cible
- Recruteurs techniques
- Entreprises du secteur productique & aéronautique
- Professionnels de l'industrie
- Partenaires potentiels

### 1.3 Plateformes Ciblées
- Web Desktop (priorité)
- Web Mobile (responsive)
- Tablette

---

## 2. ARCHITECTURE TECHNIQUE

### 2.1 Stack Technologique

#### Frontend Framework
- **Next.js 14.2.5** avec App Router
- **React 18.3.1** pour les composants
- **TypeScript 5** pour la sécurité du typage

#### Styling & Design
- **Tailwind CSS 3.4.4** pour le système de design
- **Google Fonts** : JetBrains Mono & Space Mono
- **CSS Custom Properties** pour le theming

#### Build & Deployment
- **Vercel** pour l'hébergement et le déploiement continu
- **Node.js ≥ 18** requis
- **ESLint** pour la qualité du code

### 2.2 Structure des Dossiers

```
issam-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout racine avec polices
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux et animations
├── components/              # Composants React réutilisables
│   ├── CustomCursor.tsx     # Curseur personnalisé
│   ├── Navigation.tsx       # Barre de navigation
│   └── HeroSection.tsx      # Section hero page d'accueil
├── public/                  # Assets statiques
│   └── profile.jpg          # Photo de profil (à ajouter)
├── package.json             # Dépendances npm
├── tsconfig.json            # Configuration TypeScript
├── tailwind.config.js       # Configuration Tailwind
├── next.config.js           # Configuration Next.js
└── README.md                # Documentation projet
```

---

## 3. DESIGN SYSTEM

### 3.1 Palette de Couleurs

```css
/* Couleurs principales */
--terminal-green: #00ff41      /* Vert terminal - accent principal */
--terminal-dark: #0a0a0a       /* Noir profond - fond principal */
--terminal-gray: #1a1a1a       /* Gris foncé - fond secondaire */

/* Couleurs de texte */
--text-primary: #ffffff        /* Blanc - texte principal */
--text-secondary: #cccccc      /* Gris clair - texte secondaire */
--text-muted: #808080          /* Gris moyen - texte désactivé */
```

### 3.2 Typographie

#### Polices
- **JetBrains Mono** : Police monospace pour le texte courant
  - Poids : Regular (400)
  - Usage : Corps de texte, code, données techniques

- **Space Mono** : Police display pour les titres
  - Poids : Regular (400), Bold (700)
  - Usage : Titres, grands textes, éléments accentués

#### Échelle Typographique
```
H1 (Hero) : 56px / 64px (3.5rem / 4rem)
H2 (Section) : 36px / 48px (2.25rem / 3rem)
H3 (Sous-section) : 24px / 32px (1.5rem / 2rem)
Body : 16px / 24px (1rem / 1.5rem)
Small : 12px / 16px (0.75rem / 1rem)
```

### 3.3 Espacements

Système basé sur une échelle de 4px :
```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

### 3.4 Grille & Layout

- **Max-width conteneur** : 1280px (80rem)
- **Padding horizontal** : 24px (1.5rem)
- **Grid système** : 12 colonnes avec gap de 24px
- **Breakpoints** :
  - Mobile : < 640px
  - Tablet : 640px - 1024px
  - Desktop : > 1024px

---

## 4. COMPOSANTS & FONCTIONNALITÉS

### 4.1 Navigation

#### Spécifications
- Position fixe en haut de page
- Fond transparent par défaut
- Fond opaque + backdrop blur au scroll
- Border bottom vert au scroll

#### Éléments
1. **Logo/Brand** : "IO.SYS" avec border vert
2. **Menu items** :
   - ACCUEIL
   - SUR MOI
   - PARCOURS
   - PROJETS
   - CONTACT

#### Comportement
- Hover : soulignement progressif vert
- Active : couleur verte
- Smooth scroll vers les sections
- Animation d'entrée au chargement

### 4.2 Curseur Personnalisé

#### Spécifications
- Point central : 8px, vert terminal
- Cercle extérieur : 24px, border vert transparent
- Mix-blend-mode : difference

#### Comportement
- Suit le mouvement de la souris
- Scale 1.5x au survol d'éléments interactifs
- Cercle extérieur scale 1.2x au survol
- Transition fluide 100ms/200ms

#### Détection éléments interactifs
- Boutons (`<button>`)
- Liens (`<a>`)
- Éléments avec `cursor: pointer`

### 4.3 Hero Section

#### Layout
- Grid 2 colonnes sur desktop
- Stack vertical sur mobile
- Min-height : 100vh
- Background : grid pattern vert subtil

#### Contenu Left Side
1. **Status indicator** :
   - Dot vert pulsant
   - Text : "SYSTEM ONLINE • OPEN TO WORK"

2. **Nom** :
   - "ISSAM OUFADEL"
   - Font : Space Mono Bold, 56px
   - Effet glitch au hover

3. **Titre** :
   - "Ingénieur d'État Génie Mécanique"
   - "Spécialisation Productique & Aéronautique"
   - Border left vert

4. **CTA Buttons** :
   - "ME CONTACTER" (blanc)
   - "EXPLORER DATA" (outline vert)

#### Contenu Right Side
1. **Image container** :
   - Aspect ratio 4:5
   - Corners décoratifs (border vert)
   - Gradient overlay bottom
   - Grayscale par défaut, couleur au hover

2. **Info tag** :
   - ID: OUFADEL_I
   - LOC: MAROC/FRANCE
   - Position : bottom right

### 4.4 Effets Visuels

#### Scanline Effect
- Overlay fixe full-screen
- Lignes horizontales subtiles
- Animation : scan vertical 8s infini
- Opacity : 0.02
- Z-index : 9999

#### Noise Texture
- Overlay fixe full-screen
- SVG fractal noise
- Opacity : 0.03
- Z-index : 9998
- Non-interactive

#### Grid Background
- Linear gradients 50px x 50px
- Couleur : vert terminal à 3% opacity
- Statique

#### Glitch Effect
- Text-shadow multi-couleurs (vert/magenta)
- Animation rapide 0.3s
- Trigger : hover sur éléments .glitch-text
- Transform : translations aléatoires ±2px

---

## 5. ANIMATIONS

### 5.1 Page Load
```
Hero Section Left:
- Fade in + translate Y
- Duration: 1000ms
- Easing: ease-out
- Delay: 0ms

Hero Section Right:
- Fade in + translate X
- Duration: 1000ms
- Easing: ease-out
- Delay: 300ms
```

### 5.2 Scroll Animations
- Status indicator : pulse 2s ease-in-out infini
- Scanline : translate Y 8s linear infini
- Navbar : backdrop blur transition 300ms

### 5.3 Hover Animations
```
Buttons:
- Border pulse animation
- Background transition 300ms
- Scale: 1.02

Links:
- Underline width transition 300ms
- Color transition 300ms

Image:
- Grayscale to color 700ms
- Scale: 1.05
```

---

## 6. PERFORMANCE & OPTIMISATION

### 6.1 Optimisations Images
- Format : WebP avec fallback JPG
- Lazy loading pour images hors viewport
- Responsive images avec srcset
- Compression : quality 85%

### 6.2 Code Splitting
- Dynamic imports pour composants lourds
- Route-based splitting (automatique Next.js)
- Component-level splitting si nécessaire

### 6.3 Caching Strategy
```
Static assets: Cache-Control: public, max-age=31536000, immutable
HTML: Cache-Control: public, max-age=0, must-revalidate
API: Cache-Control: public, max-age=3600
```

### 6.4 Métriques Cibles
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Time to Interactive** : < 3.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

### 6.5 Bundle Size
- Initial JS bundle : < 150KB (gzipped)
- CSS : < 20KB (gzipped)
- Total page weight : < 500KB

---

## 7. ACCESSIBILITÉ (WCAG 2.1 AA)

### 7.1 Contraste
- Texte blanc sur fond noir : ratio 21:1 ✓
- Vert terminal sur fond noir : ratio 12:1 ✓
- Tous les textes respectent minimum 4.5:1

### 7.2 Navigation Clavier
- Tab order logique
- Focus visible (outline vert 2px)
- Skip to main content link
- Escape pour fermer modales

### 7.3 Screen Readers
- Landmarks ARIA appropriés
- Alt text pour toutes les images
- aria-labels pour icônes
- Live regions pour updates dynamiques

### 7.4 Motion & Animations
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. SEO & META

### 8.1 Meta Tags
```html
<title>Issam Oufadel | Ingénieur Génie Mécanique</title>
<meta name="description" content="Portfolio - Ingénieur d'État Génie Mécanique, spécialisation Productique & Aéronautique" />
<meta name="keywords" content="ingénieur, génie mécanique, productique, aéronautique, Maroc" />
<meta name="author" content="Issam Oufadel" />

<!-- Open Graph -->
<meta property="og:title" content="Issam Oufadel | Portfolio" />
<meta property="og:description" content="Ingénieur Génie Mécanique" />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Issam Oufadel" />
<meta name="twitter:description" content="Ingénieur Génie Mécanique" />
<meta name="twitter:image" content="/og-image.jpg" />
```

### 8.2 Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Issam Oufadel",
  "jobTitle": "Ingénieur d'État Génie Mécanique",
  "description": "Spécialisation Productique & Aéronautique",
  "url": "https://issam-oufadel.com"
}
```

### 8.3 Sitemap & Robots
- Génération automatique sitemap.xml
- robots.txt permissif
- Soumission Google Search Console

---

## 9. DÉPLOIEMENT & CI/CD

### 9.1 Environnements

#### Development
- URL : localhost:3000
- Hot reload activé
- Source maps complets
- Logs verbeux

#### Preview (Vercel)
- URL : preview-*.vercel.app
- Généré pour chaque PR
- Tests automatiques
- Review apps

#### Production
- URL : issam-oufadel.com (ou domaine personnalisé)
- Code minifié
- Source maps externes
- Monitoring activé

### 9.2 Pipeline CI/CD

```
Git Push
  ↓
Vercel Detection
  ↓
Build Process
  ├── npm install
  ├── TypeScript check
  ├── ESLint
  ├── Build Next.js
  └── Tests (si configurés)
  ↓
Deploy
  ├── Preview (branches)
  └── Production (main)
  ↓
Post-Deploy
  ├── Purge cache
  └── Notify
```

### 9.3 Variables d'Environnement
Aucune requise pour version de base. Pour extensions futures :
```
NEXT_PUBLIC_GA_ID=          # Google Analytics
NEXT_PUBLIC_SITE_URL=       # URL du site
CONTACT_FORM_ENDPOINT=      # API contact
```

---

## 10. SÉCURITÉ

### 10.1 Headers HTTP
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

### 10.2 HTTPS
- SSL/TLS automatique via Vercel
- HSTS activé
- Redirection HTTP → HTTPS

### 10.3 Protection XSS
- React escape automatique
- Sanitization des inputs utilisateur
- CSP headers stricts

---

## 11. MONITORING & ANALYTICS

### 11.1 Web Vitals
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Vercel Analytics intégré

### 11.2 Error Tracking
- Console errors capture
- Build errors logs
- Runtime errors monitoring

### 11.3 Analytics (Optionnel)
- Google Analytics 4
- Plausible Analytics (privacy-friendly alternative)
- Événements personnalisés :
  - Page views
  - Button clicks (CTA)
  - Section visibility
  - Navigation usage

---

## 12. COMPATIBILITÉ NAVIGATEURS

### 12.1 Support Navigateurs

✅ **Full Support** :
- Chrome/Edge ≥ 90
- Firefox ≥ 88
- Safari ≥ 14
- Opera ≥ 76

⚠️ **Partial Support** :
- IE 11 : Non supporté (EOL)
- Safari < 14 : Dégradation gracieuse

### 12.2 Features Polyfills
```javascript
// Automatiquement géré par Next.js
- ES6+ features
- CSS Grid
- Flexbox
- Custom Properties
```

### 12.3 Progressive Enhancement
- Site fonctionnel sans JavaScript
- CSS fallbacks
- Dégradation gracieuse effets visuels

---

## 13. TESTS & QUALITY ASSURANCE

### 13.1 Types de Tests

#### Tests Unitaires
- Composants React individuels
- Utilitaires et helpers
- Framework : Jest + React Testing Library

#### Tests d'Intégration
- Navigation entre sections
- Interactions utilisateur
- State management

#### Tests Visuels
- Snapshots composants
- Régression visuelle
- Cross-browser testing

#### Tests Performance
- Lighthouse CI
- Bundle size monitoring
- Load time testing

### 13.2 Checklist QA

**Fonctionnel** :
- ✓ Navigation fonctionne
- ✓ Liens externes s'ouvrent correctement
- ✓ Formulaire contact (si applicable)
- ✓ Smooth scroll vers sections

**Visuel** :
- ✓ Responsive sur tous devices
- ✓ Polices chargées correctement
- ✓ Images s'affichent
- ✓ Animations fluides

**Performance** :
- ✓ Score Lighthouse > 90
- ✓ LCP < 2.5s
- ✓ CLS < 0.1
- ✓ FID < 100ms

**Accessibilité** :
- ✓ Navigation clavier
- ✓ Screen reader compatible
- ✓ Contraste suffisant
- ✓ Alt text présents

---

## 14. MAINTENANCE & ÉVOLUTION

### 14.1 Mises à Jour Dépendances

**Fréquence** : Mensuelle
```bash
npm outdated                  # Check updates
npm update                    # Update minor/patch
npm install package@latest    # Update major
```

**Priorités** :
1. Security patches (immédiat)
2. Next.js updates (mensuel)
3. Dependencies updates (mensuel)
4. DevDependencies (trimestriel)

### 14.2 Backup & Versioning

- **Git** : Code versionné sur GitHub/GitLab
- **Database** : N/A (site statique)
- **Assets** : Sauvegarde dans Git LFS si nécessaire
- **Tags** : Version sémantique (v1.0.0, v1.1.0...)

### 14.3 Monitoring Continu

**Quotidien** :
- Uptime monitoring (via Vercel)
- Error rates
- Performance metrics

**Hebdomadaire** :
- Analytics review
- Search Console errors
- Broken links check

**Mensuel** :
- Full audit performance
- Lighthouse report
- Dependencies security audit

---

## 15. DOCUMENTATION DÉVELOPPEUR

### 15.1 Getting Started

```bash
# Clone repository
git clone https://github.com/username/issam-portfolio.git
cd issam-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

### 15.2 Structure des Composants

**Conventions** :
- Un composant par fichier
- PascalCase pour noms de composants
- Props TypeScript typées
- Export default en fin de fichier

**Exemple** :
```typescript
// components/MyComponent.tsx
'use client'

import { useState } from 'react'

interface MyComponentProps {
  title: string
  description?: string
}

export default function MyComponent({ title, description }: MyComponentProps) {
  const [state, setState] = useState(false)
  
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

### 15.3 Styling Guidelines

- Utiliser Tailwind classes en priorité
- Custom CSS dans globals.css si nécessaire
- Nommage BEM pour classes custom
- Utiliser CSS variables pour couleurs

### 15.4 Code Review Checklist

- [ ] TypeScript errors résolues
- [ ] ESLint warnings corrigées
- [ ] Composants testés
- [ ] Performance vérifiée
- [ ] Accessible (WCAG AA)
- [ ] Responsive testé
- [ ] Code commenté si complexe
- [ ] Documentation à jour

---

## 16. RESSOURCES & RÉFÉRENCES

### 16.1 Documentation Technique

- **Next.js** : https://nextjs.org/docs
- **React** : https://react.dev
- **Tailwind CSS** : https://tailwindcss.com/docs
- **TypeScript** : https://www.typescriptlang.org/docs
- **Vercel** : https://vercel.com/docs

### 16.2 Design Resources

- **Fonts** :
  - JetBrains Mono : https://fonts.google.com/specimen/JetBrains+Mono
  - Space Mono : https://fonts.google.com/specimen/Space+Mono

- **Colors** :
  - Terminal Green : #00ff41
  - Palette inspiration : Cyberpunk/Terminal aesthetics

### 16.3 Outils de Développement

- **VSCode Extensions** :
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript importer

- **Browser Extensions** :
  - React Developer Tools
  - Lighthouse
  - WAVE (Accessibility)

---

## 17. LIVRABLES

### 17.1 Code Source
- ✓ Repository Git complet
- ✓ README.md avec instructions
- ✓ package.json configuré
- ✓ Configuration files (tsconfig, tailwind, etc.)

### 17.2 Déploiement
- ✓ Site live sur Vercel
- ✓ URL preview environments
- ✓ Domaine personnalisé configuré (optionnel)

### 17.3 Documentation
- ✓ Spécifications techniques (ce document)
- ✓ Guide de déploiement
- ✓ Guide de personnalisation
- ✓ Commentaires inline dans le code

### 17.4 Assets
- ⚠️ Photo de profil (à fournir par le client)
- ⚠️ OG image pour social sharing (à créer)
- ⚠️ Favicon (à créer)
- ⚠️ Contenu des sections (à fournir par le client)

---

## 18. PROCHAINES ÉTAPES

### 18.1 Phase 1 : Setup Initial ✅
- [x] Configuration projet Next.js
- [x] Installation dépendances
- [x] Structure folders
- [x] Configuration TypeScript & Tailwind

### 18.2 Phase 2 : Design System ✅
- [x] Palette couleurs
- [x] Typographie
- [x] Composants de base
- [x] Effets visuels

### 18.3 Phase 3 : Développement 🚧
- [x] Hero section
- [x] Navigation
- [x] Curseur personnalisé
- [ ] Section À propos
- [ ] Section Parcours
- [ ] Section Projets
- [ ] Section Contact

### 18.4 Phase 4 : Contenu ⏳
- [ ] Ajouter photo de profil
- [ ] Rédiger section À propos
- [ ] Lister parcours professionnel
- [ ] Ajouter projets avec descriptions
- [ ] Configurer formulaire contact

### 18.5 Phase 5 : Optimisation ⏳
- [ ] Performance audit
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing

### 18.6 Phase 6 : Déploiement ⏳
- [ ] Configuration Vercel
- [ ] Domaine personnalisé
- [ ] Analytics setup
- [ ] Monitoring setup

---

## 19. SUPPORT & CONTACT

### 19.1 Issues & Questions
- GitHub Issues pour bugs
- Documentation pour FAQ
- Email pour support général

### 19.2 Contributions
Contributions bienvenues via Pull Requests :
1. Fork le repository
2. Créer une branche feature
3. Commit les changes
4. Push vers la branche
5. Ouvrir une Pull Request

### 19.3 Licence
Propriétaire - Tous droits réservés © 2026 Issam Oufadel

---

## ANNEXES

### A. Glossaire Technique

**Next.js** : Framework React pour applications web production-ready avec SSR et SSG.

**App Router** : Nouveau système de routing de Next.js 13+ basé sur le filesystem.

**Tailwind CSS** : Framework CSS utility-first pour styling rapide.

**TypeScript** : Superset de JavaScript avec typage statique.

**Vercel** : Plateforme de déploiement cloud optimisée pour Next.js.

**SSR** : Server-Side Rendering - rendu côté serveur.

**SSG** : Static Site Generation - génération de site statique.

**CSR** : Client-Side Rendering - rendu côté client.

**LCP** : Largest Contentful Paint - métrique performance.

**CLS** : Cumulative Layout Shift - métrique stabilité visuelle.

**FID** : First Input Delay - métrique interactivité.

---

### B. Commandes Utiles

```bash
# Développement
npm run dev               # Lance serveur dev
npm run build            # Build production
npm run start            # Lance build production
npm run lint             # Linter code

# Git
git status               # Status repo
git add .                # Stage changes
git commit -m "message"  # Commit
git push                 # Push vers remote

# Vercel
vercel                   # Deploy preview
vercel --prod            # Deploy production
vercel logs              # Voir logs
vercel env ls            # Lister env vars

# Maintenance
npm audit                # Security audit
npm outdated             # Check updates
npm update               # Update packages
```

---

### C. Checklist Lancement

**Pre-launch** :
- [ ] Content finalisé
- [ ] Images optimisées
- [ ] SEO meta configurés
- [ ] Analytics setup
- [ ] Domaine configuré
- [ ] SSL/HTTPS actif

**Post-launch** :
- [ ] Sitemap soumis
- [ ] Google Search Console setup
- [ ] Monitoring actif
- [ ] Backup configuré
- [ ] Social sharing testé
- [ ] Performance validée

---

**FIN DU DOCUMENT**

*Ce document est un living document et sera mis à jour au fur et à mesure de l'évolution du projet.*

---

**Signatures :**

Développeur : Claude AI  
Date : 05/02/2026

Client : Issam Oufadel  
Date : _____________
