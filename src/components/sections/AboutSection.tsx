import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Data-Driven Decisions",
  "Tailored Strategies",
  "Experienced Team",
  "Holistic Approach",
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Experience Meets
              <span className="block text-primary">Strategy</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Marque Élan is a business growth agency built by a team of experienced strategists, researchers, and brand specialists. With strong expertise across FMCG, start-ups, social media and digital marketing, we help companies make informed decisions and execute with confidence.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team combines data-driven insights with practical, results-focused strategies supporting brands in defining their direction, strengthening their market presence, and achieving long-term growth.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="default" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-2xl relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[12rem] font-serif font-light text-primary/20">
                  MÉ
                </div>
              </div>
              {/* Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary to-transparent">
                <div className="grid grid-cols-3 gap-4 text-center text-primary-foreground">
                  <div>
                    <span className="text-3xl font-serif font-bold">50+</span>
                    <p className="text-xs text-secondary/70 mt-1">Projects</p>
                  </div>
                  <div>
                    <span className="text-3xl font-serif font-bold">15+</span>
                    <p className="text-xs text-secondary/70 mt-1">Industries</p>
                  </div>
                  <div>
                    <span className="text-3xl font-serif font-bold">100%</span>
                    <p className="text-xs text-secondary/70 mt-1">Dedication</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-lg flex items-center justify-center shadow-xl animate-float">
              <span className="text-2xl font-serif text-primary">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
