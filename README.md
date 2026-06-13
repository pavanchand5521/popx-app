# PopX — React JS Assignment

A pixel-perfect React implementation of the PopX mobile app UI, centered on the webpage inside a mobile frame.

## Screens

1. **Landing** — Welcome screen with animated bubble layout and CTA buttons
2. **Login** — Floating-label email/password form
3. **Signup** — Full registration form with agency radio selection
4. **Profile** — Account Settings with avatar, user info, and bio

## Tech Stack

* React 19 + Vite 8
* React Router v7 (client-side navigation)
* Plain CSS (no Tailwind — cleaner and lighter for this scope)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com](https://vercel.com).

## Project Structure

```
src/
├── App.jsx                  # Router + mobile frame wrapper
├── main.jsx
├── context/
│   └── AuthContext.jsx      # Auth state (login / signup / logout)
├── pages/
│   ├── LandingPage.jsx      # Screen 1
│   ├── LoginPage.jsx        # Screen 2
│   ├── SignupPage.jsx       # Screen 3
│   └── ProfilePage.jsx      # Screen 4
├── Components/
│   └── common/
│       └── FloatingInput.jsx
└── styles/
    └── global.css
```
