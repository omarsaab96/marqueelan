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
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-float" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden md:block"/>
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden md:block" />
      <div className="absolute top-1/3 left-20 w-20 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Mark */}
          {/* <div className="mb-8 opacity-0 animate-fade-up">
            <img src="logo_lightblue.png" className="w-[250px] m-auto mb-10" />
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sug ar font-medium text-primary-foreground mb-6 opacity-0 animate-fade-up animate-delay-200 leading-tight">
            <span className="block italic font-light text-secondary">Unlocking Markets.</span>
            <span className="block italic font-light text-secondary">Accelerating Growth.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up animate-delay-300 font-light leading-relaxed">
            Your Strategic Gateway to the GCC & Middle East
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-400 absolute right-50 translate-x-[50%] md:right-5 bottom-[200px] md:bottom-[150px]">
        <Link to="/services">
          <Button variant="ghost" size="xl" className="group font-light text-white/60">
            Discover Our Services
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        {/* <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                Contact Us
              </Button>
            </Link> */}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/60 hover:text-secondary transition-colors md:animate-bounce mb-[120px]"
      >
        <ChevronDown size={32} />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
