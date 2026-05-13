"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  ChevronRight, 
  Send,
  Loader2,
  User,
  Activity
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("styling_reports")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error("Error fetching reports:", error);
    else setReports(data || []);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdating(true);
    const { error } = await supabase
      .from("styling_reports")
      .update({ status })
      .eq("id", id);

    if (error) console.error("Error updating status:", error);
    else {
      await fetchReports();
      setSelectedReport(null);
    }
    setUpdating(false);
  };

  return (
    <div className="min-h-screen bg-midnight-obsidian text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-end mb-16 border-b border-white/5 pb-12">
          <div>
            <span className="text-midnight-champagne text-[10px] font-black uppercase tracking-[0.4em] mb-4 inline-block">
              Stylist Control Centre
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Inquiry <span className="text-midnight-champagne font-serif italic normal-case tracking-normal">Dossiers</span>
            </h1>
          </div>
          <div className="flex gap-4">
             <button onClick={fetchReports} className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Activity className={`w-5 h-5 ${loading ? 'animate-spin text-midnight-champagne' : ''}`} />
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reports List */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">Recent Submissions</h2>
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 text-midnight-champagne animate-spin" />
              </div>
            ) : reports.length === 0 ? (
              <p className="text-sm text-white/20 italic">No reports found.</p>
            ) : (
              reports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-500 group ${
                    selectedReport?.id === report.id 
                      ? "bg-midnight-champagne/10 border-midnight-champagne/40" 
                      : "bg-midnight-slate/5 border-white/5 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <User className="w-4 h-4 text-white/40" />
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      report.status === 'pending' ? 'bg-orange-500/20 text-orange-400' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-midnight-champagne transition-colors">{report.user_name}</h3>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-black mb-4">
                    {new Date(report.created_at).toLocaleDateString()}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                    View Profile <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedReport ? (
                <motion.div
                  key={selectedReport.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-midnight-slate/5 border border-white/5 rounded-[3rem] p-10 md:p-16 h-full shadow-3xl overflow-y-auto no-scrollbar"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-white/5 pb-12">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{selectedReport.user_name}</h2>
                      <p className="text-midnight-champagne font-serif italic text-xl">{selectedReport.lifestyle}</p>
                    </div>
                    <div className="flex gap-4">
                      {selectedReport.status === 'pending' && (
                        <button 
                          disabled={updating}
                          onClick={() => updateStatus(selectedReport.id, 'approved')}
                          className="px-8 py-4 bg-midnight-champagne text-midnight-obsidian font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all flex items-center gap-3 disabled:opacity-50"
                        >
                          {updating ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                          Approve & Send
                        </button>
                      )}
                      <button className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-all">
                        <Trash2 className="w-5 h-5 text-red-500/60" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Client Demographics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-[8px] text-white/20 uppercase font-black mb-1">Age / Gender</p>
                            <p className="text-sm font-bold">{selectedReport.age} / {selectedReport.gender}</p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-[8px] text-white/20 uppercase font-black mb-1">Height</p>
                            <p className="text-sm font-bold">{selectedReport.height}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Body & Face Architecture</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-[8px] text-white/20 uppercase font-black mb-1">Body Shape</p>
                            <p className="text-sm font-bold">{selectedReport.body_shape}</p>
                          </div>
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-[8px] text-white/20 uppercase font-black mb-1">Face Shape</p>
                            <p className="text-sm font-bold">{selectedReport.face_shape}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Aesthetic Profile</h4>
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                           <p className="text-[8px] text-white/20 uppercase font-black mb-2">Fashion Preferences</p>
                           <p className="text-sm leading-relaxed mb-4">{selectedReport.fashion_preferences}</p>
                           <p className="text-[8px] text-white/20 uppercase font-black mb-2">Styling Goals</p>
                           <p className="text-sm leading-relaxed italic">&quot;{selectedReport.styling_goals}&quot;</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-midnight-champagne mb-8 flex items-center gap-4">
                       <Sparkles className="w-4 h-4" />
                       AI-Generated Draft Report
                    </h4>
                    <div className="p-10 rounded-[3rem] bg-midnight-champagne/5 border border-midnight-champagne/20 space-y-10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-4">Suggested Styles</h5>
                            <ul className="space-y-2">
                               {selectedReport.report_data.clothingStyles.map((s: string, i: number) => (
                                 <li key={i} className="text-sm text-white/80 flex items-center gap-3">
                                   <div className="w-1.5 h-1.5 rounded-full bg-midnight-champagne/40" />
                                   {s}
                                 </li>
                               ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-4">Color Palette</h5>
                            <div className="flex flex-wrap gap-2">
                               {selectedReport.report_data.colors.map((c: string, i: number) => (
                                 <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px]">{c}</span>
                               ))}
                            </div>
                          </div>
                       </div>
                       
                       <div className="h-px bg-white/5 w-full" />
                       
                       <div className="space-y-6">
                          <div>
                            <h5 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Outfit Guidance</h5>
                            <p className="text-sm leading-relaxed text-white/70 italic">&quot;{selectedReport.report_data.outfitGuidance}&quot;</p>
                          </div>
                          <div>
                            <h5 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Confidence Strategy</h5>
                            <p className="text-sm leading-relaxed text-white/70">{selectedReport.report_data.confidenceTips}</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center bg-midnight-slate/5 border border-dashed border-white/10 rounded-[3rem] p-20 opacity-20">
                  <User className="w-16 h-16 mb-8" />
                  <p className="text-xl font-serif italic">Select a dossier to begin review</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
