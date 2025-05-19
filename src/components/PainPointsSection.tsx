
import React from 'react';
import { Check, Clock, Users, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const painPoints = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Low Appointment Bookings",
    description: "Patients can't find your clinic online when searching for healthcare services in Hyderabad."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Competing with Large Hospitals",
    description: "Struggling to stand out against bigger healthcare institutions with larger marketing budgets."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Poor Online Reputation",
    description: "Lack of patient reviews and testimonials making potential patients choose other providers."
  },
  {
    icon: <Check className="h-10 w-10 text-primary" />,
    title: "Ineffective Marketing Spend",
    description: "Wasting resources on marketing channels that don't reach your specific patient demographic."
  }
];

const PainPointsSection = () => {
  return (
    <section id="pain-points" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">DOCTOR'S CHALLENGES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient">Common Challenges Hyderabad Doctors Face</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            In today's competitive healthcare landscape, these are the obstacles preventing your practice from reaching its full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-2 border-secondary/10 hover:border-primary transition-all duration-300 bg-white shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{point.icon}</div>
                <CardTitle className="text-xl font-bold">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
