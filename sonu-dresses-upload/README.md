# Sonu Dresses website (Next.js)

## Run it
npm install
npm run dev        # open http://localhost:3000

## Edit shop details
Everything (phone, address, opening hours, photos, collections) is in `lib/site-config.ts`.
Address, hours and social links are empty for now; fill them in and they appear automatically.

## Use your own photos
Put photos in `public/images/` and change `heroImages` in `lib/site-config.ts`
to "/images/photo1.jpg" and so on. Four photos, portrait or square work best.

## Deploy to Netlify
Push to GitHub/Bitbucket, then "Add new site → Import project" in Netlify.
Build command: npm run build. Netlify detects Next.js automatically.
