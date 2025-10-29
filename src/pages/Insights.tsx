import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Insights = () => {
  const articles = [
    {
      title: "Understanding Investment Law No. 18 of 2021: A Comprehensive Guide for Foreign Investors",
      excerpt: "Syria's new Investment Law introduces significant incentives and protections for foreign investors. Learn about licensing procedures, available guarantees, and how to maximize benefits under the new framework.",
      date: "March 15, 2024",
      category: "Investment Law",
    },
    {
      title: "Corporate Governance Best Practices for Syrian Companies",
      excerpt: "Effective corporate governance is essential for business success and compliance. Explore key governance principles, board responsibilities, and practical strategies for Syrian corporations.",
      date: "March 8, 2024",
      category: "Corporate Law",
    },
    {
      title: "Navigating Real Estate Transactions in Special Economic Zones",
      excerpt: "Special economic zones offer unique opportunities and challenges for real estate development. Understand the legal framework, procedures, and considerations for property investments in these areas.",
      date: "March 1, 2024",
      category: "Real Estate Law",
    },
    {
      title: "Intellectual Property Protection Strategies for Businesses",
      excerpt: "In today's knowledge economy, protecting intellectual property is crucial. Learn about trademark registration, patent protection, and practical IP strategies for Syrian businesses.",
      date: "February 22, 2024",
      category: "Intellectual Property",
    },
    {
      title: "Resolving Commercial Disputes Through Arbitration",
      excerpt: "Arbitration offers an efficient alternative to traditional litigation for commercial disputes. Discover the benefits, procedures, and enforcement considerations for arbitration in Syria.",
      date: "February 15, 2024",
      category: "Dispute Resolution",
    },
    {
      title: "Employment Law Update: Recent Changes and Compliance Requirements",
      excerpt: "Stay informed about recent amendments to Syrian labor law and their implications for employers. Understand new compliance obligations and best practices for workforce management.",
      date: "February 8, 2024",
      category: "Employment Law",
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
              Legal Insights
            </h1>
            <p className="font-inter text-xl md:text-2xl opacity-90 leading-relaxed">
              Expert analysis and practical guidance on legal developments affecting businesses in Syria
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair font-bold text-xl text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              Subscribe to receive the latest legal insights, updates on Syrian law, and practical business guidance directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
