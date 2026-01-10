import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Quote from "@/components/Quote";
import SideNavigation from "@/components/SideNavigation";
import SkillsSection from "@/components/SkillsSection";
import { DotPattern } from "@/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#050505] relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Decor */}
      <div className="absolute top-[20%] -left-10 md:left-[-2%] opacity-10 pointer-events-none">
        <DotPattern />
      </div>
      <div className="absolute top-[60%] -right-10 md:right-[-2%] opacity-10 pointer-events-none">
        <DotPattern />
      </div>

      <Header />
      <SideNavigation />
      
      <main className="w-full max-w-6xl px-4 md:px-8 mt-16 flex flex-col">
        <Hero />
        <Quote />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
