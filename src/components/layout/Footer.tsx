import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-background pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img 
                src="https://howellstudios.com/wp-content/uploads/2022/03/HS-Logo-menu-copy-1.png" 
                alt="Howell Studios" 
                className="h-8 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
              <span className="text-white/50 font-medium font-mono text-sm">x</span>
              <img 
                src="https://www.iteminc.com/content/files/item_inc_logos/new-logo-ii.jpg" 
                alt="Item Inc" 
                className="h-8 object-contain rounded drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
            </div>
            <p className="text-muted-foreground max-w-sm">
              Building the infrastructure for scalable digital growth. A strategic executive partnership.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Sections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollTo("overview")} className="hover:text-white transition-colors">Executive Overview</button></li>
              <li><button onClick={() => scrollTo("crm")} className="hover:text-white transition-colors">CRM & Lifecycle</button></li>
              <li><button onClick={() => scrollTo("analytics")} className="hover:text-white transition-colors">Performance Dashboard</button></li>
              <li><button onClick={() => scrollTo("seo")} className="hover:text-white transition-colors">SEO & Discoverability</button></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Strategy</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollTo("launch")} className="hover:text-white transition-colors flex items-center gap-1">Website Launch <ArrowUpRight className="w-3 h-3" /></button></li>
              <li><button onClick={() => scrollTo("value")} className="hover:text-white transition-colors flex items-center gap-1">Value Delivered <ArrowUpRight className="w-3 h-3" /></button></li>
              <li><button onClick={() => scrollTo("roadmap")} className="hover:text-white transition-colors flex items-center gap-1">Future Roadmap <ArrowUpRight className="w-3 h-3" /></button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Howell Studios & Item Inc. Executive Overview.</p>
          <div className="flex gap-4">
            <span>Confidential & Internal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
