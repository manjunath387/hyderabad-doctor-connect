
import React from 'react';

const stats = [
  {
    value: "70%",
    label: "Average increase in patient walk-ins"
  },
  {
    value: "85%",
    label: "Improved online visibility for clients"
  },
  {
    value: "60+",
    label: "Hyderabad doctors working with us"
  },
  {
    value: "24/7",
    label: "Support & campaign monitoring"
  }
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
              <p className="text-secondary/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
