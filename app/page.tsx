import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
}
