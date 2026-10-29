import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Backend Engineering",
    description: "Building scalable APIs, distributed systems, and robust backend architectures.",
    skills: ["Java", "Spring Boot", "REST API", "Microservices", "System Design", "SQL", "Database Design"],
  },
  {
    title: "Frontend Development",
    description: "Crafting modern UI experiences while expanding into fullstack engineering.",
    skills: ["React", "TypeScript", "TailwindCSS", "Component Architecture", "Responsive Design"],
  },
  {
    title: "Tools & Engineering Practices",
    description: "Tools and workflows used to ship reliable production-ready applications.",
    skills: ["Git", "Docker", "CI/CD", "API Integration", "Postman", "Swagger"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 lg:px-24 bg-gradient-to-b from-background to-background-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Technical Expertise</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Technologies I Work With</h2>

          <p className="mt-6 text-secondary leading-relaxed">
            My core strength is backend engineering — building scalable APIs and robust systems. Recently, I’ve been expanding into frontend technologies to deliver fullstack web applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-primary">{category.title}</h3>

              {/* Description */}
              <p className="text-sm text-secondary mb-6 leading-relaxed">{category.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm rounded-full border border-primary/10 bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
