import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ExternalLink, Github, FileText, Database, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const tagColors: Record<string, string> = {
    Hackathon: "bg-accent/10 text-accent border-accent/20",
    Academic: "bg-primary/10 text-primary border-primary/20",
    "In Progress": "bg-notion-green/20 text-foreground border-notion-green/30",
    Personal: "bg-notion-blue/20 text-foreground border-notion-blue/30",
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Projects</h2>
          <p className="text-muted-foreground">
            Sometimes I work on projects not scoped, sprinted or story pointed haha
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group text-left"
            >
              <div className="pinterest-card p-5 bg-card border border-border rounded-xl h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-2xl">{project.icon}</span>
                  <Badge variant="outline" className={`text-xs shrink-0 ${tagColors[project.tag] || ""}`}>
                    {project.tag}
                  </Badge>
                </div>
                <h3 className="font-serif text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{selectedProject?.icon}</span>
                <Badge variant="outline" className={`text-xs ${tagColors[selectedProject?.tag || ""] || ""}`}>
                  {selectedProject?.tag}
                </Badge>
              </div>
              <DialogTitle className="text-2xl font-serif">{selectedProject?.details.fullTitle}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{selectedProject?.details.fullDescription}</p>

              <div className="flex flex-wrap gap-2">
                {selectedProject?.details.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                {selectedProject?.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                {selectedProject?.links.medium && (
                  <a
                    href={selectedProject.links.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Medium</span>
                  </a>
                )}
                {selectedProject?.links.kaggle && (
                  <a
                    href={selectedProject.links.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Database size={14} />
                    <span>Kaggle</span>
                  </a>
                )}
                {selectedProject?.links.report && (
                  <a
                    href={selectedProject.links.report}
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
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
