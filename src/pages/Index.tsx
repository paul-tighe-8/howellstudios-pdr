import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExecOverview } from "@/components/sections/ExecOverview";
import { CrmEngine } from "@/components/sections/CrmEngine";
import { PerformanceDashboard } from "@/components/sections/PerformanceDashboard";
import { SocialMediaPerformance } from "@/components/sections/SocialMediaPerformance";
import { SeoDiscoverability } from "@/components/sections/SeoDiscoverability";
import { LaunchStrategy } from "@/components/sections/LaunchStrategy";
import { ValueDelivered } from "@/components/sections/ValueDelivered";
import { FutureRoadmap } from "@/components/sections/FutureRoadmap";
import { FinalPositioning } from "@/components/sections/FinalPositioning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <ExecOverview />
        <CrmEngine />
        <PerformanceDashboard />
        <SocialMediaPerformance />
        <SeoDiscoverability />
        <LaunchStrategy />
        <ValueDelivered />
        <FutureRoadmap />
        <FinalPositioning />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
