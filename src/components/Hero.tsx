
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-teal-600/20 animate-pulse"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Ahmed Hassan
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Computer Science Student & Full-Stack Developer
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dedicated to solving complex problems through competitive programming and building innovative solutions with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ahmedhassan404" className="text-slate-300 hover:text-purple-400 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/ahmed-hassan-576350247" className="text-slate-300 hover:text-teal-400 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:ahmedhassanAlegmail.com" className="text-slate-300 hover:text-purple-400 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
