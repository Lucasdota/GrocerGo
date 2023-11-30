import React, { useState, useEffect, useMemo } from "react";
import Filters from "./Filters";
import Cards from "./Cards";
import SnackbarComponent from "@/components/shared/SnackbarComponent";

interface CheckboxValues {
  [key: string]: boolean;
}

type Props = {
  results: {
    id: number;
    category: string;
    image: string;
    name: string;
    old_price: number;
    price: number;
    search_words: string[];
    section?: string;
  }[];
};

const Interface = ({ results }: Props) => {
  const [priceOpen, setPriceOpen] = useState<boolean>(true);
  const [categoriesOpen, setCategoriesOpen] = useState<boolean>(true);
	const numberOfProducts = results.length.toString();
  const [itensPerPage, setItensPerPage] = useState<string>(numberOfProducts);

  //retrieve all categories inside the results
  const categories = results.map((arr) => arr.category);
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

  const lowestPriceObj = useMemo(() => {
    return results.reduce(function (prev, curr) {
      return prev.price < curr.price ? prev : curr;
    });
  }, [results]);

  const highestPriceObj = useMemo(() => {
    return results.reduce(function (prev, curr) {
      return prev.price > curr.price ? prev : curr;
    });
  }, [results]);

  const [value, setValue] = useState<number[]>([
    lowestPriceObj.price,
    highestPriceObj.price,
  ]);

  // Step 1: Initialize checkboxValues state
  const [checkboxValues, setCheckboxValues] = useState({});

  useEffect(() => {
    // Step 2: Copy unique categories
    const uniqueCategories: string[] = results.map((arr) => arr.category);
    // Step 3: Set initial state for checkboxValues
    const initialCheckboxValues: CheckboxValues = {};
    uniqueCategories.forEach((category) => {
      initialCheckboxValues[category.toLowerCase()] = false;
    });
    setCheckboxValues(initialCheckboxValues);

    setValue([lowestPriceObj.price, highestPriceObj.price]);
    setItensPerPage(numberOfProducts);
  }, [results, lowestPriceObj, highestPriceObj, numberOfProducts]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  //updates state based on checked checkboxes
  const handleCheckboxChange = (category: string, isChecked: boolean) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [category]: isChecked,
    }));
  };

  return (
    <section className="w-full flex mt-8 lg:px-4">
      <Filters
        results={results}
        value={value}
        MIN={lowestPriceObj.price}
        MAX={highestPriceObj.price}
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
        results={results}
        value={value}
        itensPerPage={itensPerPage}
        setItensPerPage={setItensPerPage}
        MIN={lowestPriceObj.price}
        MAX={highestPriceObj.price}
        categories={allCategories}
        checkboxValues={checkboxValues}
        onCheckboxChange={handleCheckboxChange}
        handleChange={handleChange}
      />
      <SnackbarComponent />
    </section>
  );
};

export default Interface;
