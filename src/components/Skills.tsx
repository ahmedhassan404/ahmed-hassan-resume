import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C/C++", "Java", "JavaScript", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "AWS Basics"]
    }
  ];

  const concepts = [
    "Object-Oriented Programming (OOP)",
    "Design Patterns",
    "Data Structures",
    "Algorithms",
    "SHA-256 Cryptography"
  ];

  return (
    <section id="skills" className="py-20 px-4" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" 
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-800/60 hover:text-blue-200 transition-all duration-200 cursor-default"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" data-aos="fade-up" data-aos-delay="600">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-xl font-semibold">Core Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, index) => (
                <span 
                  key={concept} 
                  className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-800/60 hover:text-blue-200 transition-all duration-200 cursor-default"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {concept}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;