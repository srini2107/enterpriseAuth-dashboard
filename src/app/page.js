import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Screenshot from "../components/Screenshot";

export default function HomePage() {
  return (
      <main>
        <Header />
        <Hero />
        <Features />
        <Pricing />
         <Screenshot />
        <Footer />
      </main>
  );
}