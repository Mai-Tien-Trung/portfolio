import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => (
  <footer className="py-20 px-6 lg:px-24 bg-background-light border-t border-gray-200 text-secondary">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
      <div>
        <h3 className="text-lg font-bold mb-2 text-primary">Mai Tiến Trung</h3>
        <p className="text-sm max-w-xs">Backend Developer focused on reliable backend systems and practical digital experiences.</p>
      </div>

      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        {[["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]].map(([item, href]) => (
          <a key={item} href={href} className="hover:text-primary transition">{item}</a>
        ))}
      </nav>

      <div className="flex justify-center md:justify-end gap-4">
        {[{ Icon: Mail, href: "mailto:trungmai.forwork@gmail.com", label: "Email", title: "trungmai.forwork@gmail.com" }, { Icon: Github, href: "https://github.com/Mai-Tien-Trung", label: "GitHub", title: "GitHub của Mai Tiến Trung" }, { Icon: Linkedin, href: "https://www.linkedin.com/in/trung-mai-6562412b7/", label: "LinkedIn", title: "LinkedIn của Mai Tiến Trung" }].map(({ Icon, href, label, title }) => (
          <a key={label} href={href} title={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="p-3 rounded-full border border-gray-200 hover:text-primary hover:border-primary transition" aria-label={title}>
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <p>© {new Date().getFullYear()} Mai Tiến Trung. Built with React &amp; Tailwind.</p>
      <a href="#home" className="flex items-center gap-2 hover:text-primary transition">Back to top <ArrowUp size={16} /></a>
    </div>
  </footer>
)

export default Footer
