
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Medical Practice?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free, no-obligation consultation with our healthcare marketing specialists to discuss how we can help increase your patient walk-ins.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="cta-button text-lg w-full sm:w-auto" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Strategy Call
              </Button>
              <span className="text-gray-400">or</span>
              <Button variant="link" className="text-primary hover:text-primary/80">
                Learn more about our services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
