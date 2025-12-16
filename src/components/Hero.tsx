import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Full Stack Developer & UI/UX Designer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Manikandan S</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Motivated B.Tech IT student passionate about creating responsive, 
          user-friendly applications and delivering innovative digital solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg"
            className="group bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="glass-effect hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/manik-it-hub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-effect hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/maniks16" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-effect hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="mailto:maniks1516@gmail.com"
            className="p-3 rounded-full glass-effect hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          
          <a 
            href="tel:+918946084373"
            className="p-3 rounded-full glass-effect hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
          >
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
