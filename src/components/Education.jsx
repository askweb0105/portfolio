import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main mb-4">
          Education & <span className="text-brown-accent">Certifications</span>
        </h2>
        <div className="w-16 h-1 bg-brown-accent rounded-full mx-auto"></div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4 p-6 bg-brown-card/30 border border-brown-accent/10 rounded-2xl">
          <div className="mt-1 bg-brown-accent/20 p-3 rounded-full text-brown-accent">
            <GraduationCap size={24} />
          </div>
          <div>
            <span className="text-brown-accent-light text-sm font-semibold tracking-wider font-sans uppercase">
              12/2024
            </span>
            <h3 className="text-xl font-serif font-bold text-text-main my-1">React Certification</h3>
            <p className="text-text-muted font-light">DUCAT, Noida</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-brown-card/30 border border-brown-accent/10 rounded-2xl">
          <div className="mt-1 bg-brown-accent/20 p-3 rounded-full text-brown-accent">
            <GraduationCap size={24} />
          </div>
          <div>
            <span className="text-brown-accent-light text-sm font-semibold tracking-wider font-sans uppercase">
              01/2021
            </span>
            <h3 className="text-xl font-serif font-bold text-text-main my-1">Bachelor Of Computer Applications</h3>
            <p className="text-text-muted font-light">
              United College Of Education, Greater Noida, Uttar Pradesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
