"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I book a styling session?",
    a: "You can book a session directly through WhatsApp or by filling the contact form below. Sessions are available both online and in-person across India.",
  },
  {
    q: "What is included in an Image Consultation?",
    a: "Image Consultation includes Colour Analysis, Kibbe (Vibe) Assessment, Body Shape Analysis, Face Shape Tips, Personal Style Direction, and a detailed Style Report delivered as a PDF.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes! All services are available online. You'll receive everything digitally — style boards, lookbooks, shopping links, and personalized reports — no matter where you are in the world.",
  },
  {
    q: "How long does a styling session take?",
    a: "Sessions vary by service. An Image Consultation typically takes 60–90 minutes, while Wardrobe Declutter visits may span 2–4 hours. Wedding Styling is spread across multiple touchpoints.",
  },
  {
    q: "What are your pricing packages?",
    a: "Services start at just ₹1,500. Each package is customized based on your needs. Reach out via WhatsApp or the contact form for a detailed breakdown tailored to you.",
  },
  {
    q: "Can you help with ADHD-friendly wardrobe planning?",
    a: "Absolutely. Gayathri specializes in wellness-integrated styling, including sensory-friendly and ADHD-friendly wardrobe systems that reduce daily decision fatigue.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 px-8 md:px-16 max-w-5xl mx-auto relative z-10 bg-midnight-obsidian">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Inquiries
        </span>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none">
          Service <span className="font-serif italic lowercase tracking-normal">Protocols</span>
        </h2>
        <p className="text-midnight-ivory/40 font-medium tracking-tight max-w-xl mx-auto">
          Common queries regarding our elite styling methodologies. For direct inquiries:{" "}
          <a
            href="https://wa.me/919663265986?text=Hello!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="text-midnight-champagne font-black uppercase text-[10px] tracking-widest underline underline-offset-4 hover:no-underline transition-all"
          >
            Consultation Request
          </a>
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="bg-midnight-slate/10 rounded-[2.5rem] overflow-hidden border border-white/5 hover:bg-white/[0.02] transition-colors"
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between p-10 text-left group"
            >
              <span className="font-bold text-midnight-ivory text-lg pr-4 tracking-tight leading-tight">{faq.q}</span>
              <div className="w-10 h-10 rounded-full border border-midnight-champagne/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-midnight-champagne group-hover:border-midnight-champagne">
                {openIdx === i ? (
                  <Minus className="w-4 h-4 text-midnight-champagne group-hover:text-midnight-obsidian" strokeWidth={3} />
                ) : (
                  <Plus className="w-4 h-4 text-midnight-champagne group-hover:text-midnight-obsidian" strokeWidth={3} />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-10 text-midnight-ivory/60 font-medium leading-relaxed border-t border-white/5 pt-6 tracking-tight">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
