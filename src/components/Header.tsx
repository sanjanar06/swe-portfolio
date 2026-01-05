import { motion } from "framer-motion";
import { usePersona } from "@/contexts/PersonaContext";
import { personaDescriptions } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { persona, setPersona } = usePersona();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-serif hover:text-primary transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          Sanjana.
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground notion-link transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Persona Badge */}
        {persona && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setPersona(null as any)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary/10 
                       text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
          >
            <span>{personaDescriptions[persona].emoji}</span>
            <span className="mono text-xs">{personaDescriptions[persona].label}</span>
          </motion.button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            {persona && (
              <button
                onClick={() => {
                  setPersona(null as any);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-primary text-sm"
              >
                <span>{personaDescriptions[persona].emoji}</span>
                <span>Change persona</span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
