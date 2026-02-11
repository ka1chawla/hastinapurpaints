# Hastinapur Paints

Eco-friendly paints from cow – static website (HTML, CSS, and minimal JavaScript). **GitHub Pages compatible** – no build step, no React.

## Pages

- **index.html** – Home: hero, features, paint colour inventory, products, why choose us, CTA
- **about.html** – About Us: intro, manufacturing, eco-friendly paint from cow, mission, why choose us, colour teaser
- **contact.html** – Contact Us: contact details and enquiry form

## Run locally

Open `index.html` in a browser, or use a simple static server:

```bash
# Python 3
python3 -m http.server 8000

# or npx (no install)
npx serve .
```

Then visit http://localhost:8000

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select branch (e.g. `main`) and folder **/ (root)**.
5. Save. The site will be at `https://<username>.github.io/<repo>/`.

All links use relative paths (`index.html`, `about.html`, `assets/...`), so the site works correctly on GitHub Pages with no extra configuration.
