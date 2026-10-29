import { motion } from "framer-motion"

const examples = ["Project Example 1", "Project Example 2", "Project Example 3"]

const Projects = () => (
  <section id="projects" className="py-28 px-6 lg:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Example Section</p>
        <h2 className="text-4xl md:text-5xl font-bold">Your Projects</h2>
        <p className="mt-6 text-secondary leading-relaxed">Replace these example cards with your own projects, descriptions, technologies, and links.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {examples.map((title, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 text-sm font-medium text-secondary">Project image placeholder</div>
            <p className="text-xs uppercase tracking-widest text-secondary mb-3">Example</p>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-sm text-secondary leading-relaxed">Add a short summary of the problem, your contribution, and the result.</p>
            <p className="mt-5 text-xs text-secondary">Technologies: add your stack here</p>
            <p className="mt-4 text-sm font-semibold text-primary">Project link (Example)</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
