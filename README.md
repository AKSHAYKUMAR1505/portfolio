# Akshay Kumar — Freelance Web Developer

A responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS 4. The enquiry form uses a prefilled `mailto:` link; it does not send or store form submissions on a server.

## Run locally in VS Code

1. Install [Node.js](https://nodejs.org/) (LTS) and open this folder in VS Code.
2. In VS Code, choose **Terminal → New Terminal** and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Personalise before publishing

Your email and WhatsApp contact are currently set in `src/config.ts`. Review them before publishing, and update them there if you want to use different contact details:

- `email`: the address visitors can use to reach you.
- `whatsappNumber`: your WhatsApp number in international format, digits only (India numbers start with `91`).
- Edit your profile, introductory package price, or project URL there as needed.

The Aarohan Academy entry is identified as your own demo project for a fictional institute, not a client case study. Update the content in `src/config.ts` and the portfolio section if you add projects.

## Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`. `npm run preview` serves that build locally for a final check.

## Publish with GitHub and Vercel

1. Create a new, empty repository on GitHub. Do not add a README or other files if you plan to push this existing folder.
2. In the VS Code terminal at the project root, initialise and push the project (replace the URL with your repository URL):

   ```bash
   git init
   git add .
   git commit -m "Build freelance portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. Sign in to [Vercel](https://vercel.com/) with GitHub, choose **Add New → Project**, and import the repository.
4. Keep the detected Vite settings: build command `npm run build`, output directory `dist`. No environment variables or paid API keys are required.
5. Select **Deploy**. Future pushes to `main` trigger a new deployment.

## Final checks

- Confirm your email and WhatsApp details in `src/config.ts` before sharing the site.
- Run `npm run build` and verify it completes without errors.
- Check navigation and calls to action at desktop and mobile widths; try the mobile menu with keyboard and Escape.
- Open your Aarohan Academy demo and verify it is labelled as a personal project, not a client case study.
- Submit the enquiry form with valid details and confirm it opens a prefilled email in your default email app; required fields and email format are validated by the browser.
- Check the WhatsApp and email links after replacing their placeholders.
- Review the published site on a phone and desktop.
