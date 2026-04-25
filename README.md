# nick.fiacco.com

A small React app built with Vite and ready for Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

## Cloudflare Pages settings

Use these build settings when connecting the repository to Cloudflare Pages:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

After the first deployment, add `nick.fiacco.com` in the Pages project's
Custom domains tab.
