import { Experience, Project, Skill, Certification, Education, Testimonial } from "./types";

// ==========================================
// 1. PERSONAL DETAILS
// Replace the values below with your own information.
// ==========================================

export const PERSONAL_INFO = {
  name: "Pratap S ",
  title: "Aspiring Software Developer  | AI Full Stack Developer",
  tagline: "Building digital experiences with modern technologies.",
  about: "I am an aspiring Software Developer with a strong foundation in Java, full stack development, and problem solving. I focus on building clean, scalable web applications and efficiently leveraging AI tools to accelerate development while maintaining strong core fundamentals. I enjoy learning new technologies and converting ideas into real-world solutions.",
  email: "pratapssakthivel@gmail.com",
  profileImageUrl: "/pic 1.jpg", // Path to your professional photo
  resumeUrl: "/resume.pdf", // Path to your resume
  socials: {
    github: "https://github.com/PratapSakthivel",
    linkedin: "https://www.linkedin.com/in/pratap-s-587b0b342/",
    leetcode: "https://leetcode.com/u/3LBnJZthaY/",
    hackerrank: "https://www.hackerrank.com/profile/pratapssakthivel",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/pratapsakthivel7",
  },
};

// ==========================================
// 2. SKILLS
// Add or remove skills to match your expertise.
// Using DevIcon for high quality SVG icons
// ==========================================

export const SKILLS: Skill[] = [
  { 
    name: "React", 
    category: "Frontend", 
    level: 50, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  { 
    name: "Tailwind", 
    category: "Frontend", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  { 
    name: "HTML5", 
    category: "Frontend", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  { 
    name: "CSS3", 
    category: "Frontend", 
    level: 50, 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  { 
    name: "Node.js", 
    category: "Backend", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },


  { 
    name: "Java", 
    category: "Backend", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  

  { 
    name: "Git", 
    category: "Tools", 
    level: 50,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  
];

// ==========================================
// 3. PROJECTS
// List your top projects here.
// ==========================================

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "SmartShelfX - AI-Based Inventory forecast & Auto-Restock ",
    description: "SmartShelfX is an AI-based inventory management system that helps businesses maintain optimal stock levels. It uses demand forecasting and real-time inventory tracking to reduce stockouts and overstocking, while supporting role-based access, dashboards, and automated restock recommendations..",
    detailedDescription: "This E-Commerce Dashboard is a full-stack application designed to help business owners manage their online stores efficiently. It features real-time analytics, inventory tracking, order management, and customer relationship tools. The frontend is built with Next.js for server-side rendering and improved SEO, while the backend uses Node.js and Prisma with a PostgreSQL database. Key features include dark mode support, exportable reports, and role-based access control.",
    tags: ["Angular 19", "HTML5", "CSS3", "TypeScript", "Node.js", "Express.js", "JWT (Authentication)", "Google Gemini 2.5 Flash (AI Forecasting)", "Chart.js", "Git & GitHub", "Postman"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    repoUrl: "https://github.com/PratapSakthivel/SmartShelfX-AI-Based-Inventory-Forecast-and-Auto-Restock-FINAL-",
    demoUrl: "https://drive.google.com/file/d/1wbyQQCu2ODFsMdB4reHwm-QuofYCqCL_/view?usp=sharing",
  },
  {
    id: "2",
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive personal portfolio showcasing projects, skills, experience, and certifications.",
    detailedDescription:
      "This portfolio is a responsive and component-based web application built to present personal projects, technical skills, experience, and certifications in a professional format. It includes structured project sections, reusable components, smooth navigation, and a clean user interface. The application follows a modular architecture for easy maintenance and scalability.",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "ES Modules (ESM)",
      "Git & GitHub"
    ],
    imageUrl:
      "https://www.mediabistro.com/wp-content/uploads/2016/02/tips-on-getting-your-copywriter-portfolio-started.jpg",
    repoUrl:
      "https://github.com/PratapSakthivel/Personal-Portfolio-Website/blob/main/README.md",
    demoUrl:
      "https://drive.google.com/drive/u/0/folders/12wDp9MBEvI3qMen6Oem8xac2wkYzpHSO",
  },
  
];

// ==========================================
// 4. EXPERIENCE
// Your work history.
// ==========================================

export const EXPERIENCE: Experience[] = [
  {
  id: "1",
  role: "Infosys Springboard Virtual Internship 6.0",
  company: "Infosys",
  period: "13th October 2023 – 3rd December 2023",
  description: "Worked on SmartShelfX, an AI-based inventory forecasting and auto-restock system, building dashboards, APIs, and alerts to reduce stockouts using data-driven insights."
}

  
];

// ==========================================
// 5. EDUCATION
// Your academic background.
// ==========================================

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Technology in Information Technology",
    institution: "VSB Engineering College, Karur",
    period: "2023 - Present",
    description: "Currently pursuing Bachelor of Technology in Information Technology.",
    cgpa: "8.0"
  },
  {
    id: "2",
    degree: "Higher Secondary Education",
    institution: "Ponnu Matriculation Higher Secondary School",
    period: "2022 - 2023",
    description: "Studied Mathematics, Physics, English, Tamil, Chemistry and Computer Science.",
    percentage: "83.5%"
  }
];


// ==========================================
// 6. CERTIFICATIONS
// Professional certifications and licenses.
// ==========================================

export const CERTIFICATIONS: Certification[] = [
  {
    id: "1",
    name: "Data Structures and Algorithms using Java",
    issuer: "Infosys Springboard",
    date: "July 4,2025",
    url: "https://drive.google.com/drive/u/0/folders/12wDp9MBEvI3qMen6Oem8xac2wkYzpHSO",
  }
];

// ==========================================
// 7. TESTIMONIALS
// What people say about you.
// ==========================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Working with Alex was a fantastic experience. They delivered the project on time and exceeded our expectations in terms of quality and attention to detail."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Senior Developer",
    company: "StartUp Lab",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Alex is one of the most dedicated developers I've had the pleasure to work with. Their problem-solving skills and ability to learn new technologies quickly are impressive."
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "CEO",
    company: "Creative Agency",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "I highly recommend Alex for any full-stack development role. They have a great eye for design and the technical know-how to bring complex ideas to life."
  }
];

export const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for ${PERSONAL_INFO.name}.
Your goal is to represent ${PERSONAL_INFO.name} professionally and answer questions about their background, skills, and work.
`;
