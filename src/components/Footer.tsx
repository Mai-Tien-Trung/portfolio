import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => (
  <footer className="py-20 px-6 lg:px-24 bg-background-light border-t border-gray-200 text-secondary">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
      <div>
        <h3 className="text-lg font-bold mb-2 text-primary">Your Name (Example)</h3>
        <p className="text-sm max-w-xs">Example: Add a short professional introduction here.</p>
      </div>

      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        {["Home", "About", "Projects", "Blog", "Contact"].map((item) => (
          <span key={item}>{item} (Example)</span>
        ))}
      </nav>

      <div className="flex justify-center md:justify-end gap-4">
        {[Mail, Github, Linkedin].map((Icon, index) => (
          <span key={index} className="p-3 rounded-full border border-gray-200" aria-label={`Social link example ${index + 1}`}>
            <Icon size={18} />
          </span>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <p>© {new Date().getFullYear()} Your Name (Example). Example: Built with React &amp; Tailwind.</p>
      <a href="#home" className="flex items-center gap-2 hover:text-primary transition">Back to top (Example) <ArrowUp size={16} /></a>
    </div>
  </footer>
)

export default Footer
