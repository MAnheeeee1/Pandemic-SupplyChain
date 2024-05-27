"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Komponenter från Europa",
    description:
      "Spelplanen, förpackningen, tryck papper fraktas från Irland med båt och från Tysklnad med lastbil, Spelkorten fraktas från Bryssel med lastbil. Alla dessa komonter anländer i hamnen i Rottendam för transport till Kina",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Europa.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Slutmontering i Kina",
    description:
      "Spelpjäserna, korten och andra tryck papper tillverkas av våra utvalda levarntörer i Shenzhen, Ningbo, Guangzhou för att sedan transporteras till Dongguan. Kompoenter från Europa anländer till hamnen i Shanghai för att sedan transportas med lastbil till Dunguan där allt sätts ihop till ett färdig spel",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Rottendam-Kina.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Distribuering av varor",
    description:
      "De färsiga spelen lämnar fabriken i Dunguan till Shanghai med lastbil för att sedan transportras med båt tillbka till Rottendam. I rottendamn fraktas spelen ut med lastbil till våra distrubering center ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Europa.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Klimatpåverkan av logstikedjan",
    description:
      "Den totala transportsträckan inkluderat både sjöfart and väg är 51 547 km med en total koldioxidutsläpp på omkring 2,761 till 2,921 ton koldioxid",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Europa.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
