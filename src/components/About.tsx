import { motion } from "framer-motion"
import { Code2, Server, Network, Layers } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable and readable code that scales with long-term development.",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    desc: "Designing backend systems that remain reliable as products and users grow.",
  },
  {
    icon: Network,
    title: "API Design",
    desc: "Building intuitive and secure REST APIs for seamless system communication.",
  },
  {
    icon: Layers,
    title: "Fullstack Mindset",
    desc: "Understanding both backend architecture and modern frontend development.",
  },
]

const About = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Engineering robust backends while crafting modern frontend experiences.</h2>
        </motion.div>

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-lg text-secondary leading-relaxed">
            I began my journey focusing on backend development using
            <span className="text-primary font-medium"> Java and Spring Boot</span>, building high-performance APIs and scalable systems that power modern applications.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-lg text-secondary leading-relaxed">
            As I progressed, I realized the importance of understanding the entire application lifecycle. Today, I focus on expanding into frontend technologies to build
            <span className="text-primary font-medium"> complete fullstack solutions</span> that deliver both performance and great user experiences.
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
