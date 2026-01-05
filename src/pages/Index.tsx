import { PersonaProvider, usePersona } from "@/contexts/PersonaContext";
import PersonaSelector from "@/components/PersonaSelector";
import Portfolio from "@/components/Portfolio";

const IndexContent = () => {
  const { persona } = usePersona();

  if (!persona) {
    return <PersonaSelector />;
  }

  return <Portfolio />;
};

const Index = () => {
  return (
    <PersonaProvider>
      <IndexContent />
    </PersonaProvider>
  );
};

export default Index;
