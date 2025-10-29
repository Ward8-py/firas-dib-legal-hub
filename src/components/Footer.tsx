import { Link } from "react-router-dom";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl">Firas Dib</span>
                <span className="font-inter text-xs tracking-wide opacity-80">
                  LEGAL COUNSEL
                </span>
              </div>
            </div>
            <p className="font-inter text-sm opacity-80 leading-relaxed">
              Distinguished legal expertise in corporate, commercial, and investment law.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/insights" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Legal Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 font-inter text-sm opacity-80">
              <li>Corporate Law</li>
              <li>Investment Law</li>
              <li>Real Estate Law</li>
              <li>Banking & Finance</li>
              <li>Dispute Resolution</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Damascus, Syria</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+963123456789" className="hover:text-accent transition-colors">
                  +963 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@firasdib.law" className="hover:text-accent transition-colors">
                  contact@firasdib.law
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-inter text-sm opacity-70">
            <p>© {currentYear} Firas Dib. All rights reserved.</p>
            <p>Professional Legal Services with Integrity & Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
