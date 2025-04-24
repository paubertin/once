# once

A minimalist, dependency-free web framework built with native Web Components and TypeScript.

## 🌱 Philosophy

**once** is designed to bring back simplicity and transparency to frontend development. It avoids the complexity of traditional frameworks by relying entirely on native standards:

- ✅ Web Components
- ✅ Shadow DOM
- ✅ Custom Elements
- ✅ Custom Events
- ✅ No build toolchain required

## 🚀 Usage

This library provides a base class `OnceComponent` for creating encapsulated, reactive UI components. You extend it to define your own tags:

```ts
class MyCounter extends OnceComponent {
  render() {
    this.shadow.innerHTML = \`
      <button>-</button>
      <span>\${this.state.count}</span>
      <button>+</button>
    \`;
  }
}
```

## 📁 Structure

- `src/core.ts` — core logic (OnceComponent)
- `src/dom.ts` — DOM helpers
- `src/hooks.ts` — lifecycle or effect hooks (optional)
- `examples/` — sample components using once

## 📦 Installation

To be used directly in the browser or bundled manually:

```html
<script type="module" src="/lib/once/core.js"></script>
```

## 🔧 TODO

- [ ] State + rendering system
- [ ] Event binding helpers
- [ ] Directive-like utilities
- [ ] Optional dev tools

---

MIT License — Built by [scal]