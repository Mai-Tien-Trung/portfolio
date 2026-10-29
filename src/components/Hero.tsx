import { motion } from "framer-motion"
import Lightfall from "./Lightfall"

const introduction =
  "I am a Backend Developer focused on building reliable APIs, database-driven applications, and maintainable software systems. My main experience is with Java, Spring Boot, REST APIs, authentication, authorization, and relational databases. I also work with frontend technologies, Docker, Git, and external service integrations to support complete application development."

const technologies = ["Java", "Spring Boot", "REST API", "PostgreSQL", "React", "Docker", "Git"]

const Hero = () => (
  <section id="home" className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-[#071817] px-6 pt-32 pb-20 lg:px-24">
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <Lightfall
        colors={["#ecfdf5", "#6ee7b7", "#22d3ee"]}
        backgroundColor="#0f9f8a"
        speed={0.4}
        streakCount={2}
        streakWidth={1}
        twinkle={1}
        backgroundGlow={0.2}
        headGlow={0.6}
        bloom={0.5}
        mouseInteraction
        holdToWarp
        intro
        streakLength={1}
        density={0.4}
        glow={1}
        depth={0.5}
        zoom={3}
        mouseStrength={0.4}
        mouseRadius={0.45}
        lens={0.5}
        fade={0}
        lightMode={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071817]/25 via-transparent to-[#071817]/45" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto w-full max-w-7xl"
    >
      <div className="max-w-2xl">
        <span className="text-sm font-medium tracking-[0.2em] text-emerald-200 uppercase">
          Backend Focused — Fullstack Evolving
        </span>

        <h1 className="mt-6 mb-8 text-5xl font-bold leading-[1.05] text-white md:text-7xl">
          Building <span className="text-emerald-300">reliable</span> backend systems for better digital experiences.
        </h1>

        <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/70">
          {introduction}
        </p>

        <div className="mb-10 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-white px-8 py-3 text-[#071817] transition hover:bg-emerald-100">
            View My Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/30 px-8 py-3 text-white transition hover:bg-white/10">
            Get in Touch
          </a>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
)

export default Hero
