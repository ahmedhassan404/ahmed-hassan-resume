import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Store API",
      date: "Updated 3 weeks ago (2025)",
      description:
        "A full-stack e-commerce platform with a Node.js/Express backend and a React frontend. Supports role-based authentication, product management, order processing with payment integration, and a secure, well-documented API.",
      technologies: [
        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer", "Helmet", "dotenv",
        "React", "React Router", "Axios", 
        "Postman"
      ],
      features: [
        "Role-based authentication (Admin, Customer, Seller) using JWT",
        "React-based frontend for a dynamic user interface",
        "CRUD operations for products, including image uploads",
        "Order management with payment integration (e.g., Stripe)",
        "Review system for products",
        "Secure API with rate limiting and data sanitization",
        "Comprehensive error handling",
        "API documentation via Postman collection"
      ],
      repo: "https://github.com/ahmedhassan404/ecommerce-store-api"
    },
    {
      title: "MAC Forgery and Length Extension Attack – Demonstration and Mitigation",
      date: "Updated on May 16, 2025",
      description:
        "Explores the dangers of insecure Message Authentication Code (MAC) implementations by demonstrating a length extension attack. Compares an insecure server using MD5 with a secure implementation using HMAC-SHA256.",
      technologies: ["Python", "MD5", "HMAC", "SHA-256", "hashpumpy"],
      features: [
        "Demonstrates length extension attack",
        "Insecure MD5-based MAC server",
        "Secure HMAC-SHA256 server",
        "Client scripts for attack and validation"
      ],
      repo: "https://github.com/ahmedhassan404/mac-integrity-attack-mitigation"
    },
    {
      title: "Secure Authentication System Backend",
      date: "Updated on Apr 28, 2025",
      description:
        "A secure authentication backend system built with Node.js, Express, and MongoDB that supports both manual authentication and OAuth 2.0 with GitHub. Implements password strength validation, bcrypt hashing, JWT session management, and security best practices.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "OAuth 2.0"],
      features: [
        "Manual and OAuth authentication",
        "Password strength validation",
        "Secure password storage",
        "Session management with JWT",
        "Brute force and CSRF protection"
      ],
      repo: "https://github.com/ahmedhassan404/auth-system-backend"
    },
    {
      title: "ACL Permission Checker in C",
      date: "Updated on Apr 17, 2025",
      description:
        "Implements an Access Control List (ACL) permission checker in C, simulating UNIX-style file access control with support for extended ACLs, named users, named groups, and permission masks.",
      technologies: ["C", "UNIX ACL", "GCC"],
      features: [
        "Extended ACLs with named users/groups",
        "Permission masks",
        "File-based and default ACL loading",
        "Effective UID/GID access checks"
      ],
      repo: "https://github.com/ahmedhassan404/ACL-File-Permissions"
    },
    {
      title: "ATM System (Java-Based Banking)",
      date: "Updated on Jan 28, 2024",
      description: "Built a secure ATM system with password hashing (SHA-256) and Multi-Factor Authentication (MFA). Integrated MySQL for secure data storage and built an intuitive interface for transactions.",
      technologies: ["Java", "MySQL", "JDBC", "SHA-256", "OWASP Encoder"],
      features: ["Password hashing", "Multi-Factor Authentication", "Secure transactions"],
      repo: "https://github.com/ahmedhassan404/ATM-System"
    },
    {
      title: "University Management System",
      date: "Updated on Feb 12, 2023",
      description: "Designed a system using OOP principles to model students, instructors, departments, and courses. Applied encapsulation, inheritance, abstraction, and polymorphism for a structured design.",
      technologies: ["Java", "OOP"],
      features: ["Object-oriented design", "Encapsulation", "Inheritance", "Polymorphism"],
      repo: "https://github.com/ahmedhassan404/University-Management-System"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-orange-800/20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const cardContent = (
              <Card
                key={index}
                className="bg-slate-800/50 border-orange-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 h-[500px] flex flex-col"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <CardHeader className="flex flex-row justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-3">{project.title}</CardTitle>
                    {project.date && (
                      <div className="text-xs text-slate-400 mb-2">{project.date}</div>
                    )}
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                  </div>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="ml-4 text-slate-400 hover:text-orange-400 transition-colors" title="View on GitHub">
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto project-scrollbar">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                        <span>Technologies</span>
                        <div className="flex-grow border-t border-blue-400/20 ml-2"></div>
                      </h4>
                      <div className="flex flex-wrap flex-row-reverse gap-1.5 justify-end">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-orange-900/30 text-orange-300/90 hover:bg-orange-900/50 transition-colors duration-200 text-[11px] py-0.5 font-medium tracking-wide"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center">
                        <span>Key Features</span>
                        <div className="flex-grow border-t border-blue-400/20 ml-2"></div>
                      </h4>
                      <ul className="text-slate-300 text-sm space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start group">
                            <span className="text-orange-400/70 mr-2 group-hover:text-orange-400 transition-colors">•</span>
                            <span className="group-hover:text-slate-200 transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
            return project.repo ? (
              <a key={index} href={project.repo} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg">
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </div>

      {/* Scrollbar Styles */}
      <style>{`
        .project-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .project-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .project-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(245, 158, 66, 0.8);
          border-radius: 8px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .project-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 180, 100, 0.9);
        }

        .project-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(245, 158, 66, 0.8) rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </section>
  );
};

export default Projects;
