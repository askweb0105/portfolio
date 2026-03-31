import { Code2, Monitor, Wrench, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-brown-accent w-6 h-6 mb-4" />,
      skills: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Tailwind CSS", "ShadCN/UI"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-brown-accent w-6 h-6 mb-4" />,
      skills: ["VS Code", "IntelliJ IDEA", "Git Version Control", "CMS Platforms", "Shopify Storefront API"]
    },
    {
      title: "E-Commerce & Methodologies",
      icon: <Monitor className="text-brown-accent w-6 h-6 mb-4" />,
      skills: ["REST API Integration", "Responsive UI Design", "Agile Development", "Headless Hydrogen Setup", "App Authentication"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto bg-brown-card/20 rounded-[3rem] my-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brown-accent/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-4">
          Technical <span className="text-brown-accent">Competencies</span>
        </h2>
        <div className="w-16 h-1 bg-brown-accent rounded-full mx-auto"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-brown-bg/60 border border-brown-accent/10 rounded-2xl p-8 hover:border-brown-accent/30 transition-colors duration-300">
            {cat.icon}
            <h3 className="text-xl font-serif font-semibold text-text-main mb-6">{cat.title}</h3>
            <ul className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-3 text-text-muted">
                  <CheckCircle2 size={16} className="text-brown-accent/60" />
                  <span className="font-light">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
