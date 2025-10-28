import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 bg-secondary/30 border-t border-border/50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tasnim Binta Hossain Shakal
            </h3>
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start flex-wrap">
              <span className="flex items-center gap-1">
                <Code2 className="w-4 h-4 text-primary" />
                DevOps Intern
              </span>
              <span className="text-primary">•</span>
              <span>Cloud Enthusiast</span>
              <span className="text-primary">•</span>
              <span>Automation Expert</span>
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Github, link: "https://github.com/tasnimm118-lgtm", label: "GitHub" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/tasnim-binta-hossain-shakal-a731b12a1/", label: "LinkedIn" },
              { icon: Mail, link: "mailto:tasnimm118@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <social.icon className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {new Date().getFullYear()} Tasnim Binta Hossain Shakal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> and DevOps magic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
