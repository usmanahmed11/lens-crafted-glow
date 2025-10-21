import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlassesScene from "@/components/GlassesScene";
import FeatureCard from "@/components/FeatureCard";
import { Eye, Shield, Sparkles, Award } from "lucide-react";
import heroImage from "@/assets/hero-eyewear.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-subtle opacity-50" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                See the World
                <span className="block gradient-accent bg-clip-text text-transparent">
                  Differently
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover premium eyewear that combines timeless design with modern innovation. 
                Each frame is crafted with precision to enhance your vision and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="gradient-accent text-primary shadow-glow text-lg px-8">
                  Explore Collection
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Our Story
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <GlassesScene />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Visionary
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and craftsmanship in every pair
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Eye}
              title="Premium Lenses"
              description="Advanced optical technology providing crystal-clear vision and UV protection"
            />
            <FeatureCard 
              icon={Sparkles}
              title="Handcrafted"
              description="Each frame is meticulously crafted by skilled artisans using premium materials"
            />
            <FeatureCard 
              icon={Shield}
              title="Lifetime Warranty"
              description="We stand behind our quality with comprehensive lifetime coverage"
            />
            <FeatureCard 
              icon={Award}
              title="Award Winning"
              description="Recognized globally for exceptional design and innovation in eyewear"
            />
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <img 
                src={craftsmanshipImage} 
                alt="Eyewear craftsmanship" 
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Crafted with
                <span className="block gradient-accent bg-clip-text text-transparent">
                  Precision
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every pair of Visionary glasses represents hours of meticulous craftsmanship. 
                Our artisans combine traditional techniques with modern innovation to create 
                frames that are as durable as they are beautiful.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From selecting the finest materials to the final polish, we obsess over 
                every detail to ensure your eyewear exceeds expectations.
              </p>
              <Button size="lg" className="gradient-accent text-primary shadow-glow">
                Learn Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to See Clearly?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the perfect blend of style, comfort, and clarity with Visionary eyewear
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 shadow-glow">
            Book a Consultation
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
