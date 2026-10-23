import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("Error: dist/index.html does not exist. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf-8");

// Case studies metadata and content for static prerendering
const caseStudiesData = [
  {
    slug: "asia-drone-store",
    title: "Asia Drone Store (ADS)",
    subtitle: "Enterprise Drone & UAV E-Commerce Platform",
    category: "MERN Stack E-Commerce & Hardware",
    targetRole: "Full-Stack MERN Developer",
    location: "Thiruvananthapuram, Kerala, India",
    metaTitle: "Asia Drone Store Case Study | MERN Stack Developer Kerala - Harikrishnan G",
    metaDescription: "Case study of Asia Drone Store (ADS), an enterprise MERN stack e-commerce platform for commercial UAVs and payloads built by Harikrishnan G in Kerala, India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/asia-drone-store",
    liveUrl: "https://www.asiadronestore.com",
    githubUrl: "https://github.com/Harikrishnang-cloud/ADS-Asia_Drone_Store",
    overview: "Asia Drone Store (ADS) was developed to provide commercial drone operators, agricultural enterprises, and industrial surveying teams with a dedicated procurement platform. Unlike generic retail platforms, industrial UAV purchasing requires rigorous technical specification comparisons, battery and payload compatibility checks, and streamlined procurement workflows.",
    problemStatement: "Commercial UAV equipment features complex technical specifications—including MTOW (Maximum Takeoff Weight), flight endurance, payload bus interfaces, and DGCA regulatory compliance. Buyers needed an intuitive interface to filter and evaluate gear, while store administrators required centralized inventory control.",
    contributions: [
      "Architected the end-to-end MERN stack web application (MongoDB, Express.js, React.js, Node.js) with modular component hierarchy and RESTful API patterns.",
      "Designed the responsive frontend using React.js, Redux Toolkit for state management, and Tailwind CSS for utility-first styling.",
      "Engineered backend REST APIs with Express.js and Node.js for product catalog management, cart state persistence, and order processing.",
      "Configured MongoDB database schemas with Mongoose for hierarchical product categories and technical specifications.",
      "Integrated secure payment workflows and automated order status notifications."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "RESTful APIs"]
  },
  {
    slug: "employee-management-system",
    title: "Employee Management System (EMS)",
    subtitle: "Internal Enterprise SaaS & Workforce Management",
    category: "Next.js Enterprise SaaS",
    targetRole: "Next.js Developer India",
    location: "Thiruvananthapuram, Kerala, India",
    metaTitle: "Employee Management System Case Study | Next.js Developer India - Harikrishnan G",
    metaDescription: "Technical case study of an internal Enterprise SaaS Employee Management System built with Next.js, TypeScript, and Node.js by Harikrishnan G in India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/employee-management-system",
    liveUrl: "https://demo.asiasoftlab.in/",
    githubUrl: "https://github.com/asiasoftlab/EMS-Employee-s_Management_System",
    overview: "The Employee Management System (EMS) was architected as an internal SaaS tool for corporate operations at Asia Softlab to unify fragmented operational workflows—including daily attendance recording, formal leave request submissions, departmental announcements, and team task tracking.",
    problemStatement: "Growing teams require structured visibility into attendance, project deliverables, and internal communications without relying on disparate spreadsheets and messaging channels. Strict security controls were necessary to enforce data separation between HR managers, department leads, and employees.",
    contributions: [
      "Architected the full-stack system using Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
      "Implemented strict Role-Based Access Control (RBAC) ensuring appropriate authorization levels across Admin, HR, and Employee roles.",
      "Built real-time attendance logging and automated leave calculation engines with approval chains.",
      "Developed interactive task management boards with status columns, deadline reminders, and team assignment tracking."
    ],
    techStack: ["Next.js", "TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"]
  },
  {
    slug: "asia-softlab",
    title: "Asia Softlab Pvt. Ltd.",
    subtitle: "Corporate Drone Technology & Service Platform",
    category: "React.js Corporate & Drone Tech",
    targetRole: "React Developer Kerala",
    location: "Thiruvananthapuram, Kerala, India",
    metaTitle: "Asia Softlab Case Study | React Developer Kerala - Harikrishnan G",
    metaDescription: "Case study of the official corporate drone technology platform for Asia Softlab, built with React.js and Tailwind CSS by Harikrishnan G in Kerala, India.",
    canonicalUrl: "https://harikrishnang.vercel.app/projects/asia-softlab",
    liveUrl: "https://asiasoftlab.in",
    githubUrl: "https://github.com/asiasoftlab/asiasoftlab-website",
    overview: "Asia Softlab is an emerging drone technology firm in Kerala delivering industrial aerial surveying, agricultural multispectral mapping, and certified DGCA drone pilot training. The corporate website serves as their primary digital storefront.",
    problemStatement: "The client required an authoritative, high-performance web platform that clearly communicates complex UAV capabilities while providing frictionless pilot training enrollment workflows and lead capture pipelines.",
    contributions: [
      "Led the frontend architecture and implementation using React.js and Tailwind CSS.",
      "Designed interactive service showcase sections highlighting geospatial mapping, drone inspections, and training curricula.",
      "Implemented responsive lead capture forms and training enrollment flows with input validation.",
      "Configured performance optimizations including asset compression, responsive layouts, and SEO metadata."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Plesk Hosting", "REST APIs"]
  }
];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let generatedCount = 0;

for (const study of caseStudiesData) {
  const targetDir = path.join(distDir, "projects", study.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  let html = baseHtml;

  // 1. Replace Title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(study.metaTitle)}</title>`
  );

  // 2. Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(study.metaDescription)}" />`
  );

  // 3. Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${study.canonicalUrl}" />`
  );

  // 4. Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeHtml(study.metaTitle)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeHtml(study.metaDescription)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${study.canonicalUrl}" />`
  );

  // 5. Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(study.metaTitle)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(study.metaDescription)}" />`
  );
  html = html.replace(
    /<meta name="twitter:url" content=".*?" \/>/,
    `<meta name="twitter:url" content="${study.canonicalUrl}" />`
  );

  // 6. Pre-rendered Semantic Body inside #root for Search Engine crawlers
  const semanticArticle = `
    <div class="crawler-accessible-content" style="max-width: 900px; margin: 0 auto; padding: 2rem; font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #111;">
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> / <a href="/#projects">Projects</a> / <span>${escapeHtml(study.title)}</span>
      </nav>
      <header>
        <p style="color: #666; font-size: 0.9rem;">${escapeHtml(study.category)} | ${escapeHtml(study.location)}</p>
        <h1>${escapeHtml(study.title)}</h1>
        <p style="font-size: 1.2rem; color: #444;">${escapeHtml(study.subtitle)}</p>
        <p><strong>Role:</strong> ${escapeHtml(study.targetRole)}</p>
        ${study.liveUrl ? `<p><a href="${study.liveUrl}">Visit Live Platform</a></p>` : ""}
        ${study.githubUrl ? `<p><a href="${study.githubUrl}">View GitHub Repository</a></p>` : ""}
      </header>
      <main>
        <section>
          <h2>Project Overview</h2>
          <p>${escapeHtml(study.overview)}</p>
        </section>
        <section>
          <h2>The Problem &amp; Requirement</h2>
          <p>${escapeHtml(study.problemStatement)}</p>
        </section>
        <section>
          <h2>Technical Contributions by Harikrishnan G</h2>
          <ul>
            ${study.contributions.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
          </ul>
        </section>
        <section>
          <h2>Verified Technical Stack</h2>
          <ul>
            ${study.techStack.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
          </ul>
        </section>
      </main>
      <footer style="margin-top: 2rem; border-top: 1px solid #ddd; padding-top: 1rem;">
        <p><a href="/">&larr; Return to Harikrishnan G Portfolio</a></p>
      </footer>
    </div>
  `;

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://harikrishnang.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://harikrishnang.vercel.app/#projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": study.title,
            "item": study.canonicalUrl
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": study.title,
        "applicationCategory": study.category,
        "operatingSystem": "Web",
        "description": study.overview,
        "author": {
          "@type": "Person",
          "name": "Harikrishnan G",
          "url": "https://harikrishnang.vercel.app/"
        },
        "url": study.liveUrl || study.canonicalUrl
      }
    ]
  };

  const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(caseStudyJsonLd, null, 2)}\n    </script>`;
  html = html.replace("</head>", `  ${jsonLdTag}\n  </head>`);

  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>\s*<noscript>/,
    `<div id="root">\n${semanticArticle}\n    </div>\n\n    <noscript>`
  );

  // Write prerendered index.html
  fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
  generatedCount++;
  console.log(`Prerendered: /projects/${study.slug}/index.html`);
}

console.log(`Successfully prerendered ${generatedCount} static routes for search engines.`);
