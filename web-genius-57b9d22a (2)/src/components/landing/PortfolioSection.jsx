
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'ZimmerStay - הזמנת צימרים',
      description: 'דף נחיתה מקצועי לפלטפורמת הזמנת צימרים וחדרי אירוח, עם מערכת חיפוש וסינון מתקדמת.',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      link: 'https://app--zimmer-stay-eeae4545.base44.app/',
    },
    {
      title: 'יועץ טיולים אישי',
      description: 'דף נחיתה מקצועי ליועץ טיולים עם עיצוב מושך ופונקציונליות מתקדמת.',
      imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
      link: 'https://app---f44d7bb7.base44.app/',
    },
    {
      title: 'מורה פרטי - שיעורים פרטיים',
      description: 'דף נחיתה מקצועי למורה פרטית לשיעורים פרטיים עם עיצוב מודרני ואטרקטיבי.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      link: 'https://mellow-trifle-8bd8a6.netlify.app/',
    },
     {
      title: 'MindEase - תמיכה נפשית',
      description: 'דף נחיתה מקצועי לאפליקציית מציאת מטפלים וקביעת פגישות טיפוליות בצורה דיסקרטית.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      link: 'https://app--mind-ease-f853169c.base44.app/',
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972?text=היי רום, אני צריך דף נחיתה שמביא לקוחות – בוא נתחיל', '_blank');
  };

  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            עבודות נבחרות
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הצצה לכמה מהפרויקטים האחרונים שבנינו עבור לקוחותינו
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {project.description}
                </p>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all mt-auto"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    צפה באתר
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </a>
                </Button>
              </div>
            </div>
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
              אני רוצה גם אתר כזה
            </Button>
          </motion.div>
          
      </div>
    </section>
  );
}
