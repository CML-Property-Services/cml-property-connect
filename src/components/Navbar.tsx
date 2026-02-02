import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "T&Cs", href: "#terms" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top contact bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-center sm:justify-end">
          <a
            href="tel:+447521406071"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span>Call us: 07521 406071</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={() => scrollToSection("#home")} className="flex-shrink-0">
            <img src={logo} alt="CML Property Services" className="h-12 w-auto" />
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground font-medium hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="tel:+447521406071"
              className="btn-brand flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 rounded-xl hover:bg-muted text-foreground font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+447521406071"
              className="btn-brand flex items-center justify-center gap-2 w-full mt-4"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
