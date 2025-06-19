import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "a7medhasan1@gmail.com",
      href: "mailto:a7medhasan1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 106 058 4686",
      href: "tel:+201060584686"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Smouha, Alexandria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ahmedhassan404"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ahmed-hassan-576350247"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-orange-700" data-aos="fade-right" data-aos-delay="400">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a key={index} href={item.href} className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors">
                      <item.icon className="h-5 w-5 text-orange-400" />
                      <span>{item.value}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-orange-700" data-aos="fade-left" data-aos-delay="600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="space-y-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors">
                      <link.icon className="h-5 w-5 text-orange-400" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <a href="mailto:a7medhasan1@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
