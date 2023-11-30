"use client";
import React from "react";
import { useState, useEffect } from "react";
import Slides from "./Slides";
import Pagination from "./Pagination";
import {motion} from 'framer-motion'

const pages = [0, 1, 2, 3, 4, 5, 6];

const Interface = () => {
	const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const [autoSlide, setAutoSlide] = useState(true);

  function setPage(newPage: number, newDirection?: number) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  useEffect(() => {
    if (!autoSlide) return;

    function myTimer() {
      if (currentPage === pages.length - 1) {
        setCurrentPage([0, 1]);
      } else {
        setCurrentPage((prev) => [prev[0] + 1, 1]);
      }
    }

    const myInterval = setTimeout(myTimer, 5000);
    return () => {
      clearTimeout(myInterval);
    };
  }, [currentPage, autoSlide]);

  return (
    <motion.section
      className={`flex flex-col items-center group w-full h-fit relative md:hidden`}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.1}}
    >
      {/* SLIDER */}    
      <Slides
        currentPage={currentPage}
        direction={direction}
        pages={pages}
        setPage={setPage}
      />
      <Pagination currentPage={currentPage} setPage={setPage} pages={pages} autoSlide={autoSlide} setAutoSlide={setAutoSlide} />
    </motion.section>
  );
};

export default Interface;
