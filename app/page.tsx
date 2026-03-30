import { Navbar } from "@/app/sections/Navbar";
import { HeroSection } from "@/app/sections/HeroSection";
import { ProblemsSection } from "@/app/sections/ProblemsSection";
import { SolutionsSection } from "@/app/sections/SolutionsSection";
import { ServicesSection } from "@/app/sections/ServicesSection";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-oto-darker">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
