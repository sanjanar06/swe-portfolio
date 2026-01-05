import React, { createContext, useContext, useState, ReactNode } from "react";
import { PersonaType } from "@/data/portfolioData";

interface PersonaContextType {
  persona: PersonaType | null;
  setPersona: (persona: PersonaType) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersona] = useState<PersonaType | null>(null);

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
};
