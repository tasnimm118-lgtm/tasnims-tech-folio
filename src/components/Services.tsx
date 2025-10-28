import { Card } from "@/components/ui/card";
import { Cloud, GitBranch, Container, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      description: "Design and deploy scalable cloud infrastructure on AWS, Azure, or GCP with best practices for security and performance.",
      tags: ["AWS", "Azure", "GCP"],
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Configuration",
      description: "Implement automated CI/CD pipelines for seamless code integration, testing, and deployment workflows.",
      tags: ["Jenkins", "GitLab CI", "GitHub Actions"],
    },
    {
      icon: Container,
      title: "Docker Containerization",
      description: "Containerize applications with Docker for consistent environments and simplified deployment across platforms.",
      tags: ["Docker", "Kubernetes", "Container Registry"],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and development workflows to improve efficiency and reduce manual errors.",
      tags: ["Automation", "Scripts", "Monitoring"],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DevOps services to streamline your development and deployment processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-card/80 backdrop-blur-sm group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
