import { motion } from "framer-motion";
import { ArrowRight, Box, Zap } from "lucide-react";

export const LaunchStrategy = () => {
  return (
    <section id="launch" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 soft-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            The Website Launch Is the Beginning — <br />
            <span className="text-gradient-accent">Not the Finish Line</span>
          </h2>
          <p className="text-xl text-white/60">
            The upcoming website launch represents the activation of a fully operational digital growth ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/10 to-transparent text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Box className="w-12 h-12 text-white/30 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">WITHOUT Infrastructure</h3>
            <p className="text-lg text-white/50">"Static redesign"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent text-center relative overflow-hidden card-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity" />
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <h3 className="text-2xl font-bold text-white mb-2 text-glow">WITH Infrastructure</h3>
            <p className="text-lg text-blue-200">"Scalable revenue and customer acquisition platform"</p>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 glass-panel rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h4 className="text-lg font-semibold text-white/80">The site is launching into infrastructure that already includes:</h4>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "CRM intelligence", "Segmentation systems", "Lifecycle automation", 
              "Attribution tracking", "SEO foundations", "Nurture workflows", 
              "Conversion architecture", "Reporting visibility"
            ].map((item, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 flex items-center gap-2 hover:bg-white/10 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
