import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Achievements } from './sections/Achievements'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Stats } from './sections/Stats'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
