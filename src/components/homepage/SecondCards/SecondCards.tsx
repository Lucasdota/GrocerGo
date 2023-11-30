"use client";
import React from "react";
import BigCards from "./BigCards";
import { motion } from "framer-motion";

type Props = {};

export default function SecondCards(props: Props) {
  return (
    <motion.section
      className="w-full flex flex-col gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <BigCards />
    </motion.section>
  );
}
