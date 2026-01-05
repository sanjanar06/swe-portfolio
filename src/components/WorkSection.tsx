import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "@/data/portfolioData";
import { Building2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import wellsfargoArch from "@/assets/wellsfargo-architecture.png";

const WorkSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Work Experience</h2>
          <p className="text-muted-foreground">All the Cool Stuff I Built, Broke, and Eventually Mastered</p>
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
              <div
                className="pinterest-card bg-card border border-border rounded-2xl p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                    ) : null}
                    <Building2 className={`w-8 h-8 text-muted-foreground ${job.logo ? "hidden" : ""}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-serif group-hover:text-primary transition-colors">{job.company}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground mono shrink-0">{job.period}</span>
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                      </div>
                    </div>
                    <p className="text-primary/80 text-sm mb-2">{job.role}</p>
                    <p className="text-muted-foreground text-sm">{job.description}</p>
                    {expandedIndex !== index && (
                      <p className="text-xs text-muted-foreground/60 mt-3 group-hover:text-primary/60 transition-colors">
                        Click to learn more →
                      </p>
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-border">
                        <h4 className="text-lg font-serif text-primary mb-1">{job.fullTitle}</h4>
                        <p className="text-sm text-muted-foreground italic mb-4">{job.subtitle}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{job.fullDescription}</p>

                        {job.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-6 last:mb-0">
                            <h5 className="font-medium text-foreground mb-2">{section.title}</h5>
                            <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
                          </div>
                        ))}

                        {job.architectureImage && (
                          <div className="mt-6">
                            <img
                              src={
                                job.architectureImage === "wellsfargo-architecture"
                                  ? wellsfargoArch
                                  : job.architectureImage
                              }
                              alt="Architecture diagram"
                              className="w-full rounded-lg border border-border"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
