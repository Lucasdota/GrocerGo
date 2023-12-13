"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

type Props = {};

const carouselImages = [
  {
    id: 1,
    image: "/images/mini-pages/appstore.webp",
    alt: "medium salsa",
  },
  {
    id: 2,
    image: "/images/mini-pages/appstore.webp",
    alt: "prosciutto Di Parma",
  },
  {
    id: 3,
    image: "/images/mini-pages/appstore.webp",
    alt: "Organic Vanilla Soymilk",
  },
  {
    id: 4,
    image: "/images/mini-pages/appstore.webp",
    alt: "Peach Yogurt",
  },
  {
    id: 5,
    image: "/images/mini-pages/appstore.webp",
    alt: "Pepperoni Pizza",
  },
  {
    id: 6,
    image: "/images/mini-pages/appstore.webp",
    alt: "Spicy Salami",
  },
  {
    id: 7,
    image: "/images/mini-pages/appstore.webp",
    alt: "Spicy Salami",
  },
  {
    id: 8,
    image: "/images/mini-pages/appstore.webp",
    alt: "Spicy Salami",
  },
  {
    id: 9,
    image: "/images/mini-pages/appstore.webp",
    alt: "Spicy Salami",
  },
];

const MobileCarousel = (props: Props) => {
  const [allowClick, setAllowClick] = useState<boolean>(true);
  const firstLi = useRef<HTMLLIElement>(null);
  const lastLi = useRef<HTMLLIElement>(null);
  const htbMobileCarousel = useRef<HTMLDivElement>(null);
  const arrowLeft = useRef<HTMLButtonElement>(null);
  const arrowRight = useRef<HTMLButtonElement>(null);
  const htbSecondCarousel = useRef<HTMLUListElement>(null);

  //scroll buttons functionality
  useEffect(() => {
    const arrowLeftBackup = arrowLeft;
    const arrowRightBackup = arrowRight;
    const firstLiWidth = htbSecondCarousel.current!.offsetWidth;
    let totalScrollWidth =
      htbSecondCarousel.current!.scrollWidth -
      htbSecondCarousel.current!.offsetWidth;

    //LEFT BUTTON
    const scrollSlideLeft = () => {
      if (!allowClick) return;
      setAllowClick(false);
      if (htbSecondCarousel.current!.scrollLeft === 0) {
        firstLi.current!.classList.replace("hidden", "flex");
        htbSecondCarousel.current!.scrollBy(-firstLiWidth, 0);
        setTimeout(() => {
          htbSecondCarousel.current!.classList.remove("scroll-smooth");
          htbSecondCarousel.current!.scrollBy(
            htbSecondCarousel.current!.scrollWidth,
            0
          );
          htbSecondCarousel.current!.classList.add("scroll-smooth");
          firstLi.current!.classList.replace("flex", "hidden");
        }, 500);
      } else {
        htbSecondCarousel.current!.scrollBy(-firstLiWidth, 0);
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
      if (htbSecondCarousel.current!.scrollLeft === totalScrollWidth) {
        lastLi.current!.classList.replace("hidden", "flex");
        htbSecondCarousel.current!.scrollBy(firstLiWidth, 0);
        setTimeout(() => {
          htbSecondCarousel.current!.classList.remove("scroll-smooth");
          htbSecondCarousel.current!.scrollBy(
            -htbSecondCarousel.current!.scrollWidth,
            0
          );
          htbSecondCarousel.current!.classList.add("scroll-smooth");
          lastLi.current!.classList.replace("flex", "hidden");
        }, 500);
      } else {
        htbSecondCarousel.current!.scrollBy(firstLiWidth, 0);
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
    <div
      ref={htbMobileCarousel}
      className="relative w-[300px] xxs:w-60 rounded-lg"
    >
      <ul
        ref={htbSecondCarousel}
        className="snap-x grid grid-flow-col scroll-smooth overflow-hidden"
      >
        <li
          ref={firstLi}
          className="card snap-start hidden flex-col items-center w-[300px] xxs:w-60 px-6 xxs:px-2 gap-4 pb-1"
        >
          <div className="flex gap-1 whitespace-normal">
            <span className="text-neutral-50 drop-shadow bg-green-4 w-14 h-9 xs:w-12 rounded flex items-center justify-center">
              9
            </span>
            <h4 className="leading-5 xs:text-sm">
              Tap in{" "}
              <span className="text-green-4">
                &quot;Finalize Purchase&quot;{" "}
              </span>
              and you&quot;re good to go!
            </h4>
          </div>
          <Image
            src="/images/mini-pages/appstore.webp"
            alt="last item"
            width={255}
            height={470}
            onLoad={HandleImageLoad}
            className="w-52 border rounded-lg shadow transition-opacity opacity-0 duration-[.3s]"
          />
        </li>
        {carouselImages.map((item) => (
          <li
            key={item.id}
            className="card snap-start flex flex-col items-center w-[300px] xxs:w-60 px-6 xxs:px-2 gap-4 pb-1"
          >
            <div className="flex gap-1 whitespace-normal font-nunito">
              <span className="text-neutral-50 drop-shadow bg-green-4 w-14 xs:w-12 h-9 rounded flex items-center justify-center">
                {item.id}
              </span>
              <h4 className="leading-5 xs:text-sm">
                Tap in{" "}
                <span className="text-green-4">
                  &quot;Finalize Purchase&quot;{" "}
                </span>
                and you&quot;re good to go!
              </h4>
            </div>

            <Image
              src={item.image}
              alt={item.alt}
              width={255}
              height={470}
              onLoad={HandleImageLoad}
              className="w-52 border rounded-lg shadow transition-opacity opacity-0 duration-[.3s]"
            />
          </li>
        ))}
        <li
          ref={lastLi}
          className="card snap-start hidden flex-col items-center w-[300px] xxs:w-60 px-6 xxs:px-2 gap-4 pb-1"
        >
          <div className="flex gap-1 whitespace-normal font-nunito">
            <span className="text-neutral-50 drop-shadow bg-green-4 w-14 h-9 xs:w-12 rounded flex items-center justify-center">
              1
            </span>
            <h4 className="leading-5 xs:text-sm">
              Tap in{" "}
              <span className="text-green-4">
                &quot;Finalize Purchase&quot;{" "}
              </span>
              and you&quot;re good to go!
            </h4>
          </div>
          <Image
            src="/images/mini-pages/appstore.webp"
            alt="first item"
            width={255}
            height={470}
            onLoad={HandleImageLoad}
            className="w-52 border rounded-lg shadow transition-opacity opacity-0 duration-[.3s]"
          />
        </li>
      </ul>
      {/* CHEVRON BUTTONS */}
      <button
        role="navigation"
        aria-label="previous slide"
        ref={arrowLeft}
        className="absolute -left-5 xxs:-left-10 bottom-40 group transition duration-100 text-neutral-500"
      >
        <BsChevronLeft className="group-active:scale-75 h-14 w-14 sm:h-12 sm:w-12 p-3" />
      </button>
      <button
        role="navigation"
        aria-label="next slide"
        ref={arrowRight}
        className="absolute group transition duration-100 -right-5 xxs:-right-10 bottom-40 text-neutral-500"
      >
        <BsChevronRight className="group-active:scale-75 h-14 w-14 sm:h-12 sm:w-12 p-3" />
      </button>
    </div>
  );
};

export default MobileCarousel;
