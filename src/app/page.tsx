import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WAButton from "@/components/WAButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollReveal />
      <WAButton />
      <Hero />
      <About />
      <Values />
      <Services />
      <Gallery />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
