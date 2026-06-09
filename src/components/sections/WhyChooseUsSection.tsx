import { Target, BarChart3, Settings, Users, Layers } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From market research to digital marketing and business development, we cover every stage of brand growth.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Our insights and analytics help you make informed, confident business choices.",
  },
  {
    icon: Settings,
    title: "Tailored Strategies",
    description: "Every plan is customized to meet your brand's goals and market opportunities.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our multidisciplinary experts bring knowledge from FMCG, start-ups, and established businesses.",
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "We strengthen brand positioning, improve decision-making, and accelerate market growth.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Why Choose Marque Élan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are more than an agency — we are your growth partner. We combine expertise, strategy, and execution to help brands thrive.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`relative group ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
