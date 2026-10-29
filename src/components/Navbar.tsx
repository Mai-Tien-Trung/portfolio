import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-24 ${scrolled ? "bg-background-light/80 backdrop-blur-md py-4 border-b border-primary/5" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Example brand placeholder */}
        <a href="#home" className="text-xl font-bold tracking-tight">
          Your Name <span className="text-secondary">(Example)</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-300">
              {link.name}
            </a>
          ))}

          <a href="#contact" className="px-5 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-secondary transition-all duration-300">
            Contact (Example)
          </a>

        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }} className="md:hidden mt-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-secondary hover:text-primary transition">
                  {link.name}
                </a>
              ))}

              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full text-center">
                Contact (Example)
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
