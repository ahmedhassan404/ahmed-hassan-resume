
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Foundation Certificate",
      organization: "Amazon Web Services",
      description: "Foundational knowledge of AWS cloud computing services and architecture",
      link: "AWS Foundation Certificate Link"
    },
    {
      title: "HackerRank Certificates",
      organization: "HackerRank",
      description: "Multiple programming and problem-solving certifications",
      link: "HackerRank Certificate Link"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-teal-800/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-slate-800/50 border-teal-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Award className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{achievement.title}</CardTitle>
                      <p className="text-purple-400 font-medium">{achievement.organization}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
