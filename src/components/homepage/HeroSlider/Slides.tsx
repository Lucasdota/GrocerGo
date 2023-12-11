import React, { useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import images from "./images.js";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type Props = {
	currentPage: number,
	direction: number,
	pages: number[],
	setPage: (value: number, direction: number) => void
}

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? "95%" : "-95%",
    };
  },
  animate: {
    x: 0,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? "95%" : "-95%", 
    };
  },
};

const imagesAlts = [
	"now serving sunday brunch, an avocado salad with egg and toast in the background",
	"grocergo blog, discover healthy recipes and food tips for the whole family on our blog",
	"space you spa and sauna, located on every grocergo store",
	"back to school, find everything you need to ace your classes",
	"valentine's day, find that perfect gift for your love",
	"gourmet restaurant and bar, located on every grocergo store",
	"grocergo christmas, we have everything to make your holiday season merry and bright"
]

function Slides({ currentPage, direction, pages, setPage }: Props) {

	useEffect(() => {
    // Preload all images
    images.forEach((image, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
    });
  }, []);

  return (
    <div className="w-full relative aspect-[4/1.38] flex items-center">
      {/* ARROW BUTTONS */}
      <button
        role="navigation"
        aria-label="previous slide"
        className="absolute active:scale-75 group-hover:opacity-100 opacity-0 transition duration-300 left-0 xl:opacity-100 py-10 px-5 lg:px-3 sm:px-0 z-10"
        onClick={() => {
          if (currentPage === 0) {
            setPage(pages.length - 1, -1);
          } else {
            setPage(currentPage - 1, -1);
          }
        }}
      >
        <BsChevronLeft className="rounded-full h-12 w-12 xxl:h-12 xl:h-10 lg:h-8 md:h-6 xxs:h-5 xxs:w-5 text-white/90 drop-shadow-[0_3px_3px_rgb(0,0,0,.2)]" />
      </button>
      <button
        role="navigation"
        aria-label="next slide"
        className="absolute active:scale-75 group-hover:opacity-100 opacity-0 transition duration-300 right-0 xl:opacity-100 py-10 px-5 lg:px-3 sm:px-0 z-10"
        onClick={() => {
          if (currentPage === pages.length - 1) {
            setPage(0, 1);
          } else {
            setPage(currentPage + 1, 1);
          }
        }}
      >
        <BsChevronRight className="rounded-full h-12 w-12 xxl:h-12 xl:h-10 lg:h-8 md:h-6 xxs:h-5 xxs:w-5 text-white/90 drop-shadow-[0_3px_3px_rgb(0,0,0,.2)]" />
      </button>
      {/* SLIDES */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="w-full absolute top-0"
          variants={variants}
          key={currentPage}
          data-page={currentPage}
          initial={"initial"}
          animate={"animate"}
          transition={{ type: "none" }}
          exit={"exit"}
          custom={direction}
        >
          <Image
            src={images[currentPage]}
            alt={imagesAlts[currentPage]}
            className="w-full slides"
            width={1920}
            height={663}
            priority
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slides