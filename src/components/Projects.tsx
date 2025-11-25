import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, Brain, Heart } from "lucide-react";

const projects = [
  {
    title: "AquaSphere",
    subtitle: "Groundwater Conservation Quiz App",
    description: "Designed and developed an interactive quiz game in GDevelop, aimed at raising awareness on groundwater conservation. Created engaging user flows and visually appealing UI designs using Figma.",
    tech: ["GDevelop", "Figma", "UI/UX Design"],
    icon: Trophy,
    color: "text-yellow-500",
    date: "Dec 2024",
    highlight: "Smart India Hackathon 2024",
  },
  {
    title: "Gemini Clone",
    subtitle: "AI-Powered Chat Application",
    description: "Engineered a responsive Gemini-inspired AI chat interface using React.js, with dynamic menu bar and recent chat history features. Deployed on Vercel for fast, scalable access.",
    tech: ["React.js", "HTML", "CSS", "Vercel"],
    icon: Brain,
    color: "text-blue-500",
    date: "Jul 2024",
    highlight: "Personal Project",
  },
  {
    title: "Carewave",
    subtitle: "Healthcare Assistance App",
    description: "Designed an intuitive and responsive healthcare app interface connecting domestic workers with doctors. Created modern, accessible layouts in Figma with focus on simplicity and usability.",
    tech: ["Figma", "UI/UX Design", "React Planning"],
    icon: Heart,
    color: "text-red-500",
    date: "Dec 2022",
    highlight: "UI/UX Design Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Showcasing my best work in web development, UI/UX design, and innovative digital solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="group glass-effect hover:border-primary/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${project.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-xs">
                      {project.highlight}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 group-hover:translate-x-1">
                    <span className="text-sm font-medium">View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
