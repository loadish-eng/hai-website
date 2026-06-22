# H.A.I, LLC — Local Intelligence Infrastructure

This is a static React + Vite single-page site. It has no backend dependency
— it builds to plain HTML/CSS/JS that can be deployed to any static host or
cloud server.

## Stack

- React 18 + Vite 6
- React Router (client-side routing)
- Tailwind CSS + shadcn/ui components
- TanStack Query (available for future data fetching needs)

## Local development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Configuration

Copy `.env.example` to `.env` and adjust as needed:

```bash
cp .env.example .env
```

| Variable | Required | Purpose |
|---|---|---|
| `VITE_CONTACT_FORM_ENDPOINT` | No | A JSON POST endpoint to handle contact-form submissions (e.g. a serverless function, or a service like Formspree/Getform/Web3Forms). If left unset, the contact form falls back to a `mailto:` link, so the site is fully functional out of the box with zero backend. |

The notification email address shown to admins is set directly in
`src/components/landing/ContactSection.jsx` via the `NOTIFICATION_EMAIL`
constant — update it to your own address.

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deployment

Because this is a static SPA, it can be hosted anywhere that can serve files
over HTTP. A few common options:

### Netlify

A `netlify.toml` is included with the build command, publish directory, and
the SPA redirect rule already configured. Just connect the repo in Netlify
and deploy — no extra configuration needed.

### Vercel / other static-site platforms

- Build command: `npm run build`
- Output directory: `dist`
- Make sure to configure a catch-all rewrite to `index.html` for client-side
  routing (most platforms, including Vercel, do this automatically for SPAs;
  `public/_redirects` is also picked up by several providers).

### Any cloud VPS, container host, or "any cloud server provider"

A `Dockerfile` and `nginx.conf` are included so you can build and run the
site as a container anywhere Docker runs (a rented VPS, AWS ECS/Fargate,
Google Cloud Run, DigitalOcean App Platform, Azure Container Apps, etc.):

```bash
docker build -t hai-consulting .
docker run -p 8080:80 hai-consulting
```

Then point your reverse proxy / load balancer at the container's port 80
(mapped to 8080 in the example above).

If you'd rather not use Docker, any static file server works — build the
project and copy the contents of `dist/` to the web root of your server
(Apache, plain nginx, Caddy, S3 + CloudFront, etc.), making sure unknown
routes fall back to `index.html`.

## Project structure

```
src/
  components/        Reusable UI (shadcn/ui primitives in components/ui)
  components/landing/ Landing-page sections (Navbar, Hero, Products, Contact, Footer, etc.)
  pages/              Route-level pages (currently just Home + 404)
  lib/                Small app utilities (query client, 404 page)
  assets/images/      Locally bundled illustrations used on the landing page
```

## Notes

- The placeholder illustrations in `src/assets/images/` are simple bundled
  SVGs styled to match the site's look — swap them for real product
  photography whenever you're ready.
- There is no authentication system or backend API in this project; it is a
  purely static marketing site.
