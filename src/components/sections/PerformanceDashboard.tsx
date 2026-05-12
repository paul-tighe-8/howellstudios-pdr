import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, MousePointerClick, Clock, UserCheck } from "lucide-react";

const data = [
  { name: "Week 1", views: 40000, engaged: 24000, organic: 10000 },
  { name: "Week 2", views: 50000, engaged: 28000, organic: 15000 },
  { name: "Week 3", views: 65000, engaged: 32000, organic: 22000 },
  { name: "Week 4", views: 90000, engaged: 48000, organic: 35000 },
  { name: "Week 5", views: 120000, engaged: 65000, organic: 48000 },
  { name: "Week 6", views: 152000, engaged: 82000, organic: 60000 },
];

export const PerformanceDashboard = () => {
  return (
    <section id="analytics" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Modern Executive Analytics
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Live-style performance dashboard tracking engagement trends, traffic sources, and email-to-site funnel performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Website Views", value: "517K+", icon: Activity, trend: "+12.5%", color: "text-blue-400" },
            { label: "Sessions", value: "226K+", icon: MousePointerClick, trend: "+8.2%", color: "text-indigo-400" },
            { label: "Users", value: "126K+", icon: UserCheck, trend: "+15.3%", color: "text-purple-400" },
            { label: "Engaged Sessions", value: "109K+", icon: Clock, trend: "+24.1%", color: "text-cyan-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">{stat.trend}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-3xl border border-white/5"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold text-white">Growth Trajectory</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Views</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500" /> Engaged</div>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEngaged" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                  <Area type="monotone" dataKey="engaged" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorEngaged)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">$</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">$14,170.99</div>
                  <div className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full mt-1 inline-block">Estimated YTD</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Revenue Source Breakdown
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Attributable revenue generated organically, with email drip campaigns serving as the primary acquisition and conversion channel.
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/60">Email Drip Campaign Actions</span>
                  <span className="text-white font-bold">391 events</span>
                </li>
                <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                  <span className="text-white/60">Measurement Window</span>
                  <span className="text-white font-medium">Since Jan 1</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
