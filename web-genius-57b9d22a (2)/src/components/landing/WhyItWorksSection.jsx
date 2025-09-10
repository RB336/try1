
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhyItWorksSection() {
  const comparisons = [
    {
      icon: <Clock className="w-12 h-12" />,
      traditional: "2-3 חודשים עם מתכנת",
      our: "3 ימים לכל היותר",
      color: "emerald"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      traditional: "עלויות פיתוח גבוהות",
      our: "מחיר משתלם וחד-פעמי",
      color: "blue"
    },
    {
      icon: <Users className="w-12 h-12" />,
      traditional: "צריך לתאם עם מספר אנשים",
      our: "איש קשר אחד לכל התהליך",
      color: "purple"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      traditional: "עיצוב גנרי וזמנים ארוכים",
      our: "עיצוב מותאם וביצוע מהיר",
      color: "sky"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      sky: "text-sky-600 bg-sky-50 border-sky-200"
    };
    return colors[color];
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

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
              למה זה משתלם לכם?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              השוואה מהירה: הדרך המסורתית מול הדרך החכמה
            </p>
          </motion.div>

          <div className="space-y-8">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Our Way - on the right (order 1 in RTL) */}
                <div className={`lg:order-1 p-6 rounded-2xl border-2 ${getColorClasses(item.color)}`}>
                  <div className="text-center">
                    <div className={`mb-4 ${item.color === 'emerald' ? 'text-emerald-600' : item.color === 'blue' ? 'text-blue-600' : item.color === 'purple' ? 'text-purple-600' : 'text-sky-600'}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-right">הדרך שלנו</h3>
                    <p className="text-gray-600 text-right font-semibold">{item.our}</p>
                  </div>
                </div>

                {/* VS - in the middle */}
                <div className="lg:order-2 text-center">
                  <div className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold inline-block">
                    VS
                  </div>
                </div>

                {/* Traditional Way - on the left (order 3 in RTL) */}
                <div className="lg:order-3 p-6 rounded-2xl border-2 border-dashed border-red-300 bg-red-50">
                  <div className="text-center">
                    <div className="text-red-500 mb-4 opacity-60">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-right">הדרך המסורתית</h3>
                    <p className="text-gray-600 text-right">{item.traditional}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              בואו נדבר על הדף שלכם
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
