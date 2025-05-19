
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-primary text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Digital Marketing for Medical Professionals
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Struggling with Low Patient Walk-ins?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Specialized digital marketing solutions for Hyderabad-based doctors to increase clinic visibility and patient appointments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="cta-button text-lg" size="lg">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-lg" size="lg">
              See Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
