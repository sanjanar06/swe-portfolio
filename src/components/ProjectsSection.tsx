import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ExternalLink, Github, FileText, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Projects</h2>
          <p className="text-muted-foreground">
            Sometimes I work on projects not scoped, sprinted or story pointed haha 🚀
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pinterest-card group bg-card border border-border rounded-2xl overflow-hidden"
            >
              {project.image && (
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              )}

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-serif group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.medium && (
                    <a
                      href={project.links.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Medium</span>
                    </a>
                  )}
                  {project.links.kaggle && (
                    <a
                      href={project.links.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Database size={14} />
                      <span>Kaggle</span>
                    </a>
                  )}
                  {project.links.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText size={14} />
                      <span>Report</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
