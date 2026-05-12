import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp, Search } from "lucide-react";

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const kpis = [
    { label: "Website Views", value: "517K+", icon: Users, color: "text-blue-400" },
    { label: "Sessions", value: "226K+", icon: BarChart3, color: "text-indigo-400" },
    { label: "Engaged Sessions", value: "109K+", icon: TrendingUp, color: "text-purple-400" },
    { label: "Ranked SEO Keywords", value: "74", icon: Search, color: "text-cyan-400" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 soft-grid opacity-30" />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-500/30 bg-blue-500/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">Howell Studios + Item Inc. Executive Growth Partnership</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Building the Infrastructure for <br className="hidden md:block" />
            <span className="text-gradient-accent text-glow">Scalable Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            A strategic partnership focused on modernizing customer acquisition, lifecycle marketing, SEO visibility, CRM intelligence, automation infrastructure, and scalable digital growth ahead of Item Inc.'s next evolution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 w-full sm:w-auto shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all"
              onClick={() => scrollTo("crm")}
            >
              Explore Growth Infrastructure
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 h-12 w-full sm:w-auto border-white/10 text-white hover:bg-white/5"
              onClick={() => scrollTo("overview")}
            >
              View Executive Overview
            </Button>
          </motion.div>
        </div>

        {/* Floating KPI Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {kpis.map((kpi, i) => (
            <div 
              key={i} 
              className={`glass-panel p-6 rounded-2xl border-t border-l border-white/10 card-glow ${i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
              style={{ animationDelay: `${i * 1.5}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-white/5 ${kpi.color}`}>
                  <kpi.icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1 tracking-tight">{kpi.value}</p>
              <p className="text-sm font-medium text-white/50">{kpi.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
