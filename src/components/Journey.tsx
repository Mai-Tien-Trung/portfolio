import { motion } from "framer-motion"
import { useState } from "react"
import MorphSlider from "./MorphSlider"
import HoldButton from "./HoldButton"

const base = import.meta.env.BASE_URL

const journeyItems = [
  {
    period: "Experience",
    title: "Backend OJT",
    description: "Worked on an assessment platform with automated assessment scheduling, OTP email verification, JavaMailSender integration, and assessment security features.",
    technologies: ["Java", "Spring Boot", "JavaMailSender", "REST API"],
    images: [
      `${base}images/backend-ojt/1.png`,
      `${base}images/backend-ojt/2.png`,
      `${base}images/backend-ojt/3.png`,
      `${base}images/backend-ojt/4.png`,
    ],
  },
]

const Journey = () => {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
  <>
  <section id="journey" className="py-28 px-6 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Experience / Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">My backend development journey.</h2>
        <p className="mt-6 text-secondary leading-relaxed">A summary of the experience that has shaped my approach to backend development.</p>
      </motion.div>

      <div className="relative max-w-5xl">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-primary/15" aria-hidden="true" />
        <div className="space-y-12">
          {journeyItems.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative pl-12">
              <div className="absolute left-0 top-1.5 h-7 w-7 rounded-full border-4 border-white bg-primary shadow-sm" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">{item.period}</p>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-secondary leading-relaxed max-w-2xl">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.technologies.map((technology) => (
                  <span key={technology} className="px-3 py-1.5 text-xs rounded-full border border-primary/10 bg-primary/5 text-primary">{technology}</span>
                ))}
              </div>

              <div className="h-[360px] mt-8 max-w-3xl">
                <MorphSlider items={item.images.map((image, imageIndex) => ({ image, caption: `Backend OJT image ${imageIndex + 1}` }))} transition="melt" intensity={0.55} aberration={0.35} drift={0.4} autoplay={false} overlayColor="#05060a" duration={1.1} ease="power2.inOut" scale={2.4} loop radius={16} showCaptions showControls showIndicators />
              </div>

              <div className="mt-6">
                <HoldButton onHold={() => setDemoOpen(true)} doneLabel="Opening demo..." backgroundColor="#0f766e" fillColor="#10b981" textColor="#ffffff" fillTextColor="#ffffff" size="md" radius={999} holdTime={2000} wave glow>
                  Hold to watch demo
                </HoldButton>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
  {demoOpen && (
    <div className="video-demo-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Backend OJT demo" onClick={() => setDemoOpen(false)}>
      <div className="video-demo-frame relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => setDemoOpen(false)} aria-label="Close demo" className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80">
          ×
        </button>
        <video src={`${base}videos/backend-ojt.mp4`} controls autoPlay playsInline className="max-h-[82vh] w-full" />
      </div>
    </div>
  )}
  </>
  )
}

export default Journey
