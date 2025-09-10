
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Clock, Award } from 'lucide-react';

export default function TrustSection() {
  const trustElements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "אבטחת SSL",
      description: "הדף שלכם מאובטח ומוגן"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "תשלומים מאובטחים",
      description: "אשראי, ביט, PayPal ועוד"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "זמינות 24/7",
      description: "הדף זמין לכם תמיד"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "איכות מובטחת",
      description: "סטנדרטים גבוהים בכל פרויקט"
    }
  ];

  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              סימני אמון ואבטחה
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              אנחנו דואגים לכל הפרטים כדי שתרגישו בטוחים
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-2xl group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {element.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {element.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {element.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              אמצעי תשלום מאובטחים
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <span className="text-blue-600 font-bold text-xl">💳</span>
                <p className="text-sm text-gray-600 mt-1">אשראי</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <span className="text-orange-500 font-bold text-xl">📱</span>
                <p className="text-sm text-gray-600 mt-1">ביט</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <span className="text-blue-500 font-bold text-xl">🏦</span>
                <p className="text-sm text-gray-600 mt-1">העברה בנקאית</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border">
                <span className="text-blue-700 font-bold text-xl">PayPal</span>
                <p className="text-sm text-gray-600 mt-1">PayPal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
