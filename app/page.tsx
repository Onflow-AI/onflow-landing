import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { SolutionOverview } from '@/components/sections/SolutionOverview';
import { KeyDifferentiators } from '@/components/sections/KeyDifferentiators';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SolutionOverview />
      {/* <KeyDifferentiators /> */}
      <HowItWorks />
      {/* <Pricing /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
