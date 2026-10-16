import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Clock, Sparkles } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;  
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

// Utility to calculate dynamic duration in years and months
const calculateDuration = (period: string, startDateStr?: string, endDateStr?: string): string => {
  let startStr = startDateStr;
  let endStr = endDateStr;

  // Auto-extract from period if not explicitly given
  if (!startStr && period) {
    const parts = period.split(/[-–—]/).map((p) => p.trim());
    if (parts.length >= 1) startStr = parts[0];
    if (parts.length >= 2) endStr = parts[1];
  }

  if (!startStr) return "";

  const parseDate = (str: string): Date => {
    const trimmed = str.trim();
    const parsed = new Date(trimmed.includes("-") ? `${trimmed}-01` : `${trimmed} 1`);
    if (!isNaN(parsed.getTime())) return parsed;

    const yearMatch = trimmed.match(/\d{4}/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[0], 10), 0, 1);
    }
    return new Date();
  };

  const start = parseDate(startStr);
  const isPresent = !endStr || endStr.toLowerCase().includes("present");
  const end = isPresent ? new Date() : parseDate(endStr);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1; // inclusive of end month

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    return "1 month";
  }

  if (years === 0 && months <= 0) {
    return "1 month";
  }

  const yearText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearText, monthText].filter(Boolean).join(" ") || "1 month";
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Asia Softlab Pvt. Ltd.",
    location: "Thiruvananthapuram, Kerala",
    period: "February 2026 - Present",
    startDate: "2026-02",
    endDate: "Present",
    type: "Full-time",
    description:
      "Developing and scaling modern software solutions, working on high-performance web applications, API architectures, and enterprise workflows.",
    highlights: [
      "Architected and deployed full-stack MERN applications with clean architecture and RESTful APIs",
      "Implemented secure authentication, authorization, role-based access, and payment gateway integrations",
      "Hands-on experience with Docker, CI/CD pipelines, AWS EC2, Lambda, S3 Bucket, Load Balancer, Nginx reverse proxy",
      "Participated in rigorous code reviews, debugging sprints, and daily problem-solving challenges",
    ],
    skills: ["React.js", "Node.js", "Express.js", "TypeScript", "Next.js","Nest.js","n8n", "Docker", "Kubernetes", "AWS"],
  },
  {
    role: "Freelance Web Developer & AI Automation Engineer",
    company: "Self-Employed",
    location: "Remote",
    period: "January 2025 – Present",
    startDate: "2025-01",
    endDate: "Present",
    type: "Freelance · Part-time",
    description:
      "Building business websites, booking platforms, e-commerce solutions, and AI-powered automations for businesses looking to improve their digital presence and streamline operations.",
    highlights: [
      "Developed travel and tourism web solutions, including hotel booking, flight booking integrations, and payment gateway workflows",
      "Built responsive websites and landing pages optimized for SEO, performance, and lead generation",
      "Integrated AI APIs, chatbots, and n8n automation workflows to improve customer engagement and business efficiency",
    ],
    skills: ["React.js", "Next.js", "Node.js", "AI Integration", "n8n Automation", "SEO"],
  },
  {
    role: "Mathematics Teacher",
    company: "Educational Institutions & Coaching Centres",
    location: "Kollam, Kerala, India",
    period: "July 2020 - May 2024",
    startDate: "2020-07",
    endDate: "2024-05",
    type: "Full-time",
    description:
      "Taught advanced mathematics, analytical thinking, and quantitative problem-solving to students, leveraging strong mathematical foundations to transition into software engineering.",
    highlights: [
      "Standards : High School (State, CBSE, ICSE, IGCSE), Higher Secondary (11th & 12th), UG, PG, Polytechnic (Diploma), Engineering (BTech)",
      "Mentored and coached 200+ students in complex mathematical concepts and problem solving",
      "Applied structured logical reasoning and algorithmic thinking to resolve complex analytical challenges",
    ],
    skills: ["Analytical Problem Solving", "Algorithm Design", "Mathematical Modeling", "Mentoring & Communication"],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-muted/30" id="experience">
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
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on experience in building scalable web applications and problem solving
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((exp, index) => {
              const duration = calculateDuration(exp.period, exp.startDate, exp.endDate);
              const isCurrent = !exp.endDate || exp.endDate.toLowerCase().includes("present");

              return (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  {/* Experience Card */}
                  <div className="md:ml-20 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                    {/* Header details */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-base font-semibold text-primary">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                            <span>•</span>
                            <span className="px-2 py-0.5 rounded-full bg-muted text-foreground/80 font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Period & Duration Pill Badge */}
                      <div className="flex flex-col sm:items-end gap-2 self-start md:self-auto">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-lg border border-border/40">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">

                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-semibold border border-primary/20 shadow-sm">
                            <Clock className="w-3 h-3 text-primary" />
                            <span>{duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-5 space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground/80 border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

