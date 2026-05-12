import { motion } from "framer-motion";
import { Mail, Database, Tags, RefreshCw, ArrowRight } from "lucide-react";

export const CrmEngine = () => {
  const features = [
    "LeadVault & LeadSuite identification",
    "Segmented nurture streams",
    "Customer tagging architecture",
    "Engagement-based automation",
    "Window shopper reactivation",
    "High-intent lead nurturing"
  ];

  return (
    <section id="crm" className="py-32 relative bg-[#06060A] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Building a Revenue-Generating <br className="hidden md:block" />
            <span className="text-gradient-accent">Lifecycle Engine</span>
          </h2>
          <p className="text-xl text-white/60">
            Advanced segmentation, month-over-month list growth, and deeply integrated CRM intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Dashboard Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-6 rounded-3xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" />
                Advanced Segmentation
              </h3>
              <div className="space-y-3">
                {["LeadVault", "HP", "Klaviyo Import", "Window Shoppers", "Engagement recency"].map((seg, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium text-white/80">{seg}</span>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-3xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
              <div className="text-sm text-blue-400 font-medium mb-2">Attributed Revenue YTD</div>
              <div className="text-4xl font-bold text-white mb-1">$14,170.99</div>
              <div className="text-sm text-white/50">Estimated value generated</div>
            </div>
            
            <div className="glass-panel p-6 rounded-3xl border-purple-500/20">
              <div className="text-sm text-purple-400 font-medium mb-2">Email Drip Events</div>
              <div className="text-4xl font-bold text-white mb-1">391</div>
              <div className="text-sm text-white/50">High-value actions since Jan 1</div>
            </div>
          </div>

          {/* Dashboard Right Column / Funnel */}
          <div className="lg:col-span-8">
            <div className="h-full glass-panel rounded-3xl p-8 relative overflow-hidden border-white/10">
              <div className="absolute inset-0 soft-grid opacity-20 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-xl font-semibold text-white">Cinematic Funnel Visualization</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-4 h-[400px] justify-center">
                {[
                  { label: "Passive Visitor", width: "100%", color: "bg-white/10", icon: Tags },
                  { label: "Tagged Lead", width: "80%", color: "bg-blue-500/20 border-blue-500/30", icon: Database },
                  { label: "Segmented Nurture", width: "60%", color: "bg-purple-500/20 border-purple-500/30", icon: Mail },
                  { label: "Conversion", width: "40%", color: "bg-cyan-500/20 border-cyan-500/30", icon: RefreshCw },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`mx-auto h-16 rounded-2xl border flex items-center justify-between px-6 backdrop-blur-md shadow-lg transition-transform hover:scale-105 cursor-default`}
                    style={{ width: step.width }}
                  >
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 text-white/70" />
                      <span className="font-medium text-white">{step.label}</span>
                    </div>
                    {i < 3 && <ArrowRight className="w-4 h-4 text-white/30" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {features.map((feature, i) => (
            <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
