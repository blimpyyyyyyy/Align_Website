import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Preview } from "@/components/Preview";
import { Schools } from "@/components/Schools";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Features />
      <Preview />
      <Schools />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;
