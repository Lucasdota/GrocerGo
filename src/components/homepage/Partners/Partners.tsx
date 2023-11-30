"use client";
import React from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";

type Props = {};

const Partners = (props: Props) => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 self-start font-sansita font-bold tracking-wide text-gray-800">
        Partners
      </h3>
      <Slider />
    </motion.section>
  );
};

export default Partners;
