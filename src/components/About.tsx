import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Passionate about web development and UI/UX design with a strong foundation in computer science
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 glass-effect hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">B.Tech in Information Technology</p>
                    <p className="text-sm text-muted-foreground">AVC College of Engineering</p>
                    <p className="text-sm text-primary">2022 - 2026 | CGPA: 8.04</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Higher Secondary (HSC)</p>
                    <p className="text-sm text-muted-foreground">Kalaimahal Matric.Hr.Sec.School</p>
                    <p className="text-sm text-primary">2022 | 83%</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Secondary (SSLC)</p>
                    <p className="text-sm text-muted-foreground">Kalaimahal Matric.Hr.Sec.School</p>
                    <p className="text-sm text-primary">2020 | 85%</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 glass-effect hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Achievement</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Smart India Hackathon 2024</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Selected for developing AquaSphere, an innovative quiz application 
                      focused on groundwater conservation awareness.
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      National Level Competition
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 glass-effect">
          <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            As a motivated B.Tech Information Technology student, I've developed a strong passion for 
            web development and UI/UX design. My expertise spans creating responsive, user-friendly 
            applications using modern technologies like HTML, CSS, JavaScript, React, and Figma. 
            I thrive on continuous learning, problem-solving, and delivering innovative digital solutions 
            that make a real impact. From hackathon victories to personal projects, I'm always eager 
            to push boundaries and create meaningful digital experiences.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
