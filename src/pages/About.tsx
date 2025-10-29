import { Award, GraduationCap, Briefcase, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import legalAbstract from "@/assets/legal-abstract.jpg";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Doctor of Law (JD), Damascus University School of Law",
        "Master of Laws (LL.M.) in Corporate Law",
        "Specialized training in International Investment Law",
      ],
    },
    {
      icon: Award,
      title: "Bar Admissions & Memberships",
      items: [
        "Licensed to practice before Syrian Courts",
        "Member, Syrian Bar Association",
        "Member, International Bar Association (IBA)",
        "Member, Arab Lawyers Union",
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      items: [
        "15+ years practicing corporate and commercial law",
        "Advised on 200+ foreign investment transactions",
        "Lead counsel for major construction and development projects",
        "Expert in Investment Law No. 18 of 2021",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl mb-6">
              About Firas Dib
            </h1>
            <p className="font-inter text-xl md:text-2xl opacity-90 leading-relaxed">
              A distinguished legal professional dedicated to excellence, integrity, and client success
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair font-bold text-4xl text-foreground">
                Professional Journey
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Firas Dib is a highly respected legal counsel with over 15 years of distinguished experience in corporate, commercial, and investment law. Based in Damascus, Syria, he has built a reputation for providing sophisticated legal solutions to complex business challenges.
                </p>
                <p>
                  Throughout his career, Firas has advised numerous domestic and international clients on a wide range of legal matters, from company formation and corporate governance to foreign direct investment and major construction projects. His deep understanding of Syrian law, combined with his knowledge of international legal frameworks, makes him an invaluable advisor for businesses operating in or entering the Syrian market.
                </p>
                <p>
                  Firas is particularly renowned for his expertise in Investment Law No. 18 of 2021, having guided countless foreign investors through the licensing process and helped them maximize available incentives and guarantees. His clients appreciate his practical approach, attention to detail, and unwavering commitment to achieving their business objectives within the bounds of applicable law.
                </p>
                <p>
                  Beyond his legal practice, Firas is actively involved in professional legal associations and regularly contributes to legal publications on topics related to corporate law, foreign investment, and commercial regulations in Syria.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={legalAbstract} 
                alt="Legal expertise" 
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Credentials & Experience
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              A foundation of excellence built on rigorous education and proven professional achievement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((section, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                    <section.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="font-inter text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="font-playfair font-bold text-4xl text-foreground mb-6">
                Mission & Values
              </h2>
            </div>
            
            <div className="space-y-8 font-inter text-lg text-muted-foreground leading-relaxed">
              <div className="bg-secondary p-8 rounded-lg border border-border">
                <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
                  Our Mission
                </h3>
                <p>
                  To provide exceptional legal counsel that empowers clients to achieve their business objectives with confidence. We are committed to delivering practical, strategic advice grounded in deep legal expertise and a thorough understanding of our clients' industries and goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-playfair font-semibold text-xl text-foreground mb-3">
                    Integrity
                  </h4>
                  <p className="text-base">
                    We uphold the highest ethical standards in every aspect of our practice, ensuring honesty, transparency, and accountability.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-playfair font-semibold text-xl text-foreground mb-3">
                    Excellence
                  </h4>
                  <p className="text-base">
                    We strive for excellence in everything we do, from legal research to client communication, delivering outstanding results.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-playfair font-semibold text-xl text-foreground mb-3">
                    Client Focus
                  </h4>
                  <p className="text-base">
                    Our clients' success is our success. We listen carefully, respond promptly, and tailor our services to meet their unique needs.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-playfair font-semibold text-xl text-foreground mb-3">
                    Innovation
                  </h4>
                  <p className="text-base">
                    We embrace innovative solutions and stay current with legal developments to provide forward-thinking counsel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
