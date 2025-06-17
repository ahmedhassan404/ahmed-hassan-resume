
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-blue-900 to-slate-900">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
