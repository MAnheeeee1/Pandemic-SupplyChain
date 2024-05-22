import Image from "next/image";
import Hero from "@/components/Hero";
import { GlobeDemo } from "@/components/Globe-section";
import { BentoGridDemo } from "@/components/bento-section";
import { AnimatedPinDemo } from "@/components/cerificate-section";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <GlobeDemo/>
        <BentoGridDemo/>
        <AnimatedPinDemo/>
      </div>
    </main>

  );
}
