# Abhishek Aryan — Portfolio

A one-page portfolio site built with React + Vite. Dark "network monitoring"
themed design with an ambient animated node graph, a timeline-style
experience section, and all your résumé content wired up.

## 1. Run it locally

You need [Node.js](https://nodejs.org/) 18+ installed.

```bash
cd D:\NetlifyProject
npm install
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`). Open it in
your browser — it auto-reloads as you edit files.

## 2. Edit your content

Everything text-based — name, summary, experience, projects, skills,
education, achievements, contact links — lives in one place:

```
src/data/resumeData.js
```

Edit that file and the whole site updates. No need to touch the components
unless you want to change layout.

## 3. Your photos, social links & résumé PDF

- Photo (used as both the homepage wallpaper and the small sidebar photo):
  `src/assets/wallpaper.jpg` — replace this file with any image of the same
  name to swap it.
- Social links: open `src/data/resumeData.js` and edit `profile.socials`
  (LinkedIn is already filled in; Facebook and Instagram are placeholders —
  swap the `"#"` for your real profile URLs).
- Skill percentages: edit the `skills` array in `src/data/resumeData.js` —
  each entry has a `percent` value from 0–100.
- Résumé PDF: `public/resume.pdf` (already includes your latest résumé —
  replace this file to update the "Download résumé" buttons/links).

## 4. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site, ready to deploy.

## 5. Deploy to Netlify

**Option A — Drag and drop (fastest)**
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the `dist` folder onto the page. Done — you'll get a live URL.

**Option B — Connect a Git repo (recommended for updates)**
1. Push this folder to a GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo.
3. Build command: `npm run build`, Publish directory: `dist`
   (already configured in `netlify.toml`).
4. Every push to your repo will redeploy the site automatically.

## Tech notes

- React 18 + Vite — fast dev server, small production bundle.
- No UI framework/CSS library — all styles are in `src/index.css` using CSS
  custom properties (design tokens at the top of the file) so the look is
  easy to retheme by changing a handful of variables.
- The animated node graph in the hero (`src/components/NetworkBackground.jsx`)
  is plain `<canvas>` + `requestAnimationFrame`, respects
  `prefers-reduced-motion`, and has no external dependencies.
