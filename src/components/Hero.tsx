import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 lg:px-24 flex flex-col justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full top-[-100px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full bottom-[-120px] right-[-80px]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">Backend Focused — Fullstack Evolving</span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 leading-[1.05]">
              Building <span className="text-secondary">reliable backend systems</span> for better digital experiences.
            </h1>

            <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
              I am a Backend Developer focused on building reliable APIs, database-driven applications, and maintainable software systems. My main experience is with Java, Spring Boot, REST APIs, authentication, authorization, and relational databases. I also work with frontend technologies, Docker, Git, and external service integrations to support complete application development.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {["Java", "Spring Boot", "REST API", "PostgreSQL", "React", "Docker", "Git"].map((tech) => (
                <span key={tech} className="text-xs px-3 py-1 bg-background-light border border-gray-200 rounded-full text-secondary">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition">
                View My Projects
              </a>
              <a href="#contact" className="px-8 py-3 border border-primary/20 rounded-full hover:bg-primary/5 transition">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:justify-self-end">
          {/* Profile Card */}
          <div className="w-full max-w-md aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background-light to-secondary/20" aria-hidden="true" />
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const section = document.getElementById("about")
          section?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-secondary">Scroll</span>

        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center relative">
          <motion.div className="w-1 h-2 bg-primary rounded-full mt-2" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
