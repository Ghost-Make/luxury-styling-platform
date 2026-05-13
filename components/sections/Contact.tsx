"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Mail, MapPin, Phone, Loader2, MessageSquare } from "lucide-react";
import type { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@gayathrisreekumar.com", href: "mailto:hello@gayathrisreekumar.com" },
  { icon: MapPin, label: "Location", value: "Mumbai, India", href: "#" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Internal Server Error");
      }
      toast.success("Message sent! 🎉", {
        description: "I'll get back to you within 24 hours.",
      });
      reset();
    } catch (err) {
      toast.error("Failed to send", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" ref={ref} className="pt-10 lg:pt-12 pb-20 lg:pb-28 px-6 bg-midnight-obsidian relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-midnight-champagne/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-4">Contact</span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none drop-shadow-xl">
            Let&apos;s <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Commence</span>
          </h2>
          <p className="text-midnight-ivory/70 font-medium max-w-2xl mx-auto tracking-tight text-lg">
            Curating the future of your personal aesthetic. Inquire within to begin the transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                variants={itemVariants}
                className="flex items-center gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-midnight-slate/5 hover:border-midnight-champagne/30 hover:bg-midnight-slate/10 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-midnight-champagne/10 border border-midnight-champagne/20 flex items-center justify-center shrink-0 group-hover:bg-midnight-champagne group-hover:border-midnight-champagne transition-all duration-500">
                  <info.icon className="w-5 h-5 text-midnight-champagne group-hover:text-midnight-obsidian transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-mono text-[9px] font-bold text-midnight-champagne mb-1">[{info.label}]</p>
                  <p className="text-sm font-semibold text-midnight-ivory tracking-tight">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="pt-8 opacity-60 text-[10px] uppercase tracking-[0.5em] font-black text-midnight-ivory border-t border-white/5">
              Based in Mumbai • Open for global projects
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-10 md:p-16 rounded-[4rem] bg-midnight-slate/5 border border-white/5 space-y-10 shadow-3xl"
              noValidate
            >
              <div className="mb-10">
                <h3 className="text-3xl font-black tracking-tighter text-midnight-ivory uppercase leading-none drop-shadow-md">Inquiry Protocol</h3>
                <p className="text-[10px] text-midnight-champagne/80 mt-4 font-black uppercase tracking-[0.3em]">Detail your aesthetic requirements</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-[0.2em] font-black text-midnight-ivory/60 mb-3 ml-6">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    {...register("name")}
                    placeholder="Enter name"
                    className="form-input bg-transparent border-white/5 hover:border-white/10"
                  />
                  {errors.name && <p className="mt-2 text-[10px] font-bold text-red-500/80 ml-6 uppercase tracking-widest">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] uppercase tracking-[0.2em] font-black text-midnight-ivory/60 mb-3 ml-6">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter email"
                    className="form-input bg-transparent border-white/5 hover:border-white/10"
                  />
                  {errors.email && <p className="mt-2 text-[10px] font-bold text-red-500/80 ml-6 uppercase tracking-widest">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-[10px] uppercase tracking-[0.2em] font-black text-midnight-ivory/60 mb-3 ml-6">
                  Service Interest
                </label>
                <input
                  id="contact-subject"
                  {...register("subject")}
                  placeholder="What can I help you with?"
                  className="form-input bg-transparent border-white/5 hover:border-white/10"
                />
                {errors.subject && <p className="mt-2 text-[10px] font-bold text-red-500/80 ml-6 uppercase tracking-widest">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-[0.2em] font-black text-midnight-ivory/60 mb-3 ml-6">
                  Brief Message
                </label>
                <textarea
                  id="contact-message"
                  {...register("message")}
                  rows={4}
                  placeholder="Tell me about your styling needs..."
                  className="form-input bg-transparent border-white/5 hover:border-white/10 resize-none"
                />
                {errors.message && <p className="mt-2 text-[10px] font-bold text-red-500/80 ml-6 uppercase tracking-widest">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center gap-4 py-6 bg-midnight-champagne text-midnight-obsidian font-black uppercase tracking-[0.3em] text-[10px] rounded-full overflow-hidden transition-all btn-magnetic disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch Inquiry
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-midnight-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-magnetic" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
