"use client";
import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Cards from "./Cards";
import { catalog } from "@/components/shared/Catalog";
import { usePathname } from "next/navigation";
import SnackbarComponent from "@/components/shared/SnackbarComponent";
import Image from "next/image";
import CapitalizeWords from "@/components/shared/CapitalizeWords";
import HandleImageLoad from "../HandleImageLoad";

interface CheckboxValues {
  [key: string]: boolean;
}

type Props = {
	section: string;
	subtitle: string;
	imgLink: string
}

const SectionPage = ({section, subtitle, imgLink} : Props) => {
  const pathname = usePathname().replace("/sections/", "").toString();
  const [priceOpen, setPriceOpen] = useState<boolean>(true);
  const [categoriesOpen, setCategoriesOpen] = useState<boolean>(true);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
	
  //finds the correct section array in the catalog array based on the url
  const sectionObj = catalog.find((arr) => arr.section === pathname);
  //retrieve all categories inside the sectionObj
  const categories = sectionObj?.products.map((arr) => arr.category);
  const allCategories: string[] = [];

  //removes duplicates and capitalizes categories
  categories?.map((item) => {
    const firstLetter = item.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = item.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    if (!allCategories.includes(capitalizedWord)) {
      allCategories.push(capitalizedWord);
    }
  });

  //sort in ascending alphabetical order
  allCategories?.sort();

  const lowestPriceObj = sectionObj?.products.reduce(function (prev, curr) {
    return prev.price < curr.price ? prev : curr;
  });

  const highestPriceObj = sectionObj?.products.reduce(function (prev, curr) {
    return prev.price > curr.price ? prev : curr;
  });

  const MIN = lowestPriceObj ? lowestPriceObj.price : lowestPriceObj!.price;
  const MAX = highestPriceObj ? highestPriceObj.price : highestPriceObj!.price;
  const [value, setValue] = useState<number[]>([MIN, MAX]);

  // Step 1: Initialize checkboxValues state
  const [checkboxValues, setCheckboxValues] = useState({});

  useEffect(() => {
    // Step 2: Collect unique categories from the catalog
    const uniqueCategories: string[] = [];
    sectionObj?.products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });

    // Step 3: Set initial state for checkboxValues
    const initialCheckboxValues: CheckboxValues = {};
    uniqueCategories.forEach((category) => {
      initialCheckboxValues[category] = false;
    });

    setCheckboxValues(initialCheckboxValues);
  }, [sectionObj]);

  //updates state based on checked checkboxes
  const handleCheckboxChange = (category: string, isChecked: boolean) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [category]: isChecked,
    }));
  };

	const capitalizedSection = CapitalizeWords(section);

  return (
    <main
      className="w-full px-64 gg:px-44 xxl:px-28 xl:px-20 lg:px-0 max-w-[2560px] 
		min-h-screen mx-auto flex flex-col items-center pb-[6.5rem]"
    >
      <header className="bg-green-5 select-none h-80 xl:h-64 md:h-48 xs:h-fit flex justify-between lg:rounded-bl-none xs:justify-center rounded-bl-[3rem] md:rounded-bl-none w-full">
        <div className="m-16 lg:m-8 md:m-8 space-y-1">
          <h2 className="brightness-125 text-5xl lg:text-3xl tracking-wider text-neutral-100 italic font-sansita">
            {capitalizedSection}
          </h2>
          <p className="text-lg md:whitespace-normal tracking-wide font-sansita lg:text-base text-neutral-50">
            {subtitle}
          </p>
        </div>
        <Image
          src={imgLink}
          alt="section image"
          width={1920}
          height={1080}
					loading="lazy"
					onLoad={HandleImageLoad}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] xs:hidden transition-opacity opacity-0 duration-[.3s]"
        />
      </header>
      <section className="w-full flex mt-8 lg:px-4">
        <Filters
          section={section}
          value={value}
          MIN={MIN}
          MAX={MAX}
          categories={allCategories}
          checkboxValues={checkboxValues}
          onCheckboxChange={handleCheckboxChange}
          priceOpen={priceOpen}
          setPriceOpen={setPriceOpen}
          handleChange={handleChange}
          categoriesOpen={categoriesOpen}
          setCategoriesOpen={setCategoriesOpen}
        />
        <Cards
          section={section}
          sectionObj={sectionObj!}
          value={value}
          MIN={MIN}
          MAX={MAX}
          categories={allCategories}
          checkboxValues={checkboxValues}
          onCheckboxChange={handleCheckboxChange}
          handleChange={handleChange}
        />
        <SnackbarComponent />
      </section>
    </main>
  );
};

export default SectionPage;
