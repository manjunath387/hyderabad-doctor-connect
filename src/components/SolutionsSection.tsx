
import React from 'react';
import { BriefcaseMedical, Hospital, User } from 'lucide-react';

const solutions = [
  {
    icon: <User className="h-12 w-12 text-primary" />,
    title: "Patient-Focused SEO",
    description: "Optimized website content that targets local patients searching for specific treatments and specialties in Hyderabad.",
    features: ["Local keyword optimization", "Medical content strategy", "Google Business profile optimization"]
  },
  {
    icon: <Hospital className="h-12 w-12 text-primary" />,
    title: "Clinic Visibility Strategy",
    description: "Multi-channel approach to make your practice visible where potential patients are looking for healthcare solutions.",
    features: ["Targeted ad campaigns", "Social media presence", "Online reputation management"]
  },
  {
    icon: <BriefcaseMedical className="h-12 w-12 text-primary" />,
    title: "Patient Conversion System",
    description: "Digital systems that convert online visibility into actual appointment bookings and patient walk-ins.",
    features: ["Online appointment booking", "Follow-up automation", "Patient engagement tools"]
  }
];

const SolutionsSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">OUR SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient">Digital Marketing Solutions for Doctors</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            MbL Technologies offers specialized digital marketing strategies designed specifically for healthcare providers in Hyderabad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 bg-secondary/5 p-4 rounded-full inline-block">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
