"use client";
import React, { useRef } from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";

type Props = {};

const Partners = (props: Props) => {
	const partnersRef = useRef<HTMLElement>(null);

	function onViewportEnter() {
		partnersRef.current?.classList.add("fadeInLeftToRight");
	}

  return (
    <motion.section
			ref={partnersRef}
			onViewportEnter={onViewportEnter}
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
    >
      <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 self-start font-sansita font-bold tracking-wide text-gray-800">
        Partners
      </h3>
      <Slider />
    </motion.section>
  );
};

export default Partners;
