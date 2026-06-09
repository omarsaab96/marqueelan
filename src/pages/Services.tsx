import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { 
  BarChart3, 
  Palette, 
  Megaphone, 
  Rocket, 
  Package, 
  Globe,
  Users,
  Target,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Market Research & FMCG Insights",
    description: "We provide in-depth market research and actionable FMCG insights that help brands understand consumer behavior, identify opportunities, and make informed business decisions.",
    features: ["Consumer Behavior Analysis", "Market Opportunity Mapping", "Trend Forecasting", "Competitive Intelligence"],
  },
  {
    icon: Target,
    title: "Consumer Segmentation & Competitive Benchmarking",
    description: "We analyze your target audience and competitive landscape to define clear consumer segments and position your brand for maximum impact in the market.",
    features: ["Audience Profiling", "Competitor Analysis", "Market Positioning", "Strategic Recommendations"],
  },
  {
    icon: Palette,
    title: "Brand Building & Private Label Development",
    description: "From brand identity to full private label development, we create strong, distinctive brands that connect with consumers and stand out on the shelf.",
    features: ["Brand Identity Design", "Private Label Strategy", "Packaging Development", "Brand Guidelines"],
  },
  {
    icon: Megaphone,
    title: "Marketing Strategy & Social Media Management",
    description: "We build marketing strategies and manage your digital presence to increase awareness, drive engagement, and strengthen your brand positioning online.",
    features: ["Digital Strategy", "Content Creation", "Social Media Management", "Performance Marketing"],
  },
  {
    icon: Rocket,
    title: "Start-up Portfolio Building & Business Plan Development",
    description: "We support start-ups with complete portfolio building, strategic business planning, and frameworks that set a solid foundation for long-term growth.",
    features: ["Business Planning", "Portfolio Strategy", "Investment Readiness", "Growth Frameworks"],
  },
  {
    icon: Package,
    title: "Sourcing & Procurement Solutions",
    description: "We streamline sourcing and procurement, connecting you with reliable suppliers and helping you secure high-quality products at competitive prices.",
    features: ["Supplier Sourcing", "Quality Assurance", "Cost Optimization", "Supply Chain Strategy"],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "We design and develop clean, modern, and user-friendly websites that reflect your brand, enhance credibility, and support business growth.",
    features: ["UX/UI Design", "Responsive Development", "E-commerce Solutions", "Performance Optimization"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-sm tracking-[0.3em] text-secondary/70 uppercase mb-4 block opacity-0 animate-fade-up">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6 opacity-0 animate-fade-up animate-delay-100">
              Comprehensive Solutions for
              <span className="block italic font-light text-secondary">Business Growth</span>
            </h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-200">
              From market research to digital marketing, we offer end-to-end services to accelerate your brand's success.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                          className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                          size={180}
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                        <span className="text-sm font-medium text-foreground">
                          {service.features[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
