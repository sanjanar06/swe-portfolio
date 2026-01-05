import { motion } from "framer-motion";
import { extras } from "@/data/portfolioData";
import { Sparkles, Clock, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExtrasSection = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Coming Soon":
        return <Clock size={14} />;
      case "In Progress":
        return <Rocket size={14} />;
      default:
        return <Sparkles size={14} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Coming Soon":
        return "bg-accent/10 text-accent border-accent/30";
      case "In Progress":
        return "bg-primary/10 text-primary border-primary/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Extras</h2>
          <p className="text-muted-foreground">
            What's cooking in my mind 🧪
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {extras.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="pinterest-card p-6 bg-card border border-border rounded-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-serif">{item.title}</h3>
                <Badge
                  variant="outline"
                  className={`shrink-0 text-xs ${getStatusColor(item.status)}`}
                >
                  {getStatusIcon(item.status)}
                  <span className="ml-1">{item.status}</span>
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
