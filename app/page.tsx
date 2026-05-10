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
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Demo />
      <YouTubeSection />
      <PhotoShowcase />
      <Differential />
      <Trust />
      <FinalCTA />
      <WhatsAppFloat />
    </main>
  );
}
