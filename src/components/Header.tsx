
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-secondary py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-primary text-2xl font-bold">MbL Technologies</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
            className="text-white hover:text-primary transition-colors"
          >
            Services
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }} 
            className="text-white hover:text-primary transition-colors"
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} 
            className="text-white hover:text-primary transition-colors"
          >
            Success Stories
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
            className="text-white hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center">
          <Button 
            className="bg-primary text-secondary hover:bg-primary/90"
            onClick={() => scrollToSection('contact')}
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Book a Consultation</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
