import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className={cn(
            "text-3xl font-serif font-semibold tracking-wider transition-colors duration-300",
            isScrolled ? "text-primary" : "text-primary-foreground"
          )}>
            MÉ
          </span>
          <span className={cn(
            "hidden sm:block text-sm tracking-[0.25em] font-light uppercase transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            Marque Élan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm tracking-wider font-medium transition-colors duration-300 line-reveal",
                location.pathname === link.path
                  ? isScrolled ? "text-primary" : "text-primary-foreground"
                  : isScrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              variant={isScrolled ? "default" : "hero-outline"}
              size="sm"
              className="ml-4"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg tracking-wider py-2 border-b border-border/50 transition-colors",
                location.pathname === link.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mt-4">
            <Button variant="default" className="w-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
