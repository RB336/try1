import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern - simplified */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Visual - with subtle animation */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative pb-12 pt-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full w-3/4"></div>
                  <div className="bg-gray-200 h-3 rounded-full w-full"></div>
                  <div className="bg-gray-200 h-3 rounded-full w-5/6"></div>
                  <div className="bg-emerald-500 h-12 rounded-xl w-2/3 flex items-center justify-center">
                    <span className="text-white font-semibold">CTA</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-100 h-16 rounded-lg"></div>
                    <div className="bg-gray-100 h-16 rounded-lg"></div>
                    <div className="bg-gray-100 h-16 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg z-10">
                <TrendingUp className="w-6 h-6" />
              </div>
              
              <div className="absolute bottom-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-10">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-right order-1 lg:order-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              דף נחיתה שמביא
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                לקוחות אמיתיים
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl"
            >
              בואו נבנה לכם דף נחיתה מקצועי שהופך מבקרים ללקוחות תוך 3 ימי עבודה בלבד
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-end"
            >
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                אני רוצה דף נחיתה עכשיו
              </Button>
              
              <a 
                href="tel:+972525970972"
                className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
              >
                התקשר עכשיו: 052-597-0972
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-end gap-8 mt-12 text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">לכל היותר 3 ימים</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">תוצאות מדידות</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">למעלה מ-50 לקוחות מרוצים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}