import { Card } from "@/components/ui/card";
import { FolderGit2, Clock, Rocket, Code2, Sparkles, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Rocket className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">My Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing my DevOps and cloud infrastructure projects
          </p>
        </div>

        <Card className="group relative p-12 lg:p-16 text-center border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-accent/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 backdrop-blur-sm overflow-hidden hover:-translate-y-2">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Particles */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-accent/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-10 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float" />
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent/30 rounded-full animate-float-delayed" />
          
          <div className="relative flex flex-col items-center space-y-8">
            {/* Animated Icon Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-slow" />
              <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <FolderGit2 className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg animate-float">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Projects Coming Soon
                </h3>
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm currently working on exciting DevOps and cloud infrastructure projects. 
                Check back soon to see my work in CI/CD pipelines, containerization, and automation!
              </p>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                { name: "Docker", icon: Code2 },
                { name: "Kubernetes", icon: Rocket },
                { name: "Cloud", icon: Cloud },
                { name: "Automation", icon: Sparkles },
                { name: "CI/CD", icon: FolderGit2 },
              ].map((tech, index) => (
                <Badge
                  key={tech.name}
                  className="px-5 py-2.5 bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default group/badge hover:scale-110 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <tech.icon className="w-4 h-4 mr-2 text-primary group-hover/badge:rotate-12 transition-transform" />
                  <span className="font-semibold text-foreground">{tech.name}</span>
                </Badge>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="w-full max-w-md space-y-3 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">Projects in Development</span>
                <span className="text-primary font-bold">In Progress...</span>
              </div>
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-gradient" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
