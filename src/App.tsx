import About from "./components/About"
import Contact from "./components/Contact"
import Certifications from "./components/Certifications"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Journey from "./components/Journey"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

export default App
