"use client";
import React, { useRef } from "react";
import BigCards from "./BigCards";
import { motion } from "framer-motion";

type Props = {};

export default function SecondCards(props: Props) {
	const secondCardsRef = useRef<HTMLElement>(null);

  function onViewportEnter() {
    secondCardsRef.current?.classList.add("fadeInUpToDown");
  }

  return (
    <motion.section
			ref={secondCardsRef}
			onViewportEnter={onViewportEnter}
      className="w-full flex flex-col gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
    >
      <BigCards />
    </motion.section>
  );
}
