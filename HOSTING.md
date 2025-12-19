# Hosting Guide for Your Portfolio

Since this is a static website built with React and Vite, you can host it for free on many platforms. Here are the two easiest ways.

## Option 1: Netlify (Drag & Drop) - Easiest

1.  **Build the project**
    *   Open your terminal in the project folder.
    *   Run the command: `npm run build`
    *   This will create a `dist` folder in your project directory.

2.  **Upload**
    *   Go to [Netlify Drop](https://app.netlify.com/drop).
    *   Drag and drop the `dist` folder onto the page.
    *   Netlify will upload it and give you a live URL instantly.

## Option 2: Vercel (Best for GitHub Users)

1.  **Push to GitHub**
    *   Create a new repository on GitHub.
    *   Push your code to that repository.

2.  **Connect to Vercel**
    *   Go to [Vercel.com](https://vercel.com) and sign up.
    *   Click "Add New Project".
    *   Select your GitHub repository and click "Import".
    *   Click "Deploy".

## Option 3: GitHub Pages

1.  **Configure `vite.config.ts`**
    *   Set the base URL in your configuration if you are not using a custom domain.
    
2.  **Deploy**
    *   You can use the `gh-pages` package to deploy the `dist` folder content to a `gh-pages` branch.

---

## Important Note

Since you have removed the AI Assistant backend service, you don't need to worry about API keys for hosting. The site is now completely static!
