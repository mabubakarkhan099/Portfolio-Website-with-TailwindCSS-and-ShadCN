import Experience from "@/components/major/Experience/Experience";
import HeroSection from "@/components/major/HeroSection/HeroSection";
import ServicesSection from "@/components/major/ServicesSection/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Experience />
    </>
  );
}
