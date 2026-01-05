import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <p className="font-serif text-foreground">Sanjana Reji</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent fill-accent" /> and lots of ☕
        </p>
        <p className="mono text-xs">© {currentYear}</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
