import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Building2, Eye, X, ZoomIn } from "lucide-react";

export interface CertificateItem {
  id: string;
  title: string;
  authority: string;
  date: string;
  image: string;
  link?: string;
  shortDescription: string;
}

const certificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Attention is All You Web (GDG Cloud Kochi)",
    authority: "Google Developer Groups",
    date: "September 12, 2026",
    image: "/certificates/gdg-cloud-kochi.png",
    link: "#",
    shortDescription: "8 hours of intensive professional development on modern web tooling, AI integration, and scalable cloud architectures.",
  },
  {
    id: "cert-2",
    title: "Introduction to AWS Certification",
    authority: "AWS Training & Certification",
    date: "June 08, 2026",
    image: "/certificates/aws-introduction.png",
    link: "#",
    shortDescription: "Foundational understanding of AWS cloud platform, core services, security compliance, and global architecture.",
  },
  {
    id: "cert-3",
    title: "AWS Bootcamp - From Scratch",
    authority: "Udemy",
    date: "March 9, 2026",
    image: "/certificates/aws-bootcamp-udemy.png",
    link: "https://ude.my/UC-879c981c-c1a1-486e-a730-8d5c5334841",
    shortDescription: "Comprehensive AWS cloud essentials, EC2 instances, S3 storage, IAM policies, and cloud infrastructure management.",
  },
  {
    id: "cert-4",
    title: "Docker Certification",
    authority: "Udemy",
    date: "January 18, 2026",
    image: "/certificates/docker-udemy.png",
    link: "https://ude.my/UC-4438aeaf-eff6-48b4-9bff-ba48079830ed",
    shortDescription: "Containerization fundamentals, Docker architecture, multi-container applications, and container deployment workflows.",
  },
  {
    id: "cert-5",
    title: "Software Engineer Intern Certification",
    authority: "HackerRank",
    date: "January 10, 2026",
    image: "/certificates/hackerrank-swe-intern.png",
    link: "https://www.hackerrank.com/certificates/FABEFCE71BCF",
    shortDescription: "Role certification assessing algorithmic problem solving, data structures, and core software engineering capabilities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="py-20 bg-muted/30" id="certifications">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Licenses & Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Verified certifications, technical workshops, and credentials validating my technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
            >
              {/* Certificate Image with click-to-preview */}
              <div
                onClick={() => setSelectedImage({ src: cert.image, title: cert.title })}
                className="relative aspect-[16/11] w-full bg-muted/70 overflow-hidden border-b border-border cursor-pointer group/img"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-foreground font-medium text-xs backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 text-primary" />
                  <span>Preview Certificate</span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[11px] font-medium text-foreground bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border shadow-sm">
                  <Calendar className="w-3 h-3 text-primary" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Authority */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary mb-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.authority}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cert.shortDescription}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                  <button
                    onClick={() => setSelectedImage({ src: cert.image, title: cert.title })}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-2 md:p-4"
            >
              <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-border">
                <h4 className="text-sm font-semibold text-foreground truncate pr-4">
                  {selectedImage.title}
                </h4>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden bg-muted/40 max-h-[75vh] flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
