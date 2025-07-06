# Comfy Store

A modern e-commerce demo built with React, TypeScript, and Vite. This project demonstrates a clean architecture, state management, and UI best practices for a shopping experience.

## Features

- Product listing with grid and list views
- Product filters (search, category, price, company, shipping)
- Shopping cart with add/remove/update functionality
- User authentication (login/register UI)
- Order summary and checkout page (UI only)
- Responsive design with Tailwind CSS
- Theme toggle (light/dark mode)
- Carousel hero section
- Pagination for product lists
- Error handling and loading states

## Project Structure

```
src/
  components/         # Reusable UI components
  features/           # Redux slices for cart, theme, user
  lib/                # Utility functions
  pages/              # Page components (Home, Products, Cart, etc.)
  utils/              # Helper utilities (fetch, formatting, types)
  assets/             # Images and static assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## ESLint & TypeScript

This project uses ESLint with recommended and type-aware rules. See `eslint.config.js` for details. You can expand the configuration as needed:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules.

---

Feel free to customize and extend this project for your own needs!

---

You can see the live site [here](https://jazzy-sorbet-3715c1.netlify.app/).
