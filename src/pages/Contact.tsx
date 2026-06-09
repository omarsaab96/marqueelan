import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Business Consultancy",
    details: ["Jinane@marqueelan.com", "+971 50 762 8268"],
  },
  {
    icon: Phone,
    title: "Digital Marketing",
    details: ["Marketing@marqueelan.com", "+971 50 295 0021"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6 opacity-0 animate-fade-up animate-delay-100">
              Let's Start a
              <span className="block italic font-light text-secondary">Conversation</span>
            </h1>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-200">
              Ready to grow your brand? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <span className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                  Get in Touch
                </span>
                <h2 className="text-4xl font-serif text-foreground mb-6">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Whether you have a question about our services, want to discuss a potential project, or simply want to learn more about how we can help your brand grow — we're here for you.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="mt-16 p-8 bg-secondary/30 rounded-2xl">
                  <div className="text-center">
                    <span className="text-5xl font-serif text-primary/30">MÉ</span>
                    <p className="text-sm text-muted-foreground mt-4">
                      Your growth partner
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
                <h3 className="text-2xl font-serif text-foreground mb-2">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Name
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company name"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={18} />
                        Message Sent
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
