import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Github, Linkedin, Code2, Twitter, Instagram, MapPin, Mail, Phone, Youtube,
  FileText, ExternalLink, Bot, Sparkles,
} from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#25D366"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"
    />
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.47 14.38C17.17 14.23 15.69 13.5 15.42 13.4C15.14 13.3 14.94 13.25 14.74 13.55C14.54 13.85 13.97 14.53 13.79 14.73C13.62 14.93 13.44 14.95 13.14 14.8C12.84 14.65 11.87 14.33 10.73 13.31C9.84 12.51 9.24 11.53 9.06 11.23C8.89 10.93 9.04 10.77 9.19 10.62C9.33 10.49 9.49 10.27 9.64 10.1C9.79 9.92 9.84 9.8 9.94 9.6C10.04 9.4 9.99 9.22 9.91 9.07C9.84 8.92 9.24 7.44 8.99 6.84C8.75 6.26 8.5 6.34 8.31 6.33C8.14 6.32 7.94 6.32 7.74 6.32C7.54 6.32 7.21 6.39 6.94 6.69C6.66 6.99 5.89 7.72 5.89 9.2C5.89 10.67 6.96 12.1 7.11 12.3C7.26 12.5 9.23 15.53 12.24 16.83C12.95 17.14 13.51 17.32 13.95 17.46C14.67 17.69 15.32 17.66 15.84 17.58C16.42 17.5 17.62 16.86 17.87 16.16C18.12 15.45 18.12 14.85 18.04 14.73C17.97 14.6 17.77 14.53 17.47 14.38Z"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Technical Skills", href: "/#skills" },
    { name: "Selected Projects", href: "/#projects" },
    { name: "Work Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Certifications", href: "/#certifications" },
    { name: "Contact Me", href: "/#contact" },
  ];

  const caseStudies = [
    {
      name: "Asia Drone Store (ADS)",
      href: "/projects/asia-drone-store",
      tag: "MERN Stack E-Commerce",
    },
    {
      name: "Employee Management System (EMS)",
      href: "/projects/employee-management-system",
      tag: "Next.js Enterprise SaaS",
    },
    {
      name: "Asia Softlab Platform",
      href: "/projects/asia-softlab",
      tag: "React Drone Tech",
    },
    {
      name: "Eshaare Tours Dubai",
      href: "/projects/eshaare-tours-dubai",
      tag: "Next.js Travel Platform",
    },

  ];

  

  return (
    <footer className="w-full pt-16 pb-12 bg-muted/40 border-t border-border relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Information &amp; Navigation</h2>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/70">

          {/* Column 1: Identity, Bio & Geographic Entity Signals (GEO & AEO) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block text-2xl font-bold text-foreground tracking-tight hover:opacity-90 transition-opacity">
              HARIKRISHNAN G<span className="text-primary">.</span>
            </Link>

            <p className="text-xs uppercase tracking-wider font-semibold text-primary">
              Software Engineer · AI Engineer · Full-Stack Developer
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed pr-2">
              Software Engineer and Full-Stack Developer based in Kerala, India. Specializing in high-performance React.js, Next.js, and MERN stack applications, enterprise SaaS solutions, and intelligent AI automation workflows.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Kollam &amp; Thiruvananthapuram, Kerala, India</span>
            </div>

            
          </div>

          {/* Column 2: Navigation & Internal Linking (SEO) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground hover:underline transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground hover:underline transition-colors text-xs md:text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Project Case Studies (SEO & Search Intent) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Technical Case Studies
            </p>
            <ul className="space-y-3">
              {caseStudies.map((study) => (
                <li key={study.href}>
                  <Link
                    to={study.href}
                    className="group block text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors block">
                      {study.name}
                    </span>
                    <span className="text-[11px] text-primary/80 group-hover:text-primary block">
                      {study.tag}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#projects"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mt-1 font-medium"
                >

                  <span>View All 10+ Projects &amp; Automations &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Machine-Readable Discoverability (AEO & GEO) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground">
              Contact &amp; Discoverability
            </p>

            <div className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
              <div>
                <span className="text-[12px] text-muted-foreground block">Direct Email</span>
                <a
                  href="mailto:harikrishnangmonkuttan@gmail.com"
                  className="text-foreground hover:text-primary hover:underline transition-colors font-medium break-all"
                >
                  harikrishnangmonkuttan@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[12px] text-muted-foreground block">Phone</span>
                <a
                  href="tel:+917907389098"
                  className="text-foreground hover:text-primary hover:underline transition-colors font-medium"
                >
                  +91 7907389098
                </a>

                <a
                  href="tel:+919745860278"
                  className="text-foreground hover:text-primary hover:underline transition-colors font-medium"
                >
                  +91 9745860278
                </a>
              </div>
            </div>

            {/* AI Engine & Webmaster Discovery Resources */}
            <div className="pt-2 border-t border-border/50 flex flex-wrap gap-2 text-xs">
              <a
                href="/Harikrishnan_G_Resume.pdf"
                download="Harikrishnan_G_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-card border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <FileText className="w-3 h-3 text-primary" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-card border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <span>llms.txt (AI Discovery)</span>
              </a>

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-card border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <ExternalLink className="w-3 h-3 text-primary" />
                <span>sitemap.xml</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Engineering Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <span className="text-foreground font-semibold">Harikrishnan G ❤️</span>All rights reserved.
          </p>

          <p className="text-center sm:text-right flex items-center gap-1.5">

            <span>
              Designed, Developed, Tested &amp; Deployed by{" "}
              <a
                href="https://www.linkedin.com/in/harikrishnan-g-1315721b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#0A66C2] underline decoration-primary/40 hover:decoration-[#0A66C2] transition-colors font-medium"
              >
                Harikrishnan G
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
