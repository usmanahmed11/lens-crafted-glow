import { Link, useLocation } from "react-router-dom";
import { Glasses } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <Glasses className="h-8 w-8 text-accent" />
          <span className="text-2xl font-serif font-bold text-foreground">Visionary</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive("/") ? "text-accent" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-smooth hover:text-accent ${
              isActive("/about") ? "text-accent" : "text-foreground"
            }`}
          >
            About Us
          </Link>
          <Button variant="default" className="gradient-accent text-primary shadow-glow">
            Explore Collection
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Glasses className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
