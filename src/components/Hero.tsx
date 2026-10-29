import { motion } from "framer-motion"

const introduction =
  "I am a Backend Developer focused on building reliable APIs, database-driven applications, and maintainable software systems. My main experience is with Java, Spring Boot, REST APIs, authentication, authorization, and relational databases. I also work with frontend technologies, Docker, Git, and external service integrations to support complete application development."

const technologies = ["Java", "Spring Boot", "REST API", "PostgreSQL", "React", "Docker", "Git"]

const Hero = () => (
  <section id="home" style={{ backgroundColor: "#000000" }} className="min-h-screen px-6 py-32 text-white lg:px-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl"
    >
      <div className="max-w-2xl">
        <span className="text-sm font-medium tracking-[0.2em] text-emerald-200/80 uppercase">
          Backend Focused — Fullstack Evolving
        </span>

        <h1 className="mt-6 mb-8 text-5xl font-bold leading-[1.05] md:text-7xl">
          Building <span className="text-emerald-300">reliable</span> backend systems for better digital experiences.
        </h1>

        <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/70">
          {introduction}
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#projects" className="rounded-full bg-emerald-200 px-8 py-3 text-black transition hover:bg-white">
            View My Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/30 px-8 py-3 text-white transition hover:bg-white/10">
            Get in Touch
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
)

export default Hero
