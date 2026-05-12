import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, TrendingUp, Users, Eye } from "lucide-react";

const platforms = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    gradient: "from-blue-500/20",
    stats: {
      views: "142K",
      engagement: "12.4%",
      followers: "+2,104",
    },
    description: "Leading B2B channel. Strong engagement on print service and technical hub updates.",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    gradient: "from-indigo-500/20",
    stats: {
      views: "89K",
      engagement: "8.1%",
      followers: "+845",
    },
    description: "Consistent reach. Focus on same-day shipping and inventory reliability highlights.",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    gradient: "from-pink-500/20",
    stats: {
      views: "115K",
      engagement: "9.3%",
      followers: "+1,420",
    },
    description: "Visual storytelling. Highlighting our warehouse operations and customer testimonials.",
  }
];

export const SocialMediaPerformance = () => {
  return (
    <section id="social-performance" className="py-24 relative bg-background overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Item Inc. Social Presence
              </h2>
              <p className="text-xl text-white/60">
                Year-to-Date performance across our primary social channels. Driving B2B engagement and brand trust.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="glass-panel px-6 py-4 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-white/50">Total YTD Growth</div>
                <div className="text-2xl font-bold text-white">+11.2%</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl ${platform.bgColor} ${platform.color}`}>
                  <platform.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{platform.name}</h3>
              </div>

              <p className="text-white/60 mb-8 h-12">
                {platform.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <Eye className="w-4 h-4" />
                    <span>Total Views</span>
                  </div>
                  <span className="text-white font-bold">{platform.stats.views}</span>
                </div>
                
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <TrendingUp className="w-4 h-4" />
                    <span>Engagement Rate</span>
                  </div>
                  <span className="text-white font-bold">{platform.stats.engagement}</span>
                </div>
                
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2 text-white/60">
                    <Users className="w-4 h-4" />
                    <span>New Followers</span>
                  </div>
                  <span className="text-emerald-400 font-bold">{platform.stats.followers}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
