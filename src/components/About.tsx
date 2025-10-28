import { GraduationCap, Briefcase, Award, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Education", value: "BCS in CSE", icon: GraduationCap, color: "from-blue-500 to-cyan-500" },
    { label: "Current Role", value: "DevOps Intern", icon: Briefcase, color: "from-primary to-accent" },
    { label: "Specialization", value: "Cloud & Automation", icon: Award, color: "from-purple-500 to-pink-500" },
  ];

  const skills = [
    { name: "Cloud Computing", level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "Networking Basics", level: 80, color: "from-green-500 to-emerald-500" },
    { name: "Git", level: 90, color: "from-primary to-accent" },
    { name: "Docker", level: 85, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-secondary/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Get to know me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative p-8 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-none bg-card/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">My Story</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              My Journey
            </h3>
            <div className="space-y-6">
              <Card className="p-6 border-none bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center border border-blue-500/20">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Education</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Graduated from <span className="text-primary font-semibold">AIUB</span> with a Bachelor of Computer Science in CSE, majoring in Software.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-none bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-x-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Experience</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently continuing an internship as a <span className="text-primary font-semibold">DevOps Intern</span> at Cloudly InfoTech Limited, where I work on automation, cloud infrastructure, and deployment pipelines.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Tech Stack</span>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills & Expertise
            </h3>
            <Card className="p-6 border-none bg-card/60 backdrop-blur-sm">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3 group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-50`}
                        style={{ width: `${skill.level}%` }}
                      />
                      <div
                        className={`relative h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
