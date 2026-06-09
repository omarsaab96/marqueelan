import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground mb-6 leading-tight">
            Let's Grow Your Brand
            <span className="block italic font-light text-secondary">Together</span>
          </h2>
          <p className="text-secondary/80 text-lg mb-10 max-w-xl mx-auto">
            Reach out to discuss your project, request a consultation, or learn more about how we can help your brand grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="hero"
                size="xl"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
              >
                Start a Conversation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
