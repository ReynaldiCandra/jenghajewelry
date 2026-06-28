import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WAButton from "@/components/WAButton";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollReveal />
      <WAButton />
      <BottomNav />
      <Hero />
      <About />
      <Values />
      <Services />
      <Products />
      <Gallery />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
