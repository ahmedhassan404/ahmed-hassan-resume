
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Secure RESTful API with 2FA",
      description: "Built a RESTful API for user authentication and product management with integrated Google Authenticator for two-factor authentication (2FA) and secured user passwords using bcrypt hashing.",
      technologies: ["Node.js", "Express", "Google Authenticator", "JWT", "bcrypt"],
      features: ["Two-factor authentication", "Secure password hashing", "JWT authentication"]
    },
    {
      title: "ATM System (Java-Based Banking)",
      description: "Built a secure ATM system with password hashing (SHA-256) and Multi-Factor Authentication (MFA). Integrated MySQL for secure data storage and built an intuitive interface for transactions.",
      technologies: ["Java", "MySQL", "JDBC", "SHA-256", "OWASP Encoder"],
      features: ["Password hashing", "Multi-Factor Authentication", "Secure transactions"]
    },
    {
      title: "Sudoku Game",
      description: "Created a Sudoku game with difficulty selection, real-time validation, and a random puzzle generator. Designed a responsive UI/UX and integrated a solving algorithm for enhanced gameplay.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Difficulty selection", "Real-time validation", "Random puzzle generator"]
    },
    {
      title: "University Management System",
      description: "Designed a system using OOP principles to model students, instructors, departments, and courses. Applied encapsulation, inheritance, abstraction, and polymorphism for a structured design.",
      technologies: ["Java", "OOP"],
      features: ["Object-oriented design", "Encapsulation", "Inheritance", "Polymorphism"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-orange-800/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-orange-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-3">{project.title}</CardTitle>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-orange-900/50 text-orange-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
