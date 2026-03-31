import { Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brown-accent/30 bg-brown-accent/10 text-brown-accent-light text-sm font-medium tracking-wide uppercase">
        Available for new opportunities
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-main leading-tight mb-6">
        Amit Singh <span className="text-brown-accent">Karayat</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-10 font-sans font-light">
        Front-End Developer specializing in modern, responsive web applications and scalable e-commerce platforms.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="mailto:amitkarayat@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-brown-accent text-brown-bg font-medium rounded-md hover:bg-brown-accent-light transition-colors duration-300">
          <Mail size={18} />
          <span>Contact Me</span>
        </a>
        <a href="#projects" className="flex items-center gap-2 px-6 py-3 border border-brown-accent/50 text-brown-accent-light bg-transparent font-medium rounded-md hover:bg-brown-accent/10 transition-colors duration-300">
          <span>View Projects</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-text-muted text-sm md:text-base">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-brown-accent" />
          <span>8130035808</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-brown-accent" />
          <span>amitkarayat@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-brown-accent" />
          <span>Delhi, India 201301</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
