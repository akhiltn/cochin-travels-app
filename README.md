# CochinTravels.com – Full Setup

This repo contains:
- web/ → React + Vite + TypeScript site (GitHub Pages)
- cms/ → Sanity Studio (CMS)

--------------------------------
STEPS TO EXECUTE (IN ORDER)
--------------------------------

1. Install Node.js (v18+)

2. WEBSITE (React)
   cd web
   npm install
   npm run dev
   Open http://localhost:5173

3. CMS (Sanity)
   cd ../cms
   npm create sanity@latest
   - Create new project
   - Dataset: production
   - TypeScript: YES
   npm run dev
   Open http://localhost:3333

4. Add Tour schema to cms/schemas/

5. Deploy Sanity Studio
   sanity deploy
   URL: https://<project>.sanity.studio

6. Update web/src/sanityClient.ts with projectId

7. Commit & Push to GitHub (main branch)

8. GitHub Actions auto-deploys to GitHub Pages

9. Custom domain already handled via public/CNAME