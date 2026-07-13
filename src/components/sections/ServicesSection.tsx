import { Link } from "react-router-dom";
import {
  BarChart3,
  Palette,
  Megaphone,
  Rocket,
  Package,
  Globe,
  Users,
  Target,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    image: "images/service1.jpg",
    title: "Market Entry Strategy",
    description: "In-depth market research and actionable insights that help brands understand consumer behavior and make informed decisions.",
  },
  {
    icon: Target,
    image: "images/service2.jpg",
    title: "Distributor & Partner Selection",
    description: "Analyze your target audience and competitive landscape to define clear segments and position your brand for maximum impact.",
  },
  {
    icon: Palette,
    image: "images/service3.jpg",
    title: "Product Registration & Compliance",
    description: "From brand identity to private label development, we create strong, distinctive brands that connect with consumers.",
  },
  {
    icon: Megaphone,
    image: "images/service4.jpg",
    title: "Pricing & Commercial Strategy",
    description: "Build marketing strategies and manage your digital presence to increase awareness and strengthen brand positioning.",
  },
  {
    icon: Rocket,
    image: "images/service5.jpg",
    title: "Retail & HORECA Development",
    description: "Complete portfolio building, strategic business planning, and frameworks for long-term growth.",
  },
  {
    icon: Package,
    image: "images/service6.jpg",
    title: "Sourcing & Procurement Solutions",
    description: "Streamline sourcing and connect with reliable suppliers for high-quality products at competitive prices.",
  },
  {
    icon: Package,
    image: "images/service7.jpg",
    title: "Commercial Management Support",
    description: "Streamline sourcing and connect with reliable suppliers for high-quality products at competitive prices.",
  },
  {
    icon: Package,
    image: "images/service8.jpg",
    title: "Branding & Digital Marketing",
    description: "Streamline sourcing and connect with reliable suppliers for high-quality products at competitive prices.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24  bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions from market research to digital marketing and business development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-2 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} />
              </div> */}
              <img className="serviceImage" src={service.image} />
              <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              {/* <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p> */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
