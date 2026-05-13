"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMe() {
  return (
    <section id="about-me" className="py-20 lg:py-28 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <div className="flex flex-col lg:flex-row gap-20 items-center bg-midnight-slate/10 p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-3xl">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-[1.2]"
        >
          <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-midnight-ivory leading-none uppercase">
            A New Standard <br />
            <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">in Excellence</span>
          </h2>
          <p className="text-xl text-midnight-ivory/60 mb-12 leading-relaxed font-medium tracking-tight">
            Personalized fashion, expert styling, and integrated nutrition support. We don&apos;t just change your wardrobe; we redefine your aesthetic narrative.
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-10 py-5 bg-midnight-champagne text-midnight-obsidian font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all rounded-full"
          >
            <span className="relative z-10">Book an Appointment</span>
            <span className="absolute inset-0 bg-midnight-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-magnetic" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl border border-white/10 group">
            <Image
              src="https://www.gayathrisreekumar.com/_next/image?url=%2Fabout%2Fgayathri-bg.jpeg&w=1080&q=75"
              alt="Gayathri Sreekumar Styling"
              fill
              className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
              priority
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-obsidian/40 to-transparent opacity-60" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
