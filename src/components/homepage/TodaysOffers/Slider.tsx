import AddToCart from "@/components/shared/AddToCart";
import ChevronButtons from "@/components/shared/HomePage/ChevronButtons";
import UpdateCardsWidth from "@/components/shared/HomePage/UpdateCardsWidth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef } from "react";
import { catalog } from "@/components/shared/Catalog";
import { BiSolidOffer } from "react-icons/bi";
import UrlizeWords from "../../shared/UrlizeWords";
import AddToFav from "@/components/shared/AddToFav";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

export default function Slider() {
  const carousel = useRef<HTMLUListElement>(null);
  const firstCard = useRef<HTMLLIElement>(null);
  const firstDiv = useRef<HTMLDivElement>(null);
  const lastDiv = useRef<HTMLDivElement>(null);
	const offersCatalog = useMemo(() => catalog.find((item) => item.section === "offers")?.products, []) ;

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
          {offersCatalog!.map(
            (card, index) =>
              index > 11 && (
                <GenerateCards
                  key={card.id}
                  image={card.image}
                  alt={card.name}
                  title={card.name}
                  old_price={card.old_price}
                  price={card.price}
                />
              )
          )}
        </div>

        {/* first li rendered separated to get its width beforehand and make the chevrons work appropriately */}
        {offersCatalog!.map((card, index) =>
          index === 0 ? (
            <li
              key={card.id}
              ref={firstCard}
              className="flex-col border justify-between w-full flex bg-white text-center p-4 rounded-lg transition duration-200 ease-in-out relative group card snap-start h-full"
            >
              <BiSolidOffer
                className={`absolute text-red-400 w-6 h-6 top-3 left-4 ${
                  card.old_price === 0 ? "hidden" : null
                }`}
              />
              <AddToFav title={card.name} />

              <Link
                href="/sections/offers/lemon-juice"
                className={`rounded-t-lg flex-col flex items-center justify-center`}
              >
                <Image
                  src="/images/products/offers/lemon-juice.webp"
                  alt="lemon juice"
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
                    100% Lemon Juice
                  </h3>
                  <div>
                    <span
                      className={`inline-block sm:text-[.75rem] sm:mr-1 font-normal text-sm text-red-500 line-through mr-2`}
                    >
                      2.39
                    </span>
                    <span
                      className={`inline-block sm:text-base  text-green-4 font-extrabold text-2xl`}
                    >
                      $&nbsp;2.09
                    </span>
                  </div>
                </div>
              </Link>
              <AddToCart
                name={"100% Lemon Juice"}
                image={"/images/products/offers/lemon-juice.webp"}
                price={2.09}
                text={"ADD TO CART"}
								section="offers"
                className={`w-full xs:p-2 xxs:gap-0.5
					rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] px-2.5 py-1`}
              />
            </li>
          ) : (
            <GenerateCards
              key={card.id}
              image={card.image}
              alt={card.name}
              title={card.name}
              old_price={card.old_price}
              price={card.price}
            />
          )
        )}

        {/* hidden div becomes visible when scrollbar at end to simulate infinite slider*/}
        <div ref={lastDiv} className="hidden h-full">
          {offersCatalog!.map(
            (card, index) =>
              index <= 5 && (
                <GenerateCards
                  key={card.id}
                  image={card.image}
                  alt={card.name}
                  title={card.name}
                  old_price={card.old_price}
                  price={card.price}
                />
              )
          )}
        </div>
      </ul>

      <ChevronButtons
        carousel={carousel}
        firstcard={firstCard}
        firstDiv={firstDiv}
        lastDiv={lastDiv}
        divider={4}
      />
    </div>
  );
}

type Props = {
  image: string;
  alt: string;
  title: string;
  old_price: number;
  price: number
};

const GenerateCards = ({ image, alt, title, old_price, price }: Props) => {
  //if the title has any space, replaces with dashes
  const url = UrlizeWords(title);

  return (
    <li
      className={`flex-col border justify-between w-full flex bg-white text-center p-4 rounded-lg relative group card snap-start h-full`}
    >
      <BiSolidOffer
        className={`absolute text-red-400 w-6 h-6 top-3 left-4 ${
          old_price === 0 ? "hidden" : null
        }`}
      />
      <AddToFav title={title} />

      <Link
        href={`/sections/offers/${url}`}
        className={`rounded-t-lg flex-col flex items-center justify-center`}
      >
        <Image
          src={image}
          alt={alt}
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
            {title}
          </h3>
          <div>
            <span
              className={`inline-block sm:text-[.75rem] sm:mr-1 font-normal text-sm text-red-500 line-through mr-2`}
            >
              {old_price.toFixed(2)}
            </span>
            <span
              className={`inline-block sm:text-base  text-green-4 font-extrabold text-2xl`}
            >
              $&nbsp;{price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <AddToCart
        name={title}
        image={image}
        price={price}
        text={"ADD TO CART"}
				section="offers"
        className={`w-full xs:p-2 xxs:gap-0.5
					rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] px-2.5 py-1`}
      />
    </li>
  );
};
