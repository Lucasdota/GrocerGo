import {BsArrowUpRightSquare} from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HandleImageLoad from '@/components/shared/HandleImageLoad';

const cardsData = [
  {
    id: 1,
    image: "/images/partners/oven.png",
    alt: "Electric Wall Oven",
    title: "30 Inch Double Combination Electric Wall Oven",
    price: "1.199",
    partner: "JQ",
  },
  {
    id: 2,
    image: "/images/partners/fridge.png",
    alt: "Side by Side Refrigerator",
    title:
      "36 Inch Side by Side Refrigerator with 22.3 Cu. Ft. Total Capacity",
    price: "1.677",
    partner: "Solidai",
  },
  {
    id: 3,
    image: "/images/partners/microwave.png",
    alt: "Microwave",
    title: "1.7 cu. ft. Over-the-Range Microwave Industrial Presets",
    price: "197.90",
    partner: "Solidai",
  },
  {
    id: 4,
    image: "/images/partners/blender.png",
    alt: "Blender",
    title: "Steel Blender with Tru-Commercial Design",
    price: "84.59",
    partner: "World El",
  },
  {
    id: 5,
    image: "/images/partners/smartphone.png",
    alt: "Smartphone",
    title: 'Smartphone JQ 12 MP Double Camera 6,1" Screen',
    price: "490.90",
    partner: "JQ",
  },
  {
    id: 6,
    image: "/images/partners/television.png",
    alt: "Smart TV",
    title: 'Smart TV 58" UHD 4k Crystal Processor Gaming Hub',
    price: "535.40",
    partner: "Xmi",
  },
];

export default function Slider() {
  return (
    <div
      className="w-full min-w-[17.5rem]"
    >
      <ul className="flex xl:grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-3 xs:grid-cols-1 xs:grid-rows-6">
        {cardsData.map((card) => (
          <GenerateCards
            key={card.id}
            image={card.image}
            alt={card.alt}
            title={card.title}
            price={card.price}
            partner={card.partner}
          />
        ))}
      </ul>
    </div>
  );
}

type CardsProps = {
	image: string;
	alt: string;
	title: string;
	price: string;
	partner: string
}

function GenerateCards({image, alt, title, price, partner}: CardsProps) {
	return (
    <li className="w-1/6 xl:w-full flex flex-col justify-between text-center border group">
      <Link
        href="https://www.linkedin.com/in/lucas-dota-trombini/"
        className="border-b bg-white flex flex-col items-center justify-center"
      >
        <h3 className="font-bold px-5 pt-8 h-32 line-clamp-4 md:text-sm md:h-20 sm:h-28 xs:h-fit text-gray-800">
          {title}
        </h3>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          loading="lazy"
          onLoad={HandleImageLoad}
          className="p-10 md:p-6 xl:w-52 md:w-36 sm:w-44 xs:w-36 drop-shadow transition-opacity opacity-0 duration-[.3s]"
        />
        <span className="p-3 border-t font-extrabold text-gray-700">
          ${price}
        </span>
        <div className="w-full flex items-center justify-center group bg-indigo-600 text-neutral-100 font-bold px-4 py-3">
          <span className="group-hover:-translate-x-[0.45rem] translate-x-[0.65rem] transition duration-200 group-active:scale-90">
            Visit
          </span>
          <BsArrowUpRightSquare className="group-hover:opacity-100 opacity-0 transition duration-200" />
        </div>
      </Link>
    </li>
  );
}
