"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import HandleImageLoad from "@/components/shared/HandleImageLoad";

type Props = {}

const carouselImages = [
  {
    id: 1,
    image: "/images/mini-pages/carousel1.webp",
    alt: "medium salsa",
  },
  {
    id: 2,
    image: "/images/mini-pages/carousel1.webp",
    alt: "prosciutto Di Parma",
  },
  {
    id: 3,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Organic Vanilla Soymilk",
  },
  {
    id: 4,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Peach Yogurt",
  },
  {
    id: 5,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Pepperoni Pizza",
  },
  {
    id: 6,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Spicy Salami",
  },
  {
    id: 7,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Spicy Salami",
  },
  {
    id: 8,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Spicy Salami",
  },
  {
    id: 9,
    image: "/images/mini-pages/carousel1.webp",
    alt: "Spicy Salami",
  },
];

const Carousel = (props: Props) => {
	const [allowClick, setAllowClick] = useState<boolean>(true);
  const firstLi = useRef<HTMLLIElement>(null);
  const lastLi = useRef<HTMLLIElement>(null);
  const htbCarouselContainer = useRef<HTMLDivElement>(null);
  const arrowLeft = useRef<HTMLButtonElement>(null);
  const arrowRight = useRef<HTMLButtonElement>(null);
	const htbFirstCarousel = useRef<HTMLUListElement>(null);

  //scroll buttons functionality
  useEffect(() => {
    const arrowLeftBackup = arrowLeft;
    const arrowRightBackup = arrowRight;
    const firstLiWidth = htbFirstCarousel.current!.offsetWidth;
    let totalScrollWidth =
      htbFirstCarousel.current!.scrollWidth - htbFirstCarousel.current!.offsetWidth;

    //LEFT BUTTON
    const scrollSlideLeft = () => {
      if (!allowClick) return;
      setAllowClick(false);
      if (htbFirstCarousel.current!.scrollLeft === 0) {
        firstLi.current!.classList.replace("hidden", "flex");
        htbFirstCarousel.current!.scrollBy(-firstLiWidth, 0);
				setTimeout(() => {
					htbFirstCarousel.current!.classList.remove("scroll-smooth");
					htbFirstCarousel.current!.scrollBy(
            htbFirstCarousel.current!.scrollWidth,
            0
          );
					htbFirstCarousel.current!.classList.add("scroll-smooth");
					firstLi.current!.classList.replace("flex", "hidden");
				}, 500)	
      } else {
        htbFirstCarousel.current!.scrollBy(-firstLiWidth, 0);
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
        htbFirstCarousel.current!.scrollLeft === totalScrollWidth
      ) {
        lastLi.current!.classList.replace("hidden", "flex");
        htbFirstCarousel.current!.scrollBy(firstLiWidth, 0);
        setTimeout(() => {
          htbFirstCarousel.current!.classList.remove("scroll-smooth");
          htbFirstCarousel.current!.scrollBy(
            -htbFirstCarousel.current!.scrollWidth,
            0
          );
          htbFirstCarousel.current!.classList.add("scroll-smooth");
          lastLi.current!.classList.replace("flex", "hidden");
        }, 500);	
      } else {
        htbFirstCarousel.current!.scrollBy(firstLiWidth, 0);
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
      ref={htbCarouselContainer}
      className="relative w-[448px] xs:w-96 xxs:w-80 rounded-lg"
    >
      <ul
        ref={htbFirstCarousel}
        className="snap-x grid grid-flow-col scroll-smooth overflow-hidden"
      >
        <li
          ref={firstLi}
          className="card snap-start hidden flex-col items-center w-[448px] xs:w-96 xxs:w-80 xs:px-6 px-12 gap-4 pb-1"
        >
          <div className="flex gap-1 whitespace-normal">
            <span className="text-neutral-50 drop-shadow bg-green-4 w-20 h-9 rounded flex items-center justify-center">
              9
            </span>
            <h4 className="leading-5 xs:text-sm">
              <span className="text-green-4">Done!</span> Your purchase is
              currently being processed, and soon you will receive the
              notification &quot;Your Order is Finalized/Order Scheduled&quot;
            </h4>
          </div>
          <Image
            src="/images/mini-pages/carousel1.webp"
            alt="last item"
            width={1920}
            height={1080}
            onLoad={HandleImageLoad}
            className="h-56 md:h-52 xs:h-44 xxs:h-36 w-[350px] xs:w-[285px] xxs:w-[221px] border rounded-lg shadow transition-opacity opacity-0 duration-[.3s]"
          />
        </li>
        {carouselImages.map((item) => (
          <li
            key={item.id}
            className="card snap-start flex flex-col items-center w-[448px] xs:w-96 xxs:w-80 xs:px-6 px-12 gap-4 pb-1"
          >
            <div className="flex gap-1 whitespace-normal font-nunito">
              <span className="text-neutral-50 drop-shadow bg-green-4 w-20 h-9 rounded flex items-center justify-center">
                {item.id}
              </span>
              <h4 className="leading-5 xs:text-sm">
                <span className="text-green-4">Done!</span> Your purchase is
                currently being processed, and soon you will receive the
                notification &quot;Your Order is Finalized/Order Scheduled&quot;
              </h4>
            </div>
            <Image
              src={item.image}
              alt={item.alt}
              width={1920}
              height={1080}
              onLoad={HandleImageLoad}
              className="h-56 md:h-52 xs:h-44 xxs:h-36 w-[350px] xs:w-[285px] xxs:w-[221px] border rounded-lg shadow transition-opacity opacity-0 duration-[.3s]"
            />
          </li>
        ))}
        <li
          ref={lastLi}
          className="card snap-start hidden flex-col items-center w-[448px] xs:w-96 xxs:w-80 xs:px-6 px-12 gap-4 pb-1"
        >
          <div className="flex gap-1 whitespace-normal font-nunito">
            <span className="text-neutral-50 drop-shadow bg-green-4 w-20 h-9 rounded flex items-center justify-center">
              1
            </span>
            <h4 className="leading-5 xs:text-sm">
              <span className="text-green-4">Done!</span> Your purchase is
              currently being processed, and soon you will receive the
              notification &quot;Your Order is Finalized/Order Scheduled&quot;
            </h4>
          </div>
          <Image
            src="/images/mini-pages/carousel1.webp"
            alt="first item"
            width={1920}
            height={1080}
            onLoad={HandleImageLoad}
            className="h-56 md:h-52 xs:h-44 xxs:h-36 w-[350px] xs:w-[285px] xxs:w-[221px] border rounded-lg drop-shadow transition-opacity opacity-0 duration-[.3s]"
          />
        </li>
      </ul>
      {/* CHEVRON BUTTONS */}
      <button
        role="navigation"
        aria-label="previous slide"
        ref={arrowLeft}
        className="absolute -left-5 xs:left-2 bottom-20 xs:bottom-16 xxs:bottom-14 group transition duration-100 text-neutral-500"
      >
        <BsChevronLeft className="group-active:scale-75 h-14 w-14 sm:h-12 sm:w-12 xxs:h-10 xxs:w-10 p-3" />
      </button>
      <button
        role="navigation"
        aria-label="next slide"
        ref={arrowRight}
        className="absolute group transition duration-100 -right-5 xs:right-2 bottom-20 xs:bottom-16 xxs:bottom-14 text-neutral-500"
      >
        <BsChevronRight className="group-active:scale-75 h-14 w-14 sm:h-12 sm:w-12 xxs:h-10 xxs:w-10 p-3" />
      </button>
    </div>
  );
}

export default Carousel