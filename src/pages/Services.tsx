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
  Target, ArrowRight
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const servicestab0 = [
  {
    icon: BarChart3,
    image: "images/service1.jpg",
    title: "Market Entry Strategy",
    description: "",
    features: [
      "Market feasibility studies",
      "Opportunity assessment",
      "Competitive analysis",
      "Consumer insights",
      "Go-to-market strategy",
      "Market prioritization",
      "Entry roadmap development"
    ],
  },
  {
    icon: Target,
    image: "images/service2.jpg",
    title: "Distributor & Partner Selection",
    description: "",
    features: [
      "Distributor identification",
      "Partner evaluation and qualification",
      "Commercial negotiations",
      "Due diligence",
      "Contract support",
      "Performance framework development",
    ],
  },
  {
    icon: Palette,
    image: "images/service3.jpg",
    title: "Product Registration & Compliance",
    description: "",
    features: [
      "Product registration guidance",
      "Label compliance review",
      "Shelf-life requirements",
      "Documentation support",
      "Regulatory coordination",
      "Market-specific compliance recommendations",
    ],
  },
  {
    icon: Megaphone,
    image: "images/service4.jpg",
    title: "Pricing & Commercial Strategy",
    description: "",
    features: [
      "Pricing strategy",
      "Margin analysis",
      "Route-to-market costing",
      "Landed cost calculations",
      "Trade terms optimization",
      "Promotion planning",
    ],
  },
  {
    icon: Rocket,
    image: "images/service5.jpg",
    title: "Retail & HORECA Development",
    description: "Marque Élan helps brands establish and expand their presence across both Retail and HORECA channels throughout the GCC and Middle East.",
    categories: [
      {
        id: 0,
        label: "Retail",
        features: [
          "Hypermarkets",
          "Supermarkets",
          "Convenience Stores",
          "Specialty Retailers",
          "Premium Retail Concepts",
          "E-commerce Platforms",
        ],
      },
      {
        id: 1,
        label: "HORECA",
        features: [
          "Hotels",
          "Restaurants",
          "Cafés",
          "Catering Companies",
          "Quick Service Restaurants (QSR)",
          "Hospitality Groups",
          "Institutional Foodservice",
        ],
      },
      {
        id: 2,
        label: "Services Include",
        features: [
          "Route-to-Market Strategy",
          "Retail Listing Support",
          "HORECA Account Development",
          "Distributor Management",
          "Trade Marketing",
          "Sales Activation Programs",
          "Category Management",
          "Commercial Negotiations"
        ],
      }
    ],
  },
  {
    icon: Package,
    image: "images/service6.jpg",
    title: "Sourcing & Procurement Solutions",
    description: "",
    features: [
      "Supplier identification",
      "Product sourcing",
      "Procurement optimization",
      "Contract negotiation",
      "Cost reduction initiatives",
      "Private label development",
    ],
  },
  {
    icon: Globe,
    image: "images/service7.jpg",
    title: "Commercial Management Support",
    description: "",
    features: [
      "Commercial representation",
      "Distributor management",
      "Performance reviews",
      "Sales monitoring",
      "Business development",
      "Market intelligence reporting",
    ],
  },
  {
    icon: Package,
    image: "images/service8.jpg",
    title: "Branding & Digital Marketing",
    description: "Strengthen your brand, reach the right audience, and accelerate business growth with our tailored marketing solutions.",
    cta: {
      text: "Explore Branding & Digital Marketing",
      link: 1,
      newTab: "switch"
    }
  },
];

export const servicestab1 = [
  {
    icon: BarChart3,
    image: "images/service9.jpg",
    title: "Brand & Digital Solutions",
    description1: "A strong market presence requires more than distribution and sales. Businesses must establish a compelling digital identity that builds credibility, engages customers, and supports long-term growth.",
    description2: "Marque Élan provides end-to-end digital solutions for businesses across all industries.",
    description3: "Services include",
    features: [
      "Website Design & Development",
      "Corporate Website Creation",
      "E-commerce Development",
      "Website Content Creation",
      "Search Engine Optimization (SEO)",
      "Social Media Strategy",
      "Social Media Management",
      "Content Creation",
      "Community Management",
      "Digital Marketing Campaigns",
      "Brand Identity Development",
      "Graphic Design & Creative Services",
      "Corporate Presentations & Marketing Materials",
    ],
    outro: "Whether launching a new business, refreshing an existing brand, or enhancing online visibility, we deliver tailored digital solutions aligned with your commercial objectives."
  }
];

