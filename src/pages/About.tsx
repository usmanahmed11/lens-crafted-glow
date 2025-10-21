import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We're obsessed with creating eyewear that exceeds expectations in every aspect."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your vision and satisfaction drive everything we do, from design to delivery."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries to bring you the latest in eyewear technology."
    }
  ];
  
  const steps = [
    {
      number: "01",
      title: "Design & Concept",
      description: "Our designers sketch and refine each frame, balancing aesthetics with functionality."
    },
    {
      number: "02",
      title: "Material Selection",
      description: "We source only premium materials - from Italian acetate to titanium alloys."
    },
    {
      number: "03",
      title: "Handcrafting",
      description: "Skilled artisans shape, polish, and assemble each frame with meticulous attention."
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Every pair undergoes rigorous testing to ensure it meets our exacting standards."
    },
    {
      number: "05",
      title: "Custom Fitting",
      description: "We personalize each pair to your unique facial features and prescription needs."
    },
    {
      number: "06",
      title: "Delivery & Care",
      description: "Your glasses arrive with lifetime support and complimentary adjustments."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Founded in 2015, Visionary was born from a simple belief: eyewear should be 
              more than a necessity—it should be an expression of who you are. We set out 
              to create frames that blend timeless elegance with modern innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to serve thousands of customers worldwide, each with their 
              own unique style and vision needs. Our commitment to quality and craftsmanship 
              remains unwavering.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-elegant text-center transition-smooth hover:shadow-glow hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              How We Operate
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to your eyes, every step is crafted with care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-elegant transition-smooth hover:shadow-glow"
              >
                <div className="text-5xl font-serif font-bold gradient-accent bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-12 rounded-3xl shadow-elegant">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                To create exceptional eyewear that enhances how you see and how you're seen. 
                We believe everyone deserves access to premium quality frames that reflect 
                their personal style and support their visual health.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                Through sustainable practices, innovative design, and unwavering commitment 
                to quality, we're redefining what eyewear can be.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="gradient-accent text-primary shadow-glow">
                  Join Our Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Visit us to discover how Visionary can transform your vision and style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 shadow-glow">
              Find a Store
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
