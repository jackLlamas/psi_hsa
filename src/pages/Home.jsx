import Hero from "../components/sections/Hero";
import ServiceCards from "../components/sections/ServiceCards";
import ProcessSteps from "../components/sections/ProcessSteps";
import AboutPreview from "../components/sections/AboutPreview";
import FAQAccordion from "../components/sections/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <ProcessSteps />
      <AboutPreview />
      <FAQAccordion />
    </>
  );
}