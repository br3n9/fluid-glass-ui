# Guide de Thèmes Fluid Glass UI

Fluid Glass UI est livré avec un système de thèmes puissant qui vous permet de personnaliser l'apparence de votre application. Ce guide explique comment utiliser et personnaliser les thèmes dans votre projet.

## Démarrage Rapide

1. Importez les styles de base :
```js
import 'fluid-glass-ui/style.css';
```

2. Importez l'un des thèmes intégrés (optionnel) :
```js
// Choisissez l'un de ces thèmes
import 'fluid-glass-ui/theme/default'; // Thème par défaut
import 'fluid-glass-ui/theme/ocean';   // Thème océan
```

## Comprendre le Système de Thèmes

Fluid Glass UI utilise des variables CSS pour la gestion des thèmes. Les principales variables qui contrôlent l'apparence sont :

| Variable | Description |
|----------|-------------|
| `--fg-primary-hue` | La teinte de couleur principale pour votre application |
| `--fg-accent-hue` | La teinte de couleur d'accent pour les éléments interactifs |
| `--fg-neutral-hue` | La teinte de couleur neutre pour le texte et les arrière-plans |
| `--fg-success-hue` | La teinte pour les états de succès |
| `--fg-warning-hue` | La teinte pour les états d'avertissement |
| `--fg-error-hue` | La teinte pour les états d'erreur |
| `--fg-primary-saturation` | Niveau de saturation pour les couleurs principales |
| `--fg-accent-saturation` | Niveau de saturation pour les couleurs d'accent |
| `--fg-glass-opacity` | Niveau d'opacité pour les effets de verre |
| `--fg-glass-blur` | Quantité de flou pour les effets de verre |

Ces variables sont ensuite utilisées pour générer les propriétés CSS réelles comme `--fg-bg-primary`, `--fg-text-primary`, etc.

## Création d'un Thème Personnalisé

Vous pouvez créer un thème personnalisé en définissant ces variables CSS dans votre propre fichier CSS :

```css
/* montheme.css */
:root {
  --fg-primary-hue: 240;    /* Bleu-violet */
  --fg-accent-hue: 160;     /* Turquoise */
  --fg-neutral-hue: 230;    /* Gris froid */
  
  --fg-success-hue: 145;    /* Vert */
  --fg-warning-hue: 45;     /* Or */
  --fg-error-hue: 355;      /* Rouge */
  
  /* Personnalisation avancée */
  --fg-primary-saturation: 30%;
  --fg-accent-saturation: 85%;
  --fg-glass-opacity: 0.75;
  --fg-glass-blur: 15px;
}
```

Ensuite, importez votre thème après les styles de base :

```js
import 'fluid-glass-ui/style.css';
import './montheme.css';
```

## Utilisation de Plusieurs Thèmes avec des Classes CSS

Vous pouvez également créer plusieurs thèmes et basculer entre eux en utilisant des classes CSS :

```css
/* themes.css */
.theme-light {
  --fg-primary-hue: 220;
  --fg-accent-hue: 280;
  /* ... autres variables ... */
}

.theme-dark {
  --fg-primary-hue: 230;
  --fg-accent-hue: 290;
  /* ... autres variables ... */
  
  /* Surcharge des variables du mode sombre */
  --fg-bg-primary: hsl(var(--fg-primary-hue), var(--fg-primary-saturation), 8%);
  --fg-text-primary: hsl(var(--fg-neutral-hue), 15%, 90%);
  /* ... autres surcharges ... */
}

.theme-brand {
  --fg-primary-hue: 210;
  --fg-accent-hue: 25;
  /* ... autres variables ... */
}
```

Ensuite, appliquez la classe de thème à votre élément racine :

```jsx
<div className="theme-light">
  {/* Contenu de votre application */}
</div>
```

## Intégration avec Tailwind CSS

Si vous utilisez Tailwind CSS, vous pouvez mapper les couleurs de votre thème au système de couleurs de Tailwind dans votre fichier `tailwind.config.js` :

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--fg-bg-primary)',
          dark: 'hsl(var(--fg-primary-hue), var(--fg-primary-saturation), 40%)',
          light: 'hsl(var(--fg-primary-hue), var(--fg-primary-saturation), 98%)',
        },
        accent: {
          DEFAULT: 'var(--fg-accent-primary)',
          dark: 'hsl(var(--fg-accent-hue), var(--fg-accent-saturation), 50%)',
          light: 'hsl(var(--fg-accent-hue), var(--fg-accent-saturation), 70%)',
        },
        // Ajoutez d'autres mappages de couleurs selon vos besoins
      },
    },
  },
  // ... reste de votre configuration Tailwind
};
```

Cela vous permet d'utiliser des classes Tailwind comme `bg-primary` et `text-accent` qui se mettront automatiquement à jour lorsque votre thème change.

## Support du Mode Sombre

Fluid Glass UI prend en charge le mode sombre de deux façons :

1. **Automatique** - En utilisant les préférences système de l'utilisateur via `prefers-color-scheme: dark`
2. **Manuel** - En utilisant l'attribut `data-theme="dark"` sur l'élément racine

Pour basculer manuellement en mode sombre, utilisez le composant `ThemeSwitcher` ou ajoutez l'attribut vous-même :

```jsx
// Utilisation du composant ThemeSwitcher
import { ThemeSwitcher } from 'fluid-glass-ui';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      {/* Contenu de votre application */}
    </div>
  );
}

// Ou manuellement
document.documentElement.setAttribute('data-theme', 'dark');
// Pour revenir au mode clair
document.documentElement.removeAttribute('data-theme');
```

## Exemples

Consultez le répertoire `src/theme/` dans le package Fluid Glass UI pour des exemples de fichiers de thèmes :

- `default.css` - Le thème par défaut
- `ocean.css` - Un thème bleu inspiré de l'océan
- `corporate.css` - Un thème professionnel pour entreprise

Vous pouvez utiliser ces fichiers comme points de départ pour vos propres thèmes personnalisés.
