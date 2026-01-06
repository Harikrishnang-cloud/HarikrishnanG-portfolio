import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "Java"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "Tailwind CSS", "HTML/CSS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "Firebase"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Vercel", "Cloudinary"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Figma"],
    color: "from-indigo-500 to-violet-500",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From frontend to backend, databases to cloud - here's my tech stack that powers scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DSA Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Data Structures & Algorithms
              </h3>
              <p className="text-muted-foreground">
                Arrays, Strings, Recursion, Linked Lists, Stack, Queue, Trees, Graphs, Searching & Sorting Algorithms
              </p>
            </div>
            <div className="flex items-center gap-4">
  <div className="flex items-center gap-2">
    <span className="text-4xl font-bold text-primary">50+</span>
    <span className="text-muted-foreground">
      Problems<br />Solved
    </span>
  </div>

  <a
    href="https://leetcode.com/u/HK_INTERNATIONAL/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
  >
    From LeetCode
  </a>
</div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
