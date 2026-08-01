# Work In Progress

# Ecommerce Project

A modern e-commerce web application built with **React 19** and **Vite**, focused on fast page loads, clean component architecture, and a smooth shopping experience — from browsing products to managing the cart.

> This project is currently a **work in progress**. Core structure and routing are in place; product browsing, cart, and checkout flows are being built out incrementally.

---

## How It Works

The app is structured as a single-page React application powered by Vite for fast builds and hot module reloading.

### Routing
Client-side navigation is handled with **React Router**, splitting the app into distinct route-level views (e.g., home/product listing, product details, cart) so each page loads only what it needs.

### Data Fetching
API calls (product data, categories, etc.) are made using **Axios**, keeping request logic isolated from UI components so it's easy to swap or extend the data source later (e.g., moving from mock data to a real backend).

### Cart & State
Cart state (adding, removing, updating quantities) is managed within React's component state/hooks, keeping the data flow predictable as features are added.

### Dates & Formatting
**Day.js** is used for any date-related formatting (order timestamps, delivery estimates, etc.) — a lightweight alternative to heavier date libraries.

### Testing
Components are tested using **Vitest** alongside **React Testing Library**, with `jsdom` simulating the browser environment so tests run without a real browser.

---

## Project Structure

```
ecommerce-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── checkout/
│   │   ├── home/
│   │   └── orders/
│   ├── NotFoundPage.css
│   ├── NotFoundPage.jsx
│   ├── TrackingPage.css
│   ├── TrackingPage.jsx
│   ├── Header.css
│   ├── Header.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── starting-code/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── setupTests.js
├── vite.config.js
└── vitest.config.js
```

## Getting Started

### 1. Clone the repo
```
git clone https://github.com/deepnarayan-ops/Ecommerce-Project.git
cd Ecommerce-Project
```

### 2. Install dependencies
```
npm install
```

### 3. Run the app
```
npm run dev
```
The app will be available at `http://localhost:5173`.

### 4. Run tests
```
npm run test
```

### 5. Build for production
```
npm run build
```

---

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **React Router** — client-side routing
- **Axios** — HTTP client for API requests
- **Day.js** — lightweight date handling
- **Vitest / React Testing Library / jsdom** — component testing
- **ESLint** — code linting

---

## Status

Actively under development as a personal project. Planned next steps: optimizing product listing page, cart functionality, checkout flow, and live API integration.

---
