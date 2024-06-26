"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlobeDemo } from "./Globe-section";
import { CanvasRevealEffectDemo } from "./information-reveal";

export function BentoGridThirdDemo() {
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-center md:tracking-wider mb-20 mt-40 text-lg md:text-2lg lg:text-4xl font-bold">Översikt över logstikedjan</h1>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>

  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <p>Totala ca 51 000km </p>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p>ca 45 000km med båt </p>
      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
       <p>ca 5 000km med lastbil </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = [50, 70, 90];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full justify-center h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        key={"skelenton-two" + "1"}
        variants={variants}
        style={{     
             maxWidth: 80 + "%",
        }}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-green-600 dark:bg-red w-full text-white"
        ><img src="/LastbilIcon.svg" height={20} width={20}/>Lastbil 0,45kg CO₂</motion.div>
      <motion.div
        key={"skelenton-two" + "1"}
        variants={variants}
        style={{     
             maxWidth: 90 + "%",
        }}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-green-600 dark:bg-red w-full text-white"
        ><img src="/BoatIcon.svg" height={20} width={20}/>Fartyg 2 900 kg CO₂</motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"><GlobeDemo/></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/ISO14001.png"
          alt="ISO 14001 logo"
          height="100"
          width="100"
          className="rounded-full h-13 w-13"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          ISO 1101 
        </p>
        <p className="border border-green-500 bg-red-100 dark:bg-red-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
        <button><a href="https://www.iso.org/standard/62085.htmlS" target="_blank">Läs mer</a></button>
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/ISO9001.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-13 w-13"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          ISO 9001S
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          <button><a href="https://www.iso.org/standard/62085.htmlS" target="_blank">Läs mer</a></button>
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/SvavelMärk.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-13 w-13"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          ISO 14001
        </p>
        <p className="border border-green-500 bg-orange-100 dark:bg-orange-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
        <button><a href="https://www.iso.org/standard/62085.htmlS" target="_blank">Läs mer</a></button>
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (

     <CanvasRevealEffectDemo/>

  );
};
const items = [
  {
    title: "Transportsträckor",
    description: (
      <span className="text-sm">
        Den totala transportsträckan inkluderat sjöfart och lastbil är ca 51 000 km
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Koldioxid Utsläpp",
    description: (
      <span className="text-sm">
        Den totala mängden koldioxid utsläpp är ca 3 300 kg.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Fraktvägen ",
    description: (
      <span className="text-sm">
        Tillverkas och transporteras mellan 5 olika länder utöver två kontineter
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Produktens Certifieringar",
    description: (
      <span className="text-sm">
        Vi har flera certificat på socialt- och klimathållbarhet
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
