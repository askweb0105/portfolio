import Hero from './components/Hero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-brown-bg text-text-main min-h-screen font-sans antialiased selection:bg-brown-accent selection:text-brown-bg">
      
      {/* Navigation Layer */}
      <nav className="fixed w-full z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-brown-bg/70 border-b border-brown-accent/10 flex justify-between items-center transition-all duration-300">
        <a href="#home" className="text-xl font-serif font-bold tracking-widest text-text-main hover:text-brown-accent transition-colors">
          AK<span className="text-brown-accent">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide font-semibold text-text-muted">
          <a href="#about" className="hover:text-brown-accent-light transition-colors">About</a>
          <a href="#experience" className="hover:text-brown-accent-light transition-colors">Experience</a>
          <a href="#skills" className="hover:text-brown-accent-light transition-colors">Skills</a>
          <a href="#projects" className="hover:text-brown-accent-light transition-colors">Projects</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>

      {/* Footer Layer */}
      <footer className="py-10 text-center border-t border-brown-accent/10 mt-20">
        <p className="text-sm text-text-muted font-light">
          © {new Date().getFullYear()} Amit Singh Karayat. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
