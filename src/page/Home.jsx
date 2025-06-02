import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Certifications />
      <Projects />
      <Skills />
      <About />
      <Contact/>
      {/* Future sections like About, Projects, Contact go here */}
    </div>
  );
}
