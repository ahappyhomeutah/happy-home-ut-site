import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import About from "@/components/site/About";
import Careers from "@/components/site/Careers";
import Social from "@/components/site/Social";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Careers />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
