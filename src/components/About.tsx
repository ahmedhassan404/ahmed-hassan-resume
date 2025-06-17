
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a dedicated Computer Science student with a strong foundation in programming, algorithms, and data structures. 
              I have experience in backend development with a specialization in Node.js and Express.js, coupled with a proven ability to solve complex problems through competitive programming.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Proficient in working with databases such as MongoDB and MySQL to design and implement efficient data storage solutions. 
              I'm eager to apply technical expertise and contribute to innovative projects in a collaborative environment.
            </p>
          </div>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor of Science in Computer Science</h4>
                    <p className="text-slate-300">Alexandria University</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Sept 2022 - May 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">Alexandria, Egypt</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {["Databases", "OOP", "Data Structures", "Algorithms", "Operating Systems", "Software Engineering"].map((course) => (
                    <span key={course} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
