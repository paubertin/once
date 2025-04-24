# once – Micro-framework web natif en TypeScript

## 🎯 Objectif global
Créer un framework JavaScript minimaliste, réutilisable, basé sur les **Web Components**, écrit en **TypeScript**, destiné à créer des interfaces web modernes sans dépendance externe.

## 📐 Principes fondateurs

- **Zéro dépendance** externe (ou optionnelles)
- Utilisation exclusive des **standards du web** : Web Components, Shadow DOM, Custom Events, etc.
- Composants réactifs, légers, encapsulés
- Intégration **sans build obligatoire**
- Exportable comme **librairie ES module**

## 📁 Structure de base du projet

```
once/
├── src/
│   ├── core.ts          ← base de la classe `OnceComponent`
│   ├── dom.ts           ← helpers DOM (template, bindings, slots, etc.)
│   ├── hooks.ts         ← système de cycle de vie, effet, etc. (optionnel)
│   ├── index.ts         ← point d'entrée principal
├── examples/            ← composants ou mini-apps utilisant `once`
├── package.json
├── tsconfig.json
├── README.md
```

## 🧱 Composants de base prévus

### 🔹 `OnceComponent`

Base de tout composant :

```ts
export class OnceComponent extends HTMLElement {
  protected state: Record<string, any>;
  protected shadow: ShadowRoot;

  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  public connectedCallback(): void {
    this.render();
    this.afterRender?.();
  }

  protected setState(newState: Record<string, any>): void {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  protected render(): void {
    this.shadow.innerHTML = `<p>Override render()</p>`;
  }

  protected afterRender?(): void;
}
```

## ✅ Fonctionnalités envisagées (évolutives)

- [x] Gestion de l’état local (`setState`)
- [x] Rendu encapsulé via `Shadow DOM`
- [x] Méthodes de cycle de vie (`connectedCallback`, `afterRender`)
- [ ] Système de directives personnalisées (`@bind`, `@click`, etc.)
- [ ] Routage (optionnel pour projets plus grands)
- [ ] Stores globaux partagés (inspiré de Svelte)
- [ ] Compilation vers Web Component standalone (optionnel)

## 🛠️ Cas d’usage prévu

Exemples immédiats :
- Composants UI isolés (selectors, cards, modals…)
- Petites apps sans framework