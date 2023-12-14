"use client";
import { ImArrowUp } from "react-icons/im";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/app/api/AppContext";

const ScrollToTop = () => {
  const [scrollAboveMid, setScrollAboveMid] = useState(undefined);
	const [scrollbarHeight, setScrollbarHeight] = useState(undefined);
	const { addedPopUp, cartDrawerOn } = useAppContext();

  useEffect(() => {		
		if (document.documentElement.scrollHeight > 4000) {
			setScrollbarHeight(true);
		} else {
			setScrollbarHeight(false);
		}

    const handleScroll = () => {
			if (document.documentElement.scrollHeight > 4000) {
        setScrollbarHeight(true);
      } else {
        setScrollbarHeight(false);
      }
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const isAboveMid = scrollPosition > totalHeight / 2;
      setScrollAboveMid(isAboveMid);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {scrollbarHeight && scrollAboveMid && (
        <motion.button
          key="scroll-button"
          onClick={() => window.scrollTo(0, 0)}
          className={`lg:hidden right-6 bottom-6 bg-green-2/80 z-[100] antialiased p-2 rounded-full active:translate-y-0.5 
					 ${cartDrawerOn ? "hidden" : "fixed"}
					`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: addedPopUp ? -60 : 0 }}
          exit={{ opacity: 0 }}
        >
          <ImArrowUp className="text-neutral-100" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;


