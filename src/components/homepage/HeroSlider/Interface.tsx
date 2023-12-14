"use client";
import React from "react";
import { useState, useEffect } from "react";
import Slides from "./Slides";
import Pagination from "./Pagination";

const pages = [0, 1, 2, 3, 4, 5, 6];

const Interface = () => {
	const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const [autoSlide, setAutoSlide] = useState(true);

  function setPage(newPage: number, newDirection?: number) {
		//if there's no direction argument, new direction receives 1
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  useEffect(() => {
		//auto slide functionality
    if (!autoSlide) return;

    function myTimer() {
      if (currentPage === pages.length - 1) {
        setCurrentPage([0, 1]);
      } else {
        setCurrentPage((prev) => [prev[0] + 1, 1]);
      }
    }

    const myInterval = setTimeout(myTimer, 8000);
    return () => {
      clearTimeout(myInterval);
    };
  }, [currentPage, autoSlide]);

  return (
    <section
      className={`flex flex-col items-center group w-full h-fit relative md:hidden fadeIn`}
    >
      {/* SLIDER */}
      <Slides
        currentPage={currentPage}
        direction={direction}
        pages={pages}
        setPage={setPage}
      />
      <Pagination
        currentPage={currentPage}
        setPage={setPage}
        pages={pages}
        autoSlide={autoSlide}
        setAutoSlide={setAutoSlide}
      />
    </section>
  );
};

export default Interface;
