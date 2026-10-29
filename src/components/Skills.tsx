import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Backend Engineering",
    description: "Designing and developing reliable backend systems, REST APIs, and database-driven applications.",
    skills: ["Java", "Spring Boot", "REST API", "PostgreSQL", "MySQL", "JWT", "Role-Based Authorization", "Database Design"],
  },
  {
    title: "Frontend & Application Integration",
    description: "Applying frontend technologies to connect backend services with usable and complete application experiences.",
    skills: ["React", "TypeScript", "Tailwind CSS", "API Integration", "Responsive Design"],
  },
  {
    title: "Tools & Delivery",
    description: "Using practical development tools to manage code, test APIs, and support application delivery.",
    skills: ["Git", "Docker", "Postman", "Swagger", "Basic CI/CD"],
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
            My primary focus is backend development, with supporting experience in frontend technologies, development tools, and application delivery.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -6 }}
              className={`h-full bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 0 ? "md:col-span-2 md:w-1/2 md:justify-self-center border-primary/30 bg-primary/[0.03]" : "border-gray-100"}`}
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                {idx === 0 && <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">Primary Focus</span>}
              </div>

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
