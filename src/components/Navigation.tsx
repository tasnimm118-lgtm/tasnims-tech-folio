import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Tasnim Shakal
          </h1>
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "portfolio", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground/70 hover:text-primary transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
