import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Github,Linkedin,Code2,Twitter,Instagram,MapPin,Mail,Phone,
  FileText,ExternalLink,Bot,Sparkles,
} from "lucide-react";

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

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Harikrishnang-cloud",
      label: "Harikrishnan G on GitHub",
      hoverColor: "hover:text-foreground hover:border-foreground/40 hover:bg-muted/80",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harikrishnan-g-1315721b7/",
      label: "Harikrishnan G on LinkedIn",
      hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10",
    },
    {
      icon: Code2,
      href: "https://leetcode.com/u/HK_INTERNATIONAL/",
      label: "Harikrishnan G on LeetCode",
      hoverColor: "hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10",
    },
    {
      icon: Twitter,
      href: "https://x.com/HKINTERNATION22",
      label: "Harikrishnan G on X (Twitter)",
      hoverColor: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_harikrishnan_01/",
      label: "Harikrishnan G on Instagram",
      hoverColor: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10",
    },
  ];

  return (
    <footer className="pt-16 pb-12 bg-muted/40 border-t border-border relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Information & Navigation</h2>
      
      <div className="container mx-auto px-6">
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

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Kollam &amp; Thiruvananthapuram, Kerala, India</span>
            </div>

            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:scale-110 shadow-sm ${hoverColor}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
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
            &copy; {currentYear} <span className="text-foreground font-semibold">Harikrishnan G</span>. All rights reserved.
          </p>

          <p className="text-center sm:text-right flex items-center gap-1.5">
            <span>Built with React, TypeScript &amp; Vite</span>
            <span>·</span>
            <span>Deployed on Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
