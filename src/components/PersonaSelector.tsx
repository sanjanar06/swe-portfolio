import { motion } from "framer-motion";
import { usePersona } from "@/contexts/PersonaContext";
import { personaDescriptions, PersonaType } from "@/data/portfolioData";

const PersonaSelector = () => {
  const { setPersona } = usePersona();

  const personas: PersonaType[] = ["recruiter", "stalker", "fellow"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
          Hello, stranger!
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Before we begin, tell me a little about yourself...
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {personas.map((type, index) => {
          const { label, emoji, tagline } = personaDescriptions[type];
          return (
            <motion.button
              key={type}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPersona(type)}
              className="group relative px-8 py-6 bg-card border border-border rounded-2xl 
                         hover:border-primary/50 hover:shadow-lg transition-all duration-300
                         min-w-[200px] text-left"
            >
              <span className="text-3xl mb-3 block">{emoji}</span>
              <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                {label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {tagline}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.button>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-12 text-sm text-muted-foreground/60"
      >
        Don't worry, I won't judge. Much. 😉
      </motion.p>
    </motion.div>
  );
};

export default PersonaSelector;
