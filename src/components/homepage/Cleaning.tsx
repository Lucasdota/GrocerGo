"use client";
import React, { useRef } from "react";
import Slider from "@/components/shared/HomePage/Slider";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Cleaning = (props: Props) => {
		const cleaningRef = useRef<HTMLElement>(null);

    function onViewportEnter() {
      cleaningRef.current?.classList.add("fadeInRightToLeft");
    }

  return (
    <motion.section
			ref={cleaningRef}
			onViewportEnter={onViewportEnter}
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
    >
      <Link
        href="/sections/cleaning"
        id="cleaning-carousel"
        className="self-start"
      >
        <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 self-start font-sansita font-bold tracking-wide text-gray-800">
          Cleaning
        </h3>
      </Link>
      <button
        onClick={() =>
          document.getElementById("offers-carousel")?.focus()
        }
        className="opacity-0 absolute"
      >
        Return to the first carousel
      </button>
      <Slider section="cleaning" />
    </motion.section>
  );
};

export default Cleaning;
