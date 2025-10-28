import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Send, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tasnimm118@gmail.com",
      link: "mailto:tasnimm118@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01405335811",
      link: "tel:01405335811",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/tasnim-binta-hossain-shakal-a731b12a1/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@tasnimm118-lgtm",
      link: "https://github.com/tasnimm118-lgtm",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how I can help with your DevOps needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Connect With Me</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Feel free to reach out for DevOps opportunities, collaborations, or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="group relative p-5 hover:shadow-xl transition-all duration-300 border-none bg-card/80 backdrop-blur-sm overflow-hidden hover:-translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center border border-primary/10 group-hover:border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium mb-1">{item.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="p-6 border-none bg-gradient-to-br from-primary/5 via-card/80 to-accent/5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24 hours during weekdays. Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="group relative p-8 border-none bg-card/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block flex items-center gap-2">
                  <span>Name</span>
                  <span className="text-primary">*</span>
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-background/80 border-primary/10 focus:border-primary/30 transition-colors h-12"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block flex items-center gap-2">
                  <span>Email</span>
                  <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/80 border-primary/10 focus:border-primary/30 transition-colors h-12"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block flex items-center gap-2">
                  <span>Message</span>
                  <span className="text-primary">*</span>
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  className="min-h-[160px] bg-background/80 border-primary/10 focus:border-primary/30 transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group/btn hover:scale-[1.02] h-12"
              >
                <span className="font-semibold">Send Message</span>
                <Send className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
