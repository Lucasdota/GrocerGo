"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import Reviews from "./Reviews";
import Options from "./Options";
import MobileOptions from "./MobileOptions";
import Chicken from "../../../../public/images/specials/roasted-chicken2.webp";
import Image from "next/image";

const container = {
  initial: {
    x: -1600,
    clipPath: "circle(25.8% at 50% 50%)",
  },
  animate: {
    x: 0,
    clipPath: "circle(100.0% at 50% 50%)",
    transition: {
      x: {
        ease: easeOut,
        type: "spring",
        duration: 1.5,
      },
      clipPath: {
        delay: 5,
        ease: easeIn,
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
};

const sticks = {
  hidden: {
    x: -1600,
  },
  visible: {
    x: 0,
    transition: {
      ease: easeOut,
      type: "spring",
      duration: 1.5,
    },
  },
  exit: {
    x: -1600,
    transition: {
      duration: 0.3,
    },
  },
};

const item = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 5.3, ease: easeIn },
  },
};

const slide = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "-108.2%",
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Card = () => {
  const [icon, setIcon] = useState<boolean>(true);
  const [hide, setHide] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean | undefined>();
  const [options, setOptions] = useState<boolean>(false);

  setTimeout(() => {
    setHide(true);
  }, 1900);

  setTimeout(() => {
    setIcon(false);
  }, 4000);

  useEffect(() => {
    const mediaQueryMd = window.matchMedia("(max-width: 767px)");
    if (mediaQueryMd.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    function defineMobile() {
      if (mediaQueryMd.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", defineMobile);
    console.log(isMobile);

    return () => {
      window.removeEventListener("resize", defineMobile);
    };
  }, [isMobile]);

  return (
    <>
      {/* animated sticks */}
      <AnimatePresence>
        {!hide && (
          <>
            <motion.div
              className={`absolute z-10 bg-[#262626] w-[23rem] hg:w-[29rem] left-9 bottom-[10.5rem] gg:bottom-[12.5rem] h-6 rounded-lg -rotate-12 xxl:hidden`}
              variants={sticks}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <motion.div
              className="absolute bg-[#262626] w-[87rem] -left-[55rem] bottom-[8.5rem] gg:w-[82rem] gg:bottom-[10.5rem] h-6 rounded-r-lg xxl:hidden"
              variants={sticks}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </>
        )}
      </AnimatePresence>
      {/* content */}
      {!isMobile ? (
        <motion.div
          className="relative flex flex-col items-center justify-center bg-white rounded-lg drop-shadow-sm overflow-hidden"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <div
            className={`bg-white absolute p-4 flex items-center justify-center rounded-lg transition duration-1000 ease-out ${
              icon ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white rounded-full p-8 hg:shadow-none shadow-[inset_0_-2px_30px_rgba(0,0,0,0.2)] xxl:shadow-none relative">
              <Image
                src={Chicken}
                alt="roasted chicken"
                width={500}
                height={500}
                className="p-16 lg:p-20"
              />
            </div>
          </div>
          <motion.div
            className="relative p-12 lg:p-8 h-[40rem]"
            variants={item}
            initial="initial"
            animate="animate"
          >
            <AnimatePresence mode="wait">
              {!options ? (
                <motion.div
                  key={"front-card"}
                  className={`flex flex-col items-center justify-between h-full`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  exit={{
                    opacity: 0,
                    transition: { delay: 0.2, duration: 0.1 },
                  }}
                >
                  <h3 className="text-5xl lg:text-4xl xs:text-3xl font-semibold font-sansita tracking-wide text-gray-800 italic">
                    Delivery Rotisserie
                  </h3>
                  <p className="text-xl lg:text-base xs:text-sm text-gray-800 leading-6">
                    Convenient Rotisserie Delivered to Your Doorstep: Enjoy the
                    irresistible flavors of our rotisserie dishes from the
                    comfort of your home. Our delivery service ensures that you
                    savor juicy, aromatic rotisserie meals without leaving your
                    home. Choose from a delectable range of options, place your
                    order, and let us bring the goodness to you. Taste the
                    convenience today!
                  </p>
                  <button
                    onClick={() => setOptions(true)}
                    className="hover:-translate-y-0.5 active:translate-y-1 z-10 text-xl px-6 py-2 rounded-lg bg-neutral-50 drop-shadow font-bold tracking-wide mx-auto text-gray-800 lg:text-base xs:text-sm"
                  >
                    Check
                  </button>
                  <Reviews />
                </motion.div>
              ) : (
                <Options setOptions={setOptions} />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {options && (
                <motion.div
                  className={`w-full h-full absolute top-0 bg-green-5 z-20 rounded-lg`}
                  variants={slide}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : (
        <div className="relative flex flex-col items-center justify-center p-12 md:p-8 bg-white rounded-lg drop-shadow-sm">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h3 className="text-5xl lg:text-4xl xs:text-3xl font-semibold font-sansita tracking-wide text-gray-800 italic">
              Delivery Rotisserie
            </h3>
            <p className="text-xl lg:text-base xs:text-sm text-gray-800 leading-6">
              Convenient Rotisserie Delivered to Your Doorstep: Enjoy the
              irresistible flavors of our rotisserie dishes from the comfort of
              your home. Our delivery service ensures that you savor juicy,
              aromatic rotisserie meals without leaving your home. Choose from a
              delectable range of options, place your order, and let us bring
              the goodness to you. Taste the convenience today!
            </p>
            <h3 className="text-2xl font-bold text-gray-700 tracking-wide">
              MENU:
            </h3>
            <MobileOptions />
            <h3 className="text-2xl font-bold text-gray-700 tracking-wide">
              REVIEWS:
            </h3>
            <Reviews />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
