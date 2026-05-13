import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Exhibitions } from "@/components/sections/Exhibitions"; // Services
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { RecentWorks } from "@/components/sections/RecentWorks";
import { AboutMe } from "@/components/sections/AboutMe";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { AiStylist } from "@/components/sections/AiStylist";
import { GlobalStyling } from "@/components/sections/GlobalStyling";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-obsidian relative overflow-x-hidden">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Exhibitions />
        <ComparisonTable />
        <PortfolioGrid />
        <RecentWorks />
        <AboutMe />
        <Testimonials />
        <FAQ />
        <AiStylist />
        <GlobalStyling />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
