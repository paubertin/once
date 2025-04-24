# Custom Instructions for GitHub Copilot – Project: once

## 🧠 Project Context

You are assisting in the development of a minimalist web framework named **once**, written in **TypeScript**, based solely on **native web standards**:

- Web Components
- Shadow DOM
- Custom Elements
- Custom Events
- ES Modules

The project should **not include any external dependencies** and is intended as a **reusable base** for small front-end web projects. The idea is to promote autonomy, composability, and simplicity.

The framework will define a core `OnceComponent` class that enables local state management, shadow DOM encapsulation, and lifecycle hooks like `connectedCallback` and a custom `afterRender`.

## 💡 Guidance for Code Suggestions

- Write all code in **TypeScript**
- Use **native browser APIs only**
- Prefer **explicit and readable** code over clever tricks
- Components should be **self-contained and reusable**
- Avoid app-specific logic unless explicitly stated
- Stick closely to the philosophy and structure described in `doc.md`

## ✅ Output Style

- Concise and well-typed TypeScript
- Comment where necessary for clarity
- Suggest reusable patterns
- Encourage modular design

## 📎 Reference

Use the companion spec file `doc.md` for architectural vision and technical boundaries.