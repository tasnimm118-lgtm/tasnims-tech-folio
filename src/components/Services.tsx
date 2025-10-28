import { Card } from "@/components/ui/card";
import { Cloud, GitBranch, Container, Workflow, Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      description: "Design and deploy scalable cloud infrastructure on AWS, Azure, or GCP with best practices for security and performance.",
      tags: ["AWS", "Azure", "GCP"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Configuration",
      description: "Implement automated CI/CD pipelines for seamless code integration, testing, and deployment workflows.",
      tags: ["Jenkins", "GitLab CI", "GitHub Actions"],
      color: "from-primary to-accent",
    },
    {
      icon: Container,
      title: "Docker Containerization",
      description: "Containerize applications with Docker for consistent environments and simplified deployment across platforms.",
      tags: ["Docker", "Kubernetes", "Container Registry"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and development workflows to improve efficiency and reduce manual errors.",
      tags: ["Automation", "Scripts", "Monitoring"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-secondary/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">What I Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            DevOps services to streamline your development and deployment processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-none bg-card/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-6">
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-primary text-sm font-medium border border-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="inline-block p-8 border-none bg-gradient-to-br from-primary/5 via-card/80 to-accent/5 backdrop-blur-sm">
            <p className="text-muted-foreground mb-4 text-lg">
              Ready to optimize your DevOps workflow?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
            >
              Let's discuss your project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
