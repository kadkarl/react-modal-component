# React Modal Component

[![npm version](https://badge.fury.io/js/react-modal-component.svg)](https://www.npmjs.com/package/react-modal-component)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React Modal Component est une bibliothèque légère et simple pour intégrer des modales personnalisées dans vos projets React. Ce composant est entièrement configurable et facile à utiliser.

🔥 Fonctionnalités
💡 Simple à intégrer.
🎨 Personnalisable via des props ou des styles CSS.
🖱️ Gestion facile des événements d'ouverture et de fermeture.
♿ Accessible (support du clavier et ARIA-ready).

## 🚀 Installation

Installez le package via npm ou yarn :

```bash
npm install react-modal-component
```

ou

```bash
yarn add react-modal-component
```

## 🧪 Tests

```bash
npm test
```

## 🎨 Props

| Prop               | Type        | Description                                             | Default |
| ------------------ | ----------- | ------------------------------------------------------- | ------- |
| `isOpen`           | `boolean`   | Détermine si la modale est ouverte ou fermée.           | `false` |
| `onClose`          | `function`  | Fonction callback appelée lorsque la modale est fermée. | `null`  |
| `className`        | `string`    | Classe CSS personnalisée pour styliser la modale.       | `""`    |
| `overlayClassName` | `string`    | Classe CSS personnalisée pour styliser l'overlay.       | `""`    |
| `children`         | `ReactNode` | Contenu à afficher dans la modale.                      | `null`  |

### Exemple de base

Voici un exemple simple pour utiliser votre composant de modale :

```javascript
import React, { useState } from "react";
import Modal from "react-modal-component";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h2>Hello, World!</h2>
        <p>This is a customizable modal component.</p>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
```

## 📦 Développement

Si vous souhaitez contribuer ou modifier le package, clonez ce dépôt :

```bash
git clone https://github.com/studiokad/react-modal-component.git
```

## 📄 Licence

Ce projet est sous licence MIT.

## 📧 Support

Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue ou à me contacter via [Support](#GitHub).
