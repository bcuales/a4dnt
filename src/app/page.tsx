import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Solutions from "@/components/sections/Solutions";
import RealWork from "@/components/sections/RealWork";
import MissionVision from "@/components/sections/MissionVision";
import Clients from "@/components/sections/Clients";
import Partners from "@/components/sections/Partners";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar overHero />
      <main className="flex-1">
        <Hero />
        <CredibilityStrip />
        <About />
        <Capabilities />
        <Solutions />
        <RealWork />
        <MissionVision />
        <Clients />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
