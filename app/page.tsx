import Hero from "@/components/Hero";
import { GlobeDemo } from "@/components/Globe-section";
import { BentoGridThirdDemo } from "@/components/bento-section";
import { StickyScrollRevealDemo } from "@/components/Logisitk-kedja";
import FooterSection from "@/components/footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <StickyScrollRevealDemo/>
        <GlobeDemo/>
        <BentoGridThirdDemo/>
        <FooterSection/>
      </div>
    </main>

  );
} 
