"use client";
import Image, { StaticImageData } from "next/image";
import BG from "../../../public/images/specials/special-bg.webp";
import ChefIcon from "../../../public/images/specials/cooking.webp";
import BlogIcon from "../../../public/images/specials/blog.webp";
import RotisserieIcon from "../../../public/images/specials/rotisserie.webp";
import SpaceYouIcon from "../../../public/images/specials/spa.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import UrlizeWords from "@/components/shared/UrlizeWords";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

const specials = [
  {
    name: "Blog",
    image: BlogIcon,
    description:
      "Discover a world of delicious and nutritious creations on our blog filled with wholesome, mouthwatering recipes. From vibrant salads to hearty mains and guilt-free desserts, our collection offers a diverse range of culinary delights that cater to various dietary needs. Explore our kitchen-tested recipes and embark on a flavorful journey toward a healthier, more fulfilling lifestyle.",
  },
  {
    name: "Chefs",
    image: ChefIcon,
    description:
      "Elevate Your Culinary Experience: Enlist the Expertise of Our Renowned Chef. At GrocerGo, we are dedicated to crafting unforgettable dining experiences. Our highly skilled chef brings a wealth of expertise to your table, curating exquisite menus tailored to your preferences and event. We pride ourselves on delivering culinary excellence and exceptional service that leaves a lasting impression on your guests.",
  },
  {
    name: "Delivery Rotisserie",
    image: RotisserieIcon,
    description:
      "Convenient Rotisserie Delivered to Your Doorstep: Enjoy the irresistible flavors of our rotisserie dishes from the comfort of your home. Our delivery service ensures that you savor juicy, aromatic rotisserie meals without leaving your home. Choose from a delectable range of options, place your order, and let us bring the goodness to you. Taste the convenience today!",
  },
  {
    name: "Space You",
    image: SpaceYouIcon,
    description:
      "Indulge in the ultimate relaxation experience at our in-store spa. Immerse yourself in a tranquil oasis conveniently nestled within our retail space. Our skilled therapists provide a range of rejuvenating treatments, from massages to facials, ensuring a blissful escape from the daily hustle and bustle. Rejuvenate, unwind, and treat yourself to a little slice of serenity right in your favorite store.",
  },
];

const Interface = () => {
  return (
    <div className="pb-40 md:pb-48 min-h-screen p-24 pt-0 md:pt-0 md:px-8 text-center h-full rounded-b-xl md:rounded-b-none lg:space-y-6 space-y-12 relative flex flex-col w-full">
      <Image
        src={BG}
        alt="background carts"
        width={1920}
        height={2880}
				loading="lazy"
        className="w-full h-full opacity-60 object-cover absolute top-0 left-0 -z-10"
      />
      <motion.header
        className="bg-neutral-100 w-fit mx-auto px-8 py-6 md:px-6 md:py-4 rounded-lg shadow"
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
          Specials
        </h2>
      </motion.header>
      <motion.ul
        className="space-y-8 z-30 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {specials.map((item, index) => (
          <GenerateCards key={index} item={item} />
        ))}
      </motion.ul>
    </div>
  );
};

export default Interface;

type CardsProps = {
  item: {
    name: string;
    image: StaticImageData;
    description: string;
  };
};

function GenerateCards({ item }: CardsProps) {
  const url = UrlizeWords(item.name);
  return (
    <li className="shadow rounded-lg hover:scale-105 transition duration-200 bg-neutral-100">
      <Link
				aria-label={`go to ${item.name} page`}
        href={`/specials/${url}`}
        className="flex md:flex-col md:items-center gap-8 p-8"
      >
        <Image
          src={item.image}
          alt={item.name}
          height={256}
          width={256}
					onLoad={HandleImageLoad}
          className="w-40 h-40 transition-opacity opacity-0 duration-[.3s]"
        />
        <div className="space-y-8 flex flex-col items-start md:items-center">
          <h3 className="text-xl text-green-5 font-semibold">{item.name}</h3>
          <p className="text-green-5 text-left whitespace-normal">
            {item.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
