import React from 'react'
import Image from "next/image";
import BG from "../../../public/images/others/recipe-bg.webp";
import Recipes from './Recipes';

export const metadata = {
  title: "GrocerGo | Recipes",
  description: "Thousands of recipes at your disposal.",
};

const Page = () => {
	return (
    <main className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 min-h-screen max-w-[2560px] mx-auto relative">
      <Image
        loading="eager"
        priority
        src={BG}
				width={1920}
				height={1280}
        alt="laptop white background"
        className="w-full h-full opacity-90 object-cover fixed top-0 left-0 -z-10"
      />
      <Recipes />
    </main>
  );
}

export default Page

