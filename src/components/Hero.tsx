import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Tasnim Binta Hossain Shakal
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                DevOps Intern
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a DevOps Intern with a strong interest in automation and cloud infrastructure. 
              I'm passionate about improving development workflows and deploying scalable 
              applications efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 hover:bg-primary/5"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              {["Cloud Computing", "Networking", "Git", "Docker"].map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-2xl" />
              <div className="absolute inset-8 rounded-full bg-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Tasnim Binta Hossain Shakal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
