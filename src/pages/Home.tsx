import AboutUs from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Testimonial />
      <FAQ />
    </div>
  );
}
