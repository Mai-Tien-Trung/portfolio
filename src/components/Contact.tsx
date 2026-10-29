import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const Contact = () => (
  <section id="contact" className="py-32 px-6 lg:px-24 bg-[#222222] text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[200px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-[200px] bottom-[-120px] right-[-120px]" />
    </div>

    <div className="relative max-w-4xl mx-auto text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-8">Example: Let’s Collaborate</p>
      <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
        Example: Have an idea or opportunity?
        <br />
        Example: Let’s build something great together.
      </h2>
      <p className="text-secondary max-w-xl mx-auto mb-14">
        Example: Replace this sentence with a short invitation to contact you.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
        <span className="group flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-semibold">
          Email button (Example) <ArrowRight className="w-5 h-5" />
        </span>
        <span className="px-8 py-4 border border-white/30 rounded-full">GitHub button (Example)</span>
      </div>

      <div className="flex justify-center gap-10 text-secondary">
        <span className="flex items-center gap-2"><Linkedin size={18} /> LinkedIn (Example)</span>
        <span className="flex items-center gap-2"><Github size={18} /> GitHub (Example)</span>
        <span className="flex items-center gap-2"><Mail size={18} /> Email (Example)</span>
      </div>
    </div>
  </section>
)

export default Contact
