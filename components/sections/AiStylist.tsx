"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, ChevronRight, Check } from "lucide-react";

export function AiStylist() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", age: "", gender: "", height: "", bodyShape: "", 
    faceShape: "", skinTone: "", hairType: "", fashionPreferences: "", 
    lifestyle: "", stylingGoals: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setReport(null);
    try {
      const res = await fetch("/api/analyze-style", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.report) {
        setReport(data.report);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-stylist" className="py-20 lg:py-28 px-8 md:px-16 max-w-7xl mx-auto relative z-10 bg-midnight-obsidian">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-champagne/10 border border-midnight-champagne/20 text-midnight-champagne text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          AI Style Analysis
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-midnight-ivory uppercase leading-none">
          Discover Your <br />
          <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Signature Aesthetic</span>
        </h2>
        <p className="text-midnight-ivory/40 font-medium max-w-2xl mx-auto tracking-tight">
          Enter your details below to receive a highly personalized, luxury styling profile curated by our advanced AI consultant.
        </p>
      </motion.div>

      <div className="bg-midnight-slate/10 border border-white/5 shadow-3xl rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-midnight-champagne/5 rounded-full blur-[120px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {!report && !loading && (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Jane Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Age</label>
                    <input required name="age" value={formData.age} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="28" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Gender</label>
                    <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors appearance-none">
                      <option value="" disabled className="bg-midnight-obsidian">Select</option>
                      <option value="Female" className="bg-midnight-obsidian">Female</option>
                      <option value="Male" className="bg-midnight-obsidian">Male</option>
                      <option value="Non-binary" className="bg-midnight-obsidian">Non-binary</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Height</label>
                    <input required name="height" value={formData.height} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="5'6&quot; or 168cm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Body Shape</label>
                    <input required name="bodyShape" value={formData.bodyShape} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Hourglass, Pear..." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Face Shape</label>
                    <input required name="faceShape" value={formData.faceShape} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Oval, Round..." />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Skin Tone</label>
                    <input required name="skinTone" value={formData.skinTone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Olive, Fair..." />
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex flex-col">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Hair Type</label>
                  <input required name="hairType" value={formData.hairType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Curly brunette, Straight blonde..." />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Fashion Preferences</label>
                  <input required name="fashionPreferences" value={formData.fashionPreferences} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Minimalist, streetwear, chic..." />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Lifestyle / Profession</label>
                  <input required name="lifestyle" value={formData.lifestyle} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20" placeholder="Corporate lawyer, artist..." />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-midnight-ivory/60 mb-2">Styling Goals</label>
                  <textarea required name="stylingGoals" value={formData.stylingGoals} onChange={handleChange} className="w-full flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-midnight-champagne/50 transition-colors placeholder:text-white/20 resize-none min-h-[100px]" placeholder="I want to look more professional but still feminine..." />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-midnight-champagne text-midnight-obsidian font-black text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-3 mt-4"
                >
                  Generate Stylist Report
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          {loading && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 z-10 relative"
            >
              <Loader2 className="w-12 h-12 text-midnight-champagne animate-spin mb-8" />
              <p className="text-xl font-serif italic text-midnight-ivory mb-2">Curating your aesthetic profile...</p>
              <p className="text-xs text-midnight-ivory/40 uppercase tracking-[0.2em] font-black">Analyzing body architecture & color theory</p>
            </motion.div>
          )}

          {report && !loading && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 py-20 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-midnight-champagne/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-midnight-champagne/30">
                <CheckCircle2 className="w-12 h-12 text-midnight-champagne" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter text-midnight-ivory leading-tight">
                Profile Transmitted <br />
                <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Under Review</span>
              </h3>
              <p className="text-midnight-ivory/60 max-w-xl mx-auto leading-relaxed">
                Your luxury styling dossier has been drafted by our AI consultant. 
                <br />
                <strong>Gayathri Sreekumar</strong> is currently reviewing and refining your recommendations. You will receive your final curated report shortly via your preferred contact method.
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => { setReport(null); setFormData({...formData, stylingGoals: ""}); }}
                  className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-midnight-ivory/50 hover:text-white transition-all hover:bg-white/10"
                >
                  Submit Another Profile
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
