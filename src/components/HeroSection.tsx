import { useMemo } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown, FileText, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const conferences = [
  { name: "Harvard WECode", expiry: new Date("2026-02-21") },
  { name: "WE Local Columbus, Ohio", expiry: new Date("2026-03-13") },
];

const HeroSection = () => {
  const activeConferences = useMemo(() => {
    const now = new Date();
    return conferences.filter((c) => c.expiry >= now);
  }, []);
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary mono text-sm"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-serif"
            >
              <span className="highlight-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="group">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            <span className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              F1 Student Visa
            </span>
            <span className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              Authorized to work in US
            </span>
            <span className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
              Requires H1B sponsorship
            </span>
          </motion.div>

          {activeConferences.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-accent/50 border border-accent"
            >
              <CalendarDays className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm">
                <span className="font-medium">Catch me at:</span>{" "}
                {activeConferences.map((c, i) => (
                  <span key={c.name}>
                    {c.name}
                    {i < activeConferences.length - 1 && " • "}
                  </span>
                ))}
              </p>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown size={16} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
