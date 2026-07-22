import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, Award, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "Every strategy we develop is designed to deliver measurable outcomes for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We combine proven methodologies with innovative approaches to stay ahead of market trends.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, invested in your success as if it were our own.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "We hold ourselves to the highest standards in everything we do, from research to execution.",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6 opacity-0 animate-fade-up animate-delay-100">
              Experience Meets
              <span className="block italic font-light text-secondary">Strategy</span>
            </h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-200">
              A team of experienced strategists, researchers, and brand specialists dedicated to your growth.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                  About us
                </span> */}
                <h2 className="text-4xl font-serif text-foreground mb-6">
                  Who We Are
                  {/* <span className="block text-primary">Driven by Results</span> */}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Marque Élan is a specialized consultancy dedicated to helping international brands successfully enter, expand, and thrive across the GCC and Middle East.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With deep regional expertise, extensive industry networks, and hands-on commercial experience, we bridge the gap between global brands and local market opportunities. We provide end-to-end market entry and expansion solutions, ensuring businesses navigate regional complexities with confidence and achieve sustainable growth.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our approach combines strategic insight, local market intelligence, and practical execution to transform opportunities into measurable results.
                </p>
                {/* <div className="space-y-3">
                  {[
                    "Deep expertise in FMCG and consumer markets",
                    "Track record with start-ups and established brands",
                    "Data-driven approach to every decision",
                    "End-to-end support from insight to execution",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-square bg-secondary/30 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="images/marqueelan.jpg"/>
                  </div>
                  {/* <div className="absolute inset-6 border border-primary/20 rounded-xl" /> */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                    <div className="text-center text-primary-foreground">
                      <span className="text-4xl font-serif font-bold">Élan</span>
                      <p className="text-sm text-secondary/70 mt-2">
                        /āˈlän/ — enthusiasm and energy
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                Our Mission
              </span>
              {/* <h2 className="text-4xl font-serif text-foreground mb-8">
                Moving Businesses Forward
              </h2> */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To empower international brands and businesses with the knowledge, strategy, and commercial support needed to successfully enter, grow, and lead within the GCC and Middle East markets.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are committed to delivering data-driven insights, strategic guidance, and execution excellence that enable businesses to build sustainable, profitable, and scalable operations across the region.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                Our Vision
              </span>
              {/* <h2 className="text-4xl font-serif text-foreground mb-8">
                Moving Businesses Forward
              </h2> */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To become the leading growth and market expansion partner in the GCC and Middle East, connecting global brands with regional opportunities and creating long-term value for businesses, consumers, and partners.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        {/* <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                Our Values
              </span>
              <h2 className="text-4xl font-serif text-foreground">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
