"use client";
import React, { useRef } from "react";
import Slider from "@/components/shared/HomePage/Slider";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const BestBeverages = (props: Props) => {
	const beveragesRef = useRef<HTMLElement>(null);

  function onViewportEnter() {
    beveragesRef.current?.classList.add("fadeInLeftToRight");
  }

  return (
    <motion.section
      ref={beveragesRef}
      onViewportEnter={onViewportEnter}
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
    >
      <Link
        href="/sections/beverages"
        id="beverages-carousel"
        className="self-start"
      >
        <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 self-start font-sansita font-bold tracking-wide text-gray-800">
          Best Beverages
        </h3>
      </Link>
      <button
        onClick={() => document.getElementById("full-fridge-carousel")?.focus()}
        className="opacity-0 absolute"
      >
        Skip to the next carousel
      </button>
      <Slider section="beverages" />
    </motion.section>
  );
};

export default BestBeverages;
