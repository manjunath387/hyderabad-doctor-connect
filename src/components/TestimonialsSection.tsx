
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MbL Technologies has transformed my private practice. My online appointments increased by 70% in just three months.",
    name: "Dr. Sharma",
    specialty: "Cardiologist",
    location: "Banjara Hills, Hyderabad"
  },
  {
    quote: "Their understanding of the healthcare market in Hyderabad is exceptional. Our hospital has seen a 45% increase in new patient consultations.",
    name: "Dr. Reddy",
    specialty: "Orthopedic Surgeon",
    location: "Jubilee Hills, Hyderabad"
  },
  {
    quote: "As a new clinic in a competitive area, their targeted strategies helped us establish a strong presence quickly and efficiently.",
    name: "Dr. Patel",
    specialty: "Dermatologist",
    location: "Gachibowli, Hyderabad"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">What Hyderabad Doctors Say</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Here's how we've helped medical professionals across Hyderabad increase their patient walk-ins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black border-none hover:bg-black/80 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-primary text-4xl font-serif mb-4">"</div>
                <p className="text-gray-200 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.specialty}</p>
                  <p className="text-primary text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
