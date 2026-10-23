export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  targetRole: string;
  location: string;
  clientBadge?: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string[];
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  overview: string;
  problemStatement: string;
  myRoleAndContributions: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devopsAndTools: string[];
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  architectureDecisions: {
    title: string;
    reason: string;
  }[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  resultsAndImpact: string[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "asia-drone-store": {
    id: "asia-drone-store",
    slug: "asia-drone-store",
    title: "Asia Drone Store (ADS)",
    subtitle: "Enterprise Drone & UAV E-Commerce Platform",
    category: "MERN Stack E-Commerce & Hardware",
    targetRole: "Full-Stack MERN Developer",
    location: "Thiruvananthapuram, Kerala, India",
    clientBadge: "Enterprise UAV Platform",
    heroImage: "/projects/asia-drone-store.png",
    metaTitle: "Asia Drone Store Case Study | MERN Stack Developer Kerala - Harikrishnan G",
    metaDescription: "Case study of Asia Drone Store (ADS), an enterprise MERN stack e-commerce platform for commercial UAVs and payloads built by Harikrishnan G in Kerala, India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/asia-drone-store",
    keywords: [
      "MERN Stack Developer Kerala",
      "Harikrishnan G Full Stack Developer",
      "React Developer Kerala",
      "Asia Drone Store Case Study",
      "Full Stack E-Commerce MongoDB React Node"
    ],
    liveUrl: "https://www.asiadronestore.com",
    githubUrl: "https://github.com/Harikrishnang-cloud/ADS-Asia_Drone_Store",
    summary:
      "A specialized full-stack e-commerce web platform engineered for professional drones, agricultural UAV equipment, optical payloads, and certified drone accessories with dynamic specification filtering and secure checkout.",
    overview:
      "Asia Drone Store (ADS) was developed to provide commercial drone operators, agricultural enterprises, and industrial surveying teams with a dedicated procurement platform. Unlike generic retail platforms, industrial UAV purchasing requires rigorous technical specification comparisons, battery and payload compatibility checks, customized quoting for high-value gear, and streamlined procurement workflows.",
    problemStatement:
      "Commercial UAV equipment features complex technical specifications—including MTOW (Maximum Takeoff Weight), flight endurance, payload bus interfaces, and DGCA regulatory compliance. Buyers needed an intuitive interface to filter and evaluate gear, while store administrators required centralized inventory control, order dispatch tracking, and inquiry management.",
    myRoleAndContributions: [
      "Architected the end-to-end MERN stack web application (MongoDB, Express.js, React.js, Node.js) with modular component hierarchy and RESTful API patterns.",
      "Designed the responsive frontend using React.js, Redux Toolkit for state management, and Tailwind CSS for utility-first responsive styling.",
      "Engineered backend REST APIs with Express.js and Node.js for product catalog management, cart state persistence, and order processing.",
      "Configured MongoDB database schemas with Mongoose for hierarchical product categories, technical specifications, and user order histories.",
      "Integrated secure payment workflows and automated order status notifications.",
      "Optimized frontend bundle size, image lazy-loading, and responsive layouts across mobile, tablet, and desktop viewports."
    ],
    technologies: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript (ES6+)"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      database: ["MongoDB", "Mongoose ODM"],
      devopsAndTools: ["Git", "GitHub", "Postman", "Vercel / Cloud Deployment"]
    },
    keyFeatures: [
      {
        title: "Multi-Tiered Technical Spec Filtering",
        description: "Enables buyers to filter UAV platforms by flight time, payload capacity, transmission range, and application domain (surveying, agriculture, surveillance)."
      },
      {
        title: "Dynamic Shopping Cart & Instant Checkout",
        description: "Persistent cart state synchronized across client sessions with order summaries, tax calculations, and secure payment processing."
      },
      {
        title: "Administrative Inventory & Catalog Portal",
        description: "Backoffice management allowing store managers to update stock counts, edit high-resolution media galleries, and manage client inquiries."
      },
      {
        title: "Instant Search with Debounced Queries",
        description: "Real-time client search with debounced API requests to minimize server load while delivering immediate auto-suggestions."
      }
    ],
    architectureDecisions: [
      {
        title: "Redux Toolkit for Predictable Client State",
        reason: "Selected Redux Toolkit to manage cart items, user authentication tokens, and complex product filter states reliably without prop-drilling."
      },
      {
        title: "Normalized Mongoose Schema for UAV Specifications",
        reason: "Modeled specifications with flexible schema attributes so newly released payload accessories and drone models can be accommodated without schema migrations."
      },
      {
        title: "Stateless JWT Authentication",
        reason: "Implemented token-based authentication with secure HTTP cookies and authorization headers for scalable, stateless request verification."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Managing extensive UAV technical attribute filtering without client lag.",
        solution: "Implemented indexed MongoDB queries and debounced client-side filter dispatches, ensuring instant UI responsiveness even with deep specification trees."
      },
      {
        challenge: "Handling high-resolution product photography without sacrificing mobile performance.",
        solution: "Applied responsive image sizing, modern WebP formats, and native lazy-loading so catalog pages achieve fast First Contentful Paint (FCP)."
      }
    ],
    resultsAndImpact: [
      "Successfully launched the live platform at asiadronestore.com for enterprise commercial UAV inquiries and equipment sales.",
      "Reduced catalog search latency through query indexing and optimized React re-renders.",
      "Demonstrated production-grade MERN stack software engineering capabilities based in Kerala, India."
    ]
  },

  "employee-management-system": {
    id: "employee-management-system",
    slug: "employee-management-system",
    title: "Employee Management System (EMS)",
    subtitle: "Enterprise Internal SaaS & Workforce Management",
    category: "Next.js Enterprise SaaS",
    targetRole: "Next.js Developer India",
    location: "Thiruvananthapuram, Kerala, India",
    clientBadge: "Enterprise SaaS Application",
    heroImage: "/projects/employee-management-system.png",
    metaTitle: "Employee Management System Case Study | Next.js Developer India - Harikrishnan G",
    metaDescription: "Technical case study of an internal Enterprise SaaS Employee Management System built with Next.js, TypeScript, and Node.js by Harikrishnan G in India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/employee-management-system",
    keywords: [
      "Next.js Developer India",
      "Harikrishnan G Software Engineer",
      "Harikrishnan G Full Stack Developer",
      "Enterprise SaaS Next.js TypeScript",
      "Workforce Management System"
    ],
    liveUrl: "https://demo.asiasoftlab.in/",
    githubUrl: "https://github.com/asiasoftlab/EMS-Employee-s_Management_System",
    summary:
      "A multi-tenant internal enterprise workforce platform engineered with Next.js, TypeScript, and Node.js to manage attendance tracking, role-based access control, task delegation, and HR workflows.",
    overview:
      "The Employee Management System (EMS) was architected as an internal SaaS tool for corporate operations at Asia Softlab. The goal was to unify fragmented operational workflows—including daily attendance recording, formal leave request submissions, departmental announcements, and team task tracking—into a unified, secure dashboard.",
    problemStatement:
      "Growing teams require structured visibility into attendance, project deliverables, and internal communications without relying on disparate spreadsheets and messaging channels. Strict security controls were necessary to enforce data separation between HR managers, department leads, and employees.",
    myRoleAndContributions: [
      "Architected the full-stack system using Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
      "Implemented strict Role-Based Access Control (RBAC) ensuring appropriate authorization levels across Admin, HR, and Employee roles.",
      "Built real-time attendance logging and automated leave calculation engines with approval chains.",
      "Developed interactive task management boards with status columns, deadline reminders, and team assignment tracking.",
      "Designed clean, responsive dashboard interfaces adhering to corporate accessibility standards."
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "React.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      database: ["MongoDB", "Mongoose"],
      devopsAndTools: ["Git", "GitHub", "Vercel", "Docker"]
    },
    keyFeatures: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Granular authorization matrix protecting confidential employee records, salary tiers, and managerial approval queues."
      },
      {
        title: "Automated Attendance & Leave Engine",
        description: "Tracks check-in timestamps, verifies daily attendance records, and automatically updates remaining leave allowances upon managerial sign-off."
      },
      {
        title: "Task Assignment & Milestone Tracking",
        description: "Enables project leads to assign deliverables, establish deadlines, and monitor completion progress across sprints."
      },
      {
        title: "Centralized Corporate Notice Board",
        description: "Official channel for broadcasting company policies, holiday calendars, and organization-wide announcements."
      }
    ],
    architectureDecisions: [
      {
        title: "Next.js for Server-Driven Architecture & Fast Routing",
        reason: "Leveraged Next.js to combine responsive client dashboard components with clean API route structures and streamlined page rendering."
      },
      {
        title: "Strict TypeScript Typing Across the Stack",
        reason: "Implemented shared TypeScript interfaces for User, Attendance, Task, and Leave entities, drastically eliminating runtime type errors."
      },
      {
        title: "Middleware-Driven Route Guards",
        reason: "Protected administrative and HR routes via reusable JWT verification middleware before requests reach database handlers."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Accurately computing multi-month leave balances with varying leave categories (casual, sick, earned).",
        solution: "Created an isolated date-calculation utility service with edge-case tests for national holidays, weekends, and half-day increments."
      },
      {
        challenge: "Maintaining UI performance with dense tabular employee attendance logs.",
        solution: "Implemented server-side pagination with query caching, keeping dashboard render times under 150ms even for extensive historical records."
      }
    ],
    resultsAndImpact: [
      "Streamlined internal workforce coordination and eliminated manual spreadsheet tracking for attendance and leaves.",
      "Deployed to production demo environment at demo.asiasoftlab.in.",
      "Serves as a showcase of modern Next.js and TypeScript engineering practices by an India-based software engineer."
    ]
  },

  "asia-softlab": {
    id: "asia-softlab",
    slug: "asia-softlab",
    title: "Asia Softlab Pvt. Ltd.",
    subtitle: "Corporate Drone Technology & Service Platform",
    category: "React.js Corporate & Drone Tech",
    targetRole: "React Developer Kerala",
    location: "Thiruvananthapuram, Kerala, India",
    clientBadge: "Corporate Technology Platform",
    heroImage: "/projects/asia-softlab.png",
    metaTitle: "Asia Softlab Case Study | React Developer Kerala - Harikrishnan G",
    metaDescription: "Case study of the official corporate drone technology platform for Asia Softlab, built with React.js and Tailwind CSS by Harikrishnan G in Kerala, India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/asia-softlab",
    keywords: [
      "React Developer Kerala",
      "Harikrishnan G Software Engineer",
      "Software Developer in Kerala India",
      "Drone Technology Web Platform",
      "Asia Softlab Website Case Study"
    ],
    liveUrl: "https://asiasoftlab.in",
    githubUrl: "https://github.com/asiasoftlab/asiasoftlab-website",
    summary:
      "The official corporate web platform for Asia Softlab showcasing commercial drone services, certified DGCA pilot training registrations, geospatial surveying, and corporate event management.",
    overview:
      "Asia Softlab is an emerging drone technology firm in Kerala delivering industrial aerial surveying, agricultural multispectral mapping, and certified DGCA drone pilot training. The corporate website serves as their primary digital storefront, educating corporate clients, government tenders, and aspiring UAV pilots about services, training batches, and technological capabilities.",
    problemStatement:
      "The client required an authoritative, high-performance web platform that clearly communicates complex UAV capabilities (photogrammetry, LiDAR mapping, thermal inspection) while providing frictionless pilot training enrollment workflows and lead capture pipelines.",
    myRoleAndContributions: [
      "Led the frontend architecture and implementation using React.js and Tailwind CSS.",
      "Designed interactive service showcase sections highlighting geospatial mapping, drone inspections, and training curricula.",
      "Implemented responsive lead capture forms and training enrollment flows with input validation.",
      "Configured performance optimizations including asset compression, responsive layouts, and SEO metadata.",
      "Collaborated with executive leadership and UAV flight instructors to ensure regulatory accuracy and verified service offerings."
    ],
    technologies: {
      frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"],
      backend: ["RESTful API Integration", "Form Handling Services"],
      database: ["Contact Inquiries Management"],
      devopsAndTools: ["Plesk Hosting", "Git", "GitHub", "Domain DNS Configuration"]
    },
    keyFeatures: [
      {
        title: "Commercial UAV Service Catalog",
        description: "Detailed breakdowns of industrial surveying, agricultural spraying, aerial surveillance, and topographic modeling."
      },
      {
        title: "DGCA Pilot Training Registration Portal",
        description: "Course syllabus overview, eligibility criteria, upcoming batch schedules, and automated student inquiry submission."
      },
      {
        title: "High-Performance Responsive Design",
        description: "Mobile-first layouts ensuring rapid page loads and intuitive navigation across smartphones, tablets, and desktops."
      },
      {
        title: "Automated Lead Generation Pipelines",
        description: "Integrated inquiry forms routing prospective commercial drone clients directly to the business development desk."
      }
    ],
    architectureDecisions: [
      {
        title: "Component-Driven React Architecture",
        reason: "Structured reusable card, hero, and form components to facilitate rapid content updates for upcoming training batches and drone services."
      },
      {
        title: "Tailwind CSS for Minimal CSS Footprint",
        reason: "Utilized Tailwind utility classes to avoid bloated CSS stylesheets and ensure visual consistency across all pages."
      },
      {
        title: "Accessible Semantic Markup",
        reason: "Applied proper heading structures, ARIA attributes, and semantic landmarks to ensure complete accessibility and search engine readability."
      }
    ],
    challengesAndSolutions: [
      {
        challenge: "Presenting technical drone terminology and regulatory compliance in an approachable format for non-technical clients.",
        solution: "Created structured visual cards with clear icons, bulleted capability lists, and dedicated FAQ sections explaining DGCA certification requirements."
      },
      {
        challenge: "Ensuring swift page loading on mobile devices across varying network conditions in Kerala.",
        solution: "Optimized media assets, eliminated heavy runtime libraries, and leveraged clean semantic markup for fast First Meaningful Paint."
      }
    ],
    resultsAndImpact: [
      "Live platform at asiasoftlab.in generating steady inquiries for commercial drone mapping and DGCA pilot training.",
      "Achieved high user satisfaction with seamless registration flows and fast mobile performance.",
      "Demonstrated specialized domain expertise in UAV technology and React.js web engineering in Kerala, India."
    ]
  }
};
