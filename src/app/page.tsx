import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Reasons from "@/components/sections/Reasons";
import One2Coin from "@/components/sections/One2Coin";
import Gateways from "@/components/sections/Gateways";
import SalesBreak from "@/components/sections/SalesBreak";
import SystemTabs from "@/components/sections/SystemTabs";
import Features from "@/components/sections/Features";
import Themes from "@/components/sections/Themes";
import Providers from "@/components/sections/Providers";
import Services from "@/components/sections/Services";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Reasons />
        <One2Coin />
        <Gateways />
        <SalesBreak />
        <Features />
        <Themes />
        <SystemTabs />
        <Providers />
        <Services />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
