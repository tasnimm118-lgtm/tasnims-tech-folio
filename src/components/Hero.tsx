import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Cloud, GitBranch, Container, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "Cloud", icon: Cloud },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "Automation", icon: Zap },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm animate-scale-in">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg tracking-wide animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
                Tasnim Binta Hossain{" "}
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
                  Shakal
                </span>
              </h1>
              <div className="flex items-center gap-3 animate-fade-in-up">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground/80">
                  DevOps Intern
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up">
              I'm a DevOps Intern with a strong interest in{" "}
              <span className="text-primary font-medium">automation</span> and{" "}
              <span className="text-primary font-medium">cloud infrastructure</span>. 
              I'm passionate about improving development workflows and deploying scalable 
              applications efficiently.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group hover:scale-105"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="px-4 py-2 bg-card/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default group hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <tech.icon className="w-4 h-4 mr-2 text-primary group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">{tech.name}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Picture */}
          <div className="relative flex justify-center items-center animate-fade-in">
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] border border-primary/10 rounded-full animate-spin-slow" />
              <div className="absolute w-[450px] h-[450px] border border-accent/10 rounded-full animate-spin-slower" />
            </div>

            {/* Main Profile Container */}
            <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] group">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 blur-2xl animate-pulse-slow group-hover:blur-3xl transition-all duration-500" />
              
              {/* Rotating Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-very-slow opacity-50" />
              
              {/* Inner Gradient */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              
              {/* Glass Effect Layer */}
              <div className="absolute inset-8 rounded-full bg-card/80 backdrop-blur-sm border border-white/20 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Tasnim Binta Hossain Shakal"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-lg animate-float">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-card/80 backdrop-blur-md rounded-2xl border border-accent/20 shadow-lg animate-float-delayed">
                <Container className="w-8 h-8 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
