import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Uma Uma Store",
    type: "Headless E-Commerce Workspace",
    description: "Architected a custom headless storefront on Shopify Hydrogen, bridging custom API data integrations with cutting-edge React UI.",
    tech: ["React.js", "Shopify Hydrogen", "Tailwind CSS", "GraphQL"],
    link: "https://main-2-a3df2b4aeec0a4a98631.o2.myshopify.dev/"
  },
  {
    title: "Caneza Official",
    type: "Headless E-Commerce Application",
    description: "Developed a blisteringly fast modern headless storefront using Shopify Hydrogen. Focused on high-fidelity designs and scalability.",
    tech: ["Shopify Hydrogen", "React.js", "Vite", "Storefront API"],
    link: "https://caneza.com/en-ae"
  },
  {
    title: "OTP Plus Social Login",
    type: "Shopify Custom App",
    description: "Conceptualized and built a custom 'Login with OTP' Shopify application, dramatically simplifying the authentication pipeline for high-traffic stores.",
    tech: ["React.js", "Shopify App Bridge", "Node.js Custom Backend", "REST APIs"],
    link: "https://apps.shopify.com/otp-plus-social-login"
  },
  {
    title: "WatchOut Wearables",
    type: "Enterprise Scaling",
    description: "Delivered scalable frontend enhancements, My Orders functionality, and Return Order multi-step workflows, boosting mobile conversion and usability.",
    tech: ["Vue.js", "HTML5", "CSS3", "CMS API Ecosystem"],
    link: "https://www.watchoutwearables.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-4">
          Featured <span className="text-brown-accent">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-brown-accent rounded-full mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-brown-card/50 border border-brown-accent/10 rounded-2xl p-8 hover:border-brown-accent/30 hover:shadow-[0_10px_30px_rgba(200,149,100,0.05)] transition-all duration-300 group">

            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-brown-accent-light bg-brown-accent/10 py-1.5 px-3 rounded-full">
                {proj.type}
              </span>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brown-accent transition-colors">
                <ExternalLink size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <h3 className="text-2xl font-serif font-bold text-text-main mb-3 group-hover:text-brown-accent-light transition-colors">
              {proj.title}
            </h3>

            <p className="text-text-muted font-light mb-6">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brown-accent/5">
              {proj.tech.map((techItem, tIdx) => (
                <span key={tIdx} className="text-sm font-medium text-brown-accent-light/80">
                  {techItem}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
