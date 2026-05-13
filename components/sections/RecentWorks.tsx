"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    id: "01",
    title: "Editorial Elegance",
    category: "Image Consultation",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=85",
  },
  {
    id: "02",
    title: "Bridal Couture",
    category: "Wedding Styling",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
  },
  {
    id: "03",
    title: "Power Dressing",
    category: "Wardrobe Declutter",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85",
  },
  {
    id: "04",
    title: "Street Luxe",
    category: "Lookbook Creation",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=85",
  },
  {
    id: "05",
    title: "Corporate Chic",
    category: "Personal Shopper",
    src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&q=85",
  },
  {
    id: "06",
    title: "Festive Glow",
    category: "Lookbook Creation",
    src: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=1200&q=85",
  },
];

export function RecentWorks() {
  return (
    <section className="py-20 lg:py-28 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
      >
        <div>
          <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            Curated Portfolio
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-midnight-ivory uppercase leading-none">
            Recent <span className="font-serif italic lowercase tracking-normal">Works</span>
          </h2>
        </div>
        <p className="text-midnight-ivory/40 font-medium max-w-xs md:text-right tracking-tight leading-relaxed">
          Discover narratives that fit you perfectly and effortlessly.
        </p>
      </motion.div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-[3rem] bg-midnight-slate/10 border border-white/5 cursor-pointer shadow-3xl ${
              i === 0 || i === 3 ? "sm:row-span-2 h-[500px] sm:h-full" : "h-[350px]"
            }`}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Image
              src={work.src}
              alt={work.title}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-obsidian via-midnight-obsidian/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

            {/* Category badge */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-midnight-champagne text-[9px] font-black uppercase tracking-widest text-midnight-obsidian">
              {work.category}
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-magnetic">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] font-bold text-midnight-champagne mb-2">
                    [{work.id}]
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif italic font-black text-midnight-ivory leading-none tracking-tight">
                    {work.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-midnight-champagne/40 flex items-center justify-center group-hover:bg-midnight-champagne transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 text-midnight-champagne group-hover:text-midnight-obsidian transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
