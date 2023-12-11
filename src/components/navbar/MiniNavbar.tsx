import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
			duration: 0.1,
      type: "spring",
      stiffness: 100,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function MiniNavbar() {
  return (
    <nav
      className="xl:hidden block h-8 text-[0.65rem] text-white w-full bg-green-4"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[2560px] flex justify-end items-center mx-auto"
      >
        <motion.div variants={item} className="h-full">
          <Link
            href="/insurance"
            className="h-full px-7 py-2 flex hover:bg-green-5  font-sans tracking-wide drop-shadow transition duration-100"
          >
            Insurance
          </Link>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <Link
            href="/contact-us"
            className="h-full px-7 py-2 flex hover:bg-green-5  font-sans tracking-wide drop-shadow transition duration-100"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <Link
            href="/our-stores"
            className="h-full px-7 py-2 flex hover:bg-green-5  font-sans tracking-wide drop-shadow transition duration-100"
          >
            Our Stores
          </Link>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <Link
            href="/how-to-buy"
            className="h-full px-7 py-2 flex hover:bg-green-5  font-sans tracking-wide drop-shadow transition duration-100"
          >
            How To Buy
          </Link>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <Link
            href="/credit-card"
            className="h-full px-7 py-2 flex relative group hover:bg-green-5 font-sans tracking-wide drop-shadow"
          >
            GrocerGo Credit Card
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
