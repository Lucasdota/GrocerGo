"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HandleImageLoad from "../shared/HandleImageLoad";

const cardsData = [
  {
    id: 1,
    image: "/images/sections-btns/cooking3.webp",
    title: "Essentials",
  },
  {
    id: 2,
    image: "/images/sections-btns/sandwich2.webp",
    title: "Snacks",
  },
  {
    id: 3,
    image: "/images/sections-btns/meats2.webp",
    title: "Meats",
  },
  {
    id: 4,
    image: "/images/sections-btns/refrigerator.webp",
    title: "Frozen",
  },
  {
    id: 5,
    image: "/images/sections-btns/cake-slice.webp",
    title: "Sweets",
  },
  {
    id: 6,
    image: "/images/sections-btns/vitamin.webp",
    title: "Dietary",
  },
  {
    id: 7,
    image: "/images/sections-btns/tuna2.webp",
    title: "Canneds",
  },
  {
    id: 8,
    image: "/images/sections-btns/rotisserie.webp",
    title: "Rotisserie",
  },
  {
    id: 9,
    image: "/images/sections-btns/fruits.webp",
    title: "Fruits",
  },
  {
    id: 10,
    image: "/images/sections-btns/vegetable.webp",
    title: "Vegetables",
  },
  {
    id: 11,
    image: "/images/sections-btns/spice.webp",
    title: "Seasoning",
  },
  {
    id: 12,
    image: "/images/sections-btns/eggs.webp",
    title: "Eggs",
  },
  {
    id: 13,
    image: "/images/sections-btns/toast.webp",
    title: "Bakery",
  },
  {
    id: 14,
    image: "/images/sections-btns/fish.webp",
    title: "Fishery",
  },
  {
    id: 15,
    image: "/images/sections-btns/cheese.webp",
    title: "Cheeses & Dairy",
  },
  {
    id: 16,
    image: "/images/sections-btns/healthy-drink.webp",
    title: "Beverages",
  },
  {
    id: 17,
    image: "/images/sections-btns/cleaning.webp",
    title: "Cleaning",
  },
  {
    id: 18,
    image: "/images/sections-btns/pets.webp",
    title: "Petshop",
  },
];

export default function Sections() {
	cardsData.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // Convert to uppercase for case-insensitive sorting
    const titleB = b.title.toUpperCase();

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0; // Titles are equal
  });

  return (
    <section className="w-full flex items-center justify-center mt-10 md:mt-6 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20 fadeIn">
      {/* CARDS */}
      <ul className="text-lg font-bold sm:text-4xl w-full grid grid-cols-9 md:grid-cols-6 xs:grid-cols-3 gap-y-4 md:gap-y-2 xs:gap-y-1">
        {cardsData.map((card) => (
          <GenerateCards key={card.id} image={card.image} title={card.title} />
        ))}
      </ul>
    </section>
  );
}

type CardsProps = {
  image: string;
  title: string;
};

function GenerateCards({ image, title }: CardsProps) {
	const url = title.replace(/ +/g, "-").replace("&", "and");
  return (
    <li aria-label={`click to go to ${title}'s page section`} className="w-full h-full flex flex-col items-center justify-center group">
      <Link
        href={`/sections/${url.toLocaleLowerCase()}`}
        className="group flex items-center justify-center group"
      >
        <Image
          src={image}
          width={208}
          height={208}
          alt={title}
          loading="lazy"
					onLoad={HandleImageLoad}
          className="group-active:scale-90 transition-all ease-in-out duration-100 group-hover:scale-105 p-7 pb-4 gg:p-6 gg:pb-4 lg:p-4 xl:p-5 xl:pb-4 xxl:p-4 xxl:pb-4 xs:p-6 drop-shadow-sm opacity-0"
        />
      </Link>
      <span className="gg:text-sm lg:text-[0.7rem] xl:text-sm xxl:text-[0.75rem] text-gray-600 text-center">
        {title}
      </span>
    </li>
  );
}
