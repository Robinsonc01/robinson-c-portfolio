export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'seo' | 'productivity' | 'soft';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Internship {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  link: string;
}

export interface VolunteerExperience {
  role: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface Certification {
  name: string;
  organization: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "ROBINSON C",
  title: "Frontend Developer | UI/UX Enthusiast | SEO & WordPress Learner",
  shortIntro: "An adaptable Information Technology graduate from Coimbatore, passionate about building clean websites, learning digital tools, and contributing reliable results to growing teams.",
  aboutLong: "I am a hardworking and adaptable B.Sc. Information Technology graduate with practical knowledge in frontend development, UI/UX basics, SEO, WordPress, and digital tools. I have hands-on experience through internship work, academic projects, and community event coordination. I am a quick learner with a practical mindset, strong teamwork ability, and a willingness to grow with the organization.",
  email: "robinson2koff@gmail.com",
  phone: "6381483366",
  location: "Coimbatore",
  linkedin: "linkedin.com/in/robinson-c",
  availability: "Immediate Joiner",
  languages: ["English", "Tamil"],
  highlights: [
    "B.Sc. Information Technology",
    "70% Academic Score",
    "Immediate Joiner",
    "Frontend Internship Experience",
    "Volunteer Event Coordination Experience"
  ]
};

export const SKILLS: Skill[] = [
  // Frontend Skills
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  
  // Backend / Database Basics
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  
  // Design Tools
  { name: "Figma", category: "design" },
  { name: "Blender", category: "design" },
  { name: "Basic UI/UX Principles", category: "design" },
  
  // CMS & SEO
  { name: "WordPress", category: "seo" },
  { name: "On-Page SEO", category: "seo" },
  { name: "Off-Page SEO", category: "seo" },
  { name: "SEO Basics", category: "seo" },
  
  // Productivity Tools
  { name: "MS Office Suite", category: "productivity" },
  
  // Soft Skills
  { name: "Adaptability", category: "soft" },
  { name: "Teamwork", category: "soft" },
  { name: "Practical Problem Solving", category: "soft" },
  { name: "Decision Making", category: "soft" },
  { name: "Strategic Thinking", category: "soft" },
  { name: "Quick Learner", category: "soft" },
  { name: "Public Speaking", category: "soft" },
  { name: "Event Coordination", category: "soft" }
];

export const SERVICES: Service[] = [
  {
    id: "frontend-dev",
    title: "Frontend Website Development",
    description: "Building modern, fast, and responsive web pages with clean HTML, CSS, and interactive JavaScript matching professional standards.",
    iconName: "Code"
  },
  {
    id: "wordpress-support",
    title: "WordPress Website Support",
    description: "Creating, maintaining, and configuring WordPress websites, customizing themes, managing plugins, and ensuring seamless site setup.",
    iconName: "Globe"
  },
  {
    id: "seo-support",
    title: "Basic SEO Support",
    description: "Applying critical On-Page and Off-Page SEO practices, keywords optimization, and basic analysis to improve search engine rankings.",
    iconName: "TrendingUp"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Support",
    description: "Designing user-centered interactive mockups and clean application wireframes in Figma, using fundamental design principles.",
    iconName: "FigmaIcon"
  },
  {
    id: "event-coordination",
    title: "Event & Team Coordination",
    description: "Organizing logistics, streamlining communication, scheduling schedules, and leading teamwork for church, social, or community gatherings.",
    iconName: "Users"
  },
  {
    id: "digital-content",
    title: "Digital Content Support",
    description: "Producing digital layouts, managing documents via MS Office Suite, and basic 3D model setups with Blender.",
    iconName: "LayoutGrid"
  }
];

export const INTERNSHIP: Internship = {
  role: "Frontend Developer Intern",
  company: "Markdot Intellect, Coimbatore",
  location: "Coimbatore",
  duration: "May 2025",
  description: [
    "Designed clean and responsive website interfaces using HTML and CSS.",
    "Gained practical exposure to real-world frontend development workflows.",
    "Adapted quickly to a professional team environment."
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Based Recommendation System for Volunteer Allocation",
    description: "Developed a web-based platform to automate and manage volunteer allocation using a recommendation approach based on skills, availability, preferences, and participation history.",
    features: [
      "Member and volunteer management",
      "Event creation",
      "Volunteer assignment",
      "Scoring-based matching algorithm",
      "Real-time notification concept",
      "Centralized coordination platform"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    link: "#projects"
  }
];

export const VOLUNTEER: VolunteerExperience = {
  role: "Volunteer Event Coordinator",
  points: [
    "Coordinated multiple church-related events.",
    "Managed logistics, scheduling, and smooth execution for social gatherings.",
    "Organized and supported youth camps and social activity events.",
    "Handled communication and task assignments.",
    "Demonstrated patience, reliability, teamwork, and organizational skills."
  ]
};

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Information Technology",
    institution: "Sankara College of Science and Commerce",
    period: "2023–2025",
    score: "70%"
  },
  {
    degree: "HSC",
    institution: "SFV Government Higher Secondary School",
    period: "2021–2023"
  },
  {
    degree: "SSLC",
    institution: "SFV Government Higher Secondary School",
    period: "2020–2021"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Emotional Intelligence – Swayam Learnathon 2024",
    organization: "ICT Academy",
    year: "2024"
  },
  {
    name: "UI & UX Design using Figma",
    organization: "Postulates",
    year: "2024"
  }
];
