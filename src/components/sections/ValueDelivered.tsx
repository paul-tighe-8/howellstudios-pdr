import { motion } from "framer-motion";
import { Database, Workflow, Search, BarChart3, Users, MousePointerClick, LineChart, Cpu } from "lucide-react";

export const ValueDelivered = () => {
  const cards = [
    { title: "CRM Infrastructure", icon: Database, color: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] text-blue-400" },
    { title: "Lifecycle Automation", icon: Workflow, color: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] text-purple-400" },
    { title: "SEO Visibility", icon: Search, color: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] text-cyan-400" },
    { title: "Revenue Attribution", icon: BarChart3, color: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] text-emerald-400" },
    { title: "Customer Segmentation", icon: Users, color: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] text-pink-400" },
    { title: "Conversion Optimization", icon: MousePointerClick, color: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] text-orange-400" },
    { title: "Reporting Modernization", icon: LineChart, color: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] text-indigo-400" },
    { title: "AI Search Readiness", icon: Cpu, color: "group-hover:border-violet-500/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] text-violet-400" },
  ];

  return (
    <section id="value" className="py-32 relative bg-[#06060A]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Strategic Value Delivered</h2>
          <p className="text-xl text-white/60">Core pillars of the new digital growth engine.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 ${card.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <card.icon className={`w-8 h-8 mb-6 ${card.color.split(' ').pop()}`} />
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <div className="h-1 w-12 bg-white/10 rounded-full group-hover:w-24 group-hover:bg-current transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
