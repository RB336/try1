
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, Clock, DollarSign } from 'lucide-react';

export default function FinalCTASection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+972525970972', '_self');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              מוכן להתחיל?
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                בואו נבנה לכם אתר
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              תוך 3 ימים יהיה לכם דף נחיתה שמביא לקוחות אמיתיים
            </p>

            {/* Key Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">מהיר</h3>
                <p className="text-gray-300 text-sm">3 ימים לכל היותר</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">תשלום חד-פעמי</h3>
                <p className="text-gray-300 text-sm">אתר מקצועי שישרת אותך לאורך שנים</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">מקצועי</h3>
                <p className="text-gray-300 text-sm">איכות ללא פשרות</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
            >
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                התחילו איתי את האתר עכשיו
              </Button>
              
              <Button 
                onClick={handlePhoneClick}
                className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200 text-slate-900 px-10 py-4 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                התקשר עכשיו: 052-597-0972
              </Button>
            </motion.div>

            <p className="text-gray-400 text-sm">
              לא בטוחים? צרו קשר ונדבר על מה שאתם צריכים
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
