const Summary = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-brown-card/50 border border-brown-accent/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brown-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-4">
              Professional <br/><span className="text-brown-accent">Summary</span>
            </h2>
            <div className="w-16 h-1 bg-brown-accent rounded-full mb-6 relative">
              <div className="absolute top-0 left-0 w-8 h-1 bg-brown-accent-light rounded-full"></div>
            </div>
          </div>
          
          <div className="text-text-muted text-lg leading-relaxed font-light">
            <p className="mb-4">
              I am a dedicated <strong className="text-brown-accent-light font-medium">Front-End Developer</strong> specializing in modern, responsive web applications. With expertise deeply rooted in <strong className="text-text-main font-medium">React.js</strong> and <strong className="text-text-main font-medium">Vue.js</strong>, I have a proven track record of designing high-quality, pixel-perfect user interfaces for large-scale e-commerce platforms.
            </p>
            <p>
              My approach focuses on creating <em>accessible, scalable, and intuitive</em> applications. I am highly skilled in REST API integration, performance optimization, and fostering effective collaboration within agile teams to deliver seamless user experiences from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
