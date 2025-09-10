
import React from 'react';
import { Clock, Target, Smartphone, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "מהיר וזמין",
      description: "דף נחיתה מוכן תוך 3 ימי עבודה לכל היותר"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ממוקד המרות",
      description: "עיצוב שמוכן להמיר מבקרים ללקוחות משלמים"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "מותאם לכל מכשיר",
      description: "נראה מושלם במחשב, טאבלט וטלפון נייד"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "מוכח לתוצאות",
      description: "בנוי על בסיס עקרונות שיווק דיגיטלי מוכחים"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "מאובטח ומהיר",
      description: "טעינה מהירה, אבטחת SSL, וחווית משתמש מעולה"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "קל לעדכון",
      description: "תוכלו לעדכן תכנים בקלות בעתיד"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              מה תקבלו בדיוק?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              דף נחיתה מקצועי שנבנה במיוחד כדי להביא לכם לקוחות חדשים
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-right">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-right leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              אני רוצה להתחיל
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
