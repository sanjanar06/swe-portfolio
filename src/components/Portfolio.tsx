import Header from "./Header";
import HeroSection from "./HeroSection";
import WorkSection from "./WorkSection";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import ExtrasSection from "./ExtrasSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <ProjectsSection />
        <BlogSection />
        <ExtrasSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
