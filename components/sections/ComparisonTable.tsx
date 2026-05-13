"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Years of Experience", gs: "10+ years", others: "2-5 years" },
  { feature: "Founder-led Consultation", gs: "Directly handled by Gayathri", others: "Often assigned to junior consultants" },
  { feature: "Styling Philosophy", gs: "Body-positive, comfort-first, inclusive styling", others: "Trend-forward, often one-size-fits-all" },
  { feature: "Custom Clothing", gs: "Designer-led, indo-western, bridal-friendly", others: "Mostly styling only, no design services" },
  { feature: "Image Consulting Tools", gs: "Colour theory, Kibbe, body shape analysis", others: "Basic colour & shape guidance" },
  { feature: "Nutrition Integration", gs: "Styling meets wellness (ADHD-friendly support)", others: "No focus on internal wellness" },
  { feature: "Pricing Transparency", gs: "Flat packages, detailed breakdowns", others: "Often unclear or hourly only" },
  { feature: "Client Focus", gs: "Boutique-style, highly personalized", others: "Agency-style, higher volume, less personalized" },
];

export function ComparisonTable() {
  return (
    <section className="py-16 pb-24 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none">
          the luxury <br />
          <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Distinction</span>
        </h2>
        <p className="text-midnight-ivory/40 font-medium max-w-2xl mx-auto tracking-tight">
          A bespoke approach that blends internal wellness with external style. Precision meets aesthetic excellence.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar rounded-[3rem] bg-midnight-slate/10 border border-white/5 shadow-3xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-midnight-ivory/30">Feature</th>
              <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-midnight-champagne">Gayathri Sreekumar</th>
              <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-midnight-ivory/30">Other Competitors</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                className="border-b border-white/5 hover:bg-white/[0.01] transition-colors"
              >
                <td className="p-10 font-bold text-midnight-ivory text-sm tracking-tight">{row.feature}</td>
                <td className="p-10 text-midnight-ivory font-semibold text-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-midnight-champagne flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-midnight-obsidian" strokeWidth={4} />
                    </div>
                    {row.gs}
                  </div>
                </td>
                <td className="p-10 text-midnight-ivory/40 text-sm font-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-white/10" strokeWidth={4} />
                    </div>
                    {row.others}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
