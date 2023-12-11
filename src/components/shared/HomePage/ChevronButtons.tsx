import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type Props = {
  carousel: React.RefObject<HTMLUListElement>;
  firstcard: React.RefObject<HTMLLIElement>;
  firstDiv: React.RefObject<HTMLDivElement>;
  lastDiv: React.RefObject<HTMLDivElement>;
	divider: number
};

const ChevronButtons = ({carousel, firstcard, firstDiv, lastDiv, divider}: Props) => {
  const arrowLeft = useRef<HTMLButtonElement>(null);
  const arrowRight = useRef<HTMLButtonElement>(null);
  //fires the first if condition only once in the scrollSlide left AND right functions
  const [generatedDivs, setGeneratedDivs] = useState<number>(0);
  const [allowClick, setAllowClick] = useState<boolean>(true);

  //scroll buttons functionality
  useEffect(() => {
    const mediaQueryGg = window.matchMedia("(max-width: 1739px)");
    const mediaQueryXl = window.matchMedia("(max-width: 1279px)");
    const mediaQueryLg = window.matchMedia("(max-width: 1023px)");
    const mediaQueryMd = window.matchMedia("(max-width: 767px)");
    const mediaQueryXs = window.matchMedia("(max-width: 479px)");
    const arrowLeftBackup = arrowLeft;
    const arrowRightBackup = arrowRight;
    const firstCardWidth = firstcard.current!.offsetWidth;
    let totalScrollWidth =
      carousel.current!.scrollWidth - carousel.current!.offsetWidth;
    //the number of visible divs changes in each media query, so we need a variable to help us scroll correctly when dealing with a variable number of elements inside the visible carousel
    let queryMultiplier = mediaQueryXs.matches
      ? 5
      : mediaQueryMd.matches
      ? 4
      : mediaQueryLg.matches
      ? 3
      : mediaQueryXl.matches
      ? 2
      : mediaQueryGg.matches
      ? 1
      : 0;

    //LEFT BUTTON
    const scrollSlideLeft = () => {
      if (!allowClick) return;
      setAllowClick(false);
      if (carousel.current!.scrollLeft === 0 && generatedDivs === 0) {
        setGeneratedDivs((prevState) => prevState + 1);
        carousel.current!.classList.remove("scroll-smooth");
        firstDiv.current!.classList.replace("hidden", "flex");
        carousel.current!.scrollBy(-carousel.current!.scrollWidth, 0);
        carousel.current!.scrollBy(carousel.current!.scrollWidth / divider, 0);
        carousel.current!.classList.add("scroll-smooth");
        carousel.current!.scrollBy(-firstCardWidth, 0);
      } else if (carousel.current!.scrollLeft === 0 && generatedDivs > 0) {
        carousel.current!.classList.remove("scroll-smooth");
        carousel.current!.scrollBy(
          totalScrollWidth - firstCardWidth * queryMultiplier,
          0
        );
        carousel.current!.classList.add("scroll-smooth");
        carousel.current!.scrollBy(-firstCardWidth, 0);
      } else {
        carousel.current!.scrollBy(-firstCardWidth, 0);
      }
      setTimeout(() => {
        //allows next click in 0.3s
        setAllowClick(true);
      }, 400);
    };

    //RIGHT BUTTON
    const scrollSlideRight = () => {
      if (!allowClick) return;
      setAllowClick(false);
      if (
        carousel.current!.scrollLeft === totalScrollWidth &&
        generatedDivs === 0
      ) {				
        setGeneratedDivs((prevState) => prevState + 1);
        carousel.current!.classList.remove("scroll-smooth");
        lastDiv.current!.classList.replace("hidden", "flex");
        carousel.current!.scrollBy(carousel.current!.scrollWidth, 0);
        carousel.current!.scrollBy(-carousel.current!.scrollWidth / divider, 0);
        carousel.current!.classList.add("scroll-smooth");
        carousel.current!.scrollBy(firstCardWidth, 0);
      } else if (
        carousel.current!.scrollLeft === totalScrollWidth &&
        generatedDivs > 0
      ) {

        carousel.current!.classList.remove("scroll-smooth");
        carousel.current!.scrollBy(
          -(totalScrollWidth - firstCardWidth * queryMultiplier),
          0
        );
        carousel.current!.classList.add("scroll-smooth");
        carousel.current!.scrollBy(firstCardWidth, 0);
      } else {

        carousel.current!.scrollBy(firstCardWidth, 0);
      }
      setTimeout(() => {
        setAllowClick(true);
      }, 400);
    };

    arrowLeft.current?.addEventListener("click", scrollSlideLeft);
    arrowRight.current?.addEventListener("click", scrollSlideRight);
    return () => {
      // Cleanup: Remove the event listener before the component is unmounted
      arrowLeftBackup.current?.removeEventListener(
        "click",
        scrollSlideLeft,
        false
      );
      arrowRightBackup.current?.removeEventListener(
        "click",
        scrollSlideRight,
        false
      );
    };
  });

  return (
    <>
      <button
        role="navigation"
        aria-label="previous item"
        ref={arrowLeft}
        className="absolute left-0 group transition duration-100 shadow-[1px_1px_2px_rgba(0,0,0,0.1)] text-black/80 bg-neutral-200/30"
      >
        <BsChevronLeft className="group-active:scale-75 h-12 w-12 sm:h-10 sm:w-10 sm:p-3 p-4" />
      </button>
      <button
        role="navigation"
        aria-label="next item"
        ref={arrowRight}
        className="absolute group transition duration-100 right-0 shadow-[-1px_1px_2px_rgba(0,0,0,0.1)] text-black/80 bg-neutral-200/30"
      >
        <BsChevronRight className="group-active:scale-75 h-12 w-12 sm:h-10 sm:w-10 sm:p-3 p-4" />
      </button>
    </>
  );
}

export default ChevronButtons