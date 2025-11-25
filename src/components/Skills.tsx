import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-blue-500",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Web Development",
    icon: Database,
    color: "text-green-500",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-orange-500",
    skills: ["GitHub", "IntelliJ", "Figma", "Canva", "VS Code"],
  },
  {
    title: "Core Competencies",
    icon: Lightbulb,
    color: "text-purple-500",
    skills: ["Data Structures & Algorithms", "Web Development", "OOP", "Problem Solving", "Critical Thinking"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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
                className="p-8 glass-effect hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      className="px-4 py-2 bg-secondary hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
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
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-lg glass-effect">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-sm text-muted-foreground">Major Projects</p>
          </div>
          <div className="p-6 rounded-lg glass-effect">
            <div className="text-3xl font-bold gradient-text mb-2">8.0</div>
            <p className="text-sm text-muted-foreground">CGPA</p>
          </div>
          <div className="p-6 rounded-lg glass-effect">
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
