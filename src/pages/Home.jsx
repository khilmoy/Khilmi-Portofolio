import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";

import { MyHeroSection } from "../components/MyHeroSection";

import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TestimonialSection } from "../components/Testimonial";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* BACKGROUND */}
      <StarBackground />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>

        <MyHeroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <TestimonialSection />

        <ContactSection />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};