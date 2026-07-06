# Portfolio

A personal portfolio site — plain HTML/CSS/JS, no build step, no framework.

## Structure

- `index.html` — home
- `about.html` — about page
- `my-work.html` — full case-study listing page
- `case-study-*.html` — individual case studies
- `css/style.css` — shared styles
- `js/` — shared scripts (`main.js`, `mobile-menu.js`, `reveal.js`)
- `assets/images/` — images, logos, and the resume PDF

## Preview locally

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Deploy

This is a plain static site, so it can be deployed as-is to:

- **GitHub Pages** — push to a repo and enable Pages in settings
- **Netlify** / **Vercel** — drag-and-drop the folder or connect the repo
- Any static host / shared hosting (GoDaddy, etc.) — just upload the files

## Resume PDF

The resume lives at `assets/images/Marc Berliner Resume.pdf` and is linked
from the "Resume" nav link (opens in a new tab). Replace that file with an
updated resume any time — same filename, no code changes needed.

## Case studies

The case-study pages are currently open to anyone with the link (no
password gate). A password-gated version was previously built and removed
while switching hosts; ask if you want it added back — the right approach
depends on where the site ends up hosted, since it needs either a
server-side runtime (PHP on shared hosting, edge functions on
Netlify/Vercel) or a proxy in front of a static host (e.g. a Cloudflare
Worker in front of GitHub Pages with a custom domain).
