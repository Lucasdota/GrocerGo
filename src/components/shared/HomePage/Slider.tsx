import { catalog } from "@/components/shared/Catalog";
import AddToCart from "@/components/shared/AddToCart";
import ChevronButtons from "@/components/shared/HomePage/ChevronButtons";
import SliderCards from "@/components/shared/HomePage/SliderCards";
import UpdateCardsWidth from "@/components/shared/HomePage/UpdateCardsWidth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useMemo } from "react";
import AddToFav from "../AddToFav";
import HandleImageLoad from "../HandleImageLoad";

type Props = {
	section: string
}

const Slider = ({ section }: Props) => {
  const carousel = useRef<HTMLUListElement>(null);
  const firstcard = useRef<HTMLLIElement>(null);
  const firstDiv = useRef<HTMLDivElement>(null);
  const lastDiv = useRef<HTMLDivElement>(null);
	const sectionCatalog = useMemo(() => catalog.find((item) => item.section === section)?.products, [section]);

  // Create a separate event listener function for the window's resize event
  const handleWindowResize = () => {
    if (carousel.current) {
      UpdateCardsWidth({
        cards: carousel.current.querySelectorAll(".first-carousel .card"),
        carousel: carousel,
      });
    }
  };

  //set width of cards according to the carousel's width based on media queries for better responsiveness
  useEffect(() => {
    carousel.current!.scrollBy(
      -(carousel.current!.scrollWidth - carousel.current!.offsetWidth),
      0
    );
    if (!carousel.current) return;
    UpdateCardsWidth({
      cards: carousel.current.querySelectorAll(".first-carousel .card"),
      carousel: carousel,
    });

    window.addEventListener("resize", handleWindowResize); // Add event listener for window resize
    return () => {
      // Cleanup: Remove the event listener before the component is unmounted
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-full h-fit relative min-w-[17.5rem] flex items-center">
      <ul
        ref={carousel}
        className="text-lg first-carousel h-full snap-x grid grid-flow-col gg:auto-cols-min scroll-smooth overflow-hidden"
      >
        {/* hidden div becomes visible when scrollbar at 0 to simulate infinite slider*/}
        <div ref={firstDiv} className="hidden h-full">
          {sectionCatalog!.map(
            (card, index) =>
              index >= 6 && (
                <SliderCards
                  key={card.id}
                  image={card.image}
                  title={card.name}
                  price={card.price}
                  section={section}
                />
              )
          )}
        </div>

        {/* first li rendered separated to get its width beforehand and make the chevrons work appropriately */}
        {sectionCatalog!.map((card, index) =>
          index === 0 ? (
            <li
              key={card.id}
              ref={firstcard}
              className="flex-col border justify-between w-full flex bg-white text-center p-4 rounded-lg transition duration-200 ease-in-out relative group card snap-start h-full"
            >
              <AddToFav title={card.name} />
              <Link
                href={`/sections/${section}/${card.name
                  .toLocaleLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={`rounded-t-lg flex-col flex items-center justify-center`}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={300}
                  height={300}
                  loading="lazy"
									onLoad={HandleImageLoad}
                  className={`w-3/5 rounded-t-lg pt-3 xl:px-3
          drop-shadow transition-opacity opacity-0 duration-[.3s]`}
                />
                <div
                  className={`mt-4 sm:mt-2 sm:py-2 text-gray-700 font-bold w-full py-4 leading-6 flex flex-col items-center justify-center`}
                >
                  <h3
                    className={`flex items-center justify-center h-14 sm:text-sm sm:h-12 whitespace-normal `}
                  >
                    {card.name}
                  </h3>
                  <span
                    className={`inline-block sm:text-base text-green-4 font-extrabold text-2xl`}
                  >
                    $&nbsp;{card.price}
                  </span>
                </div>
              </Link>
              <AddToCart
                name={card.name}
                image={card.image}
                price={card.price}
								section="beverages"
                text={"ADD TO CART"}
                className={`w-full xs:p-2 xxs:gap-0.5
					rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] px-2.5 py-1`}
              />
            </li>
          ) : (
            <SliderCards
              key={card.id}
              image={card.image}
              title={card.name}
              price={card.price}
              section={section}
            />
          )
        )}

        {/* hidden div becomes visible when scrollbar at end to simulate infinite slider*/}
        <div ref={lastDiv} className="hidden h-full">
          {sectionCatalog!.map(
            (card, index) =>
              index <= 5 && (
                <SliderCards
                  key={card.id}
                  image={card.image}
                  title={card.name}
                  price={card.price}
                  section={section}
                />
              )
          )}
        </div>
      </ul>

      <ChevronButtons
        carousel={carousel}
        firstcard={firstcard}
        firstDiv={firstDiv}
        lastDiv={lastDiv}
        divider={3}
      />
    </div>
  );
};

export default Slider;
