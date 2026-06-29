import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="bg-stone-950 text-stone-100 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
