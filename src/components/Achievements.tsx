import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Foundation Certificate",
      organization: "Amazon Web Services",
      description: "Foundational knowledge of AWS cloud computing services and architecture",
      link: "https://www.credly.com/badges/bd1d37c2-ab96-48f0-8e93-ac27decb2c09/print"
    },
    {
      title: "HackerRank Certificates",
      organization: "HackerRank",
      description: "Multiple programming and problem-solving certifications",
      link: "https://www.hackerrank.com/certificates/2e8f8d815dea"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Security Foundations",
      organization: "Amazon Web Services (AWS Academy)",
      description: "Completed AWS Academy Cloud Security Foundations course, demonstrating knowledge in cloud security best practices.",
      link: "https://www.credly.com/badges/8ed32383-e15b-4727-b350-56d4600108a2/print"
    },
    {
      title: "LeetCode Profile: a7med404",
      organization: "LeetCode",
      description: "Total Solved: 137 Problems (Easy: 92, Medium: 43, Hard: 2) — Beats 86.7%",
      link: "https://leetcode.com/a7med404/"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-blue-800/20" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 transition-all duration-300" data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <Award className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{achievement.title}</CardTitle>
                      <p className="text-orange-400 font-medium">{achievement.organization}</p>
                    </div>
                  </div>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate for ${achievement.title}`}
                  >
                    <ExternalLink className="h-5 w-5 text-slate-400 hover:text-blue-400 transition-colors" />
                  </a>
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
