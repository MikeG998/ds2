import { HeroSection } from "@/components/HeroSection";
import { ProofSection } from "@/components/ProofSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyDealSurgeSection } from "@/components/WhyDealSurgeSection";
import { TechEdgeSection } from "@/components/TechEdgeSection";
import { PlaybookCTASection } from "@/components/PlaybookCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProofSection />
      <HowItWorksSection />
      <WhyDealSurgeSection />
      <TechEdgeSection />
      <PlaybookCTASection />
      <Footer />
    </main>
  );
}
