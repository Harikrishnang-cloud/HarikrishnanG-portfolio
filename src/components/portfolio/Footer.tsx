import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-2xl font-bold text-foreground">
              HARIKRISHNAN G<span className="text-primary"></span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Software Engineer | Ex-Stenographer | Ex-Mathematics Teacher
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Harikrishnang-cloud"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/40 hover:bg-muted/80 hover:scale-110 hover:shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harikrishnan-g-1315721b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:scale-110 hover:shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/HK_INTERNATIONAL/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10 hover:scale-110 hover:shadow-sm"
            >
              <Code2 className="w-5 h-5" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/HKINTERNATION22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
              className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10 hover:scale-110 hover:shadow-sm"
            >
              <Twitter className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_harikrishnan_01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:scale-110 hover:shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground text-center"
          >
            © {currentYear} Made with HK by Harikrishnan G
          </motion.p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
