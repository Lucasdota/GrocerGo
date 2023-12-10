"use client";
import Slider from "./Slider";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function TodaysOffers(props: Props) {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link href="/sections/offers" className="self-start">
        <h3 className="text-5xl mb-3 md:text-3xl lg:px-2 v font-sansita tracking-wide text-gray-800 font-bold">
          Today&apos;s Offers{" "}
          <span className="font-bold text-red-500 text-4xl md:text-3xl">
            -%
          </span>
        </h3>
      </Link>
      <Slider />
    </motion.section>
  );
}
