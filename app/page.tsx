import Aboutus from "@/components/Aboutus";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GraphicPortfolio from "@/components/GraphicPortfolio";
import Hero from "@/components/hero";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main> 
        <Navbar/>
        <Hero/>
        <Aboutus/>
        <Features/>
        <GraphicPortfolio/>
        <HeroParallaxDemo/>
        <Cta/>
        <Footer/>
    </main>
  );
}
