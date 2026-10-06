import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Building2, ShoppingBag, Users, GraduationCap, Trophy, Plane, Bot, Zap, CheckCircle2, Globe2, Workflow, Sparkles, ArrowRight, ShieldCheck, Database, Mail, TableProperties, ZoomIn, X } from "lucide-react";

export interface MajorProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  clientBadge?: string;
  description: string;
  features: string[];
  techStack: string[];
  image?: string;
  icon: any;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

const majorProjects: MajorProject[] = [
  {
    id: "asia-softlab",
    title: "1. Asia Softlab Pvt. Ltd.",
    subtitle: "Corporate Drone Technology & Service Platform",
    category: "Drone Tech & Corporate",
    image: "/projects/asia-softlab.png",
    icon: Building2,
    description:
      "Official corporate web platform for Asia Softlab showcasing commercial drone services, certified DGCA pilot training courses, geospatial mapping, and industry technology events.",
    features: [
      "Commercial service showcase for drone surveying, agricultural mapping, and industrial inspections",
      "Interactive pilot training course registration system and event management portal",
      "Modern, SEO-optimized responsive architecture with performance-tuned loading speeds",
      "Integrated inquiry workflows and automated lead-generation pipelines",
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Plesk-Hosting",],
    liveUrl: "https://asiasoftlab.in",
    githubUrl: "https://github.com/asiasoftlab/asiasoftlab-website",
  },
  {
    id: "asia-drone-store",
    title: "2. Asia Drone Store (ADS)",
    subtitle: "Enterprise Drone E-Commerce Platform",
    category: "E-Commerce & Hardware",
    image: "/projects/asia-drone-store.png",
    icon: ShoppingBag,
    description:
      "Full-featured e-commerce platform dedicated to professional drones, agricultural UAV equipment, spare parts, optical payloads, and certified drone accessories.",
    features: [
      "Multi-category product catalog with technical spec filtering, instant search, and comparison",
      "Secure cart, streamlined checkout, real-time order tracking, and invoice generation",
      "Comprehensive admin dashboard for inventory management, customer inquiries, and price controls",
      "Secure payment gateway integration with multi-currency handling",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Payment Gateway"],
    liveUrl: "https://www.asiadronestore.com",
    githubUrl: "https://github.com/Harikrishnang-cloud/ADS-Asia_Drone_Store",
  },
  {
    id: "employee-management-system",
    title: "3. Employee Management System (EMS)",
    subtitle: "Internal Enterprise SaaS Application",
    category: "Enterprise Software",
    image: "/projects/employee-management-system.png",
    icon: Users,
    description:
      "Internal workforce management system built to streamline authentication, daily biometric/web attendance, task assignments, company notices, and internal HR policy management.",
    features: [
      "Role-based access control (Admin, HR, Employee) with secure JWT-based authorization",
      "Attendance logging, automated leave request management, and approval workflows",
      "Task assignment system with deadline alerts, status boards, and progress monitoring",
      "Centralized company notice board, live chat, and interactive company policy repository",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    liveUrl: "https://demo.asiasoftlab.in/",
    githubUrl: "https://github.com/asiasoftlab/EMS-Employee-s_Management_System",
  },
  {
    id: "asva-academy",
    title: "4. ASVA (Asia Softlab Virtual Academy)",
    subtitle: "Drone E-Learning & Training Management Platform",
    category: "EdTech & E-Learning",
    image: "/projects/asva-academy.png",
    icon: GraduationCap,
    description:
      "Specialized e-learning platform delivering structured drone pilot training modules, simulator curriculum, online assessments, and digital certificate verification.",
    features: [
      "Structured video course delivery with chapter progression tracking and course materials",
      "Interactive quiz assessments with automated certificate generation upon course completion",
      "Instructor dashboard for managing student batches, flight hours, and grading",
      "Seamless student enrollment workflows with automated email confirmations",
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/asiasoftlab/AsiaSoftlab-Learning",
  },
  {
    id: "asia-drone-flying-club",
    title: "5. Asia Drone Flying Club",
    subtitle: "Community & Drone Sports Platform",
    category: "Sports & Community",
    image: "/projects/asia-drone-flying-club.png",
    icon: Trophy,
    description:
      "Web portal designed for drone racing enthusiasts, recreational pilots, and club members to schedule flying field slots, register for drone sports tournaments, and join memberships.",
    features: [
      "Membership management with tiered member profiles and pilot licensing records",
      "Drone race event registration with live schedule updates and leaderboard rankings",
      "Flying field / drone practice zone reservation system with real-time slot availability",
      "Community media gallery highlighting race footage, aerial reels, and pilot showcases",
    ],
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "REST APIs"],
    liveUrl: "https://www.asiadroneflyingclub.com/",
    githubUrl: "https://github.com/asiasoftlab/Asia_Drone_Flying_Club",
  },
  {
    id: "eshaare-tours",
    title: "6. Eshaare Tours",
    subtitle: "Travel, Hotel & Excursion Booking Platform",
    category: "Travel & Hospitality",
    clientBadge: "UAE Client Project",
    image: "/projects/eshaare-tours.png",
    icon: Plane,
    description:
      "Full-scale travel and tourism web application developed for a UAE-based tourism operator, offering flight ticketing, luxury hotel reservations, desert safari bookings, and custom travel packages.",
    features: [
      "Third-party flight and hotel reservation API integrations with real-time availability",
      "Custom tour package booking engine with automated itinerary and voucher generation",
      "Multi-currency support tailored for international tourists visiting UAE and GCC regions",
      "Mobile-optimized high-conversion booking flows with automated email confirmations",
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "REST APIs", "Tailwind CSS", "Payment Gateway", "EmailJS"],
    liveUrl: "https://eshaareuae.com/",
    githubUrl: "https://github.com/eshaare-developers/eshaare-tour",
  },
];

// Automation Workflows for the dedicated n8n showcase
const automationProjects = [
  {
    title: "7. AI-Powered Content Research & Generation",
    icon: Bot,
    description:
      "Automates web research by searching Google, extracting and filtering relevant content, removing duplicates, and using AI to generate structured documents from the collected information.",
    tools: [
      "n8n",
      "Google Search",
      "HTTP Request",
      "OpenAI API",
      "Google Docs",
    ],
  },
  {
    title: "8. Smart Email & Document Automation",
    icon: Mail,
    description:
      "Automates data processing using Google Sheets, conditional logic, file handling, and JavaScript to generate and send personalized emails while updating records automatically.",
    tools: [
      "n8n",
      "Google Sheets",
      "Gmail API",
      "JavaScript",
      "Google Docs",
    ],
  },
  {
    title: "9. AI-Powered Data Processing Workflow",
    icon: Workflow,
    description:
      "Processes spreadsheet records through HTTP requests and an AI agent powered by Google Gemini, applies JavaScript-based logic, and updates documents based on conditional results.",
    tools: [
      "n8n",
      "Google Sheets",
      "Google Gemini API",
      "HTTP Request",
      "JavaScript",
      "Google Docs",
    ],
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; liveUrl?: string } | null>(null);

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Major Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Major real-world enterprise platforms, e-commerce systems, drone tech applications, and AI automations I've built
          </p>
        </motion.div>

        {/* Major Web Applications List (Alternating Layout) */}
        <div className="space-y-12 lg:space-y-16 max-w-6xl mx-auto mb-20">
          {majorProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center p-6 md:p-8 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  {/* Visual / Screenshot Preview Panel */}
                  <div className={`lg:col-span-6 ${isEven ? "" : "lg:col-start-7"}`}>
                    <div className="relative group rounded-xl overflow-hidden border border-border bg-muted/60 shadow-md">
                      {/* Browser Mockup Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-card/90 border-b border-border/80 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono text-primary hover:underline truncate max-w-[200px] flex items-center gap-1"
                          >
                            <span>{project.liveUrl.replace(/^https?:\/\//, "")}</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[200px]">
                            {project.title.toLowerCase().replace(/\s+/g, "")}.com
                          </span>
                        )}
                        <div className="w-8" />
                      </div>

                      {/* Image Preview */}
                      {project.image ? (
                        <div className="relative aspect-[16/10] w-full overflow-hidden group/img bg-muted">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                          />
                          {/* Hover Overlay with working action buttons */}
                          <div className="absolute inset-0 bg-background/70 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4 backdrop-blur-[2px]">
                            <button
                              onClick={() => setSelectedImage({ src: project.image!, title: project.title, liveUrl: project.liveUrl })}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/95 hover:bg-card border border-border text-foreground text-xs font-semibold shadow-md transition-colors"
                            >
                              <ZoomIn className="w-3.5 h-3.5 text-primary" />
                              <span>Preview</span>
                            </button>
                            {project.liveUrl && project.liveUrl !== "#" && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-md transition-colors"
                              >
                                <span>Live Site</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Modern Visual Fallback for projects without screenshots */
                        <div className="relative aspect-[16/10] w-full p-6 flex flex-col justify-between bg-gradient-to-br from-card via-muted/60 to-card">
                          <div className="flex justify-end">
                            <span className="text-[11px] font-mono text-primary font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                              {project.category}
                            </span>
                          </div>
                          <div className="flex flex-col items-center justify-center text-center my-4">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 shadow-inner border border-primary/20">
                              <Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1 max-w-xs">{project.subtitle}</p>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-2">
                            <span className="flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                              Production Platform
                            </span>
                            <span className="font-mono text-[11px] text-primary">UAE Operations</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Details Panel */}
                  <div className={`lg:col-span-6 ${isEven ? "" : "lg:col-start-1"}`}>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                      </span>
                      {project.clientBadge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <Globe2 className="w-3.5 h-3.5" />
                          {project.clientBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights / Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground/80 border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl && project.liveUrl !== "#" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          <span>Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-muted text-muted-foreground border border-border/40">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                          Client / Enterprise Project
                        </span>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors border border-border"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                      )}

                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline ml-2"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Section: n8n Automation & AI Workflows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card border border-border p-6 md:p-10 relative overflow-hidden shadow-sm hover:border-primary/50 transition-colors"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10">
            {/* Automation Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <Workflow className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Case Study
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-muted text-foreground/80 text-xs font-medium">
                      Enterprise Automation
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    n8n Automation & AI Workflows
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                    End-to-end business process automation connecting webhooks, cloud databases, Google Sheets, and Google Gemini AI agents to eliminate manual operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {automationProjects.map((workflow, wIdx) => {
                const WIcon = workflow.icon || Workflow;
                return (
                  <motion.div
                    key={wIdx}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-200 shadow-sm"
                  >
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                        <WIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">
                          {workflow.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 pl-1">
                      {workflow.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                      {workflow.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-muted text-foreground/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Automation Tech Stack Tags & Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-muted/40 border border-border/40">
              <div className="flex items-center gap-2 text-xs text-muted-foreground text-center sm:text-left">
                <Database className="w-4 h-4 text-primary shrink-0" />
                <span>Integrated with Google Sheets API, Gemini LLM, Webhooks, REST APIs, and Email Gateways</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {["n8n", "Gemini API", "AI Agents", "Webhooks", "JSON Parser"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Modal for Full Project Screenshot Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-2 md:p-4"
            >
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-border">
                <h4 className="text-sm font-semibold text-foreground truncate pr-4">
                  {selectedImage.title} — Screenshot Preview
                </h4>
                <div className="flex items-center gap-2">
                  {selectedImage.liveUrl && selectedImage.liveUrl !== "#" && (
                    <a
                      href={selectedImage.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-muted/40 max-h-[80vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[80vh] w-auto object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
