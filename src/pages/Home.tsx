import { Link } from "react-router-dom";
import { ArrowRight, Scale, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Building2,
  TrendingUp as Investment,
  Home as RealEstate,
  Landmark,
  Lightbulb,
  Gavel,
} from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Home = () => {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate & Commercial Law",
      description: "Expert guidance in company formation, joint ventures, and corporate governance.",
    },
    {
      icon: Investment,
      title: "Foreign Investment Law",
      description: "Navigate Investment Law No. 18 of 2021 with confidence and maximize incentives.",
    },
    {
      icon: RealEstate,
      title: "Real Estate & Construction",
      description: "Comprehensive support for property transactions, development, and construction projects.",
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      description: "Sophisticated banking solutions, project finance, and regulatory compliance.",
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property",
      description: "Protect your innovations with trademark, patent, and licensing expertise.",
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      description: "Strategic litigation and arbitration services to resolve complex disputes.",
    },
  ];

  const testimonials = [
    {
      quote: "Firas Dib provided exceptional legal guidance during our company's expansion into Syria. His expertise in investment law was invaluable.",
      author: "Ahmad Al-Hassan",
      position: "CEO, TechVentures International",
    },
    {
      quote: "Professional, thorough, and always available. Firas handled our complex real estate transaction with remarkable efficiency and expertise.",
      author: "Sarah Mitchell",
      position: "Director, Global Properties Ltd.",
    },
    {
      quote: "Outstanding corporate counsel with deep knowledge of Syrian commercial law. Firas has been instrumental in our business success.",
      author: "Omar Khalil",
      position: "Managing Partner, Damascus Industries",
    },
  ];

  const stats = [
    { icon: Scale, value: "15+", label: "Years Experience" },
    { icon: Award, value: "200+", label: "Cases Won" },
    { icon: Users, value: "150+", label: "Satisfied Clients" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional law office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <span className="font-inter text-accent font-semibold tracking-wide text-sm uppercase">
                Distinguished Legal Counsel
              </span>
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Excellence in Corporate & Investment Law
            </h1>
            <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              With over 15 years of distinguished legal practice, Firas Dib provides expert counsel in corporate law, foreign investment, and commercial matters with unwavering commitment to client success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/practice-areas">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="font-playfair font-bold text-4xl text-foreground">
                  {stat.value}
                </div>
                <div className="font-inter text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Areas of Practice
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your business and personal needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/practice-areas">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses and individuals for exceptional legal representation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation today to discuss your legal needs with an experienced attorney committed to your success.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <Link to="/contact">
              Contact Firas Dib Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
