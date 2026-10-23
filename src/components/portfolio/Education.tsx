import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Brototype Software Training Institute",
    institution: "Kochi, Ernakulam",
    year: "July 2024 - December 2025",
    project: "Booklove ecommerce platform, CodeRunner Online Code Editor",
    projectDesc: "Hands-on experience in MERN stack development, including React.js, Node.js, Express.js, MongoDB, REST APIs, and Git. Strengthened problem-solving skills through practical projects and coding challenges.",
  },
  {
    degree: "MSc Mathematics",
    institution: "Kariavattom Campus, Thiruvananthapuram",
    year: "July 2020 - May 2022",
    project: "Analytic Solutions of Integral Equations",
    projectDesc: "Solving integral equations using analytical methods. Studied Volterra and Fredholm equations with applications in mathematical physics and engineering.",
  },
  {
    degree: "BSc Mathematics",
    institution: "Sree Narayana College, Chathannur, Kollam",
    year: "August 2017 - March 2020",
    project: "Polynomial Rings",
    projectDesc: "Exploring the algebraic structure and properties of polynomial rings with examples from abstract algebra.",
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-transparent relative" id="education">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong mathematical foundation combined with practical programming skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="md:ml-20 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <div className="pl-0 md:pl-11">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">Academic Project: {edu.project}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.projectDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
