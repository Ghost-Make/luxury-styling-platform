"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid1.jpeg&w=3840&q=75",
  "https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid2.jpeg&w=3840&q=75",
  "https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid3.jpeg&w=3840&q=75",
  "https://www.gayathrisreekumar.com/_next/image?url=%2Fhome%2Fgrid%2Fgrid4.jpeg&w=3840&q=75",
];

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none">
          Eradicating <br />
          <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Decision Fatigue</span>
        </h2>
        <p className="text-midnight-ivory/40 font-medium max-w-xl mx-auto tracking-tight">
          Your definitive fashion guide for curated, sophisticated excellence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] w-full rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl"
          >
            <Image
              src={src}
              alt={`Portfolio ${i + 1}`}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-obsidian/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="absolute bottom-10 left-10 overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-midnight-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                Aesthetic Narrative {i + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
