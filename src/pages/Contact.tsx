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
    title: "Consulting & Business Solutions",
    details: [
      { icon: Mail, value: "info@marqueelan.com" },
      { icon: Phone, value: "+971 50 762 8268" }
    ],
  },
  {
    title: "Digital Marketing & Social Media",
    details: [
      { icon: Mail, value: "Marketing@marqueelan.com" },
      { icon: Phone, value: "+971 50 295 0021" }
    ],
  },
];

const contactFormEndpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `${import.meta.env.BASE_URL}contact.php`;

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

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `New website inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast({
        title: "Message failed",
        description: "Please try again or email us directly at info@marqueelan.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  Let's Build Your Growth Story
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Whether you are an international brand looking to enter the GCC, a company seeking strategic expansion, or a business aiming to strengthen its digital presence, Marque Élan is ready to support your journey.
                  <br /><br />
                  Contact us today to explore how we can help unlock your next growth opportunity.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div>
                        <h3 className="font-serif text-lg text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail) => (
                            <div key={detail.value} className="flex items-center gap-2">
                              <detail.icon className="text-primary" size={16} />
                              <p key={detail.value} className="text-muted-foreground text-sm">
                                {detail.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative */}
                {/* <div className="mt-16 p-8 bg-secondary/30 rounded-2xl">
                  <div className="text-center">
                    <span className="text-5xl font-serif text-primary/30">MÉ</span>
                    <p className="text-sm text-muted-foreground mt-4">
                      Your growth partner
                    </p>
                  </div>
                </div> */}
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
                        name="name"
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
                        name="email"
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
                      name="company"
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
                      name="message"
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
