
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const testimonials = [
    {
      business: "סטודיו לעיצוב פנים",
      rating: 5,
      text: "דף הנחיתה שבנו לי הביא לי 30% יותר פניות תוך חודש ראשון. העיצוב מקצועי והתהליך היה חלק ומהיר.",
      result: "30% יותר פניות"
    },
    {
      business: "יועץ עסקי",
      rating: 5,
      text: "הייתי חייב להגיע למתכנתים יקרים אבל כאן קיבלתי פתרון מהיר ומקצועי. הדף ממיר בצורה מעולה ולקוחות מתקשרים יותר.",
      result: "פתרון מהיר ומקצועי"
    },
    {
      business: "מאמנת אישית",
      rating: 5,
      text: "בתוך 3 ימים היה לי דף נחיתה שנראה כמו של חברה גדולה. הפכתי הרבה יותר מקצועית בעיני הלקוחות.",
      result: "נראית מקצועית יותר"
    },
    {
      business: "צלם אירועים",
      rating: 5,
      text: "לאחר שהשקעתי אלפי שקלים במתכנת שלא סיפק, פה קיבלתי בדיוק מה שרציתי במחיר הוגן ובזמן קצר.",
      result: "הדף שרציתי במחיר הוגן"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-50" dir="rtl">
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
              מה אומרים הלקוחות שלנו?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
                  
                  {/* Rating */}
                  <div className="flex justify-start mb-4 mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-right mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Result Badge */}
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {testimonial.result}
                    </span>
                  </div>
                </div>

                {/* Profession */}
                <div className="text-right mt-auto pt-4 border-t border-gray-100">
                    <p className="font-semibold text-blue-800">{testimonial.business}</p>
                </div>
              </motion.div>
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
              אני רוצה תוצאות כאלה
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
