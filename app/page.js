import { ScrollProgress } from "@/components/ui/primitives";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Founder from "@/components/Founder";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Enroll from "@/components/Enroll";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="app-bg relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Metrics />
      <Programs />
      <WhyUs />
      <Founder />
      <Experience />
      <Gallery />
      <Testimonials />
      <Enroll />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
