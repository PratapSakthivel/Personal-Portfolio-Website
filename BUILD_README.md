# Build & Deployment Guide

This document explains how to run your portfolio on your computer and how to put it on the internet.

## 🛠 Prerequisites

Before you start, make sure you have **Node.js** installed on your computer.
1.  Open your terminal (Command Prompt or Terminal).
2.  Type `node -v` and press Enter.
3.  If you see a number (e.g., `v18.0.0`), you are good. If not, download it from [nodejs.org](https://nodejs.org/).

## 🚀 Running on Your Computer

1.  **Open Terminal** in the project folder.
2.  **Install Dependencies**: This downloads all the necessary code libraries.
    ```bash
    npm install
    ```
3.  **Start Development Server**: This runs the website locally.
    ```bash
    npm run dev
    ```
4.  You will see a link (usually `http://localhost:5173`). Ctrl+Click it to open your website in the browser.

## 📦 Building for Production

When you are ready to publish, you need to "build" the app. This optimizes the code for the web.

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder. This folder contains your final website files.

## 🌐 Hosting (Putting it online)

The easiest way to host this for free is using **Netlify** or **Vercel**.

### Option A: Netlify (Drag & Drop)
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag your `dist` folder (created in the previous step) onto the page.
3.  That's it! Your site is live.

### Option B: Vercel (Recommended for GitHub users)
1.  Push your code to a GitHub repository.
2.  Go to [Vercel.com](https://vercel.com) and sign up.
3.  Click "Add New Project" and import your GitHub repository.
4.  Click "Deploy". Vercel will automatically build and host your site.

## 🔑 AI Features (Gemini)

This portfolio uses Google's Gemini API for the Chat Assistant.
1.  Get an API Key from [Google AI Studio](https://aistudio.google.com/).
2.  If running locally, create a file named `.env` in the root folder.
3.  Add this line: `API_KEY=your_actual_api_key_here`.
4.  **Note:** For a static site on the web, putting the API key in the frontend code is risky. For a true production app, you should use a backend proxy. For this portfolio demo, it works directly but be aware of the security implications.
