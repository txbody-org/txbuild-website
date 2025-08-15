import ExampleSection from "@/components/example-section";
import FeatureSection from "@/components/feature-section";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-works";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <ThemeToggle />
        <HeroSection />
        <FeatureSection />
        <HowItWorks />
        <ExampleSection />
      </div>
    </>
  );
}
