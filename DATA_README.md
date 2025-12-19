# Portfolio Data Guide

Welcome to your portfolio! This website is designed to be easily customizable even if you don't know much about coding. All the content (text, images, links) is stored in one single file.

## 📂 The Master File

**File Location:** `constants.ts`  
(This file is in the root directory or inside `src` depending on your setup. Look for the file named `constants.ts`).

---

## ✏️ How to Edit Content

Open `constants.ts` in your code editor. You will see different sections labeled with comments (e.g., `// 1. PERSONAL DETAILS`).

### 1. Profile Photo Integration
In `PERSONAL_INFO`, there is a field called `profileImageUrl` set to `"/profile.jpg"`.
*   **Action Required**: You must place your professional photo in the `public` folder of your project (or the root folder if you aren't using a framework structure).
*   **Rename** your photo to `profile.jpg` so the app picks it up automatically.
*   **Tip**: Use a square (1:1 aspect ratio) photo for the Hero section and a portrait (4:5 or 3:4) photo if you want it to look specifically tailored for the Biography section.

### 2. Personal Details
*   **name**: Your full name.
*   **title**: Your job title (e.g., "Full Stack Developer").
*   **tagline**: A short, catchy sentence about you.
*   **about**: Your full biography. You can use `\n` to start new paragraphs.
*   **email**: Your contact email.
*   **socials**: Paste your profile URLs here. If you don't have one (e.g., LeetCode), just leave the quotes empty `""` or remove that line, and the icon will disappear automatically.

### 3. Resume Download
In `PERSONAL_INFO`, there is a field called `resumeUrl` set to `"/resume.pdf"`.
*   **Action Required**: You must place your actual PDF resume file in the `public` folder.
*   **Rename** your PDF file to `resume.pdf`.

### 4. Skills
Find the `SKILLS` list. Each skill looks like this:
```javascript
{ 
  name: "React", 
  category: "Frontend", 
  level: 90, 
  icon: "..." 
}
```
*   **icon**: We use [Devicon](https://devicon.dev/) urls. Go to their website to find more icon URLs.

### 5. Projects
Find the `PROJECTS` list.
*   **Images**: You can use an image URL from the internet (like Unsplash) or put an image file in your `public` folder and use the path (e.g., `/my-project.png`).

### 6. Experience & Education
These follow the same pattern (timeline style).
*   **Experience**: Your jobs and internships.
*   **Education**: Your degrees and schools.

---

## 🎨 Changing Colors
If you want to change the color theme (Teal/Emerald), open `index.html` (or `tailwind.config.js`).
Look for the `colors` section:
*   `primary`: Main brand color.
*   `secondary`: Hover state color.

## ⚠️ Important Tips
1.  **Don't delete the punctuation**: Be careful not to delete commas `,`, brackets `}`, or quotes `""`.
2.  **Save your file**: After making changes, save the file to see updates in your browser immediately.
