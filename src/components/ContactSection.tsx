import { motion } from "framer-motion";
import { socials } from "@/data/portfolioData";
import { Linkedin, Github, Code, PenLine, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const socialItems = [
    {
      key: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      ...socials.linkedin,
    },
    {
      key: "github",
      icon: Github,
      label: "GitHub",
      ...socials.github,
    },
    {
      key: "leetcode",
      icon: Code,
      label: "LeetCode",
      ...socials.leetcode,
    },
    {
      key: "medium",
      icon: PenLine,
      label: "Medium",
      ...socials.medium,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Find Me Online</h2>
          <p className="text-muted-foreground max-w-lg text-left">
            Whether I'm squashing bugs on LeetCode, pushing pixels on GitHub, or pretending to be a professional on LinkedIn — this is where my digital life unfolds.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {socialItems.map((social, index) => (
            <motion.a
              key={social.key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="pinterest-card p-6 bg-card border border-border rounded-2xl h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <social.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">
                  {social.label}
                </h3>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
