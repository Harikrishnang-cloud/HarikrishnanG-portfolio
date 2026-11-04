import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import profilePhoto from "@/assets/Hari.jpg";
import TechnicalParticles from "./TechnicalParticles";

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

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Technical Particles Background - ONLY in Hero */}
      <TechnicalParticles />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-background rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Harikrishnan G - Software Engineer and Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Github className="w-5 h-5 text-accent-foreground" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Software Engineer · AI Engineer · Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Harikrishnan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                G
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Software Engineer and Full-Stack Developer based in Kerala, India. Specializing in high-performance React.js, Next.js, and MERN stack applications, enterprise SaaS solutions, and intelligent AI automation workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="mailto:harikrishnangmonkuttan@gmail.com"
                className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:border-black hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium">Email</span>
                </span>
              </a>

              <a
                href="https://wa.me/919745860278"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] border border-[#25D366] text-white shadow-sm transition-all duration-300 hover:border-[#1ebe5b] hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-[#075E54] transition-colors duration-300">
                  <WhatsAppIcon className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-105" />
                  <span className="text-sm font-medium">+91 9745860278</span>
                </span>
              </a>

              <a
                href="tel:+917907389098"
                className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:border-black hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium">+91 7907389098</span>
                </span>
              </a>

              <div className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:border-black hover:shadow-md cursor-default">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center gap-2 text-foreground group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium">Kollam, Kerala</span>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/Harikrishnang-cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harikrishnan G GitHub Profile"
                className="group relative overflow-hidden p-3 rounded-full bg-foreground text-background border border-foreground shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-background -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center justify-center text-background group-hover:text-foreground transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/harikrishnan-g-1315721b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harikrishnan G LinkedIn Profile"
                className="group relative overflow-hidden p-3 rounded-full bg-card text-foreground border border-border shadow-sm transition-all duration-300 hover:border-[#0A66C2] hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#0A66C2] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center justify-center text-foreground group-hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </span>
              </a>
              <a
                href="https://leetcode.com/u/HK_INTERNATIONAL/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harikrishnan G LeetCode Profile"
                className="group relative overflow-hidden p-3 rounded-full bg-card text-foreground border border-border shadow-sm transition-all duration-300 hover:border-[#FFA116] hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#FFA116] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <span className="relative z-10 flex items-center justify-center text-foreground group-hover:text-white transition-colors duration-300">
                  <Code className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
