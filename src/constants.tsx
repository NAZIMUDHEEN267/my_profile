export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    links?: {
      playStore?: string;
      appStore?: string;
      web?: string;
    };
  }
  
  export interface SkillCategory {
    title: string;
    skills: string[];
  }
  
  export interface BioOption {
    id: string;
    label: string;
    content: string;
  }

export const PERSONAL_INFO = {
  name: "Nazimudheen TI",
  title: "Full-Stack Web & App Developer",
  subtitle: "MERN | Expo | React Native",
  email: "nazimudheenti@gmail.com",
  phone: "+971562144286",
  location: "Muwailah, Sharjah, UAE",
  website: "nazimudheen.tech",
  linkedin: "in/nazimudheen-ti-405a341b1"
};

export const BIO_OPTIONS: BioOption[] = [
  {
    id: 'standard',
    label: 'Standard Professional',
    content: "I am a dedicated MERN Stack Developer with over 2 years of experience building scalable web and mobile applications. Specializing in React, Node.js, and MongoDB, I have hands-on experience developing real-time features, secure payment integrations, and comprehensive ERP modules. Whether engineering robust hybrid apps with React Native or optimizing backend architectures, I focus on delivering clean, maintainable code and user-centric solutions."
  },
  {
    id: 'technical',
    label: 'Technical Deep-Dive',
    content: "Full-Stack Developer proficient in the MERN ecosystem and React Native (Expo). My expertise spans the entire development lifecycle, from architecting scalable backends with Express.js and MongoDB to crafting responsive frontends using React, TypeScript, and Tailwind CSS. I have successfully implemented CI/CD pipelines, Dockerized applications, and integrated AI agents for automation. My work includes complex state management with Redux Toolkit."
  },
  {
    id: 'story',
    label: 'Project & Impact Focused',
    content: "With a passion for solving real-world problems through technology, I have engineered diverse solutions ranging from e-commerce platforms like Bitesmate and QbuyPanda to internal ERP systems for HR management. I thrive in cross-functional teams, collaborating closely with stakeholders to translate requirements into seamless digital experiences. Currently, I am expanding my skillset into AI-driven development and DevOps automation at Easedementia Technologies."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: "MERN Stack Developer",
    company: "Easedementia Technologies Pvt. lmt",
    period: "09/2025 – 03/2026", 
    location: "Thykoodam, Ernakulam",
    description: [
      "Designing and developing full-stack applications using MERN with scalable architecture.",
      "Implementing AI agents and chatbots to automate customer interactions.",
      "Introducing Docker and CI/CD automation to streamline deployment."
      // "Integrating Redis for high-performance data processing."
    ]
  },
  {
    id: '2',
    role: "React developer",
    company: "Lifisin Technologies Pvt. Ltd.",
    period: "01/2025 – 08/2025",
    location: "Eranakulam, Kerala",
    description: [
      "Collaborated on ERP modules, specifically HR and Payroll/Salary management.",
      "Built reusable components and managed application-wide state with Redux Toolkit.",
      "Ensured scalable and maintainable codebase using TypeScript and React.",
      "Worked closely with backend engineers and QA for timely delivery."
    ]
  },
  {
    id: '3',
    role: "React Native Developer, React Developer",
    company: "Diginest solutions",
    period: "05/2023 – 01/2025",
    location: "Technopark, Trivandrum",
    description: [
      "Engineered robust hybrid software solutions utilizing React Native and JavaScript.",
      "Designed and developed e-commerce applications for Bitesmate and Qbuypanda.",
      "Maintained React web applications for RightPath and the Bitesmate admin app.",
      "Created mobile applications catering to unique client needs."
    ]
  }
];

export const ABOUT_CONTENT = {
  paragraph: "I am a dedicated Full-Stack Developer with over 2 years of experience specializing in the MERN stack and React Native. My expertise lies in building scalable web and mobile applications, from architecting robust backends with Node.js and MongoDB to crafting intuitive frontends using React and Tailwind CSS. I have a proven track record of delivering real-time features, payment integrations, and ERP solutions, always prioritizing clean architecture and efficient code.",
  highlights: [
    {
      title: "Cross-Platform Mobile",
      description: "Expertise in building hybrid apps using React Native and Expo for seamless iOS and Android experiences."
    },
    {
      title: "Full-Stack Engineering",
      description: "Proficient in the MERN stack (MongoDB, Express, React, Node.js) for end-to-end application development."
    },
    {
      title: "Scalable Architecture",
      description: "Experience with Docker clean coding practices to ensure high performance and maintainability."
    }
  ]
};


export const PROJECTS: Project[] = [
  {
    id: 'bitesmate',
    title: "Bitesmate - Food Ordering App",
    description: "An innovative online food ordering service with a slot-based ordering system. Features a responsive modern design using Tailwind CSS and React Native Paper.",
    techStack: ["React Native", "Tailwind CSS", "Redux"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.diginest.bitesmate",
      appStore: "https://apps.apple.com/in/app/bitesmate/id67367597"
    }
  },
  {
    id: 'qbuypanda',
    title: "QbuyPanda - E-Commerce",
    description: "Multi-flavor e-commerce platform (Fashion, Green, Panda). Features location-based suggestions, real-time tracking, and vendor-specific timing.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.qbuypanda.app",
      appStore: "https://apps.apple.com/in/app/qbuypanda/id6690916"
    }
  },
  {
    id: 'ayurdx',
    title: "Ayur-DX - Cure and Consultation",
    description: "Comprehensive mobile app for purchasing medicine. Integrated Firebase Push Notifications and PhonePe Payment Gateway.",
    techStack: ["React Native", "Firebase", "PhonePe API"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.diginest.ayurdx",
      appStore: "https://apps.apple.com/us/app/ayur-dx-cure-and-consultation/id650361636"
    }
  },
  {
    id: 'lavesco',
    title: "Lavesco - Job Portal",
    description: "Job provider and seeker platform. Allows posting jobs, applying, and tracking status with real-time syncing across admin, provider, and customer apps.",
    techStack: ["React Native", "Redux Toolkit", "REST API"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.lavescojobs"
    }
  },
  {
    id: 'easedementia',
    title: "Easedementia Company site",
    description: "Comprehensive dementia care platform providing personalized assessments, AI-powered chat support, caregiver education, remote monitoring, and multi-user access for patients, families, and therapists.",
    techStack: ["React", "Express", "Typescript", "MongoDB"],
    links: {
      web: "https://easedementia.com"
    }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Router DOM"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MERN Stack"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "Docker", "CI/CD", "Firebase", "REST APIs", "Cursor", "AI Agents"]
  }
];