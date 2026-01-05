import { motion } from "framer-motion";
import { blogPosts, socials } from "@/data/portfolioData";
import { ArrowUpRight, Calendar, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Writing & Case Studies</h2>
          <p className="text-muted-foreground">Thoughts, tutorials, and deep dives into system design</p>
        </motion.div>

        {/* Coming Soon - System Design Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="pinterest-card p-6 bg-card border border-border rounded-xl border-dashed">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Coming Soon
              </Badge>
            </div>
            <h3 className="font-serif text-lg mb-2">System Design Case Studies</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Deep dives into real-world system architectures — how companies like Netflix, Uber, and Stripe built their
              systems. Stay tuned for detailed breakdowns published on Medium.
            </p>
            <a
              href={socials.medium.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              Follow on Medium
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group block"
            >
              <div className="pinterest-card flex items-center justify-between gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium group-hover:text-primary transition-colors truncate">{post.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Calendar size={12} />
                    <span className="mono text-xs">{post.date}</span>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
