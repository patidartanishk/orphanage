import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
import BackToTop from "@/components/BackToTop";
import VisitUs from "@/components/VisitUs";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
  <About />
  <Services />
  <Gallery />
  <Donate />
  <VisitUs />
  <Footer />

  <BackToTop />
  <WhatsAppButton />
    </>
  );
}