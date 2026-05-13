"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    text: "Gayathri completely transformed my wardrobe. I now dress with confidence and clarity. The process was effortless!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    name: "Rohan Kapoor",
    role: "Entrepreneur",
    text: "I used to hate shopping, but the personal shopper service made it so easy. I have looks that fit my vibe perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "Anjali Desai",
    role: "Bride-to-be",
    text: "The wedding styling took all the stress away. Every outfit was coordinated perfectly with my makeup and jewellery.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <div className="text-center mb-24">
        <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none">
          Client <span className="font-serif italic lowercase tracking-normal">Narratives</span>
        </h2>
        <p className="text-midnight-ivory/40 font-medium tracking-tight">
          Empowering confidence through the precision of personal style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-midnight-slate/10 p-10 rounded-[3rem] flex flex-col justify-between border border-white/5 shadow-2xl hover:bg-white/[0.02] transition-colors"
          >
            <div>
              <div className="flex gap-1.5 text-midnight-champagne mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-midnight-ivory/80 font-medium leading-relaxed mb-10 italic tracking-tight text-lg">
                &quot;{t.text}&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-midnight-champagne/20 relative grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <p className="font-bold text-midnight-ivory leading-none tracking-tight">{t.name}</p>
                <p className="text-[9px] text-midnight-ivory/30 font-black uppercase tracking-widest mt-2">[{t.role}]</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
