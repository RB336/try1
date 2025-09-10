
import React, { useEffect } from 'react';
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import PortfolioSection from '../components/landing/PortfolioSection';
import WhyItWorksSection from '../components/landing/WhyItWorksSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import FloatingWhatsApp from '../components/landing/FloatingWhatsApp';

export default function Landing() {

  // הוספת קוד המעקב של Google
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17346616953';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-17346616953');

      // פונקציה גלובלית לשליחת המרת וואטסאפ
      window.trackWhatsAppClick = function() {
        gtag('event', 'conversion', {
          'send_to': 'AW-17346616953/sXzxCJj_xIAbEPm8wc9A',
          'value': 10.0,
          'currency': 'ILS'
        });
      };
    `;
    document.head.appendChild(script2);
  }, []);

  // פונקציה שעוטפת פתיחת וואטסאפ + שליחת ההמרה
  const openWhatsApp = (phone, message = '') => {
    if (typeof window.trackWhatsAppClick === 'function') {
      window.trackWhatsAppClick();
    }
    const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PortfolioSection />
      <WhyItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FloatingWhatsApp />
    </>
  );
}