const servicestab2 = [
  {
    icon: BarChart3,
    image: "images/service10.jpg",
    title: "FMCG & Consumer Goods",
    description: "",
    features: [
      "Food & Beverage",
      "Frozen Foods",
      "Dairy & Plant-Based Products",
      "Snacks & Confectionery",
      "Beverages",
      "Organic & Natural Products",
      "Health & Wellness Products",
      "Beauty & Personal Care",
      "Household Products",
      "Consumer Packaged Goods (CPG)",
      "Private Label Brands",
    ],
  },
  {
    icon: BarChart3,
    image: "images/service11.jpg",
    title: "Retail & Distribution",
    description: "",
    features: [
      "Retail Groups",
      "Hypermarkets",
      "Supermarkets",
      "Convenience Stores",
      "Specialty Retailers",
      "E-commerce Platforms",
    ],
  },
  {
    icon: BarChart3,
    image: "images/service12.jpg",
    title: "HORECA & Hospitality",
    description: "",
    features: [
      "Hotels",
      "Restaurants",
      "Cafés",
      "Catering Companies",
      "Foodservice Operators",
      "Hospitality Suppliers",
    ],
  },
  {
    icon: BarChart3,
    image: "images/service13.jpg",
    title: "Other Industries",
    description: "Through our Brand & Digital Solutions division, we also support businesses across multiple sectors requiring branding, website development, social media management, and digital marketing services.",
    features: [],
  }
];

const servicestab3 = [
  {
    icon: BarChart3,
    image: "images/service14.jpg",
    title: "Market Coverage",
    description: "Through our network of distributors, retailers, foodservice operators, and strategic partners, Marque Élan supports brands across:",
    features: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Kuwait",
      "Qatar",
      "Bahrain",
      "Oman",
      "Lebanon",
    ],
    outro: "Our local market expertise enables brands to navigate regulatory requirements, identify the right partners, and accelerate market penetration across the region."
  }
];

const getValidTab = (tab: string | null) => {
  const parsedTab = Number(tab);

  return Number.isInteger(parsedTab) && parsedTab >= 0 && parsedTab <= 3 ? parsedTab : 0;
};

