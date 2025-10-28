import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Education", value: "BCS in CSE", icon: GraduationCap },
    { label: "Current Role", value: "DevOps Intern", icon: Briefcase },
    { label: "Specialization", value: "Cloud & Automation", icon: Award },
  ];

  const skills = [
    { name: "Cloud Computing", level: 85 },
    { name: "Networking Basics", level: 80 },
    { name: "Git", level: 90 },
    { name: "Docker", level: 85 },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 border-none bg-card/60 backdrop-blur-sm"
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground">
                  Graduated from <span className="text-primary font-medium">AIUB</span> with a Bachelor of Computer Science in CSE, majoring in Software.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">
                  Currently continuing an internship as a <span className="text-primary font-medium">DevOps Intern</span> at Cloudly InfoTech Limited, where I work on automation, cloud infrastructure, and deployment pipelines.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
