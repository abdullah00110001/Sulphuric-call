'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}