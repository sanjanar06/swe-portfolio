import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
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

        {/* Theme Toggle */}
        <div className="hidden md:flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
