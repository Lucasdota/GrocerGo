"use client";
import React, { useRef } from "react";
import Slider from "@/components/shared/HomePage/Slider";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Essentials = (props: Props) => {
	const essentialsRef = useRef<HTMLElement>(null);

	function onViewportEnter() {
		essentialsRef.current?.classList.add("fadeInLeftToRight");
	}

  return (
    <motion.section
		ref={essentialsRef}
		onViewportEnter={onViewportEnter}
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
    >
      <Link
        href="/sections/essentials"
        id="essentials-carousel"
        className="self-start"
      >
        <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 self-start font-sansita font-bold tracking-wide text-gray-800">
          Essentials
        </h3>
      </Link>
      <button
        onClick={() => document.getElementById("cleaning-carousel")?.focus()}
        className="opacity-0 absolute"
      >
        Skip to the next carousel
      </button>
      <Slider section="essentials" />
    </motion.section>
  );
};

export default Essentials;
