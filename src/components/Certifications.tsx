import { motion } from "framer-motion"
import { useState } from "react"
import DepthCarousel from "./DepthCarousel"

const base = import.meta.env.BASE_URL

const certificates = [
  {
    image: `${base}images/certificates/SE.png`,
    alt: "HackerRank Software Engineer certificate",
    title: "Software Engineer",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/121dd1f43f05",
  },
  {
    image: `${base}images/certificates/SEI.png`,
    alt: "HackerRank Software Engineer Intern certificate",
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/efcdfa56b141",
  },
  {
    image: `${base}images/certificates/sql.png`,
    alt: "HackerRank SQL Basic certificate",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/f29e92af2c58",
  },
  {
    image: `${base}images/certificates/Software_Development_Lifecycle.jpeg`,
    alt: "Coursera Software Development Lifecycle specialization certificate",
    title: "Software Development Lifecycle",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/596AUZV7HVHY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
  },
]

const Certifications = () => {
  const [active, setActive] = useState(0)
  const certificate = certificates[active]

  return (
    <section id="certifications" className="bg-white px-6 py-28 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-secondary">Certifications</p>
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">Continuous learning alongside practical development.</h2>
          <p className="mt-6 leading-relaxed text-secondary">Selected certifications that support my foundation in software engineering, SQL, and software development practices.</p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <DepthCarousel
            items={certificates.map(({ image, alt }) => ({ image, alt }))}
            depth={210}
            spread={86}
            tilt={18}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={5}
            autoplay={false}
            loop
            cardWidth={400}
            cardHeight={300}
            radius={14}
            tint="#ffffff"
            duration={700}
            ease="power3.out"
            showControls
            showIndicators
            onChange={(index: number) => setActive(index)}
          />

          <div className="mt-4 text-center">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-secondary">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
