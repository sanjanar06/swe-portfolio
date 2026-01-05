import { motion } from "framer-motion";
import { workExperience } from "@/data/portfolioData";
import { Building2 } from "lucide-react";

const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            All the Cool Stuff I Built, Broke, and Eventually Mastered ✨
          </p>
        </motion.div>

        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="pinterest-card bg-card border border-border rounded-2xl p-6 flex gap-6 items-start">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <Building2 className={`w-8 h-8 text-muted-foreground ${job.logo ? 'hidden' : ''}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                      {job.company}
                    </h3>
                    <span className="text-sm text-muted-foreground mono shrink-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-primary/80 text-sm mb-2">{job.role}</p>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </div>
              </div>

              {/* Timeline connector */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-[2.5rem] top-full w-px h-6 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
