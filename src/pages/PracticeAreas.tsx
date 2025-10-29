import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  TrendingUp,
  Home,
  Landmark,
  Lightbulb,
  Gavel,
  FileCheck,
  Receipt,
  Users,
} from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate & Commercial Law",
      description: "Comprehensive legal services for business entities",
      details: [
        "Company formation (LLCs, joint-stock companies)",
        "Joint ventures and partnership agreements",
        "Shareholder agreements and corporate governance",
        "Mergers, acquisitions, and restructuring",
        "Commercial contracts and negotiations",
        "Corporate compliance and risk management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Foreign Investment Law",
      description: "Expert guidance under Investment Law No. 18 of 2021",
      details: [
        "Investment licensing and approvals",
        "Operating in special economic zones",
        "Maximizing investment incentives and guarantees",
        "Repatriation of capital and profits",
        "Investment dispute resolution",
        "Compliance with foreign investment regulations",
      ],
    },
    {
      icon: Home,
      title: "Real Estate & Construction Law",
      description: "Complete legal support for property and development projects",
      details: [
        "Property acquisition and leasing",
        "Construction contracts and agreements",
        "Zoning, permits, and regulatory approvals",
        "Development projects and public-private partnerships",
        "Real estate finance and secured transactions",
        "Property disputes and title issues",
      ],
    },
    {
      icon: Landmark,
      title: "Banking & Finance Law",
      description: "Sophisticated financial and banking legal services",
      details: [
        "Project finance and syndicated loans",
        "Banking regulations and compliance",
        "Secured lending and collateral arrangements",
        "Financial restructuring and workouts",
        "Payment systems and electronic banking",
        "Islamic finance and Sharia-compliant structures",
      ],
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property",
      description: "Protect and leverage your intellectual assets",
      details: [
        "Trademark registration and protection",
        "Patent applications and prosecution",
        "Copyright and design rights",
        "IP licensing and technology transfer",
        "Trade secrets and confidentiality",
        "IP infringement defense and enforcement",
      ],
    },
    {
      icon: Gavel,
      title: "Dispute Resolution & Arbitration",
      description: "Strategic litigation and alternative dispute resolution",
      details: [
        "Commercial litigation before Syrian courts",
        "International and domestic arbitration",
        "Mediation and settlement negotiations",
        "Enforcement of judgments and awards",
        "Shareholder and partnership disputes",
        "Construction and contract disputes",
      ],
    },
    {
      icon: FileCheck,
      title: "Regulatory & Compliance",
      description: "Navigate complex regulatory requirements",
      details: [
        "Business permits and licensing",
        "Sector-specific regulations (telecom, energy, mining, pharma)",
        "Compliance programs and internal policies",
        "Regulatory investigations and defense",
        "Government relations and approvals",
        "Anti-money laundering and sanctions compliance",
      ],
    },
    {
      icon: Receipt,
      title: "Tax & Customs Law",
      description: "Optimize tax efficiency and customs compliance",
      details: [
        "Tax planning and structuring",
        "Investment-related tax incentives",
        "Customs duties and import/export regulations",
        "Transfer pricing and international taxation",
        "Tax disputes and appeals",
        "Customs clearance and trade compliance",
      ],
    },
    {
      icon: Users,
      title: "Employment & Labor Law",
      description: "Comprehensive workforce legal solutions",
      details: [
        "Employment contracts and policies",
        "Local labor law compliance",
        "Employee benefits and social security",
        "Workplace disputes and disciplinary matters",
        "Termination and severance issues",
        "Labor inspections and regulatory compliance",
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
              Practice Areas
            </h1>
            <p className="font-inter text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive legal solutions across a wide spectrum of corporate and commercial matters
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">
                        {area.title}
                      </h3>
                      <p className="font-inter text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pl-0">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="font-inter text-muted-foreground flex items-start">
                        <span className="text-accent mr-3 mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-6">
              Need Legal Assistance?
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              Whatever your legal needs, Firas Dib provides the expertise, dedication, and strategic thinking necessary to achieve your objectives.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreas;
