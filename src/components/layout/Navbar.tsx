import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
          <img 
            src="https://howellstudios.com/wp-content/uploads/2022/03/HS-Logo-menu-copy-1.png" 
            alt="Howell Studios" 
            className="h-8 md:h-10 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          />
          <span className="text-white/50 font-medium font-mono text-sm">x</span>
          <img 
            src="https://www.iteminc.com/content/files/item_inc_logos/new-logo-ii.jpg" 
            alt="Item Inc" 
            className="h-8 md:h-10 object-contain rounded drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">Overview</button>
          <button onClick={() => scrollTo("crm")} className="hover:text-white transition-colors">CRM Engine</button>
          <button onClick={() => scrollTo("analytics")} className="hover:text-white transition-colors">Analytics</button>
          <button onClick={() => scrollTo("roadmap")} className="hover:text-white transition-colors">Roadmap</button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => scrollTo("value")} 
            variant="outline" 
            className="hidden md:inline-flex border-white/10 hover:bg-white/5 text-white"
          >
            Executive Summary
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
