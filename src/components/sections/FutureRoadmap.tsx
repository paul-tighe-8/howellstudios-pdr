import { motion } from "framer-motion";

export const FutureRoadmap = () => {
  const items = [
    { title: "Website optimization", phase: "Q3" },
    { title: "Advanced automation expansion", phase: "Q3" },
    { title: "AI-assisted search growth", phase: "Q4" },
    { title: "Attribution refinement", phase: "Q4" },
    { title: "Lifecycle campaign scaling", phase: "Q1" },
    { title: "Segment expansion", phase: "Q1" },
    { title: "Conversion optimization", phase: "Q2" },
    { title: "CRM intelligence layering", phase: "Q2" },
    { title: "Predictive engagement systems", phase: "Future" },
  ];

  return (
    <section id="roadmap" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Future Growth Roadmap</h2>
            <p className="text-xl text-white/60">Scaling the infrastructure for the next phase.</p>
          </div>

          <div className="relative">
            {/* Glowing central timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-400 -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 ring-4 ring-background" />
                  
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className={`glass-panel p-6 rounded-2xl border border-white/10 inline-block w-full max-w-sm card-glow ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div className="text-sm font-medium text-blue-400 mb-2">{item.phase}</div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
