import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" data-aos="fade-up">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="container mx-auto text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
        <div className="animate-fadeIn">
          <div className="flex justify-center mb-6">
            <img
              src="/image.jpg"
              alt="Profile picture"
              width={180}
              height={180}
              className="rounded-full shadow-lg border-4 border-orange-700 object-cover"
              style={{ width: 180, height: 180 }}
              loading="eager"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" data-aos="fade-right" data-aos-delay="400">
            Ahmed Hassan
          </h1>
          <p className="text-xl md:text-2xl text-orange-200 mb-8 max-w-2xl mx-auto" data-aos="fade-left" data-aos-delay="500">
            Computer Science Student & Backend Developer
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="600">
            Dedicated to solving complex problems through competitive programming and building innovative solutions with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3" asChild>
              <a href="https://drive.google.com/file/d/1LkWhq6KIPWHDwMkWbxMI-R35KFyK9OK0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ahmedhassan404" className="text-slate-300 hover:text-orange-400 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/ahmed-hassan-576350247" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:a7medhasan1@gmail.com" className="text-slate-300 hover:text-orange-400 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
