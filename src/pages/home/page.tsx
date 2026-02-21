// File: src/pages/home/page.tsx
import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;