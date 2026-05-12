import { motion } from "framer-motion";
import { Layers, Workflow, Share2, Target } from "lucide-react";

export const ExecOverview = () => {
  const elements = [
    { title: "Scalable CRM Infrastructure", icon: Layers },
    { title: "Lifecycle Marketing Systems", icon: Workflow },
    { title: "Customer Segmentation Architecture", icon: Target },
    { title: "Automation Workflows", icon: Share2 },
  ];

  return (
    <section id="overview" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Beyond Traditional Marketing
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              This partnership is focused on long-term scalability, measurable attribution, operational marketing maturity, and future-ready acquisition systems.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex flex-col gap-6">
                {elements.map((el, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                      <el.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-white/80">{el.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Abstract Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl glass-panel p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 soft-grid-full opacity-20 pointer-events-none" />
            
            {/* Visual Diagram Representation */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
              <div className="w-full flex justify-between px-8">
                <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center border-t border-blue-400/30 card-glow animate-float">
                  <div className="text-center">
                    <div className="text-xs text-white/50 mb-1">Source</div>
                    <div className="font-semibold text-blue-400">Traffic</div>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl glass flex items-center justify-center border-t border-purple-400/30 card-glow animate-float-delayed">
                  <div className="text-center">
                    <div className="text-xs text-white/50 mb-1">Capture</div>
                    <div className="font-semibold text-purple-400">Leads</div>
                  </div>
                </div>
              </div>
              
              <div className="w-1 h-16 bg-gradient-to-b from-white/20 to-white/5" />
              
              <div className="w-[80%] h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="text-center relative z-10">
                  <h3 className="font-bold text-xl text-white mb-2">Modern Customer Lifecycle Orchestration</h3>
                  <p className="text-sm text-white/50">Segmentation • Nurture • Attribution</p>
                </div>
              </div>
              
              <div className="w-1 h-16 bg-gradient-to-b from-white/5 to-white/20" />
              
              <div className="w-32 h-32 rounded-full glass flex items-center justify-center border-t border-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                <div className="text-center">
                  <div className="text-sm text-white/50 mb-1">Outcome</div>
                  <div className="font-bold text-cyan-400 text-xl">Revenue</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
