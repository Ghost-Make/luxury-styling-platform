"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Image\nConsultation",
    location: "Starting at ₹1,500",
  },
  {
    id: "02",
    title: "Lookbook\nCreation",
    location: "12 Styled Looks",
  },
  {
    id: "03",
    title: "Wedding\nStyling",
    location: "Bride & Groom Planning",
  },
  {
    id: "04",
    title: "Personal\nShopper",
    location: "Offline + Online Options",
  },
  {
    id: "05",
    title: "Wardrobe\nDeclutter",
    location: "Reorganize Closet",
  },
  {
    id: "06",
    title: "Nutrition\nGuidance",
    location: "Personalized Diet Plan",
  },
];

export function Exhibitions() {
  return (
    <section id="services" className="relative w-full overflow-hidden bg-midnight-obsidian pt-20 lg:pt-28 pb-0">
      
      {/* Top Section: Overlapping Images */}
      <div className="relative max-w-5xl mx-auto flex justify-center items-end h-[450px] mb-24 px-4">
        {/* 3 Arched Images */}
        <div className="flex items-end justify-center gap-4 md:gap-8 z-10 w-full">
          {/* Left image */}
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-1/3 max-w-[280px] h-[350px] relative rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <Image 
              src="https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid1.jpeg&w=3840&q=75" 
              alt="Style 1" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
          {/* Center image */}
          <motion.div 
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-1/3 max-w-[280px] h-[450px] relative rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl border border-white/5 z-10"
          >
             <Image 
              src="https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid3.jpeg&w=3840&q=75" 
              alt="Style 2" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
          {/* Right image */}
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-1/3 max-w-[280px] h-[350px] relative rounded-t-[14rem] rounded-b-[3rem] overflow-hidden shadow-2xl border border-white/5"
          >
             <Image 
              src="https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid4.jpeg&w=3840&q=75" 
              alt="Style 3" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>
        </div>
      </div>

      {/* Exhibitions List Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-8xl font-black tracking-[0.1em] text-midnight-ivory uppercase leading-none">
            services
          </h2>
          <p className="max-w-sm text-midnight-ivory/40 font-medium leading-relaxed tracking-tight">
            Comprehensive image solutions curated for the modern professional. Precision meets aesthetic excellence.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/5">
          {services.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col md:flex-row items-start md:items-center py-10 border-b border-white/5 hover:bg-white/[0.02] transition-all px-4 rounded-[2rem] my-1"
            >
              <div className="w-20 font-mono text-xs text-midnight-champagne mb-4 md:mb-0">
                [{item.id}]
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-serif italic font-black whitespace-pre-line leading-none text-midnight-ivory group-hover:text-midnight-champagne transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
              <div className="flex-1 flex justify-end mb-6 md:mb-0 md:pr-12">
                <p className="text-[11px] font-black text-midnight-ivory/30 uppercase tracking-[0.2em] text-right">
                  {item.location}
                </p>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group/btn relative px-8 py-3 bg-transparent border border-midnight-ivory/20 overflow-hidden transition-all rounded-full"
                >
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-widest text-midnight-ivory group-hover/btn:text-midnight-obsidian transition-colors">Book Now</span>
                  <span className="absolute inset-0 bg-midnight-champagne translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-magnetic" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spacer before stylist text */}
      <div className="mt-20" />

      {/* Premium "stylist" display text */}
      <div className="w-full flex justify-center items-end leading-none pb-8 md:pb-12">
        <h2
          className="m-0 p-0 text-center select-none uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(5rem, 18vw, 22rem)",
            lineHeight: 0.7,
            background: "linear-gradient(180deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          stylist
        </h2>
      </div>

    </section>
  );
}
