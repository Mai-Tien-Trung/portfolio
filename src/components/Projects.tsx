import { motion } from "framer-motion"
import MorphSlider from "./MorphSlider"

const projectImages = ["/images/project-placeholder/1.svg", "/images/project-placeholder/2.svg", "/images/project-placeholder/3.svg"]
const campusFacilityImages = [
  "/images/campus-facility/homepage.png",
  "/images/campus-facility/1.png",
  "/images/campus-facility/2.png",
  "/images/campus-facility/3.png",
  "/images/campus-facility/4.png",
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
    images: campusFacilityImages,
  },
  {
    title: "GreenCare AI",
    category: "AI Integrated Application",
    description: "A plant care platform combining backend services, plant disease detection, subscription management, payment processing, and administration features.",
    contributions: ["Plant disease detection integration", "Subscription management", "VNPAY payment integration", "Admin analytics"],
    technologies: ["Spring Boot", "React", "PostgreSQL", "Hugging Face API", "VNPAY"],
  },
  {
    title: "Assessment Scheduling System",
    category: "Backend OJT Project",
    description: "An assessment platform supporting automated scheduling, secure email verification, and assessment security workflows.",
    contributions: ["Automated assessment scheduling", "OTP email verification", "JavaMailSender integration", "Assessment security features"],
    technologies: ["Java", "Spring Boot", "JavaMailSender", "REST API"],
  },
]

const Projects = () => (
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
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
