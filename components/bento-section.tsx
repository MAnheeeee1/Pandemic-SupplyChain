import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {transportMedelBild} from "../data/imageUrl.json";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const lastbil = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br rounded-xl  from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src= {transportMedelBild.lastbil}/>
  </div>
);
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br rounded-xl  from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src= {transportMedelBild.lastbil}/>
  </div>
); 
const items = [
  {
    title: "750kg CO2e",
    description: "Den totala utsläppet av koldioxid från sjöfarttransport är 750kg koldioxidcl",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br rounded-xl  from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src= {transportMedelBild.båt}/>
  </div>,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br rounded-xl  from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src= {transportMedelBild.tåg}/>
  </div>,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];
