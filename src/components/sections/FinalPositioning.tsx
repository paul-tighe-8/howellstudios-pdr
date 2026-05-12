import { motion } from "framer-motion";

export const FinalPositioning = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden py-32">
      <div className="absolute inset-0 mesh-bg opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 soft-grid opacity-20" />
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
              This Is <span className="text-gradient-accent text-glow">More Than</span> Marketing.
            </h2>
            
            <p className="text-2xl md:text-3xl font-medium text-white/90 leading-snug">
              "This partnership represents the development of a scalable digital ecosystem designed to support Item Inc.'s next phase of growth."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-12 border-t border-white/10 mt-12 max-w-3xl mx-auto"
          >
            <p className="text-lg text-white/50 leading-relaxed font-light">
              The strongest value of the Howell Studios partnership is not isolated campaigns — it is the creation of long-term infrastructure that compounds customer acquisition, engagement, visibility, attribution, and operational scalability over time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
