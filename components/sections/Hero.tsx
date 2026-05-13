"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const words = ["Clarity", "Confidence", "Quiet Authority"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen bg-midnight-obsidian flex items-center overflow-hidden pt-20">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-luxury-rose/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-midnight-champagne/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content Area */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Primary Focus: Headline Block */}
              <div className="mb-20 lg:mb-24">
                <h2 className="text-[clamp(1rem,2vw,1.4rem)] font-black uppercase tracking-[0.4em] text-midnight-champagne mb-6 leading-tight drop-shadow-md">
                  We help you dress with
                </h2>
                
                <div className="relative h-[1.1em] md:h-[1.3em] flex items-center overflow-visible">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ y: "80%", opacity: 0, rotateX: -30, filter: "blur(10px)" }}
                      animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                      exit={{ y: "-80%", opacity: 0, rotateX: 30, filter: "blur(10px)" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 whitespace-nowrap text-[clamp(2.5rem,7vw,8rem)] leading-[0.8] font-serif italic font-black text-white tracking-tighter"
                      style={{
                        textShadow: `
                          0 10px 40px rgba(232, 211, 208, 0.3),
                          0 20px 80px rgba(0, 0, 0, 1),
                          0 0 100px rgba(201, 168, 76, 0.2)
                        `,
                        perspective: "1000px"
                      }}
                    >
                      {words[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Supporting Content Block */}
              <div className="space-y-12">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="text-lg md:text-xl font-medium text-white/50 max-w-xl leading-relaxed tracking-tight"
                >
                  Crafting powerful personal narratives through the precision of style. Expert guidance tailored for professionals who value clarity and presence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="flex items-center gap-6"
                >
                  <div className="h-px w-12 bg-midnight-champagne/40" />
                  <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.5em] leading-none">
                    India&apos;s Leading Personal Styling Expert
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="flex flex-wrap gap-10 items-center pt-4"
                >
                  <Magnetic>
                    <button 
                      onClick={() => scrollTo("contact")}
                      className="group relative px-12 py-6 bg-midnight-champagne text-midnight-obsidian font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all rounded-full shadow-2xl shadow-midnight-champagne/10"
                    >
                      <span className="relative z-10">Book an Appointment</span>
                      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-magnetic" />
                    </button>
                  </Magnetic>

                  <div className="flex items-center gap-6">
                    {["IG", "LI", "YT", "FB"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-midnight-champagne transition-all duration-300"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image Area */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-3xl lg:translate-x-12"
            >
              <Image
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=95"
                alt="Luxury Fashion Curation"
                fill
                className="object-cover transition-transform duration-[3s] hover:scale-105"
                priority
              />
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-obsidian/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-rose/20 via-transparent to-transparent" />
              
              {/* Subtle Glass Card Overlay */}
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-[2.5rem] hidden md:block">
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-midnight-champagne mb-2">Curated Service</p>
                <h4 className="text-xl font-serif italic text-white/90">The Art of Presence</h4>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute right-12 bottom-12 hidden xl:flex flex-col items-center gap-8 mix-blend-difference">
        <div className="h-20 w-px bg-white/20" />
        <span className="[writing-mode:vertical-lr] text-[8px] font-black uppercase tracking-[0.5em] text-white/40">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
