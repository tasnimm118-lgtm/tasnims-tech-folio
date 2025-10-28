import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
              Tasnim Binta Hossain Shakal
            </h3>
            <p className="text-muted-foreground text-sm">
              DevOps Intern • Cloud Enthusiast • Automation Expert
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/tasnimm118-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/tasnim-binta-hossain-shakal-a731b12a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:tasnimm118@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tasnim Binta Hossain Shakal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
