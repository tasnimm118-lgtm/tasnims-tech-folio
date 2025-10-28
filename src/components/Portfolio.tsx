import { Card } from "@/components/ui/card";
import { FolderGit2, Clock } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my DevOps and cloud infrastructure projects
          </p>
        </div>

        <Card className="p-12 text-center border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <FolderGit2 className="w-24 h-24 text-primary/40" />
              <Clock className="w-8 h-8 text-accent absolute -bottom-2 -right-2" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">
                Projects Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-md">
                I'm currently working on exciting DevOps and cloud infrastructure projects. 
                Check back soon to see my work in CI/CD pipelines, containerization, and automation!
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Docker
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Cloud
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Automation
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
