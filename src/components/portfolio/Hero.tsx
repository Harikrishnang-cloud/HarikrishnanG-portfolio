import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import profilePhoto from "@/assets/Hari.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
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
                  alt="Harikrishnan G"
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
                Full Stack Developer
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              Passionate Web Developer with hands-on experience in building scalable full-stack MERN applications. 
              Delivered complete e-commerce platforms and contributed 5,000+ lines of clean, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="mailto:harikrishnangmonkuttan@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Email</span>
              </a>
              <a
                href="tel:+917907389098"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">+91 7907389098</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Kollam, Kerala</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/harikrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/harikrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/harikrishnan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                <Code className="w-5 h-5" />
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
