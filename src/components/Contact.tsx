import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maniks1516@gmail.com",
      href: "mailto:maniks1516@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8946084373",
      href: "tel:+918946084373",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mayiladuthurai, Tamil Nadu, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manikandan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/manikandan",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg glass-effect hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="p-8 glass-effect flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                <Send className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Let's create something amazing together!
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:maniks1516@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full glass-effect hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.location.href = 'https://linkedin.com/in/manikandan'}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
