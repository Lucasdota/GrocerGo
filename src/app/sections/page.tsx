"use client"
import Image from 'next/image';
import BG from '../../../public/images/sections/sections.webp'
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const page = () => {
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
    <main
      className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		mx-auto"
    >
      <div className="pb-40 md:pb-48 min-h-screen p-24 pt-0 md:pt-0 md:px-8 text-center h-full rounded-b-xl md:rounded-b-none lg:space-y-6 space-y-12 relative flex flex-col w-full">
        <Image
          src={BG}
          alt="background aisles"
          priority
          width={2400}
          height={1600}
          className="w-full h-full opacity-60 object-cover absolute top-0 left-0 -z-10"
        />
        <motion.header
          className="bg-neutral-100 w-fit mx-auto rounded-lg shadow flex items-center justify-center h-24 lg:h-12 lg:px-5 px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="z-10 text-6xl font-semibold font-sansita text-green-4 lg:text-3xl">
            Sections
          </h2>
        </motion.header>
        <motion.div
          className="bg-neutral-100 rounded-lg p-12 lg:p-8 md:p-4 shadow md:h-fit flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.section
            className="w-full flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* CARDS */}
            <ul className="text-lg font-bold sm:text-4xl w-full grid grid-cols-9 md:grid-cols-6 xs:grid-cols-3 gap-y-4 md:gap-y-2 xs:gap-y-1">
              {cardsData.map((card) => (
                <GenerateCards
                  key={card.id}
                  image={card.image}
                  title={card.title}
                />
              ))}
            </ul>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}

export default page

type CardsProps = {
  image: string;
  title: string;
};

function GenerateCards({ image, title }: CardsProps) {
  const url = title.replace(/ +/g, "-").replace("&", "and");
  return (
    <li className="w-full h-full flex flex-col items-center justify-center group">
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
          className="group-active:scale-90 transition ease-in-out duration-100 group-hover:scale-105 drop-shadow-sm w-20 h-20 xl:w-12 xl:h-12"
        />
      </Link>
      <span className="gg:text-sm lg:text-[0.7rem] xl:text-sm xxl:text-[0.75rem] text-gray-600 text-center">
        {title}
      </span>
    </li>
  );
}