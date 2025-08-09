# Documentation des Composants du Design Système Fluid Glass

Bienvenue dans la documentation du design système Fluid Glass. Ce document fournit un guide complet pour les développeurs sur la façon d'utiliser chaque composant réutilisable de l'interface utilisateur.

## Table des Matières

- [Principes de Base](#principes-de-base)
- [Composants](#composants)
  - [Accordion](#accordion)
  - [Alert](#alert)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [Breadcrumb](#breadcrumb)
  - [Button](#button)
  - [Card](#card)
  - [Checkbox](#checkbox)
  - [Chip](#chip)
  - [Collapsible](#collapsible)
  - [CollapsibleSidebar](#collapsiblesidebar)
  - [Container](#container)
  - [DataCard](#datacard)
  - [Drawer](#drawer)
  - [Dropdown](#dropdown)
  - [EmptyState](#emptystate)
  - [Error404Page](#error404page)
  - [ExpandableTable](#expandabletable)
  - [FileUploader](#fileuploader)
  - [Flex](#flex)
  - [Footer](#footer)
  - [GridSystem](#gridsystem)
  - [HelperText](#helptext)
  - [IconButton](#iconbutton)
  - [Input](#input)
  - [InteractiveTable](#interactivetable)
  - [Label](#label)
  - [Link](#link)
  - [Modal](#modal)
  - [Notification](#notification)
  - [Pagination](#pagination)
  - [ProgressBar](#progressbar)
  - [RadioGroup](#radiogroup)
  - [SectionBox](#sectionbox)
  - [Select](#select)
  - [SidebarMenuItem](#sidebarmenuitem)
  - [SidebarNavigation](#sidebarnavigation)
  - [Skeleton](#skeleton)
  - [Snackbar](#snackbar)
  - [Spinner](#spinner)
  - [Stack](#stack)
  - [StatCard](#statcard)
  - [Stepper](#stepper)
  - [Tabs](#tabs)
  - [Textarea](#textarea)
  - [ThemeSwitcher & ThemeProvider](#themeswitcher--themeprovider)
  - [Timeline](#timeline)
  - [Toast](#toast)
  - [Toggle](#toggle)
  - [TopNavigation](#topnavigation)
  - [ViewModeSwitch](#viewmodeswitch)

---

## Principes de Base

Chaque composant est conçu pour être modulaire et réutilisable. Ils sont situés dans `app/components/ui` et peuvent être importés directement dans vos fichiers.

**Exemple d'importation :**

```jsx
import Button from "fluid-glass-ui";
```

---

## Composants

### Accordion

Le composant `Accordion` permet d'afficher et de masquer des sections de contenu.

**Props**

| Prop    | Type    | Défaut     | Description                                                                                         |
| :------ | :------ | :--------- | :-------------------------------------------------------------------------------------------------- |
| `items` | `array` | **Requis** | Un tableau d'objets, où chaque objet doit avoir les clés `title` (string) et `content` (ReactNode). |

**Exemple d'utilisation**

```jsx
import Accordion from "fluid-glass-ui";

const FAQ = () => {
  const faqItems = [
    { title: "Comment ça marche ?", content: "Voici comment..." },
    { title: "Une autre question ?", content: "Voici la réponse..." },
  ];

  return <Accordion items={faqItems} />;
};
```

### Alert

Le composant `Alert` est utilisé pour afficher des messages importants ou des notifications aux utilisateurs.

**Props**

| Prop       | Type                                              | Défaut   | Description                                                                  |
| :--------- | :------------------------------------------------ | :------- | :--------------------------------------------------------------------------- |
| `variant`  | `string` ('info', 'success', 'warning', 'danger') | `'info'` | Le style visuel de l'alerte.                                                 |
| `title`    | `string`                                          | `''`     | Le titre de l'alerte.                                                        |
| `children` | `ReactNode`                                       | `null`   | Le contenu principal de l'alerte.                                            |
| `onClose`  | `function`                                        | `null`   | Si fourni, affiche un bouton de fermeture et exécute cette fonction au clic. |

**Exemple d'utilisation**

```jsx
import Alert from "fluid-glass-ui";

const SuccessMessage = () => (
  <Alert variant="success" title="Succès !">
    Votre opération a été réalisée avec succès.
  </Alert>
);
```

### Avatar

Le composant `Avatar` est utilisé pour afficher une image de profil ou une icône représentant un utilisateur.

**Props**

| Prop       | Type                        | Défaut     | Description                                                       |
| :--------- | :-------------------------- | :--------- | :---------------------------------------------------------------- |
| `src`      | `string`                    | `null`     | L'URL de l'image à afficher.                                      |
| `alt`      | `string`                    | `''`       | Le texte alternatif pour l'image.                                 |
| `fallback` | `string`                    | **Requis** | Les initiales ou le texte à afficher si l'image ne se charge pas. |
| `size`     | `string` ('sm', 'md', 'lg') | `'md'`     | La taille de l'avatar.                                            |

**Exemple d'utilisation**

```jsx
import Avatar from "fluid-glass-ui";

const UserProfileIcon = () => (
  <Avatar src="/path/to/image.jpg" fallback="JD" size="lg" />
);
```

### Badge

Le composant `Badge` est utilisé pour afficher de courtes informations, comme des statuts ou des notifications.

**Props**

| Prop       | Type                                                 | Défaut      | Description                                   |
| :--------- | :--------------------------------------------------- | :---------- | :-------------------------------------------- |
| `variant`  | `string` ('default', 'success', 'danger', 'warning') | `'default'` | Le style visuel du badge.                     |
| `children` | `ReactNode`                                          | `null`      | Le contenu à afficher à l'intérieur du badge. |

**Exemple d'utilisation**

```jsx
import Badge from "fluid-glass-ui";

const StatusIndicator = () => <Badge variant="success">Actif</Badge>;
```

### Breadcrumb

Le composant `Breadcrumb` est utilisé pour afficher un fil d'Ariane, aidant les utilisateurs à comprendre leur emplacement dans l'application.

**Props**

| Prop    | Type    | Défaut     | Description                                                                          |
| :------ | :------ | :--------- | :----------------------------------------------------------------------------------- |
| `items` | `array` | **Requis** | Un tableau d'objets, où chaque objet a les clés `label` (string) et `href` (string). |

**Exemple d'utilisation**

```jsx
import Breadcrumb from "fluid-glass-ui";

const NavigationPath = () => {
  const pathItems = [
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/products" },
    { label: "Électronique", href: "/products/electronics" },
  ];

  return <Breadcrumb items={pathItems} />;
};
```

### Button

Le composant `Button` est un bouton cliquable standard avec plusieurs styles et options.

**Props**

| Prop        | Type                                                 | Défaut        | Description                                    |
| :---------- | :--------------------------------------------------- | :------------ | :--------------------------------------------- |
| `variant`   | `string` ('primary', 'secondary', 'ghost', 'subtle') | `'secondary'` | Le style visuel du bouton.                     |
| `size`      | `string` ('sm', 'md', 'lg')                          | `'md'`        | La taille du bouton.                           |
| `startIcon` | `ReactNode`                                          | `null`        | Une icône à afficher avant le texte du bouton. |
| `endIcon`   | `ReactNode`                                          | `null`        | Une icône à afficher après le texte du bouton. |
| `children`  | `ReactNode`                                          | `null`        | Le contenu principal du bouton.                |

**Exemple d'utilisation**

```jsx
import Button from "fluid-glass-ui";
import { ArrowRight } from "lucide-react";

const SubmitButton = () => (
  <Button variant="primary" size="lg" endIcon={<ArrowRight />}>
    Soumettre
  </Button>
);
```

### Card

Le composant `Card` est un conteneur stylisé utilisé pour grouper du contenu connexe. Il peut être rendu cliquable et est conçu pour être utilisé avec ses sous-composants : `CardHeader`, `CardBody`, `CardFooter`, `CardTitle`, et `CardDescription`.

**Composants & Props**

- `<Card>`: Le conteneur principal.
  - `isPressable` (boolean, défaut: `true`): Si la carte doit réagir au clic.
  - `onPress` (function): Callback pour l'événement de clic.
  - ...autres props de `usePress`.
- `<CardHeader>`: Conteneur pour l'en-tête de la carte.
- `<CardTitle>`: Titre de la carte, à placer dans `CardHeader`.
- `<CardDescription>`: Description ou sous-titre, à placer dans `CardHeader`.
- `<CardBody>`: Contenu principal de la carte.
- `<CardFooter>`: Conteneur pour le pied de page de la carte.

**Exemple d'utilisation**

```jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  Button,
} from "fluid-glass-ui";

const MyCard = () => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Titre de la carte</CardTitle>
      <CardDescription>Ceci est une description pour la carte.</CardDescription>
    </CardHeader>
    <CardBody>
      <p>
        Contenu principal de la carte. Peut contenir n'importe quel élément
        React.
      </p>
    </CardBody>
    <CardFooter>
      <Button variant="primary">Action</Button>
    </CardFooter>
  </Card>
);
```

### Checkbox

Le composant `Checkbox` permet aux utilisateurs de sélectionner une ou plusieurs options dans une liste.

**Props**

| Prop       | Type       | Défaut     | Description                                                   |
| :--------- | :--------- | :--------- | :------------------------------------------------------------ |
| `label`    | `string`   | `null`     | Le libellé à afficher à côté de la case à cocher.             |
| `checked`  | `boolean`  | **Requis** | L'état actuel de la case (cochée ou non).                     |
| `onChange` | `function` | **Requis** | Fonction de rappel exécutée lorsque l'état de la case change. |

**Exemple d'utilisation**

```jsx
import Checkbox from "fluid-glass-ui";
import { useState } from "react";

const TermsAgreement = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Checkbox
      label="J'accepte les termes et conditions"
      checked={agreed}
      onChange={() => setAgreed(!agreed)}
    />
  );
};
```

### Chip

Le composant `Chip` est utilisé pour afficher de petites informations de manière compacte, souvent utilisé pour des tags ou des filtres.

**Props**

| Prop       | Type       | Défaut     | Description                                                                    |
| :--------- | :--------- | :--------- | :----------------------------------------------------------------------------- |
| `label`    | `string`   | **Requis** | Le texte à afficher dans le chip.                                              |
| `onRemove` | `function` | `null`     | Si fourni, affiche une icône de suppression et exécute cette fonction au clic. |

**Exemple d'utilisation**

```jsx
import Chip from "fluid-glass-ui";

const Tag = () => (
  <Chip label="React" onRemove={() => console.log("Remove chip")} />
);
```

### Collapsible

Le composant `Collapsible` est un conteneur qui peut être développé ou réduit pour afficher ou masquer son contenu.

**Props**

| Prop          | Type        | Défaut     | Description                                                             |
| :------------ | :---------- | :--------- | :---------------------------------------------------------------------- |
| `triggerText` | `string`    | **Requis** | Le texte à afficher sur le déclencheur qui contrôle l'état d'ouverture. |
| `children`    | `ReactNode` | `null`     | Le contenu à afficher à l'intérieur de la section déroulante.           |

**Exemple d'utilisation**

```jsx
import Collapsible from "fluid-glass-ui";

const DetailsSection = () => (
  <Collapsible triggerText="Afficher les détails">
    <p>
      Voici des informations supplémentaires qui étaient initialement masquées.
    </p>
  </Collapsible>
);
```

### CollapsibleSidebar

Le composant `CollapsibleSidebar` fournit une mise en page avec une barre latérale rétractable, couramment utilisée pour la navigation principale dans les applications.

**Props**

| Prop         | Type        | Défaut     | Description                                                                                                                            |
| :----------- | :---------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `navContent` | `function`  | **Requis** | Une fonction qui renvoie le contenu de la navigation. Elle reçoit l'état `isCollapsed` (boolean) en argument pour ajuster l'affichage. |
| `children`   | `ReactNode` | **Requis** | Le contenu principal de la page à afficher à côté de la barre latérale.                                                                |

**Exemple d'utilisation**

```jsx
import CollapsibleSidebar from "fluid-glass-ui";
import SidebarNavigation from "fluid-glass-ui"; // Exemple de contenu de navigation

const AppLayout = ({ children }) => (
  <CollapsibleSidebar
    navContent={(isCollapsed) => (
      <SidebarNavigation isCollapsed={isCollapsed} />
    )}
  >
    {children}
  </CollapsibleSidebar>
);
```

### ViewModeSwitch

Le composant `ViewModeSwitch` permet aux utilisateurs de basculer entre différentes vues, comme une grille ou une liste.

**Props**

| Prop      | Type       | Défaut     | Description                                      |
| :-------- | :--------- | :--------- | :----------------------------------------------- |
| `view`    | `string`   | **Requis** | La vue actuellement active ('grid' ou 'list').   |
| `setView` | `function` | **Requis** | La fonction pour mettre à jour l'état de la vue. |

**Exemple d'utilisation**

```jsx
import ViewModeSwitch from "fluid-glass-ui";
import { useState } from "react";

const ProductList = () => {
  const [view, setView] = useState("grid");

  return (
    <div>
      <ViewModeSwitch view={view} setView={setView} />
      {/* Le contenu change en fonction de la vue */}
    </div>
  );
};
```

### Toast

Le système de `Toast` est utilisé pour afficher des notifications éphémères qui apparaissent dans un coin de l'écran pour informer les utilisateurs d'un événement. Il s'inspire de React-Toastify et offre de nombreuses fonctionnalités avancées.

#### ToastProvider

Pour utiliser les toasts dans votre application, vous devez d'abord envelopper votre application avec le `ToastProvider` :

```jsx
import { ToastProvider } from "fluid-glass-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
```

#### Hook useToast

Le hook `useToast` vous permet d'afficher des toasts depuis n'importe quel composant :

```jsx
import { useToast } from "fluid-glass-ui";

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    toast.success("Opération réussie !");
  };

  return <button onClick={handleClick}>Afficher un toast</button>;
}
```

#### Méthodes disponibles

- `toast.info(message, options)`
- `toast.success(message, options)`
- `toast.warning(message, options)`
- `toast.error(message, options)`
- `toast.loading(message, options)`
- `toast.promise(promise, { pending, success, error })`
- `toast.removeToast(id)`
- `toast.dismissAll()`

#### Options

| Option      | Type                                                        | Défaut           | Description                                                                                               |
| :---------- | :---------------------------------------------------------- | :--------------- | :-------------------------------------------------------------------------------------------------------- |
| `type`      | `string` ('info', 'success', 'warning', 'error', 'loading') | `'info'`         | Le style visuel du toast                                                                                  |
| `message`   | `string`                                                    | **Requis**       | Le message à afficher dans le toast                                                                       |
| `position`  | `string`                                                    | `'bottom-right'` | Position du toast ('top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center') |
| `autoClose` | `number` ou `false`                                         | `5000`           | Délai en ms avant fermeture automatique, `false` pour désactiver                                          |
| `onOpen`    | `function`                                                  | `undefined`      | Fonction appelée lorsque le toast s'affiche                                                               |
| `onClose`   | `function`                                                  | `undefined`      | Fonction appelée lorsque le toast se ferme                                                                |

#### Composant Toast individuel

Vous pouvez également utiliser le composant `Toast` directement, mais il est recommandé d'utiliser le hook `useToast` pour une meilleure gestion des notifications.

```jsx
import { Toast } from "fluid-glass-ui";
import { useState } from "react";

const App = () => {
  const [showToast, setShowToast] = useState(true);

  return (
    <div>
      {showToast && (
        <Toast
          type="success"
          message="L'opération a été réalisée avec succès !"
          position="top-right"
          autoClose={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
```

#### Gestion des promesses

La méthode `toast.promise` permet d'afficher un toast de chargement pendant l'exécution d'une promesse, puis un toast de succès ou d'erreur selon le résultat :

```jsx
import { useToast } from "fluid-glass-ui";

function MyComponent() {
  const toast = useToast();

  const handleSubmit = async () => {
    await toast.promise(fetch("/api/data"), {
      pending: "Chargement des données...",
      success: "Données chargées avec succès !",
      error: "Erreur lors du chargement des données",
    });
  };

  return <button onClick={handleSubmit}>Charger les données</button>;
}
```

#### Toast de chargement

Vous pouvez afficher un toast de chargement et le mettre à jour manuellement :

```jsx
import { useToast } from "fluid-glass-ui";

function MyComponent() {
  const toast = useToast();

  const handleProcess = async () => {
    const toastId = toast.loading("Traitement en cours...");

    try {
      await processData();
      toast.updateToast(toastId, {
        type: "success",
        message: "Traitement terminé avec succès !",
        autoClose: 3000,
      });
    } catch (error) {
      toast.updateToast(toastId, {
        type: "error",
        message: "Erreur lors du traitement",
        autoClose: 3000,
      });
    }
  };

  return <button onClick={handleProcess}>Lancer le traitement</button>;
}
```

### Toggle

Le composant `Toggle` est un interrupteur qui permet aux utilisateurs d'activer ou de désactiver une option.

**Props**

| Prop       | Type       | Défaut     | Description                                                          |
| :--------- | :--------- | :--------- | :------------------------------------------------------------------- |
| `label`    | `string`   | `null`     | Le libellé à afficher à côté de l'interrupteur.                      |
| `checked`  | `boolean`  | **Requis** | L'état actuel de l'interrupteur (activé ou désactivé).               |
| `onChange` | `function` | **Requis** | Fonction de rappel exécutée lorsque l'état de l'interrupteur change. |

**Exemple d'utilisation**

```jsx
import Toggle from "fluid-glass-ui";
import { useState } from "react";

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Toggle
      label="Activer les notifications par e-mail"
      checked={isEnabled}
      onChange={() => setIsEnabled(!isEnabled)}
    />
  );
};
```

### Stack

Le composant `Stack` est un conteneur flexible qui permet d'empiler des éléments enfants horizontalement ou verticalement avec un espacement défini.

**Props**

| Prop        | Type                                | Défaut       | Description                                                                   |
| :---------- | :---------------------------------- | :----------- | :---------------------------------------------------------------------------- |
| `direction` | `string` ('vertical', 'horizontal') | `'vertical'` | La direction de l'empilement.                                                 |
| `spacing`   | `number`                            | `4`          | L'espacement entre les éléments (correspond aux classes `gap-*` de Tailwind). |
| `as`        | `ElementType`                       | `'div'`      | L'élément HTML à utiliser comme conteneur.                                    |
| `className` | `string`                            | `''`         | Classes CSS supplémentaires pour personnaliser le style.                      |
| `children`  | `ReactNode`                         | **Requis**   | Les éléments enfants à empiler.                                               |

**Exemple d'utilisation**

```jsx
import { Stack, Button } from "fluid-glass-ui";

function ButtonGroup() {
  return (
    <Stack direction="horizontal" spacing={2}>
      <Button>Annuler</Button>
      <Button variant="primary">Confirmer</Button>
      <Button variant="outline">Plus d'options</Button>
    </Stack>
  );
}
```

### Timeline

Le composant `Timeline` est utilisé pour afficher une liste d'événements ou d'activités par ordre chronologique. Il stylise chaque élément en fonction de son type, en lui attribuant une icône et une couleur spécifiques.

**Props**

| Prop    | Type    | Défaut     | Description                                                                    |
| :------ | :------ | :--------- | :----------------------------------------------------------------------------- |
| `items` | `array` | **Requis** | Un tableau d'objets, où chaque objet représente un événement dans la timeline. |

**Structure d'un objet `item`**

| Clé     | Type     | Description                                                                                                  |
| :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| `id`    | `string` | Un identifiant unique pour l'élément (utilisé pour la `key` React).                                          |
| `type`  | `string` | Le type d'événement. Détermine l'icône et la couleur. Options : `'user'`, `'order'`, `'update'`, `'delete'`. |
| `title` | `string` | Le titre ou la description principale de l'événement.                                                        |
| `user`  | `string` | Le nom de l'utilisateur qui a déclenché l'événement.                                                         |
| `time`  | `string` | Une chaîne de caractères décrivant le temps écoulé depuis l'événement (ex: `'5 minutes'`).                   |

**Exemple d'utilisation**

```jsx
import { Timeline } from "fluid-glass-ui";

const events = [
  {
    id: "1",
    type: "user",
    title: "Nouvel utilisateur enregistré",
    user: "Alice",
    time: "2 minutes",
  },
  {
    id: "2",
    type: "order",
    title: "Commande #12345 passée",
    user: "Bob",
    time: "15 minutes",
  },
  {
    id: "3",
    type: "update",
    title: "Profil mis à jour",
    user: "Alice",
    time: "1 heure",
  },
  {
    id: "4",
    type: "delete",
    title: "Article #567 supprimé",
    user: "Admin",
    time: "2 jours",
  },
];

function ActivityFeed() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Activité Récente</h2>
      <Timeline items={events} />
    </div>
  );
}
```

### Textarea

Le composant `Textarea` est un champ de saisie de texte sur plusieurs lignes, idéal pour les commentaires, les descriptions ou les messages.

**Props**

| Prop          | Type       | Défaut     | Description                                                               |
| :------------ | :--------- | :--------- | :------------------------------------------------------------------------ |
| `label`       | `string`   | `null`     | Le libellé à afficher au-dessus de la zone de texte.                      |
| `name`        | `string`   | `null`     | Le nom de l'input, utilisé pour l'attribut `id` et `name`.                |
| `value`       | `string`   | **Requis** | La valeur actuelle de la zone de texte.                                   |
| `onChange`    | `function` | **Requis** | Fonction de rappel exécutée lorsque la valeur change.                     |
| `placeholder` | `string`   | `null`     | Le texte indicatif affiché lorsque la zone de texte est vide.             |
| `maxLength`   | `number`   | `null`     | Le nombre maximum de caractères autorisés. Affiche un compteur si défini. |

**Exemple d'utilisation**

```jsx
import Textarea from "fluid-glass-ui";
import { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  return (
    <Textarea
      label="Vos commentaires"
      name="feedback"
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      placeholder="Laissez-nous savoir ce que vous pensez..."
      maxLength={500}
    />
  );
};
```

### Tabs

Le composant `Tabs` permet d'organiser le contenu en plusieurs sections qui peuvent être affichées une à la fois.

**Props**

| Prop   | Type    | Défaut     | Description                                                                           |
| :----- | :------ | :--------- | :------------------------------------------------------------------------------------ |
| `tabs` | `array` | **Requis** | Un tableau d'objets, où chaque objet représente un onglet (`id`, `label`, `content`). |

**Structure de l'objet `tab`**

```js
const tab = {
  id: "profile", // Identifiant unique de l'onglet
  label: "Profil", // Texte affiché sur l'onglet
  content: <div>Contenu de l'onglet Profil</div>, // Contenu React à afficher
};
```

**Exemple d'utilisation**

```jsx
import Tabs from "fluid-glass-ui";

const UserSettings = () => {
  const userTabs = [
    {
      id: "account",
      label: "Compte",
      content: <div>Paramètres du compte</div>,
    },
    {
      id: "notifications",
      label: "Notifications",
      content: <div>Paramètres des notifications</div>,
    },
    {
      id: "security",
      label: "Sécurité",
      content: <div>Paramètres de sécurité</div>,
    },
  ];

  return <Tabs tabs={userTabs} />;
};
```

### Stepper

Le composant `Stepper` guide les utilisateurs à travers les étapes d'un processus, comme un formulaire en plusieurs parties ou un assistant de configuration.

**Props**

| Prop          | Type     | Défaut     | Description                                                                               |
| :------------ | :------- | :--------- | :---------------------------------------------------------------------------------------- |
| `steps`       | `array`  | **Requis** | Un tableau d'objets, où chaque objet représente une étape (`id`, `title`, `description`). |
| `currentStep` | `number` | **Requis** | L'ID de l'étape actuellement active.                                                      |

**Structure de l'objet `step`**

```js
const step = {
  id: 1, // Numéro unique de l'étape
  title: "Titre de l'étape",
  description: "Courte description de l'étape",
};
```

**Exemple d'utilisation**

```jsx
import Stepper from "fluid-glass-ui";
import { useState } from "react";

const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = [
    { id: 1, title: "Panier", description: "Vérifiez vos articles" },
    { id: 2, title: "Livraison", description: "Adresse et mode" },
    { id: 3, title: "Paiement", description: "Finalisez la commande" },
  ];

  return <Stepper steps={steps} currentStep={currentStep} />;
};
```

### StatCard

Le composant `StatCard` est utilisé pour afficher une statistique clé, comme une métrique de tableau de bord, avec une indication de tendance.

**Props**

| Prop     | Type                      | Défaut     | Description                                                       |
| :------- | :------------------------ | :--------- | :---------------------------------------------------------------- |
| `title`  | `string`                  | **Requis** | Le titre de la statistique.                                       |
| `value`  | `string` ou `number`      | **Requis** | La valeur principale de la statistique.                           |
| `change` | `string`                  | **Requis** | La description de la variation (ex: "+5.2%").                     |
| `trend`  | `string` ('up' ou 'down') | **Requis** | La direction de la tendance, qui détermine l'icône et la couleur. |

**Exemple d'utilisation**

```jsx
import StatCard from "fluid-glass-ui";

const RevenueCard = () => (
  <StatCard
    title="Revenu Mensuel"
    value="12,500 €"
    change="+1,200 €"
    trend="up"
  />
);
```

### Spinner

Le composant `Spinner` est utilisé pour indiquer un état de chargement, informant l'utilisateur qu'un processus est en cours.

**Props**

| Prop   | Type                               | Défaut   | Description                      |
| :----- | :--------------------------------- | :------- | :------------------------------- |
| `type` | `string` ('spin', 'dots', 'pulse') | `'spin'` | Le style d'animation du spinner. |
| `size` | `string` ('sm', 'md', 'lg')        | `'md'`   | La taille du spinner.            |

**Exemple d'utilisation**

```jsx
import Spinner from "fluid-glass";

const LoadingIndicator = () => (
  <div className="flex items-center gap-4">
    <Spinner type="spin" size="sm" />
    <Spinner type="dots" size="md" />
    <Spinner type="pulse" size="lg" />
  </div>
);
```

### Snackbar

Le composant `Snackbar` est utilisé pour afficher des messages brefs et non intrusifs sur les actions de l'application.

**Props**

| Prop        | Type       | Défaut     | Description                                                                         |
| :---------- | :--------- | :--------- | :---------------------------------------------------------------------------------- |
| `message`   | `string`   | **Requis** | Le message à afficher dans le snackbar.                                             |
| `time`      | `string`   | `null`     | Une chaîne de caractères indiquant quand le message a été envoyé (ex: "2 minutes"). |
| `onDismiss` | `function` | **Requis** | Fonction de rappel pour fermer le snackbar.                                         |

**Exemple d'utilisation**

```jsx
import Snackbar from "fluid-glass-ui";

const ActionFeedback = () => (
  <Snackbar
    message="Votre profil a été mis à jour."
    time="maintenant"
    onDismiss={() => console.log("Snackbar dismissed")}
  />
);
```

### Skeleton

Le composant `Skeleton` est un primitif de bas niveau qui affiche une forme de chargement animée. Il est conçu pour être composé afin de créer des squelettes de chargement complexes qui imitent la structure de votre interface utilisateur.

**Props**

| Prop        | Type     | Défaut | Description                                                                |
| :---------- | :------- | :----- | :------------------------------------------------------------------------- |
| `className` | `string` | `''`   | Des classes CSS pour définir la forme, la taille et le style du squelette. |

**Exemple d'utilisation**

Voici comment vous pouvez composer des `Skeleton` pour créer un espace réservé pour une carte de profil utilisateur.

```jsx
import { Skeleton } from "fluid-glass-ui";

function ProfileCardSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
```

### SidebarMenuItem

Le composant `SidebarMenuItem` est un élément de menu interactif pour les barres de navigation latérales, prenant en charge les sous-menus déroulants.

**Props**

| Prop             | Type       | Défaut     | Description                                                                                                       |
| :--------------- | :--------- | :--------- | :---------------------------------------------------------------------------------------------------------------- |
| `item`           | `object`   | **Requis** | Un objet représentant l'élément de menu. Doit contenir `id`, `label`, `icon`, et un tableau optionnel `children`. |
| `isActive`       | `boolean`  | **Requis** | Indique si l'élément de menu est actuellement actif.                                                              |
| `onClick`        | `function` | **Requis** | Fonction de rappel exécutée avec l'ID de l'élément lorsque celui-ci est cliqué.                                   |
| `onSubItemClick` | `function` | **Requis** | Fonction de rappel exécutée avec l'ID du sous-élément lorsqu'un enfant est cliqué.                                |

**Structure de l'objet `item`**

```js
const menuItem = {
  id: "dashboard",
  label: "Tableau de bord",
  icon: Home, // Composant icône de lucide-react
  children: [
    { id: "analytics", label: "Analytique" },
    { id: "reports", label: "Rapports" },
  ],
};
```

**Exemple d'utilisation**

```jsx
import SidebarMenuItem from "fluid-glass-ui";
import { useState } from "react";
import { Settings } from "lucide-react";
import { SidebarMenuItem } from "fluid-glass-ui";

const SettingsMenu = () => {
  const [activeItem, setActiveItem] = useState("");
  const settingsItem = {
    id: "settings",
    label: "Paramètres",
    icon: Settings,
    children: [
      { id: "profile", label: "Profil" },
      { id: "billing", label: "Facturation" },
    ],
  };

  return (
    <SidebarMenuItem
      item={settingsItem}
      isActive={activeItem.startsWith("settings")}
      onClick={(id) => setActiveItem(id)}
      onSubItemClick={(id) => setActiveItem(`settings-${id}`)}
    />
  );
};
```

### SectionBox

Le composant `SectionBox` est un conteneur stylisé utilisé pour regrouper du contenu dans des sections visuellement distinctes.

**Props**

| Prop        | Type                                            | Défaut      | Description                                              |
| :---------- | :---------------------------------------------- | :---------- | :------------------------------------------------------- |
| `title`     | `string`                                        | `null`      | Le titre de la section, affiché en haut de la boîte.     |
| `variant`   | `string` ('default', 'highlighted', 'gradient') | `'default'` | Le style visuel de la boîte de section.                  |
| `children`  | `ReactNode`                                     | `null`      | Le contenu à afficher à l'intérieur de la boîte.         |
| `className` | `string`                                        | `''`        | Classes CSS supplémentaires pour personnaliser le style. |

**Exemple d'utilisation**

```jsx
import SectionBox from "fluid-glass-ui";

const UserProfile = () => (
  <SectionBox title="Informations Personnelles" variant="highlighted">
    Contenu de la section ici...
  </SectionBox>
);
```

### RadioGroup

Le composant `RadioGroup` permet aux utilisateurs de sélectionner une seule option parmi un ensemble de choix.

**Props**

| Prop            | Type       | Défaut     | Description                                                                                    |
| :-------------- | :--------- | :--------- | :--------------------------------------------------------------------------------------------- |
| `options`       | `array`    | **Requis** | Un tableau d'objets, où chaque objet doit avoir les clés `label` (string) et `value` (string). |
| `name`          | `string`   | **Requis** | Le nom du groupe de boutons radio, partagé par tous les inputs.                                |
| `selectedValue` | `string`   | **Requis** | La valeur de l'option actuellement sélectionnée.                                               |
| `onChange`      | `function` | **Requis** | Fonction de rappel exécutée avec la nouvelle valeur lorsque la sélection change.               |

**Exemple d'utilisation**

```jsx
import RadioGroup from "fluid-glass-ui";
import { useState } from "react";

const UserTypeSelector = () => {
  const [userType, setUserType] = useState("personal");
  const options = [
    { label: "Personnel", value: "personal" },
    { label: "Professionnel", value: "professional" },
  ];

  return (
    <RadioGroup
      options={options}
      name="userType"
      selectedValue={userType}
      onChange={setUserType}
    />
  );
};
```

### ProgressBar

Le composant `ProgressBar` est utilisé pour visualiser la progression d'une tâche ou d'un processus.

**Props**

| Prop             | Type      | Défaut     | Description                                                 |
| :--------------- | :-------- | :--------- | :---------------------------------------------------------- |
| `value`          | `number`  | **Requis** | La valeur de progression actuelle (de 0 à 100).             |
| `label`          | `string`  | `null`     | Un libellé à afficher au-dessus de la barre de progression. |
| `showPercentage` | `boolean` | `true`     | S'il faut afficher le pourcentage à côté du libellé.        |

**Exemple d'utilisation**

```jsx
import ProgressBar from "fluid-glass-ui";

const UploadProgress = () => (
  <ProgressBar
    value={75}
    label="Téléversement du fichier"
    showPercentage={true}
  />
);
```

### Pagination

Le composant `Pagination` fournit une interface utilisateur pour naviguer entre plusieurs pages de contenu, comme des listes ou des tableaux.

**Props**

| Prop             | Type       | Défaut     | Description                                                                                      |
| :--------------- | :--------- | :--------- | :----------------------------------------------------------------------------------------------- |
| `currentPage`    | `number`   | **Requis** | Le numéro de la page actuellement affichée.                                                      |
| `totalPages`     | `number`   | **Requis** | Le nombre total de pages disponibles.                                                            |
| `onPageChange`   | `function` | **Requis** | Fonction de rappel exécutée avec le nouveau numéro de page lorsque l'utilisateur change de page. |
| `totalResults`   | `number`   | **Requis** | Le nombre total de résultats à paginer.                                                          |
| `resultsPerPage` | `number`   | `10`       | Le nombre de résultats affichés par page.                                                        |

**Exemple d'utilisation**

```jsx
import Pagination from "fluid-glass-ui";
import { useState } from "react";

const PaginatedList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 100;
  const itemsPerPage = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(totalItems / itemsPerPage)}
      onPageChange={(page) => setCurrentPage(page)}
      totalResults={totalItems}
      resultsPerPage={itemsPerPage}
    />
  );
};
```

### Toast

Le composant `Toast` est similaire à une notification, mais il apparaît comme une superposition temporaire pour informer les utilisateurs d'une action ou d'un événement, sans interrompre leur flux de travail.

**Props**

| Prop      | Type                                             | Défaut     | Description                                            |
| :-------- | :----------------------------------------------- | :--------- | :----------------------------------------------------- |
| `type`    | `string` ('info', 'success', 'warning', 'error') | `'info'`   | Le type de toast, qui détermine l'icône et la couleur. |
| `message` | `string`                                         | **Requis** | Le message principal à afficher dans le toast.         |
| `onClose` | `function`                                       | **Requis** | Fonction de rappel pour fermer le toast.               |

**Exemple d'utilisation**

```jsx
import Toast from "fluid-glass-ui";
import Button from "fluid-glass-ui";
import { useState } from "react";

const ToastExample = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Masquer automatiquement après 3s
  };

  return (
    <>
      <Button onClick={handleShowToast}>Afficher le Toast</Button>
      {showToast && (
        <Toast
          type="success"
          message="L'élément a été sauvegardé avec succès."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};
```

### Notification

Le composant `Notification` est utilisé pour afficher des messages d'information contextuels et non intrusifs.

**Props**

| Prop        | Type                                             | Défaut     | Description                                                   |
| :---------- | :----------------------------------------------- | :--------- | :------------------------------------------------------------ |
| `type`      | `string` ('info', 'success', 'warning', 'error') | `'info'`   | Le type de notification, qui détermine l'icône et la couleur. |
| `message`   | `string`                                         | **Requis** | Le message principal à afficher dans la notification.         |
| `timestamp` | `string` ou `Date`                               | `null`     | L'heure à laquelle la notification a été générée.             |
| `onClose`   | `function`                                       | **Requis** | Fonction de rappel pour fermer la notification.               |

**Exemple d'utilisation**

```jsx
import Notification from "fluid-glass-ui";

const NewMessageNotification = () => (
  <Notification
    type="info"
    message="Vous avez un nouveau message de Jane Doe."
    timestamp={new Date()}
    onClose={() => console.log("Notification dismissed")}
  />
);
```

### Modal

Le composant `Modal` affiche un contenu dans une fenêtre superposée à la page, idéal pour les formulaires, les confirmations ou les informations détaillées. L'overlay s'adapte automatiquement au thème sombre/clair grâce aux variables CSS.

#### API Simple (Modal de base)

**Props**

| Prop       | Type        | Défaut     | Description                                                                                                           |
| :--------- | :---------- | :--------- | :-------------------------------------------------------------------------------------------------------------------- |
| `isOpen`   | `boolean`   | **Requis** | Contrôle la visibilité de la modale.                                                                                  |
| `onClose`  | `function`  | **Requis** | Fonction de rappel exécutée lorsque la modale doit être fermée (clic sur l'icône de fermeture ou sur l'arrière-plan). |
| `title`    | `string`    | **Requis** | Le titre affiché en haut de la modale.                                                                                |
| `children` | `ReactNode` | `null`     | Le contenu à afficher à l'intérieur de la modale.                                                                     |
| `size`     | `string`    | `'md'`     | Taille de la modale : `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`.                                                        |

**Exemple d'utilisation simple**

```jsx
import { Modal, Button } from "fluid-glass-ui";
import { useState } from "react";

const SimpleModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Ouvrir la modale</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Titre de la Modale"
        size="lg"
      >
        <p>
          Ceci est le contenu de la modale. Vous pouvez y mettre ce que vous
          voulez.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>
            Confirmer
          </Button>
        </div>
      </Modal>
    </>
  );
};
```

#### API Modulaire (Sous-composants)

Pour plus de flexibilité, vous pouvez utiliser les sous-composants `ModalHeader`, `ModalBody`, et `ModalFooter` :

##### ModalHeader

**Props**

| Prop              | Type        | Défaut     | Description                                                        |
| :---------------- | :---------- | :--------- | :----------------------------------------------------------------- |
| `title`           | `string`    | `null`     | Le titre à afficher dans l'en-tête.                                |
| `onClose`         | `function`  | `null`     | Fonction de fermeture (affiche le bouton X si fournie).            |
| `showCloseButton` | `boolean`   | `true`     | Affiche ou masque le bouton de fermeture.                          |
| `children`        | `ReactNode` | `null`     | Contenu personnalisé supplémentaire dans l'en-tête.                |
| `variant`         | `string`    | `'default'`| Variante de style : `'default'`, `'compact'`, `'spacious'`.        |
| `className`       | `string`    | `''`       | Classes CSS supplémentaires.                                       |

##### ModalBody

**Props**

| Prop         | Type        | Défaut     | Description                                                        |
| :----------- | :---------- | :--------- | :----------------------------------------------------------------- |
| `children`   | `ReactNode` | `null`     | Le contenu principal de la modale.                                 |
| `scrollable` | `boolean`   | `true`     | Active le défilement automatique si le contenu dépasse la hauteur. |
| `variant`    | `string`    | `'default'`| Variante de style : `'default'`, `'compact'`, `'spacious'`.        |
| `className`  | `string`    | `''`       | Classes CSS supplémentaires.                                       |

##### ModalFooter

**Props**

| Prop        | Type        | Défaut     | Description                                                        |
| :---------- | :---------- | :--------- | :----------------------------------------------------------------- |
| `children`  | `ReactNode` | `null`     | Les boutons ou actions à afficher dans le pied de page.           |
| `variant`   | `string`    | `'default'`| Variante de style : `'default'`, `'compact'`, `'spacious'`.        |
| `className` | `string`    | `''`       | Classes CSS supplémentaires.                                       |

**Exemple d'utilisation modulaire**

```jsx
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button, 
  Input 
} from "fluid-glass-ui";
import { useState } from "react";

const ModularModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Ouvrir le formulaire</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="md"
      >
        <ModalHeader 
          title="Informations utilisateur"
          onClose={() => setIsModalOpen(false)}
        />
        
        <ModalBody>
          <div className="space-y-4">
            <Input
              label="Nom complet"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Entrez votre nom"
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Entrez votre email"
            />
          </div>
        </ModalBody>
        
        <ModalFooter>
          <Button 
            variant="outline" 
            onClick={() => setIsModalOpen(false)}
          >
            Annuler
          </Button>
          <Button onClick={handleSubmit}>
            Enregistrer
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
```

**Variantes de style disponibles**

Tous les sous-composants supportent 3 variantes :

- **`default`** : Espacement standard (recommandé)
- **`compact`** : Espacement réduit pour les modales simples
- **`spacious`** : Espacement généreux pour les formulaires complexes

```jsx
<ModalHeader variant="compact" title="Titre compact" />
<ModalBody variant="spacious">{/* Contenu avec plus d'espace */}</ModalBody>
<ModalFooter variant="default">{/* Actions standard */}</ModalFooter>
```

### Link

Le composant `Link` est une surcouche du composant `next/link` pour la navigation interne, stylisé pour correspondre au design système.

**Props**

| Prop        | Type                                                | Défaut       | Description                                                          |
| :---------- | :-------------------------------------------------- | :----------- | :------------------------------------------------------------------- |
| `href`      | `string`                                            | **Requis**   | Le chemin de destination du lien.                                    |
| `variant`   | `string` ('standard', 'discreet', 'danger', 'icon') | `'standard'` | Le style visuel du lien.                                             |
| `icon`      | `ReactNode`                                         | `null`       | Une icône à afficher (particulièrement utile avec `variant='icon'`). |
| `children`  | `ReactNode`                                         | `null`       | Le contenu textuel du lien.                                          |
| `className` | `string`                                            | `''`         | Classes CSS supplémentaires pour personnaliser le style.             |

**Exemple d'utilisation**

```jsx
import Link from "fluid-glass-ui";
import { Home } from "lucide-react";

const Navigation = () => (
  <nav>
    <Link href="/" variant="icon" icon={Home}>
      Accueil
    </Link>
    <Link href="/about" variant="discreet">
      À propos
    </Link>
  </nav>
);
```

### Alert

Le composant `Alert` est utilisé pour afficher des messages importants ou des notifications aux utilisateurs.

**Props**

| Prop       | Type                                              | Défaut   | Description                                                                                              |
| :--------- | :------------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------- |
| `variant`  | `string` ('info', 'success', 'warning', 'danger') | `'info'` | Le style visuel de l'alerte.                                                                             |
| `title`    | `string`                                          | `''`     | Le titre de l'alerte.                                                                                    |
| `icon`     | `ReactNode`                                       | `null`   | Une icône personnalisée à afficher à gauche du titre.                                                    |
| `onClose`  | `function`                                        | `null`   | Une fonction de rappel à exécuter lorsque l'alerte est fermée. Affiche un bouton de fermeture si fourni. |
| `children` | `ReactNode`                                       | `null`   | Le contenu principal ou le corps de l'alerte.                                                            |

**Exemple d'utilisation**

```jsx
import Alert from "fluid-glass-ui";
import { CheckCircle } from "lucide-react";

const MyComponent = () => (
  <Alert
    variant="success"
    title="Opération réussie !"
    icon={<CheckCircle size={20} />}
    onClose={() => console.log("Alert closed")}
  >
    Votre formulaire a été soumis avec succès.
  </Alert>
);
```

### Avatar

Le composant `Avatar` est utilisé pour afficher une image de profil ou les initiales d'un utilisateur.

**Props**

| Prop        | Type                        | Défaut     | Description                                                       |
| :---------- | :-------------------------- | :--------- | :---------------------------------------------------------------- |
| `src`       | `string`                    | `''`       | L'URL de l'image à afficher.                                      |
| `alt`       | `string`                    | `'Avatar'` | Le texte alternatif pour l'image.                                 |
| `fallback`  | `string`                    | `''`       | Les initiales ou le texte à afficher si l'image ne se charge pas. |
| `size`      | `string` ('sm', 'md', 'lg') | `'md'`     | La taille de l'avatar.                                            |
| `className` | `string`                    | `''`       | Classes CSS supplémentaires pour personnaliser le style.          |

**Exemple d'utilisation**

```jsx
import Avatar from "fluid-glass-ui";

const UserProfile = () => (
  <Avatar
    src="/path/to/user-image.jpg"
    alt="Photo de profil de l'utilisateur"
    fallback="JD"
    size="lg"
  />
);
```

### Badge

Le composant `Badge` est utilisé pour afficher de courtes informations, comme des statuts ou des notifications.

**Props**

| Prop        | Type                                                 | Défaut      | Description                                              |
| :---------- | :--------------------------------------------------- | :---------- | :------------------------------------------------------- |
| `variant`   | `string` ('default', 'success', 'danger', 'warning') | `'default'` | Le style visuel du badge.                                |
| `className` | `string`                                             | `''`        | Classes CSS supplémentaires pour personnaliser le style. |
| `children`  | `ReactNode`                                          | `null`      | Le contenu à afficher à l'intérieur du badge.            |

**Exemple d'utilisation**

```jsx
import Badge from "fluid-glass-ui";

const UserStatus = ({ isActive }) => (
  <Badge variant={isActive ? "success" : "default"}>
    {isActive ? "Actif" : "Inactif"}
  </Badge>
);
```

### Button

Le composant `Button` est un bouton cliquable polyvalent avec plusieurs styles et options.

**Props**

| Prop        | Type                                                         | Défaut      | Description                                                                        |
| :---------- | :----------------------------------------------------------- | :---------- | :--------------------------------------------------------------------------------- |
| `variant`   | `string` ('default', 'primary', 'ghost', 'subtle', 'danger') | `'default'` | Le style visuel du bouton.                                                         |
| `size`      | `string` ('sm', 'md', 'lg')                                  | `'md'`      | La taille du bouton.                                                               |
| `startIcon` | `ReactNode`                                                  | `null`      | Une icône à afficher avant le texte du bouton.                                     |
| `endIcon`   | `ReactNode`                                                  | `null`      | Une icône à afficher après le texte du bouton.                                     |
| `className` | `string`                                                     | `''`        | Classes CSS supplémentaires pour personnaliser le style.                           |
| `children`  | `ReactNode`                                                  | `null`      | Le contenu textuel du bouton.                                                      |
| `...props`  | `object`                                                     | `{}`        | Toutes les autres props d'un élément `<button>` natif (ex: `onClick`, `disabled`). |

**Exemple d'utilisation**

```jsx
import Button from "fluid-glass-ui";
import { ArrowRight } from "lucide-react";

const SubmitButton = () => (
  <Button
    variant="primary"
    size="lg"
    onClick={() => alert("Button clicked!")}
    endIcon={<ArrowRight size={16} />}
  >
    Soumettre
  </Button>
);
```

### Checkbox

Le composant `Checkbox` est une case à cocher standard pour les formulaires.

**Props**

| Prop       | Type       | Défaut  | Description                                                                                    |
| :--------- | :--------- | :------ | :--------------------------------------------------------------------------------------------- |
| `label`    | `string`   | `''`    | Le texte à afficher à côté de la case à cocher.                                                |
| `checked`  | `boolean`  | `false` | L'état coché de la case.                                                                       |
| `onChange` | `function` | `null`  | Fonction de rappel exécutée lorsque l'état de la case change.                                  |
| `...props` | `object`   | `{}`    | Toutes les autres props d'un élément `<input type="checkbox">` natif (ex: `name`, `disabled`). |

**Exemple d'utilisation**

```jsx
import Checkbox from "fluid-glass-ui";
import { useState } from "react";

const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <Checkbox
      label="J'accepte les termes et conditions"
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
      name="terms"
    />
  );
};
```

### Chip

Le composant `Chip` est utilisé pour représenter des choix, des filtres ou des actions dans un format compact.

**Props**

| Prop       | Type       | Défaut  | Description                                              |
| :--------- | :--------- | :------ | :------------------------------------------------------- |
| `label`    | `string`   | `''`    | Le texte à afficher dans la puce.                        |
| `isActive` | `boolean`  | `false` | Si la puce est dans un état actif/sélectionné.           |
| `onClick`  | `function` | `null`  | Fonction de rappel exécutée lorsque la puce est cliquée. |
| `...props` | `object`   | `{}`    | Toutes les autres props d'un élément `<button>` natif.   |

**Exemple d'utilisation**

```jsx
import Chip from "fluid-glass-ui";

const FilterOptions = () => (
  <Chip
    label="React.js"
    isActive={true}
    onClick={() => alert("Filter by React.js")}
  />
);
```

### Input

Le composant `Input` est un champ de saisie de formulaire amélioré avec prise en charge des icônes et des états d'erreur. Les icônes s'adaptent automatiquement au thème sombre/clair grâce aux variables CSS.

**Props**

| Prop          | Type        | Défaut   | Description                                                                             |
| :------------ | :---------- | :------- | :-------------------------------------------------------------------------------------- |
| `type`        | `string`    | `'text'` | Le type de l'input (ex: 'text', 'email', 'password').                                   |
| `placeholder` | `string`    | `''`     | Le texte indicatif à afficher lorsque le champ est vide.                                |
| `startIcon`   | `ReactNode` | `null`   | Une icône à afficher au début du champ de saisie.                                       |
| `endIcon`     | `ReactNode` | `null`   | Une icône à afficher à la fin du champ de saisie.                                       |
| `error`       | `boolean`   | `false`  | Si le champ doit être stylisé comme étant en erreur.                                    |
| `helperText`  | `string`    | `''`     | Un texte d'aide ou un message d'erreur à afficher sous le champ.                        |
| `className`   | `string`    | `''`     | Classes CSS supplémentaires pour le conteneur principal.                                |
| `...props`    | `object`    | `{}`     | Toutes les autres props d'un élément `<input>` natif (ex: `value`, `onChange`, `name`). |

**Exemple d'utilisation**

```jsx
import Input from "fluid-glass-ui";
import { Mail, AlertCircle } from "lucide-react";

const EmailField = ({ email, setEmail, error }) => (
  <Input
    type="email"
    placeholder="Entrez votre email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    startIcon={<Mail size={16} />}
    error={!!error}
    helperText={error ? "Adresse email invalide" : ""}
  />
);
```

### IconButton

Le composant `IconButton` est un bouton qui ne contient qu'une icône, idéal pour les barres d'outils et les actions compactes.

**Props**

| Prop       | Type                           | Défaut      | Description                                                                          |
| :--------- | :----------------------------- | :---------- | :----------------------------------------------------------------------------------- |
| `icon`     | `ReactNode`                    | `null`      | L'icône à afficher à l'intérieur du bouton.                                          |
| `variant`  | `string` ('default', 'subtle') | `'default'` | Le style visuel du bouton.                                                           |
| `...props` | `object`                       | `{}`        | Toutes les autres props d'un élément `<button>` natif (ex: `onClick`, `aria-label`). |

**Exemple d'utilisation**

```jsx
import IconButton from "fluid-glass-ui";
import { Settings } from "lucide-react";

const SettingsButton = () => (
  <IconButton
    icon={<Settings size={20} />}
    aria-label="Paramètres"
    onClick={() => console.log("Open settings")}
  />
);
```

### SidebarNavigation

Le composant `SidebarNavigation` affiche un menu de navigation latéral complet et interactif. Il prend en charge plusieurs niveaux de profondeur dans la hiérarchie du menu, gère l'état d'expansion des éléments et la logique de navigation. Ce composant est hautement réutilisable et peut s'adapter à différentes structures de menu.

**Props**

| Prop          | Type       | Défaut  | Description                                                                                                                        |
| :------------ | :--------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `items`       | `Array`    | `[]`    | Tableau d'objets représentant les éléments du menu. Chaque élément peut avoir des enfants pour créer une hiérarchie multi-niveaux. |
| `isCollapsed` | `Boolean`  | `false` | Détermine si le menu est en mode réduit (icônes uniquement).                                                                       |
| `onNavigate`  | `Function` | -       | Fonction appelée lorsqu'un élément de menu est cliqué. Reçoit l'élément de menu complet comme argument.                            |
| `activePath`  | `Array`    | `[]`    | Tableau d'identifiants (resource ou id) des éléments actifs dans le chemin de navigation.                                          |
| `className`   | `String`   | `''`    | Classes CSS additionnelles à appliquer au composant.                                                                               |

**Exemple d'utilisation**

```jsx
import { SidebarNavigation } from "fluid-glass-ui";
import { Home, Users, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    resource: "dashboard",
    name: "Tableau de bord",
    icon: Home,
    href: "/dashboard",
  },
  {
    resource: "users",
    name: "Utilisateurs",
    icon: Users,
    children: [
      { resource: "users_list", name: "Liste", href: "/users" },
      { resource: "users_add", name: "Ajouter", href: "/users/add" },
    ],
  },
  {
    resource: "settings",
    name: "Paramètres",
    icon: Settings,
    children: [
      {
        resource: "settings_general",
        name: "Général",
        href: "/settings/general",
        children: [
          {
            resource: "settings_profile",
            name: "Profil",
            href: "/settings/general/profile",
          },
        ],
      },
      {
        resource: "settings_security",
        name: "Sécurité",
        href: "/settings/security",
      },
    ],
  },
];

const MyPageWithNav = () => {
  // Exemple avec Next.js
  const router = useRouter();
  const pathname = usePathname();

  // Déterminer les éléments actifs basés sur le chemin actuel
  const getActivePath = () => {
    const findActiveItems = (items, path = []) => {
      for (const item of items) {
        if (item.href && pathname.startsWith(item.href)) {
          return [...path, item.resource];
        }
        if (item.children) {
          const childPath = findActiveItems(item.children, [
            ...path,
            item.resource,
          ]);
          if (childPath.length) return childPath;
        }
      }
      return [];
    };

    return findActiveItems(navItems);
  };

  return (
    <div>
      <SidebarNavigation
        items={navItems}
        activePath={getActivePath()}
        onNavigate={(item) => {
          if (item.href) {
            router.push(item.href);
          }
        }}
      />
      <main>{/* Le contenu principal de votre page ici */}</main>
    </div>
  );
};
```

### Error404Page

Le composant `Error404Page` affiche une page d'erreur 404 standardisée et réutilisable.

**Props**

Ce composant ne prend aucune prop. Il est auto-contenu.

**Exemple d'utilisation**

```jsx
import { Error404Page } from "fluid-glass-ui";

const MyCustom404 = () => (
  <Error404Page
    title="Oops! Contenu introuvable"
    message="Il semble que cette ressource ait été déplacée ou n'existe plus."
    buttonText="Visiter la page d'accueil"
    buttonLink="/dashboard"
  />
);
```

### EmptyState

Le composant `EmptyState` est utilisé pour afficher un message lorsqu'il n'y a pas de contenu à montrer, comme une liste de recherche vide ou une boîte de réception sans messages. Il guide l'utilisateur sur les prochaines étapes possibles.

**Props**

| Prop      | Type        | Défaut     | Description                                                                                                            |
| :-------- | :---------- | :--------- | :--------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `icon`    | `ReactNode` | `FileText` | `element jsx`                                                                                                          | L'icône à afficher. Par défaut, utilise l'icône `FileText` de `lucide-react`. |
| `title`   | `string`    | **Requis** | Le titre principal du message (ex: "Aucun document trouvé").                                                           |
| `message` | `string`    | **Requis** | Une description plus détaillée (ex: "Essayez de chercher avec d'autres mots-clés.").                                   |
| `action`  | `object`    | `null`     | Un objet décrivant une action, avec les clés `label` (string), `onClick` (function), et `icon` (ReactNode, optionnel). |

**Exemple d'utilisation**

```jsx
import EmptyState from "fluid-glass-ui";
import { Plus } from "lucide-react";

const NoDocuments = () => (
  <EmptyState
    title="Aucun document créé"
    message="Commencez par créer votre premier document pour le voir apparaître ici."
    action={{
      label: "Créer un document",
      onClick: () => console.log("Action: Créer un document"),
      icon: <Plus size={16} />,
    }}
  />
);
```

### ExpandableTable

Le composant `ExpandableTable` affiche une liste d'éléments qui peuvent être étendus pour révéler des informations supplémentaires. Il est conçu pour être hautement réutilisable grâce à l'utilisation de `render props`.

**Props**

| Prop                    | Type       | Défaut     | Description                                                                            |
| :---------------------- | :--------- | :--------- | :------------------------------------------------------------------------------------- |
| `data`                  | `array`    | **Requis** | Un tableau d'objets. Chaque objet doit avoir une propriété `id` unique.                |
| `renderItem`            | `function` | **Requis** | Une fonction qui reçoit un `item` de `data` et retourne le JSX pour l'état non étendu. |
| `renderExpandedContent` | `function` | **Requis** | Une fonction qui reçoit un `item` de `data` et retourne le JSX pour le contenu étendu. |

**Exemple d'utilisation**

```jsx
import { ExpandableTable } from "fluid-glass-ui";
import { User, Mail, Shield, Calendar } from "lucide-react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean@example.com",
      role: "Admin",
      status: "Actif",
      joined: "2024-01-15",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      role: "User",
      status: "Inactif",
      joined: "2024-01-10",
    },
  ];

  return (
    <ExpandableTable
      data={users}
      renderItem={(user) => (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-base-content">{user.name}</h4>
              <p className="text-sm text-base-content/70">{user.email}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              user.status === "Actif"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {user.status}
          </span>
        </div>
      )}
      renderExpandedContent={(user) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-base-content/60" />
            <span>
              <strong>Rôle:</strong> {user.role}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-base-content/60" />
            <span>
              <strong>Inscrit le:</strong> {user.joined}
            </span>
          </div>
        </div>
      )}
    />
  );
};
```

### FileUploader

Le composant `FileUploader` permet de télécharger des fichiers et de les afficher dans une liste.

**Props**

| Prop        | Type     | Défaut      | Description                                                                                                                 |
| :---------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `multiple`  | `boolean` | `false`     | Permet de télécharger plusieurs fichiers.                                                                                   |
| `maxFiles`  | `number`  | `undefined` | Limite le nombre de fichiers à télécharger.                                                                                  |
| `maxSize`   | `number`  | `undefined` | Limite la taille des fichiers à télécharger (en octets).                                                                      |
| `accept`    | `string`  | `undefined` | Spécifie les types de fichiers acceptés (ex: "image/*,application/pdf").                                                    |
| `onUpload`  | `function` | `undefined` | Fonction appelée lors du téléchargement des fichiers.                                                                        |
| `onDelete`  | `function` | `undefined` | Fonction appelée lors de la suppression d'un fichier.                                                                        |
| `onError`   | `function` | `undefined` | Fonction appelée en cas d'erreur lors du téléchargement des fichiers.                                                        |
| `label`     | `string`   | `"Ajouter des fichiers"` | Texte affiché pour le bouton de téléchargement.                                                                               |
| `buttonProps` | `object` | `undefined` | Props supplémentaires pour le bouton de téléchargement.                                                                     |
| `fileProps` | `object` | `undefined` | Props supplémentaires pour les fichiers affichés.                                                                            |
| `className` | `string` | `undefined` | Classe CSS supplémentaire pour le composant.                                                                                 |

**Exemple d'utilisation**

```jsx
import { FileUploader } from "fluid-glass-ui";

const MyFileUploader = () => (
  <FileUploader
    multiple
    maxFiles={5}
    maxSize={1024 * 1024 * 5}
    accept="image/*,application/pdf"
    onUpload={(files) => console.log("Fichiers téléchargés:", files)}
    onDelete={(file) => console.log("Fichier supprimé:", file)}
    onError={(error) => console.error("Erreur lors du téléchargement:", error)}
    label="Ajouter des fichiers"
    buttonProps={{ variant: "outline" }}
    fileProps={{ className: "text-sm" }}
    className="space-y-4"
  />
);
```

### Flex

Le composant `Flex` est un conteneur puissant et réutilisable pour créer des mises en page basées sur Flexbox avec facilité. Il abstrait les classes utilitaires de Tailwind CSS en props simples et intuitives.

**Props**

| Prop        | Type     | Défaut      | Description                                                                                                                 |
| :---------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `as`        | `string` | `'div'`     | Le type d'élément HTML à rendre (ex: 'div', 'span', 'section').                                                             |
| `direction` | `string` | `'row'`     | La direction des enfants. Options: `'row'`, `'row-reverse'`, `'col'`, `'col-reverse'`.                                      |
| `justify`   | `string` | `'start'`   | L'alignement des enfants sur l'axe principal. Options: `'start'`, `'end'`, `'center'`, `'between'`, `'around'`, `'evenly'`. |
| `align`     | `string` | `'stretch'` | L'alignement des enfants sur l'axe transversal. Options: `'start'`, `'end'`, `'center'`, `'baseline'`, `'stretch'`.         |
| `wrap`      | `string` | `'nowrap'`  | Comment les enfants doivent s'enrouler. Options: `'wrap'`, `'wrap-reverse'`, `'nowrap'`.                                    |
| `gap`       | `number` | `undefined` | L'espacement entre les enfants, correspondant à l'échelle de `gap` de Tailwind (ex: `4` pour `gap-4`).                      |

**Exemple d'utilisation**

```jsx
// Cet exemple crée une mise en page simple avec deux colonnes.
// La première colonne (principale) occupe 8 colonnes de la grille.
// La seconde (barre latérale) en occupe 4.

const MyPageLayout = () => (
  <Flex direction="col" gap={4}>
    {/* Contenu principal */}
    <Flex justify="between" align="center">
      <h2>Titre Principal</h2>
      <p>Contenu de la section principale...</p>
    </Flex>

    {/* Barre latérale */}
    <Flex as="section" gap={2}>
      <button>Modifier le profil</button>
      <button>Changer le mot de passe</button>
    </Flex>
  </Flex>
);
```

## Container

Le composant `Container` est un conteneur qui s'adapte à la taille de l'écran et ajoute un effet de verre à l'intérieur.

**Props**

| Prop       | Type        | Défaut     | Description                                                      |
| :--------- | :---------- | :--------- | :--------------------------------------------------------------- |
| `size`     | `string`    | `'md'`     | La taille du conteneur. Options: `'sm'`, `'md'`, `'lg'`, `'xl'`. |
| `children` | `ReactNode` | **Requis** | Le contenu à afficher à l'intérieur du conteneur.                |

**Exemple d'utilisation**

```jsx
import Container from "fluid-glass-ui";

const MyPageLayout = () => (
  <Container size="lg">
    <h2>Titre Principal</h2>
    <p>Contenu de la section principale...</p>
  </Container>
);
```

### Table

Le composant `Table` est un conteneur puissant et flexible pour afficher des données sous forme de tableau. Il est conçu pour être entièrement composable, vous permettant de construire des tableaux simples ou complexes en combinant ses sous-composants.

**Sous-composants**

- `Table`: Le conteneur principal du tableau (`<table>`).
- `TableHeader`: L'en-tête du tableau (`<thead>`).
- `TableBody`: Le corps du tableau (`<tbody>`).
- `TableRow`: Une ligne du tableau (`<tr>`).
- `TableColumn`: Une cellule d'en-tête (`<th>`).
- `TableCell`: Une cellule de données (`<td>`).

**Props**

Chaque sous-composant accepte les props standards de React comme `children` et `className` pour la personnalisation.

**Exemple d'utilisation**

```jsx
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "fluid-glass-ui";

const MyTable = () => (
  <Table aria-label="Exemple de tableau simple">
    <TableHeader>
      <TableRow>
        <TableColumn>Nom</TableColumn>
        <TableColumn>Rôle</TableColumn>
        <TableColumn>Statut</TableColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Tony Reichert</TableCell>
        <TableCell>CEO</TableCell>
        <TableCell>Actif</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Zoey Lang</TableCell>
        <TableCell>Directrice Technique</TableCell>
        <TableCell>En pause</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane Fisher</TableCell>
        <TableCell>Développeuse Senior</TableCell>
        <TableCell>Actif</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
```

### DataCard

Le composant `DataCard` est un composant générique utilisé pour afficher des paires label/value dans un format structuré et stylisé. Idéal pour présenter des informations clés de manière claire et organisée.

**Props**

| Prop        | Type                      | Défaut     | Description                                                    |
| :---------- | :------------------------ | :--------- | :------------------------------------------------------------- |
| `label`     | `string`                  | **Requis** | Le label/titre à afficher à gauche.                           |
| `value`     | `string \| ReactNode`     | **Requis** | La valeur à afficher à droite (texte ou élément React).       |
| `icon`      | `ReactNode`               | `null`     | Icône optionnelle à afficher à côté du label.                 |
| `className` | `string`                  | `""`       | Classes CSS additionnelles pour personnaliser le style.       |

**Exemple d'utilisation**

```jsx
import { DataCard } from "fluid-glass-ui";
import { DollarSign, MapPin, Calendar } from "lucide-react";

const LotDetails = () => (
  <div className="space-y-3">
    <DataCard
      label="Prix initial"
      value="250 000 €"
      icon={<DollarSign size={16} />}
    />
    <DataCard
      label="Localisation"
      value="Secteur Nord"
      icon={<MapPin size={16} />}
    />
    <DataCard
      label="Date de création"
      value={<span className="text-green-600">15/01/2024</span>}
      icon={<Calendar size={16} />}
    />
  </div>
);
```

### Drawer

Le composant `Drawer` est un panneau qui glisse depuis le côté de l'écran, utilisé pour afficher du contenu contextuel ou des actions sans quitter la page actuelle.

**Props**

| Prop       | Type        | Défaut     | Description                                    |
| :--------- | :---------- | :--------- | :--------------------------------------------- |
| `isOpen`   | `boolean`   | **Requis** | Contrôle si le drawer est ouvert ou fermé.     |
| `onClose`  | `function`  | **Requis** | Fonction de rappel pour fermer le drawer.      |
| `title`    | `string`    | **Requis** | Le titre affiché en haut du drawer.            |
| `children` | `ReactNode` | **Requis** | Le contenu à afficher à l'intérieur du drawer. |

**Exemple d'utilisation**

```jsx
import Drawer from "fluid-glass-ui";
import Button from "fluid-glass-ui";
import { useState } from "react";

const DrawerExample = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsDrawerOpen(true)}>Ouvrir le Drawer</Button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Titre du Drawer"
      >
        <p>Ceci est le contenu du drawer.</p>
      </Drawer>
    </>
  );
};
```

### Dropdown

Le composant `Dropdown` est un système de menu déroulant flexible et entièrement composable, conçu pour offrir une grande variété d'interactions. Il est construit en utilisant un modèle de composant composé, ce qui signifie que vous assemblez différentes parties (`Trigger`, `Menu`, `Item`, etc.) pour créer le menu complet.

Cela remplace l'ancien composant `Menus.jsx` qui n'était qu'une démonstration statique.

**Composants**

Le système `Dropdown` est composé des éléments suivants :

- `Dropdown`: Le conteneur principal et fournisseur de contexte.
- `Dropdown.Trigger`: L'élément qui ouvre/ferme le menu déroulant.
- `Dropdown.Menu`: Le conteneur qui s'affiche lorsque le menu est ouvert.
- `Dropdown.Item`: Un élément cliquable à l'intérieur du menu.
- `Dropdown.Separator`: Une ligne de séparation visuelle pour regrouper les items.

**Props**

**1. `Dropdown.Trigger`**

| Prop      | Type      | Défaut  | Description                                                                                                                                    |
| :-------- | :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | `false` | Si `true`, le `Dropdown.Trigger` ne rendra pas son propre bouton et attachera à la place la logique d'ouverture/fermeture à son enfant direct. |

**2. `Dropdown.Menu`**

| Prop    | Type     | Défaut   | Description                                                                                         |
| :------ | :------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `align` | `string` | `'left'` | L'alignement horizontal du menu par rapport au `Trigger`. Options: `'left'`, `'center'`, `'right'`. |

**3. `Dropdown.Item`**

| Prop      | Type      | Défaut  | Description                                                                                                                                                              |
| :-------- | :-------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClick` | `func`    | `null`  | Fonction à exécuter lors du clic. Le menu se fermera automatiquement après l'exécution.                                                                                  |
| `asChild` | `boolean` | `false` | Si `true`, le `Dropdown.Item` ne rendra pas son propre bouton et attachera la logique de clic à son enfant direct. Utile pour utiliser des composants comme `next/link`. |

**Exemple d'utilisation**

```jsx
import { Dropdown, IconButton } from "fluid-glass-ui";
import { Edit, Copy, Trash, MoreVertical, User } from "lucide-react";
import Link from "next/link";

function ActionsMenu() {
  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <IconButton icon={MoreVertical} aria-label="Ouvrir le menu d'actions" />
      </Dropdown.Trigger>

      <Dropdown.Menu align="right">
        <Dropdown.Item onClick={() => alert("Édition...")}>
          <Edit size={16} className="mr-2" />
          Éditer
        </Dropdown.Item>
        <Dropdown.Item onClick={() => alert("Copie...")}>
          <Copy size={16} className="mr-2" />
          Copier
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item asChild>
          <Link
            href="/profil"
            className="text-gray-700 w-full text-left flex items-center"
          >
            <User size={16} className="mr-2" />
            Voir le profil
          </Link>
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item
          onClick={() => alert("Suppression...")}
          className="text-red-500"
        >
          <Trash size={16} className="mr-2" />
          Supprimer
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
```

### Footer

Le composant `Footer` affiche un pied de page complet et stylisé avec des colonnes de liens et des icônes de réseaux sociaux. Il est conçu pour être utilisé tel quel à la fin d'une page.

**Props**

Ce composant ne prend aucune prop. Il est auto-contenu.

**Exemple d'utilisation**

```jsx
import Footer from "fluid-glass-ui";

const AppLayout = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <main style={{ flex: 1 }}>{children}</main>
    <Footer />
  </div>
);
```

### GridSystem

Le composant `GridSystem` est un composant de démonstration qui illustre visuellement le système de grille à 12 colonnes utilisé dans ce design system. Il n'est pas destiné à être utilisé comme un composant d'encapsulation, mais plutôt comme une référence visuelle.

**Props**

Ce composant ne prend aucune prop.

**Exemple d'utilisation**

```jsx
import GridSystem from "fluid-glass-ui";

const DesignGuidePage = () => (
  <div>
    <h1>Guide de Style</h1>
    <GridSystem />
  </div>
);
```

### HelperText

Le composant `HelperText` affiche un message d&apos;aide sous un champ de formulaire, avec des variantes pour les messages standard, d&apos;erreur et de succès.

**Props**

| Prop        | Type        | Défaut     | Description                                         |
| :---------- | :---------- | :--------- | :-------------------------------------------------- |
| `variant`   | `string`    | 'standard' | Le style du texte ('standard', 'error', 'success'). |
| `children`  | `ReactNode` | **Requis** | Le contenu du message.                              |
| `className` | `string`    | ''         | Classes CSS supplémentaires.                        |

**Exemple d'utilisation**

```jsx
import { HelperText } from "fluid-glass-ui";

const FormFieldHelp = () => (
  <div>
    <HelperText>Ceci est une information utile.</HelperText>
    <HelperText variant="error">Le champ est obligatoire.</HelperText>
    <HelperText variant="success">
      Le formulaire a été soumis avec succès.
    </HelperText>
  </div>
);
```

### InteractiveTable

Le composant `InteractiveTable` est un tableau de données interactif et riche en fonctionnalités. Il inclut le tri par colonne, la recherche en texte libre, la sélection de lignes, des actions par ligne, et la pagination. Ce composant est hautement personnalisable via ses props.

**Props**

| Prop             | Type        | Défaut                | Description                                                                                         |
| ---------------- | ----------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| `data`           | `array`     | `[]`                  | Tableau d'objets contenant les données à afficher. Chaque objet doit avoir un champ `id` unique.    |
| `columns`        | `array`     | _Voir ci-dessous_     | Configuration des colonnes du tableau.                                                              |
| `actions`        | `array`     | _Voir ci-dessous_     | Actions disponibles pour chaque ligne du tableau.                                                   |
| `title`          | `string`    | `'Table Interactive'` | Titre du tableau.                                                                                   |
| `itemsPerPage`   | `number`    | `5`                   | Nombre d'éléments à afficher par page.                                                              |
| `selectable`     | `boolean`   | `true`                | Si `true`, affiche des cases à cocher pour sélectionner des lignes.                                 |
| `onRowSelect`    | `function`  | `null`                | Fonction appelée lorsque des lignes sont sélectionnées, avec les lignes sélectionnées en paramètre. |
| `onRowClick`     | `function`  | `null`                | Fonction appelée lorsqu'une ligne est cliquée, avec la ligne cliquée en paramètre.                  |
| `filterConfig`   | `array`     | `[]`                  | Configuration des filtres à afficher automatiquement. _Voir structure ci-dessous_.                  |
| `onFilterChange` | `function`  | `null`                | Fonction appelée lorsque les filtres sont modifiés, avec l'objet des filtres en paramètre.          |
| `customFilters`  | `ReactNode` | `null`                | Contenu JSX personnalisé pour les filtres additionnels, affiché après les filtres automatiques.     |

**Structure de l'objet `column`**

| Propriété    | Type       | Défaut     | Description                                                                           |
| ------------ | ---------- | ---------- | ------------------------------------------------------------------------------------- |
| `field`      | `string`   | **Requis** | Nom du champ dans les données à afficher dans cette colonne.                          |
| `header`     | `string`   | **Requis** | Texte d'en-tête de la colonne.                                                        |
| `sortable`   | `boolean`  | `false`    | Si `true`, la colonne peut être triée en cliquant sur son en-tête.                    |
| `searchable` | `boolean`  | `false`    | Si `true`, le champ est inclus dans la recherche.                                     |
| `renderCell` | `function` | `null`     | Fonction de rendu personnalisé pour la cellule. Reçoit l'objet de ligne en paramètre. |

**Structure de l'objet `filter` dans `filterConfig`**

| Propriété     | Type     | Défaut     | Description                                                              |
| ------------- | -------- | ---------- | ------------------------------------------------------------------------ |
| `field`       | `string` | **Requis** | Nom du champ dans les données sur lequel appliquer le filtre.            |
| `label`       | `string` | **Requis** | Libellé du filtre affiché au-dessus du sélecteur.                        |
| `placeholder` | `string` | `''`       | Texte à afficher lorsqu'aucune option n'est sélectionnée.                |
| `options`     | `array`  | **Requis** | Tableau d'objets `{value, label}` représentant les options du sélecteur. |

**Structure de l'objet `action`**

| Propriété | Type        | Défaut     | Description                                                                |
| --------- | ----------- | ---------- | -------------------------------------------------------------------------- |
| `icon`    | `ReactNode` | **Requis** | Icône à afficher pour l'action.                                            |
| `label`   | `string`    | **Requis** | Libellé de l'action (utilisé comme attribut title).                        |
| `onClick` | `function`  | **Requis** | Fonction appelée lorsque l'action est cliquée, avec la ligne en paramètre. |

**Fonctionnalités**

- **Tri :** Cliquez sur les en-têtes de colonne marquées comme `sortable` pour trier les données.
- **Recherche :** Utilisez le champ de recherche pour filtrer les résultats par les champs marqués comme `searchable`.
- **Filtres avancés :** Utilisez la prop `filterConfig` pour ajouter des filtres de type sélecteur qui s'intègrent automatiquement.
- **Sélection :** Cochez les cases pour sélectionner une ou plusieurs lignes. Une case à cocher dans l'en-tête permet de tout sélectionner.
- **Actions :** Chaque ligne comporte des boutons d'action configurables.
- **Pagination :** Navigation entre les pages de résultats avec indication du nombre total d'éléments.
- **Rendu personnalisé :** Possibilité de personnaliser l'affichage des cellules avec la fonction `renderCell`.

**Exemple d'utilisation**

```jsx
import { InteractiveTable } from "fluid-glass-ui";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const UsersTable = () => {
  const userData = [
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean@example.com",
      role: "Admin",
      status: "Actif",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      role: "User",
      status: "Inactif",
      date: "2024-01-10",
    },
    // ... autres utilisateurs
  ];

  const columns = [
    { field: "name", header: "Nom", sortable: true, searchable: true },
    { field: "email", header: "Email", searchable: true },
    {
      field: "role",
      header: "Rôle",
      renderCell: (item) => (
        <Badge variant={item.role === "Admin" ? "destructive" : "default"}>
          {item.role}
        </Badge>
      ),
    },
    {
      field: "status",
      header: "Statut",
      renderCell: (item) => (
        <Badge variant={item.status === "Actif" ? "success" : "default"}>
          {item.status}
        </Badge>
      ),
    },
    { field: "date", header: "Date", sortable: true },
  ];

  const actions = [
    {
      icon: <Eye size={16} />,
      label: "Voir",
      onClick: (user) => console.log("Voir", user),
    },
    {
      icon: <Edit size={16} />,
      label: "Modifier",
      onClick: (user) => console.log("Modifier", user),
    },
    {
      icon: <Trash2 size={16} className="text-red-600" />,
      label: "Supprimer",
      onClick: (user) => console.log("Supprimer", user),
    },
  ];

  const handleRowSelect = (selectedRows) => {
    console.log("Lignes sélectionnées:", selectedRows);
  };

  // Configuration des filtres
  const filterConfig = [
    {
      field: "role",
      label: "Rôle",
      placeholder: "Tous les rôles",
      options: [
        { value: "", label: "Tous les rôles" },
        { value: "Admin", label: "Admin" },
        { value: "User", label: "User" },
      ],
    },
    {
      field: "status",
      label: "Statut",
      placeholder: "Tous les statuts",
      options: [
        { value: "", label: "Tous les statuts" },
        { value: "Actif", label: "Actif" },
        { value: "Inactif", label: "Inactif" },
      ],
    },
  ];

  const handleFilterChange = (filters) => {
    console.log("Filtres appliqués:", filters);
  };

  return (
    <InteractiveTable
      data={userData}
      filterConfig={filterConfig}
      onFilterChange={handleFilterChange}
      columns={columns}
      actions={actions}
      title="Liste des utilisateurs"
      itemsPerPage={10}
      onRowSelect={handleRowSelect}
    />
  );
};
```

**Exemple avec filtres personnalisés**

```jsx
import { InteractiveTable, Select } from "fluid-glass-ui";
import { Eye, Edit, Trash2, Filter } from "lucide-react";
import { useState } from "react";

const UsersTableWithFilters = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const userData = [
    // ... données utilisateurs
  ];

  const columns = [
    { field: "name", header: "Nom", sortable: true, searchable: true },
    { field: "email", header: "Email", searchable: true },
    { field: "role", header: "Rôle" },
    { field: "status", header: "Statut" },
  ];

  const actions = [
    {
      icon: <Eye size={16} />,
      label: "Voir",
      onClick: (user) => console.log("Voir", user),
    },
  ];

  // Filtres personnalisés
  const customFilters = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">Statut</label>
        <Dropdown
          value={statusFilter}
          onChange={setStatusFilter}
          placeholder="Tous les statuts"
        >
          <Dropdown.Item value="">Tous les statuts</Dropdown.Item>
          <Dropdown.Item value="Actif">Actif</Dropdown.Item>
          <Dropdown.Item value="Inactif">Inactif</Dropdown.Item>
        </Dropdown>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Rôle</label>
        <Dropdown
          value={roleFilter}
          onChange={setRoleFilter}
          placeholder="Tous les rôles"
        >
          <Dropdown.Item value="">Tous les rôles</Dropdown.Item>
          <Dropdown.Item value="Admin">Admin</Dropdown.Item>
          <Dropdown.Item value="User">User</Dropdown.Item>
        </Dropdown>
      </div>

      <div className="flex items-end">
        <Button
          variant="outline"
          onClick={() => {
            setStatusFilter("");
            setRoleFilter("");
          }}
          startIcon={<Filter size={16} />}
        >
          Réinitialiser
        </Button>
      </div>
    </div>
  );

  // Filtrer les données selon les filtres personnalisés
  const filteredData = userData.filter((user) => {
    if (statusFilter && user.status !== statusFilter) return false;
    if (roleFilter && user.role !== roleFilter) return false;
    return true;
  });

  return (
    <InteractiveTable
      data={filteredData}
      columns={columns}
      actions={actions}
      title="Liste des utilisateurs avec filtres"
      itemsPerPage={10}
      customFilters={customFilters}
    />
  );
};
```

### ThemeSwitcher

Le composant `ThemeSwitcher` fournit un bouton permettant de basculer entre les thèmes clair (`light`) et sombre (`dark`) de l'application. L'état du thème est conservé dans le `localStorage` du navigateur pour persister entre les sessions.

**Props**

Ce composant ne prend aucune prop.

**Exemple d'utilisation**

```jsx
import ThemeSwitcher from "fluid-glass-ui";

const AppHeader = () => (
  <header
    style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}
  >
    <ThemeSwitcher />
  </header>
);
```

### ThemeSwitcher & ThemeProvider

Le système de thème de `fluid-glass-ui` est géré par un `ThemeProvider` qui doit englober votre application, et un composant `ThemeSwitcher` pour permettre à l'utilisateur de changer de thème.

#### 1. `ThemeProvider`

C'est un fournisseur de contexte qui gère l'état du thème (clair/sombre) et applique les variables CSS de thème à votre application. Il doit être placé à la racine de votre layout.

**Props du `ThemeProvider`**

| Prop       | Type        | Défaut     | Description                                                                                                                                                                   |
| :--------- | :---------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` | **Requis** | Les composants enfants de votre application.                                                                                                                                  |
| `mode`     | `string`    | `'auto'`   | Le mode de thème initial. Peut être `'light'`, `'dark'`, ou `'auto'` pour suivre les préférences du système d'exploitation de l'utilisateur.                                  |
| `config`   | `object`    | `null`     | Un objet de configuration pour surcharger les variables de couleur CSS du thème (ex: `{ primaryHue: 210, accentSaturation: '80%' }`). Voir `hooks/useTheme.js` pour les clés. |

**Exemple de configuration (`app/layout.js`)**

```jsx
import { ThemeProvider } from "fluid-glass-ui";

export default function RootLayout({ children }) {
  // Optionnel: Définir une configuration de thème personnalisée
  const customThemeConfig = {
    primaryHue: 220, // Teinte bleue
    accentHue: 300, // Teinte violette
    glassOpacity: 0.5,
  };

  return (
    <html lang="fr">
      <body>
        <ThemeProvider mode="auto" config={customThemeConfig}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

#### 2. `ThemeSwitcher`

Un composant bouton simple qui utilise le contexte du `ThemeProvider` pour basculer entre les thèmes clair et sombre.

**Props du `ThemeSwitcher`**

| Prop        | Type      | Défaut | Description                                                               |
| :---------- | :-------- | :----- | :------------------------------------------------------------------------ |
| `showLabel` | `boolean` | `true` | Si `true`, affiche le texte "Mode sombre"/"Mode clair" à côté de l'icône. |

**Exemple d'utilisation**

```jsx
import { ThemeSwitcher } from "fluid-glass-ui";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1>Mon Application</h1>
      <ThemeSwitcher showLabel={false} />
    </header>
  );
};
```

### Select

Le composant `Select` est une liste déroulante avancée qui permet à l'utilisateur de choisir une option parmi une liste. Il supporte la recherche, le tri, et le chargement dynamique pour gérer efficacement de grandes listes de données.

**Props de base**

| Prop          | Type                            | Défaut              | Description                                                                       |
| :------------ | :------------------------------ | :------------------ | :-------------------------------------------------------------------------------- |
| `label`       | `string`                        | `null`              | Le label affiché au-dessus du champ de sélection.                                 |
| `options`     | `array` (of `{ value, label }`) | `[]`                | Un tableau d'objets pour peupler les options de la liste déroulante.              |
| `value`       | `any`                           | `null`              | La valeur actuellement sélectionnée. Doit correspondre à la `value` d'une option. |
| `onChange`    | `function`                      | **Requis**          | Fonction de rappel exécutée lorsque la valeur change. Reçoit la nouvelle `value`. |
| `placeholder` | `string`                        | `'Sélectionner...'` | Le texte affiché lorsque aucune valeur n'est sélectionnée.                        |
| `disabled`    | `boolean`                       | `false`             | Si `true`, le champ de sélection sera désactivé.                                  |
| `error`       | `string`                        | `null`              | Message d'erreur à afficher sous le champ.                                        |
| `helperText`  | `string`                        | `null`              | Texte d'aide à afficher sous le champ.                                            |

**Props avancées**

| Prop                | Type       | Défaut            | Description                                                                           |
| :------------------ | :--------- | :---------------- | :------------------------------------------------------------------------------------ |
| `searchable`        | `boolean`  | `false`           | Active la barre de recherche intégrée.                                                |
| `sortable`          | `boolean`  | `false`           | Active le bouton de tri des options.                                                  |
| `sortOrder`         | `string`   | `'asc'`           | Ordre de tri initial (`'asc'` ou `'desc'`).                                           |
| `onSortChange`      | `function` | `null`            | Fonction appelée lors du changement d'ordre de tri. Reçoit le nouvel ordre.           |
| `loadOptions`       | `function` | `null`            | Fonction pour le chargement dynamique. Signature: `(searchTerm, page) => Promise<options[]> \| null`. Retourne `null` pour arrêter le scroll infini. |
| `searchPlaceholder` | `string`   | `'Rechercher...'` | Placeholder du champ de recherche.                                                    |
| `maxHeight`         | `number`   | `240`             | Hauteur maximale de la liste déroulante en pixels.                                    |

**Exemple d'utilisation de base**

```jsx
import { Select } from "fluid-glass-ui";
import { useState } from "react";

const SelectExample = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const countryOptions = [
    { value: "fr", label: "France" },
    { value: "ca", label: "Canada" },
    { value: "us", label: "États-Unis" },
    { value: "de", label: "Allemagne" },
  ];

  return (
    <div style={{ width: "300px" }}>
      <Select
        label="Pays"
        options={countryOptions}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Sélectionner un pays"
      />
    </div>
  );
};
```

**Exemple avec recherche et tri**

```jsx
import { Select } from "fluid-glass-ui";
import { useState } from "react";

const SearchableSelect = () => {
  const [selectedClient, setSelectedClient] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const clientOptions = [
    { value: "1", label: "Entreprise ABC" },
    { value: "2", label: "Société XYZ" },
    { value: "3", label: "Groupe DEF" },
    // ... plus d'options
  ];

  return (
    <Select
      label="Client"
      options={clientOptions}
      value={selectedClient}
      onChange={setSelectedClient}
      placeholder="Rechercher un client..."
      searchable
      sortable
      sortOrder={sortOrder}
      onSortChange={setSortOrder}
      searchPlaceholder="Tapez pour rechercher..."
    />
  );
};
```

**Exemple avec chargement dynamique (scroll infini)**

```jsx
import { Select } from "fluid-glass-ui";
import { useState, useCallback } from "react";

const DynamicSelect = () => {
  const [selectedContact, setSelectedContact] = useState("");

  // Fonction de chargement unifiée (recherche + pagination)
  const loadContacts = useCallback(async (searchTerm, page) => {
    try {
      const response = await fetch(
        `/api/contacts?search=${encodeURIComponent(searchTerm)}&page=${page}&limit=20`
      );
      const data = await response.json();
      
      if (data.success && data.data.length > 0) {
        return data.data.map(contact => ({
          value: contact.id,
          label: contact.full_name
        }));
      }
      
      // Retourner null indique la fin du scroll infini
      return null;
    } catch (error) {
      console.error('Erreur de chargement:', error);
      return null;
    }
  }, []);

  return (
    <Select
      label="Contact"
      value={selectedContact}
      onChange={setSelectedContact}
      placeholder="Rechercher un contact..."
      searchable
      loadOptions={loadContacts}
      searchPlaceholder="Tapez pour rechercher..."
      maxHeight={300}
    />
  );
};
```

**Fonctionnalités**

- **Recherche intégrée** : Filtrage en temps réel des options avec barre de recherche
- **Tri dynamique** : Bouton de tri A-Z / Z-A pour organiser les options
- **Scroll infini** : Chargement automatique de plus d'options lors du défilement
- **Chargement unifié** : Une seule fonction `loadOptions` gère recherche et pagination
- **Gestion d'état interne** : Le composant gère automatiquement les états de chargement et pagination
- **API simplifiée** : Plus besoin de gérer `loading`, `hasMore` ou `onSearch` séparément
- **Gestion d'erreurs** : Affichage des messages d'erreur et d'aide
- **Accessibilité** : Support complet des attributs ARIA et navigation clavier
- **Compatibilité descendante** : Fonctionne avec l'API existante sans modification

**Notes importantes**

- Quand `loadOptions` est fournie, la prop `options` est ignorée
- La fonction `loadOptions` doit retourner `null` pour indiquer la fin du scroll infini
- Le composant gère automatiquement la pagination en incrémentant le paramètre `page`
- La recherche et le chargement sont unifiés dans une seule fonction pour simplifier l'usage
```

### TopNavigation

Le composant `TopNavigation` est une barre de navigation supérieure responsive qui inclut une navigation principale, une barre de recherche, des notifications et un menu utilisateur.

**Props**

| Prop              | Type                | Défaut | Description                                                      |
| ----------------- | ------------------- | ------ | ---------------------------------------------------------------- |
| logo              | ReactNode           | null   | Élément React pour le logo                                       |
| navItems          | array               | []     | Tableau d'objets `{id, label, icon}` pour la navigation          |
| userDropdownItems | array               | []     | Tableau d'objets `{label, icon, onClick, isSeparator, isDanger}` |
| userAvatar        | string ou ReactNode | null   | URL de l'avatar ou élément React                                 |
| userName          | string              | null   | Nom de l'utilisateur affiché dans le menu                        |
| notificationCount | number              | 0      | Nombre de notifications (badge)                                  |
| onSearch          | function            | null   | Fonction appelée lors de la recherche                            |
| onNavItemClick    | function            | null   | Fonction appelée lors du clic sur un élément de navigation       |
| showSearch        | boolean             | true   | Afficher ou masquer la barre de recherche                        |
| showNotifications | boolean             | true   | Afficher ou masquer l'icône de notifications                     |
| showThemeSwitcher | boolean             | true   | Afficher ou masquer le bouton de changement de thème             |

**Fonctionnalités**

- **Navigation responsive** : Adapte l'affichage selon la taille d'écran
- **Barre de recherche** : Champ de recherche intégré avec callback
- **Notifications** : Icône avec badge de notification configurable
- **Menu utilisateur** : Avatar avec dropdown personnalisable et actions
- **Mode mobile** : Menu hamburger pour les petits écrans

**Exemple d'utilisation**

```jsx
import { TopNavigation } from "fluid-glass-ui";
import { Home, Settings, LogOut, User } from "lucide-react";

const AppLayout = ({ children }) => {
  // Éléments de navigation principale
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "projects", label: "Projects" },
  ];

  // Éléments du menu utilisateur
  const userDropdownItems = [
    {
      label: "Profil",
      icon: <User size={16} />,
      onClick: () => navigate("/profile"),
    },
    {
      label: "Paramètres",
      icon: <Settings size={16} />,
      onClick: () => navigate("/settings"),
    },
    { isSeparator: true },
    {
      label: "Déconnexion",
      icon: <LogOut size={16} />,
      onClick: handleLogout,
      isDanger: true,
    },
  ];

  const handleSearch = (query) => {
    console.log("Recherche:", query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigation
        logo={<img src="/logo.svg" alt="Logo" className="h-8" />}
        navItems={navItems}
        userDropdownItems={userDropdownItems}
        userAvatar="/avatar.jpg"
        userName="John Doe"
        notificationCount={3}
        onSearch={handleSearch}
        onNavItemClick={(item) => console.log("Navigation vers", item.label)}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
};
```

### Label

Le composant `Label` fournit des étiquettes stylisées pour les champs de formulaire avec 3 variantes : standard, obligatoire et optionnel.

**Props**

| Prop      | Type   | Défaut     | Description                                        |
| --------- | ------ | ---------- | -------------------------------------------------- |
| variant   | string | 'standard' | Type de label ('standard', 'required', 'optional') |
| htmlFor   | string | -          | ID de l'élément associé                            |
| className | string | -          | Classes CSS supplémentaires                        |

**Exemple dutilisation**

```jsx
import { Label } from "fluid-glass-ui";

const FormField = () => (
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" />

    <Label variant="required" htmlFor="password">
      Mot de passe
    </Label>
    <Input id="password" type="password" />

    <Label variant="optional" htmlFor="phone">
      Téléphone
    </Label>
    <Input id="phone" type="tel" />
  </div>
);
```

---

## Hooks

### usePortal

Le hook `usePortal` permet de créer des portails DOM pour rendre des composants en dehors de leur hiérarchie normale. C'est particulièrement utile pour les modals, dropdowns, tooltips et autres composants qui doivent apparaître au-dessus de tout le contenu.

**Fonctionnalités**

- Création automatique d'un élément portail dans le DOM
- Gestion du z-index élevé (9999)
- Nettoyage automatique lors du démontage
- Support des portails multiples avec des IDs personnalisés

**API du Hook**

```javascript
const portalElement = usePortal(id?: string)
```

**Paramètres**

| Paramètre | Type   | Défaut        | Description                    |
| --------- | ------ | ------------- | ------------------------------ |
| id        | string | 'portal-root' | ID unique de l'élément portail |

**Valeur de retour**

- `portalElement` : Élément DOM du portail ou `null` si pas encore créé

**Exemple d'utilisation avec usePortal**

```jsx
import { usePortal } from "fluid-glass-ui";
import { createPortal } from "react-dom";
import { useState } from "react";

const CustomModal = ({ isOpen, onClose, children }) => {
  const portalElement = usePortal('custom-modal-portal');
  
  if (!isOpen || !portalElement) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6 max-w-md mx-4">
        {children}
      </div>
    </div>,
    portalElement
  );
};
```

### Portal (Composant)

Le composant `Portal` est une version simplifiée qui utilise `usePortal` en interne.

**Props**

| Prop     | Type      | Défaut        | Description                    |
| -------- | --------- | ------------- | ------------------------------ |
| children | ReactNode | -             | Contenu à rendre dans le portail |
| id       | string    | 'portal-root' | ID unique de l'élément portail |

**Exemple d'utilisation avec Portal**

```jsx
import { Portal, Button } from "fluid-glass-ui";
import { useState } from "react";

const OverlayExample = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowOverlay(true)}>
        Afficher l'overlay
      </Button>
      
      {showOverlay && (
        <Portal id="overlay-portal">
          <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
              <h2>Contenu dans le portail</h2>
              <p>Ce contenu est rendu en dehors de la hiérarchie normale.</p>
              <Button onClick={() => setShowOverlay(false)}>
                Fermer
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
```

**Cas d'usage courants**

1. **Modals et dialogs** : Éviter les contraintes de z-index
2. **Dropdowns dans des tableaux** : Éviter les contraintes d'overflow
3. **Tooltips globaux** : Positionnement absolu sans contraintes
4. **Notifications toast** : Affichage au-dessus de tout le contenu
5. **Overlays et backdrops** : Couverture complète de l'écran

**Bonnes pratiques**

- Utilisez des IDs uniques pour différents types de portails
- Gérez toujours la fermeture des portails (échappement, clic extérieur)
- Testez l'accessibilité (focus trap, ARIA attributes)
- Nettoyez les event listeners lors du démontage

**Notes techniques**

- Le portail est créé avec `position: relative` et `z-index: 9999`
- L'élément est automatiquement supprimé si créé par le hook
- Compatible avec SSR (Server-Side Rendering)
- Utilise `document.body.appendChild()` pour l'insertion

---

## Variables CSS et Thèmes

### Variables CSS Disponibles

Fluid Glass UI utilise un système complet de variables CSS pour permettre une personnalisation avancée et une adaptation automatique aux thèmes sombre/clair.

#### Variables de Base

```css
/* Teintes principales */
--fg-primary-hue: 220;           /* Teinte principale (0-360) */
--fg-accent-hue: 280;            /* Teinte d'accent (0-360) */
--fg-neutral-hue: 210;           /* Teinte neutre (0-360) */
--fg-success-hue: 120;           /* Teinte de succès */
--fg-warning-hue: 40;            /* Teinte d'avertissement */
--fg-error-hue: 0;               /* Teinte d'erreur */

/* Saturations */
--fg-primary-saturation: 15%;    /* Saturation principale */
--fg-accent-saturation: 70%;     /* Saturation d'accent */

/* Effet verre */
--fg-glass-opacity: 0.7;         /* Opacité de l'effet verre */
--fg-glass-blur: 20px;           /* Flou de l'effet verre */
```

#### Variables de Couleurs Calculées

```css
/* Arrière-plans */
--fg-bg-primary: hsl(var(--fg-primary-hue), var(--fg-primary-saturation), 95%);
--fg-bg-glass: hsla(var(--fg-primary-hue), 20%, 98%, var(--fg-glass-opacity));

/* Texte */
--fg-text-primary: hsl(var(--fg-neutral-hue), 15%, 20%);
--fg-text-secondary: hsl(var(--fg-neutral-hue), 10%, 50%);

/* Accent */
--fg-accent-primary: hsl(var(--fg-accent-hue), var(--fg-accent-saturation), 60%);
```

#### Nouvelles Variables pour Bordures Adaptatives

```css
/* Bordures qui s'adaptent au thème */
--fg-border-glass-light: hsla(var(--fg-neutral-hue), 20%, 100%, 0.2);
--fg-border-glass-medium: hsla(var(--fg-neutral-hue), 20%, 100%, 0.3);
--fg-border-glass-strong: hsla(var(--fg-neutral-hue), 20%, 100%, 0.4);
```

#### Nouvelles Variables pour Overlays Adaptatifs

```css
/* Overlays pour modals et backdrops */
--fg-overlay-light: hsla(var(--fg-neutral-hue), 20%, 0%, 0.3);
--fg-overlay-medium: hsla(var(--fg-neutral-hue), 20%, 0%, 0.5);
--fg-overlay-strong: hsla(var(--fg-neutral-hue), 20%, 0%, 0.7);
```

#### Nouvelles Variables pour États Interactifs

```css
/* États hover, active, focus */
--fg-interactive-hover: hsla(var(--fg-primary-hue), var(--fg-primary-saturation), 90%, 0.1);
--fg-interactive-active: hsla(var(--fg-primary-hue), var(--fg-primary-saturation), 85%, 0.2);
--fg-interactive-focus: hsla(var(--fg-accent-hue), var(--fg-accent-saturation), 60%, 0.3);
```

#### Nouvelles Variables pour Icônes Adaptatives

```css
/* Icônes qui s'adaptent au thème */
--fg-icon-primary: var(--fg-text-secondary);
--fg-icon-secondary: var(--fg-text-muted);
--fg-icon-disabled: hsla(var(--fg-neutral-hue), 10%, 50%, 0.5);
```

### Mode Sombre Automatique

Toutes les variables s'adaptent automatiquement en mode sombre :

```css
[data-theme="dark"] {
  /* Arrière-plans sombres */
  --fg-bg-primary: hsl(var(--fg-primary-hue), var(--fg-primary-saturation), 8%);
  --fg-text-primary: hsl(var(--fg-neutral-hue), 15%, 90%);
  
  /* Bordures adaptées au mode sombre */
  --fg-border-glass-light: hsla(var(--fg-neutral-hue), 15%, 100%, 0.1);
  --fg-border-glass-medium: hsla(var(--fg-neutral-hue), 15%, 100%, 0.15);
  
  /* Overlays adaptés au mode sombre */
  --fg-overlay-medium: hsla(var(--fg-neutral-hue), 20%, 0%, 0.6);
  
  /* États interactifs pour mode sombre */
  --fg-interactive-hover: hsla(var(--fg-primary-hue), var(--fg-primary-saturation), 15%, 0.3);
}
```

### Utilisation Pratique

#### Personnalisation des Couleurs

```css
/* Thème personnalisé */
:root {
  --fg-primary-hue: 240;      /* Bleu-violet */
  --fg-accent-hue: 160;       /* Turquoise */
  --fg-glass-opacity: 0.5;    /* Moins transparent */
}
```

#### Classes Utilitaires Disponibles

```css
/* Bordures adaptatives */
.border-glass-light { border-color: var(--fg-border-glass-light); }
.border-glass-medium { border-color: var(--fg-border-glass-medium); }
.border-glass-strong { border-color: var(--fg-border-glass-strong); }

/* Overlays adaptatifs */
.overlay-light { background: var(--fg-overlay-light); }
.overlay-medium { background: var(--fg-overlay-medium); }
.overlay-strong { background: var(--fg-overlay-strong); }

/* États interactifs */
.interactive-hover:hover { background: var(--fg-interactive-hover); }
.interactive-focus:focus { outline: 2px solid var(--fg-interactive-focus); }

/* Icônes adaptatives */
.icon-primary { color: var(--fg-icon-primary); }
.icon-secondary { color: var(--fg-icon-secondary); }
.icon-disabled { color: var(--fg-icon-disabled); }
```

### Avantages du Système

1. **Adaptation Automatique** : Tous les composants s'adaptent automatiquement au mode sombre/clair
2. **Cohérence Visuelle** : Variables uniformes sur tous les composants
3. **Personnalisation Facile** : Changez une variable pour affecter tous les composants
4. **Performance** : Pas de recalculs CSS, tout est en variables natives
5. **Accessibilité** : Contrastes optimisés pour chaque mode

### Migration depuis les Versions Précédentes

Si vous utilisez des classes hardcodées, remplacez-les par les nouvelles variables :

```css
/* ❌ Ancien (hardcodé) */
.my-component {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
}

/* ✅ Nouveau (adaptatif) */
.my-component {
  border: 1px solid var(--fg-border-glass-medium);
  background: var(--fg-overlay-medium);
}
```
