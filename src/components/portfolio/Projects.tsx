import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Code, Globe,Terminal,FileText, PiggyBank, Newspaper, Cloud } from "lucide-react";

interface ProjectProps {
  projectImages?: {
    bookLove?: string;
    codeRunner?: string;
    finance?: string;
    pdfConverter?: string;
    blog?: string;
    weather?: string;
  };
}

const mainProject = {
  title: "Book-Love",
  subtitle: "E-commerce Website",
  description: "An online bookstore featuring multiple categories, coupon support, review system, and admin management tools developed as a personal full-stack project.",
  features: [
    "Built a full-stack MERN application with 3,500+ lines of code",
    "15+ features including wishlist, coupons, ratings/reviews",
    "Admin dashboard to manage 100+ books with analytics",
    "Integrated Razorpay and Google OAuth 2.0",
  ],
  techStack: ["Express.js", "MongoDB", "Node.js", "Passport.js", "Tailwind CSS", "Cloudinary", "AWS EC2"],
  icon: ShoppingCart,
};

const miniProjects = [
  {
    title: "Code Runner",
    description: "Web-based platform to write, execute, and test code in multiple languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    livelink:"https://dev.harikrishnang.shop/"
  },
  {
    title: "Finance Manager",
    description: "Track expenses, plan budgets and gain financial insights",
    icon: PiggyBank,
    color: "from-green-500 to-emerald-500",
    livelink:"https://clearcoin-dash.lovable.app/"
  },
  {
    title: "PDF Converter",
    description: "Upload and convert JPG, PNG, TXT → PDF",
    icon: FileText,
    color: "from-orange-500 to-amber-500",
    livelink:"https://github.com/Harikrishnang-cloud/Online_PDF_Converter"
  },
  {
    title: "Personal Blog",
    description: "Sharing thoughts and experiences from daily life",
    icon: Newspaper,
    color: "from-purple-500 to-pink-500",
    livelink:"https://github.com/Harikrishnang-cloud/Personal-Blogs"
  },
  {
    title: "Weather App",
    description: "Check temp, sunset, humidity, UV index based on city",
    icon: Cloud,
    color: "from-indigo-500 to-violet-500",
    livelink:"https://github.com/Harikrishnang-cloud/Whether-App"
  },
];

const Projects = ({ projectImages }: ProjectProps) => {
  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've built, from complete e-commerce platforms to utility tools
          </p>
        </motion.div>

        {/* Main Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
                  <img
                    src="/booklove.jpg"
                    alt="Book-Love E-commerce"
                    className="w-full h-full object-cover"
                  />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/Harikrishnang-cloud/nodewebapp"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://booklove-blue.vercel.app/"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <mainProject.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{mainProject.title}</h3>
                  <p className="text-sm text-muted-foreground">{mainProject.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{mainProject.description}</p>
              <ul className="space-y-3 mb-6">
                {mainProject.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {mainProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-8 text-center"
          >
            Other Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {miniProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.livelink}
                target="blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} mb-4`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
