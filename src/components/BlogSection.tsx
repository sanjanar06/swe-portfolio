import { motion } from "framer-motion";
import { blogPosts } from "@/data/portfolioData";
import { ArrowUpRight, Calendar } from "lucide-react";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Blog</h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and the occasional rant ✍️
          </p>
        </motion.div>

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
                  <h3 className="font-medium group-hover:text-primary transition-colors truncate">
                    {post.title}
                  </h3>
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
