import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { servicestab1 } from "./Services";

const serviceDetails = {
  "digital-marketing": servicestab1[0],
};

type ServiceSlug = keyof typeof serviceDetails;

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = slug ? serviceDetails[slug as ServiceSlug] : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6">
            <Link to="/services" className="text-primary font-medium inline-flex items-center gap-2 mb-8">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Service not found</h1>
            <p className="text-muted-foreground max-w-2xl">
              The service detail page you are looking for does not exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/services" className="text-secondary/80 hover:text-secondary font-medium inline-flex items-center gap-2 mb-8">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
            <span className="text-sm tracking-[0.3em] text-secondary/70 uppercase mb-4 block">
              Service Details
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-secondary/80 max-w-3xl">
              {service.description1}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description2}
              </p>
              <p className="text-foreground font-semibold mb-4">
                {service.description3}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.outro}
              </p>
            </div>

            <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden">
              <img className="serviceImageBig" src={`${import.meta.env.BASE_URL}${service.image}`} alt={service.title} />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
