import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              {/* <span className="text-4xl font-serif font-semibold tracking-wider">MÉ</span>
              <p className="text-sm tracking-[0.25em] mt-2 text-secondary/80">MARQUE ÉLAN</p> */}
              <img src="logo_lightblue.png" className="w-[100px]"/>
            </div>
            <p className="text-secondary/70 text-sm leading-relaxed">
              A full-service business growth agency helping companies turn insights into measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-secondary/70 hover:text-secondary transition-colors text-sm tracking-wider"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-secondary/70">
              <span>Market Entry Strategy</span>
              <span>Distributor & Partner Selection</span>
              <span>Product Registration & Compliance</span>
              <span>Pricing & Commercial Strategy</span>
              <span>Retail & HORECA Development</span>
              <span>Sourcing & Procurement Solutions</span>
              <span>Commercial Management Support</span>
              <span>Branding & Digital Marketing</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <h6>Consulting & Business Solutions</h6>
                <a
                  href="mailto:info@marqueelan.com"
                  className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors"
                >
                  <Mail size={16} />
                  info@marqueelan.com
                </a>
                <a
                  href="tel:+971507628268"
                  className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors"
                >
                  <Phone size={16} />
                  +971 50 762 8268
                </a>
              </div>

              <div>
                <h6>Digital Marketing & Social Media </h6>
                <a
                  href="mailto:marketing@marqueelan.com"
                  className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors"
                >
                  <Mail size={16} />
                  marketing@marqueelan.com
                </a>
                <a
                  href="tel:+971502950021"
                  className="flex items-center gap-3 text-secondary/70 hover:text-secondary transition-colors"
                >
                  <Phone size={16} />
                  +971 50 295 0021
                </a>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-sm">
            © 2025 Marque Élan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary/60">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
