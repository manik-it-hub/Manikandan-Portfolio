import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "Web Development",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: ["GitHub", "IntelliJ", "Figma", "Canva", "VS Code"],
  },
  {
    title: "Core Competencies",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
    skills: ["Data Structures & Algorithms", "Web Development", "OOP", "Problem Solving", "Critical Thinking"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications and solving complex problems
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-8 glass-effect hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      className="px-4 py-2 bg-secondary/80 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-500/20 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default border border-transparent"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-8 rounded-2xl glass-effect hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">3+</div>
            <p className="text-sm text-muted-foreground">Major Projects</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">8.04</div>
            <p className="text-sm text-muted-foreground">CGPA</p>
          </div>
          <div className="p-8 rounded-2xl glass-effect hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">10+</div>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
