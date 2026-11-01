import { motion } from "framer-motion"
import { useState } from "react"
import MorphSlider from "./MorphSlider"
import HoldButton from "./HoldButton"

const base = import.meta.env.BASE_URL

const projectImages = [`${base}images/project-placeholder/1.svg`, `${base}images/project-placeholder/2.svg`, `${base}images/project-placeholder/3.svg`]
const campusFacilityImages = [
  `${base}images/campus-facility/homepage.png`,
  `${base}images/campus-facility/1.png`,
  `${base}images/campus-facility/2.png`,
  `${base}images/campus-facility/3.png`,
  `${base}images/campus-facility/4.png`,
]


const projects = [
  {
    title: "Campus Facility Management",
    category: "Featured Backend Project",
    description: "A facility management system focused on inventory management, equipment lifecycle tracking, warranty management, and controlled access for different user roles.",
    contributions: ["Excel import processing", "JWT authentication", "Role-based authorization", "Warranty management", "AI forecasting integration"],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    demo: `${base}videos/campus-facility-management.mp4`,
    images: campusFacilityImages,
  },
  {
    title: "GreenCare AI",
    category: "AI Integrated Application",
    description: "A plant care platform combining backend services, plant disease detection, subscription management, payment processing, and administration features.",
    contributions: ["Plant disease detection integration", "Subscription management", "VNPAY payment integration", "Admin analytics"],
    technologies: ["Spring Boot", "React", "PostgreSQL", "Hugging Face API", "VNPAY"],
  },
]

const Projects = () => {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
  <>
  <section id="projects" className="py-28 px-6 lg:px-24 bg-background-light">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Featured Projects</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Backend systems and applications I have worked on.</h2>
        <p className="mt-6 text-secondary leading-relaxed">Selected projects that reflect my experience with backend development, databases, authentication, and external service integration.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -6 }} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div className="h-56">
              <MorphSlider items={(project.images ?? projectImages).map((image, imageIndex) => ({ image, caption: `${project.title} image ${imageIndex + 1}` }))} transition="melt" intensity={0.55} aberration={0.35} drift={0.4} autoplay={false} overlayColor="#05060a" duration={1.1} ease="power2.inOut" scale={2.4} loop radius={0} showCaptions showControls showIndicators />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-secondary mb-3">{project.category}</p>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">{project.description}</p>
              <p className="text-xs uppercase tracking-widest text-secondary mb-3">Key Contributions</p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                {project.contributions.map((contribution) => <li key={contribution}>• {contribution}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => <span key={technology} className="px-3 py-1.5 text-xs rounded-full border border-primary/10 bg-primary/5 text-primary">{technology}</span>)}
              </div>
              {project.demo && (
                <div className="mt-6">
                  <HoldButton onHold={() => setDemoOpen(true)} doneLabel="Opening demo..." backgroundColor="#0f766e" fillColor="#10b981" textColor="#ffffff" fillTextColor="#ffffff" size="md" radius={999} holdTime={2000} wave glow>
                    Hold to watch demo
                  </HoldButton>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  {demoOpen && (
    <div className="video-demo-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Campus Facility Management demo" onClick={() => setDemoOpen(false)}>
      <div className="video-demo-frame relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => setDemoOpen(false)} aria-label="Close demo" className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80">
          ×
        </button>
        <video src={`${base}videos/campus-facility-management.mp4`} controls autoPlay playsInline className="max-h-[82vh] w-full" />
      </div>
    </div>
  )}
  </>
  )
}

export default Projects
