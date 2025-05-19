
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import SolutionsSection from '@/components/SolutionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import CtaSection from '@/components/CtaSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionsSection />
        <StatsSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
