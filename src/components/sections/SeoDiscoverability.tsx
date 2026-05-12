import { motion } from "framer-motion";
import { Search, MapPin, Sparkles, TrendingUp } from "lucide-react";

export const SeoDiscoverability = () => {
  return (
    <section id="seo" className="py-32 relative bg-[#06060A] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl glass-panel border border-cyan-500/20 overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 mesh-bg opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
            
            <div className="relative z-10 w-full max-w-sm space-y-6">
              {/* Fake UI for SEO/AI Dashboard */}
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl card-glow">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium text-white">AI Search Visibility</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-cyan-400" transition={{ duration: 1.5, delay: 0.5 }} />
                  </div>
                  <div className="h-2 w-[80%] bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} className="h-full bg-blue-400" transition={{ duration: 1.5, delay: 0.7 }} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">74</div>
                  <div className="text-xs text-white/50">Tracked Keywords</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">Top</div>
                  <div className="text-xs text-white/50">Ranking Positions</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Search className="w-4 h-4" />
              SEO + AI Discoverability
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Positioning Item Inc. for the <br />
              <span className="text-gradient text-glow">Future of Search</span>
            </h2>
            
            <p className="text-xl text-white/60 leading-relaxed">
              "Search is evolving from links to intelligence-driven discovery. Item Inc. is actively building visibility within that future ecosystem."
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: TrendingUp, title: "Keyword Authority Growth" },
                { icon: MapPin, title: "Local Search & GBP" },
                { icon: Sparkles, title: "LLM Referral Visibility" },
                { icon: Search, title: "Category Page Indexing" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1.5 rounded-md bg-white/5 text-cyan-400">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-white/80 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
