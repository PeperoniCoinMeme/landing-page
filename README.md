# 🫑 Peperoni – Meme Crypto Landing Page

**Peperoni** is a meme cryptocurrency app built with **React**, **TypeScript**, and **Vite**. It features a minimal setup with Hot Module Replacement (HMR) and ESLint rules to ensure clean and consistent code.

## 🚀 Getting Started

Follow these steps to clone and run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/peperoni-app.git

# 2. Navigate into the project directory
cd peperoni-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Once the server is running, open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## ⚙️ React Plugins for Vite

You can choose from two official plugins for React in Vite:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) – uses [Babel](https://babeljs.io/) for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) – uses [SWC](https://swc.rs/) for Fast Refresh

---

## ✅ Expanding ESLint Configuration

For production-grade applications, it’s recommended to enable type-aware linting rules:

```js
export default tseslint.config({
  extends: [
    // Replace ...tseslint.configs.recommended with this
    ...tseslint.configs.recommendedTypeChecked,
    // Or use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, include stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install React-specific lint plugins:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
