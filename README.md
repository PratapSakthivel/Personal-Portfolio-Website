<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1g0ZWtiCwxfUl_qt2pW4Ra5QDZHO2Abxw

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`










# Architecture & Tech Stack Guide

This document provides a technical deep-dive into how this portfolio is built and the technologies powering it.

## 🛠 The Tech Stack

This project is built using a modern, lightweight, and high-performance stack:

- **Frontend Library:** [React 19](https://react.dev/) - Utilizing the latest Concurrent Rendering features and the new `use` hook patterns.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety across components and data structures.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development and high-performance styling without CSS-in-JS overhead.
- **AI Engine:** [Google Gemini API](https://ai.google.dev/) - Integrated via the `@google/genai` SDK to provide an intelligent, context-aware chatbot.
- **Icons:** [Lucide React](https://lucide.dev/) - A collection of beautiful, consistent SVG icons.
- **Module Loading:** Native Browser ESM - Utilizing [esm.sh](https://esm.sh/) to import dependencies directly in the browser via `importmap`, eliminating the need for a complex local build step for development.

---

## 🏗 How it's Built (Architecture)

The application follows a **Modular Component-Based Architecture** designed for maximum maintainability and performance.

### 1. The Entry Point
- **`index.html`**: The skeleton of the app. It includes the Tailwind CDN, global styles, and a crucial `<script type="importmap">` which tells the browser where to find React and other libraries on the web.
- **`index.tsx`**: The React entry point that initializes the virtual DOM and mounts the `App` component.

### 2. Centralized Data (`constants.ts`)
To make the portfolio "template-ready," all personal content is abstracted into a single source of truth.
- **Personal Info**: Name, socials, and biography.
- **Structured Lists**: Projects, Skills, Experience, and Certifications.
- **AI Instructions**: The `SYSTEM_INSTRUCTION` string defines the chatbot's personality and knowledge base.

### 3. Service Layer (`services/geminiService.ts`)
The AI logic is decoupled from the UI.
- It initializes a `GoogleGenAI` instance using the environment's `API_KEY`.
- It creates a stateful `Chat` session that persists across messages.
- It handles error states gracefully, ensuring the UI remains functional even if the API is unavailable.

### 4. Component Breakdown
The UI is divided into functional units:
- **Layout**: `Navbar`, `Footer`, `BackToTop`.
- **Sections**: `Hero`, `About`, `Skills`, `Projects`, `Certifications`, `Contact`.
- **Interactive**: `AIChatAssistant` (Floating Chat), `ProjectModal` (Detailed views).

### 5. Reactive UI & State
- **Hooks**: We use `useState` for UI states (modals, mobile menus), `useEffect` for scroll listeners and animations, and `useRef` for auto-scrolling the chat history.
- **Animations**: Powered by Tailwind's transition utilities and custom CSS keyframes (floating, scrolling, fading).

---

## 🚀 Deployment & Development

### Development
Since we use native ESM, you can serve this directory using any simple static file server (like `npx serve .` or Live Server). The browser handles the "building" by fetching modules on demand.

### Production
For production, it is recommended to use a bundler (like Vite) to minify code and optimize assets. The code is written in standard ES6+ TypeScript, making it compatible with all modern build tools.

## 🤖 AI Customization
The Chat Assistant is powered by the `gemini-3-flash-preview` model. Its behavior is controlled by the `SYSTEM_INSTRUCTION` in `constants.ts`. You can change its "personality" by modifying that text—for example, making it more humorous, more technical, or strictly professional.