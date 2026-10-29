import { motion } from "framer-motion"
import { Code2, Server, Network, Layers } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Backend Development",
    desc: "Building maintainable backend logic and practical software systems.",
  },
  {
    icon: Server,
    title: "API & Authentication",
    desc: "Developing REST APIs with secure authentication and role-based authorization.",
  },
  {
    icon: Network,
    title: "Database Management",
    desc: "Working with relational databases, data models, and application data flows.",
  },
  {
    icon: Layers,
    title: "Application Integration",
    desc: "Connecting backend services with frontend applications and external integrations.",
  },
]

const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Building practical backend solutions with Java and Spring Boot.</h2>
        </motion.div>

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-lg text-secondary leading-relaxed">
            I am a Backend Developer focused on building REST APIs, database-driven applications, and reliable backend systems. My main experience includes
            <span className="text-primary font-medium"> Java, Spring Boot, PostgreSQL, MySQL, JWT authentication, role-based authorization, and API integration</span>.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-lg text-secondary leading-relaxed">
            Through projects such as Campus Facility Management, GreenCare AI, and my Backend OJT experience at FPT Academy, I have worked on
            <span className="text-primary font-medium"> inventory management, equipment lifecycle tracking, assessment scheduling, OTP email verification, subscription management, payment integration, and AI service integration</span>. I also use frontend technologies, Docker, and Git to support complete application development.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group p-8 rounded-3xl bg-background-light border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6 w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>

                <h4 className="text-lg font-bold mb-3">{item.title}</h4>

                <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
