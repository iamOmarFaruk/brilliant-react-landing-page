import "./App.css";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        heroImage="hero-image.jpg"
        headingText="A creative react example Work"
        headingSubText="Hire a skilled and experienced team of MERN stack developers to build full-stack scalable, feature-rich, and modular web applications at an affordable price"
        headingButtonText="Get Started"
        headingButtonLink="#"
      />

      <main id="main">
        <AboutSection />
        <FeatureSection />
        <Pricing />
        <FAQ />
        <TeamSection />
        <ContactSection />

        <CTA
          ctaTitle="Call To Action"
          ctaDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ctaButtonText="Call To Action"
          ctaButtonLink="#"
          ctaBackgroundImage="/assets/img/cta-bg.jpg"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
