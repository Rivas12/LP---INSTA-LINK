import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Demo from "@/components/Demo";
import Differential from "@/components/Differential";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import YouTubeSection from "@/components/YouTubeSection";
import PhotoShowcase from "@/components/PhotoShowcase";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="section-divider">
        <SocialProof />
      </div>
      <div className="section-divider">
        <Problem />
      </div>
      <div className="section-divider">
        <Solution />
      </div>
      <div className="section-divider">
        <HowItWorks />
      </div>
      <div className="section-divider">
        <Benefits />
      </div>
      <div className="section-divider">
        <Demo />
      </div>
      <div className="section-divider">
        <YouTubeSection />
      </div>
      <div className="section-divider">
        <PhotoShowcase />
      </div>
      <div className="section-divider">
        <Differential />
      </div>
      <div className="section-divider">
        <Trust />
      </div>
      <div className="section-divider section-divider-strong">
        <FinalCTA />
      </div>
      <WhatsAppFloat />
    </main>
  );
}