const getServiceId = (title: string) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => getValidTab(searchParams.get("tab")));

  useEffect(() => {
    setActiveTab(getValidTab(searchParams.get("tab")));
  }, [searchParams]);

  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-service-animate]");

    if (!animatedElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeTab]);

  useEffect(() => {
    const serviceId = searchParams.get("service");

    if (!serviceId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(serviceId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [activeTab, searchParams]);

  const selectTab = (tab: number) => {
    setActiveTab(tab);
    setSearchParams({ tab: String(tab) });
  };

  const getCtaLink = (link: string | number) => {
    if (typeof link === "number") {
      return `/services?tab=${link}`;
    }

    if (link.startsWith("/") || link.startsWith("http")) {
      return link;
    }

    return `/services/${link}`;
  };

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

        <section className="py-4 tabs">
          <div className="container mx-auto px-6 flex gap-4">
            <a className={`p-2 rounded-xl ${activeTab === 0 ? "active" : ""}`} onClick={() => { selectTab(0) }}>Business Growth & Market Expansion</a>
            <a className={`p-2 rounded-xl ${activeTab === 1 ? "active" : ""}`} onClick={() => { selectTab(1) }}>Brand & Digital Solutions</a>
            <a className={`p-2 rounded-xl ${activeTab === 2 ? "active" : ""}`} onClick={() => { selectTab(2) }}>Industries We Serve</a>
            <a className={`p-2 rounded-xl ${activeTab === 3 ? "active" : ""}`} onClick={() => { selectTab(3) }}>Market Coverage</a>
          </div>
        </section>

        {/* Services List */}
        <section className="pt-10 pb-24">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {activeTab === 0 && servicestab0.map((service, index) => (
                <div
                  key={service.title}
                  id={getServiceId(service.title)}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Content */}
                  <div
                    data-service-animate
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} service-reveal service-reveal-up`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {/* <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {service.categories ? (
                      <div>
                        {service.categories.map((category) => (
                          <React.Fragment key={category.id}>
                            <div
                              key={category.id}
                              className="flex items-center gap-2 text-m text-foreground mb-1"
                            >
                              {/* <div className="w-1.5 h-1.5 rounded-full bg-primary" /> */}
                              {category.label}
                            </div>
                            <div className="grid grid-cols-2 gap-1 mb-4">
                              {category.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 text-sm text-foreground"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {service.features && service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    )}

                    {service.cta && service.cta.newTab === "switch" ? (
                      <a className="text-primary font-medium mt-4 flex items-center gap-1 cursor-pointer" onClick={() => { selectTab(Number(service.cta?.link ?? 0)); scrollTo(0, 0); }}>
                        {service.cta?.text}
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      service.cta?.link &&
                      <Link to={getCtaLink(service.cta.link)} target={service.cta?.newTab ? "_blank" : "_self"} rel="noopener noreferrer" className="text-primary font-medium mt-4 flex items-center gap-1">
                        {service.cta?.text}
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}

                  </div>

                  {/* Visual */}
                  <div
                    data-service-animate
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} service-reveal ${index % 2 === 0 ? 'service-reveal-right' : 'service-reveal-left'}`}
                    style={{ animationDelay: `${index * 120 + 150}ms` }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden group">
                      <img className="serviceImageBig" src={service.image} />
                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                          className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                          size={180}
                        />
                      </div> */}
                      {/* <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                        <span className="text-sm font-medium text-foreground">
                          {service.features[0]}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 1 && servicestab1.map((service, index) => (
                <div
                  key={service.title}
                  id={getServiceId(service.title)}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Content */}
                  <div
                    data-service-animate
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} service-reveal service-reveal-up`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {/* <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-2 leading-relaxed">
                      {service.description1}
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description2}
                    </p>
                    <p className="text-muted-foreground mb-2 leading-relaxed">
                      <strong>{service.description3}</strong>
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
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

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.outro}
                    </p>
                  </div>

                  {/* Visual */}
                  <div
                    data-service-animate
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} service-reveal ${index % 2 === 0 ? 'service-reveal-right' : 'service-reveal-left'}`}
                    style={{ animationDelay: `${index * 120 + 150}ms` }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden group">
                      <img className="serviceImageBig" src={service.image} />

                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                          className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                          size={180}
                        />
                      </div> */}
                      {/* <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                        <span className="text-sm font-medium text-foreground">
                          {service.features[0]}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 2 && servicestab2.map((service, index) => (
                <div
                  key={service.title}
                  id={getServiceId(service.title)}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Content */}
                  <div
                    data-service-animate
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} service-reveal service-reveal-up`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {/* <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    {service.categories ? (
                      <div>
                        {service.categories.map((category) => (
                          <React.Fragment key={category.id}>
                            <div
                              key={category.id}
                              className="flex items-center gap-2 text-m text-foreground mb-1"
                            >
                              {/* <div className="w-1.5 h-1.5 rounded-full bg-primary" /> */}
                              {category.label}
                            </div>
                            <div className="grid grid-cols-2 gap-1 mb-4">
                              {category.features.map((feature, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 text-sm text-foreground"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    ) : (
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
                    )}

                  </div>

                  {/* Visual */}
                  <div
                    data-service-animate
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} service-reveal ${index % 2 === 0 ? 'service-reveal-right' : 'service-reveal-left'}`}
                    style={{ animationDelay: `${index * 120 + 150}ms` }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden group">
                      <img className="serviceImageBig" src={service.image} />

                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                          className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                          size={180}
                        />
                      </div> */}
                      {/* <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                        <span className="text-sm font-medium text-foreground">
                          {service.features[0]}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 3 && servicestab3.map((service, index) => (
                <div
                  key={service.title}
                  id={getServiceId(service.title)}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Content */}
                  <div
                    data-service-animate
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} service-reveal service-reveal-up`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    {/* <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div> */}
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
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

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.outro}
                    </p>

                  </div>

                  {/* Visual */}
                  <div
                    data-service-animate
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''} service-reveal ${index % 2 === 0 ? 'service-reveal-right' : 'service-reveal-left'}`}
                    style={{ animationDelay: `${index * 120 + 150}ms` }}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl relative overflow-hidden group">
                      <img className="serviceImageBig" src={service.image} />

                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon
                          className="text-primary/10 group-hover:text-primary/20 transition-colors duration-500"
                          size={180}
                        />
                      </div> */}
                      {/* <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                        <span className="text-sm font-medium text-foreground">
                          {service.features[0]}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >

        <CTASection />
      </main >
      <Footer />
    </div >
  );
};

export default Services;
