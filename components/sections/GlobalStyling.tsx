"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function GlobalStyling() {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.5, duration: 2, ease: "easeInOut" },
        opacity: { delay: i * 0.5, duration: 0.5 }
      }
    })
  };

  const points = [
    { x: "20%", y: "40%" }, // North America
    { x: "35%", y: "75%" }, // South America
    { x: "50%", y: "30%" }, // Europe
    { x: "70%", y: "40%" }, // Asia
    { x: "65%", y: "70%" }, // India-ish/SE Asia
    { x: "85%", y: "45%" }, // Japan
    { x: "15%", y: "50%" }, // West Coast
  ];

  return (
    <section className="pt-20 lg:pt-28 pb-10 lg:pb-12 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian overflow-hidden">
      
      {/* Background Glow - Spans towards the next section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-luxury-rose/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-midnight-champagne/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 relative z-10"
      >
        <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          Boundless Expertise
        </span>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-midnight-ivory uppercase leading-none">
          Global Styling, <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Anywhere!</span>
        </h2>
        <p className="text-midnight-ivory/60 font-medium tracking-tight max-w-2xl mx-auto text-lg leading-relaxed">
          Get personalised fashion advice online, no matter where you are. <br className="hidden md:block" />
          Elevate your style with expert guidance from anywhere in the world.
        </p>
      </motion.div>

      {/* World Map Visualization - Restructured for Layering */}
      <div className="relative w-full aspect-[21/9] md:aspect-[2/1] lg:aspect-[2.5/1] mt-12 flex items-center justify-center">
        
        {/* Layer 1: World Map Silhouette (Clearly Visible) */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1) sepia(1) saturate(5) hue-rotate(350deg)', // Tint to champagne/rose
          }}
        />

        {/* Layer 2: Enhanced Dot Pattern (Over the silhouette) */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 168, 76, 0.5) 1px, transparent 0)`,
            backgroundSize: '16px 16px',
            maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)'
          }}
        />
        
        {/* Layer 3: Connection Points and Arcs (SVG) */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="stroke-midnight-champagne/70" fill="none" strokeWidth="1.2" strokeDasharray="6 4">
            {/* Connecting Arcs */}
            <motion.path 
              custom={0} variants={lineVariants} initial="hidden" whileInView="visible"
              d="M 200 200 Q 350 100 500 150" 
            />
            <motion.path 
              custom={1} variants={lineVariants} initial="hidden" whileInView="visible"
              d="M 500 150 Q 600 250 700 200" 
            />
            <motion.path 
              custom={2} variants={lineVariants} initial="hidden" whileInView="visible"
              d="M 700 200 Q 750 350 650 350" 
            />
            <motion.path 
              custom={3} variants={lineVariants} initial="hidden" whileInView="visible"
              d="M 200 200 Q 150 300 350 375" 
            />
            <motion.path 
              custom={4} variants={lineVariants} initial="hidden" whileInView="visible"
              d="M 650 350 Q 800 200 850 225" 
            />
          </g>

          {/* Glowing Points */}
          {points.map((p, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
            >
              <circle cx={p.x} cy={p.y} r="3" className="fill-midnight-champagne" />
              <circle cx={p.x} cy={p.y} r="10" className="fill-midnight-champagne/30 animate-pulse" />
            </motion.g>
          ))}
        </svg>

        {/* Layer 4: Floating Icons/Badges - High Visibility */}
        <div className="absolute top-[25%] left-[18%] flex items-center gap-3 glass-pill px-5 py-2.5 shadow-2xl shadow-black/40 scale-75 md:scale-100 border-white/20 z-20">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/90">Live: New York</span>
        </div>
        <div className="absolute bottom-[35%] right-[22%] flex items-center gap-3 glass-pill px-5 py-2.5 shadow-2xl shadow-black/40 scale-75 md:scale-100 border-white/20 z-20">
          <div className="w-2 h-2 rounded-full bg-midnight-champagne animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/90">Active: London Hub</span>
        </div>
      </div>

      {/* Visual Connector to Contact Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="h-20 w-px bg-gradient-to-b from-midnight-champagne/40 to-transparent" />
      </div>

    </section>
  );
}
