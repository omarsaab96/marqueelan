import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-float" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-1/3 left-20 w-20 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Mark */}
          <div className="mb-8 opacity-0 animate-fade-up">
            <span className="text-7xl md:text-9xl font-serif font-light tracking-[0.2em] text-primary-foreground">
              MÉ
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground mb-6 opacity-0 animate-fade-up animate-delay-200 leading-tight">
            Élan for every
            <span className="block italic font-light text-secondary">bold move</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animate-delay-300 font-light leading-relaxed">
            A full-service business growth agency helping companies turn insights into measurable results through market research, brand building, and digital excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-400">
            <Link to="/services">
              <Button variant="hero" size="xl" className="group">
                Discover Our Services
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/60 hover:text-secondary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
