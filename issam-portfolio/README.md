# Portfolio Issam Oufadel

Portfolio moderne avec design terminal/système pour ingénieur en génie mécanique.

## 🚀 Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. Va sur [vercel.com](https://vercel.com)
2. Connecte-toi avec GitHub
3. Clique sur "Add New Project"
4. Importe ton repo GitHub
5. Vercel détectera automatiquement Next.js
6. Clique sur "Deploy"

### Option 2 : Via CLI Vercel

```bash
# Installe Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Pour déployer en production
vercel --prod
```

## 📦 Installation locale

```bash
# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev

# Ouvre http://localhost:3000
```

## 🎨 Personnalisation

### 1. Photo de profil
- Ajoute ta photo dans `/public/profile.jpg`
- Format recommandé : 800x1000px minimum
- Format : JPG ou PNG

### 2. Couleurs
Modifie dans `tailwind.config.js` :
```js
colors: {
  terminal: {
    green: '#00ff41',  // Couleur principale
    dark: '#0a0a0a',   // Fond
    gray: '#1a1a1a',   // Fond secondaire
  }
}
```

### 3. Contenu
- **Nom & titre** : `components/HeroSection.tsx`
- **Navigation** : `components/Navigation.tsx`
- **Sections** : `app/page.tsx`

### 4. Polices
Les polices utilisées (JetBrains Mono & Space Mono) sont chargées automatiquement depuis Google Fonts.

## 🎯 Structure du projet

```
issam-portfolio/
├── app/
│   ├── layout.tsx          # Layout principal avec polices
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux
├── components/
│   ├── CustomCursor.tsx    # Curseur personnalisé
│   ├── Navigation.tsx      # Barre de navigation
│   └── HeroSection.tsx     # Section hero
├── public/
│   └── profile.jpg         # Ta photo (à ajouter)
└── package.json
```

## ✨ Fonctionnalités

- ✅ Design terminal/système unique
- ✅ Curseur personnalisé
- ✅ Effets scanline & noise
- ✅ Animations fluides
- ✅ Responsive design
- ✅ Performance optimisée
- ✅ SEO-friendly
- ✅ TypeScript
- ✅ Tailwind CSS

## 🔧 Scripts disponibles

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter
```

## 📝 Variables d'environnement

Aucune variable d'environnement requise pour la version de base.

## 🌐 Domaine personnalisé sur Vercel

1. Va dans les settings de ton projet Vercel
2. Clique sur "Domains"
3. Ajoute ton domaine personnalisé
4. Configure les DNS selon les instructions

## 💡 Prochaines étapes

1. Ajoute ta photo dans `/public/profile.jpg`
2. Personnalise le contenu dans les composants
3. Développe les sections About, Parcours, Projects, Contact
4. Ajoute tes projets et expériences
5. Configure les analytics (optionnel)

## 🐛 Debug

Si tu as des problèmes :
- Vérifie que Node.js >= 18 est installé
- Supprime `node_modules` et `.next`
- Relance `npm install`
- Vérifie les logs Vercel en cas d'erreur de déploiement

## 📧 Support

Pour toute question sur le déploiement, contacte-moi !

---

Made with ⚡ Next.js 14 & TypeScript
