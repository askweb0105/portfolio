import { Calendar, Briefcase, Code, MonitorSmartphone, AppWindow } from 'lucide-react';

const experiences = [
  {
    year: "Year 3 (Current)",
    title: "Hydrogen Store Development (Headless Commerce)",
    role: "Front End Dev",
    company: "GreenHonchos",
    icon: <MonitorSmartphone size={24} className="text-brown-accent" />,
    points: [
      "Spearheaded the development of custom headless storefronts using Shopify Hydrogen and React.",
      "Successfully delivered and launched two major headless e-commerce stores: Caneza and Uma Uma.",
      "Engineered comprehensive frontend architecture targeting high performance, scalability, and seamless user experiences.",
      "Integrated complex third-party APIs into the Hydrogen stack to enhance site interactivity."
    ]
  },
  {
    year: "Year 2",
    title: "Shopify Custom App Development",
    role: "Front End Dev",
    company: "GreenHonchos",
    icon: <AppWindow size={24} className="text-brown-accent" />,
    points: [
      "Transitioned focus towards building advanced, tailored applications within the Shopify ecosystem.",
      "Designed and developed a robust 'Login with OTP' custom Shopify app, drastically improving user authentication flows.",
      "Collaborated with backend teams to establish secure server-to-server communications.",
      "Delivered scalable frontend solutions enhancing mobile usability and multi-platform checkout experiences."
    ]
  },
  {
    year: "Year 1",
    title: "Shopify Theme Development",
    role: "Front End Dev",
    company: "GreenHonchos",
    icon: <Code size={24} className="text-brown-accent" />,
    points: [
      "Focused heavily on core web technologies (HTML, CSS, JavaScript) to deliver bespoke Shopify themes.",
      "Conducted extensive theme customization tailored precisely to varied e-commerce client requirements.",
      "Utilized standard Shopify APIs and custom app APIs to fetch, sync, and display dynamic store data.",
      "Optimized legacy codebases for enterprise-level applications, ensuring design consistency and accessibility."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-4">
          Professional <span className="text-brown-accent">Journey</span>
        </h2>
        <div className="w-16 h-1 bg-brown-accent rounded-full mb-6"></div>
        <p className="text-text-muted text-lg max-w-2xl">A curated progressive 3-year breakdown of my technical evolution at GreenHonchos.</p>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brown-accent/20 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brown-bg bg-brown-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg drop-shadow-[0_0_15px_rgba(200,149,100,0.1)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brown-hover group-hover:border-brown-accent/50">
              {exp.icon}
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-brown-card/40 border border-brown-accent/10 hover:border-brown-accent/30 hover:bg-brown-card/70 transition-all duration-300 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <span className="flex items-center gap-2 text-brown-accent-light text-sm font-semibold tracking-wider font-sans uppercase bg-brown-accent/5 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} /> {exp.year}
                </span>
                <span className="flex items-center gap-2 text-text-muted text-sm capitalize font-medium">
                  <Briefcase size={14} /> {exp.role}, {exp.company}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-text-main mb-4">{exp.title}</h3>
              <ul className="space-y-3 text-text-muted text-sm md:text-base font-light">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3">
                    <span className="text-brown-accent mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
