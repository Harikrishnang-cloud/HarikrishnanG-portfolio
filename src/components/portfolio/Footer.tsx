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
              Full Stack Developer | Ex-Stenographer | Ex-Mathematics Teacher
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Harikrishnang-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/harikrishnan-g-1315721b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://leetcode.com/u/HK_INTERNATIONAL/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card hover:scale-110 transition-all"
            >
              <Code2 className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/HKINTERNATION22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card hover:scale-110 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/_harikrishnan_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card hover:scale-110 transition-all"
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
