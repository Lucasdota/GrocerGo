import { AiOutlineControl } from "@react-icons/all-files/ai/AiOutlineControl";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import PriceSlider from "@/components/shared/SectionsPage/PriceSlider";
import { useMemo } from "react";
import { catalog } from "@/components/shared/Catalog";
import CapitalizeWords from "@/components/shared/CapitalizeWords";
import Link from "next/link";

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
    section?: string | undefined;
  }[];
  value: number[];
  MIN: number;
  MAX: number;
  categories: string[];
  checkboxValues: CheckboxValues;
  onCheckboxChange: (category: string, isChecked: boolean) => void;
  priceOpen: boolean;
  setPriceOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categoriesOpen: boolean;
  setCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: Event, newValue: number | number[]) => void;
};

const Filters = ({
	results,
  value,
  MIN,
  MAX,
  categories,
  checkboxValues,
  onCheckboxChange,
  priceOpen,
  setPriceOpen,
  categoriesOpen,
  setCategoriesOpen,
  handleChange,
}: Props) => {
  const relatedSections = useMemo(() => {
    const sections: string[] = [];
		results.forEach((product) => {	
			catalog.forEach((obj) => {
				obj.products.forEach((obj2) => {
					if (obj2.name === product.name && !sections.includes(obj.section)) {
						sections.push(obj.section);
					}
				});
			});
		})
    return sections;
  }, [results]);

  return (
    <aside className="mb-12 rounded-lg h-fit w-72 lg:hidden">
      <div className="mb-4">
        <h3 className="font-black text-gray-700 mb-4 text-lg">
					Related&nbsp;
          {/* handles the variable number of sections by setting singular or plural words  */}
          {relatedSections.length === 1 ? "section" : "sections"}
        </h3>
        <h4 className="font-black text-gray-600">Click, go.</h4>
        <div className="indent-3 text-gray-500 font-semibold">
          {/* handles the case where there are no related sections */}
          {relatedSections.length === 0 ? (
            <p>No related sections</p>
          ) : (
            relatedSections.map((str, index) => (
              <Link key={index} href={`/sections/${str}`}>
                <p className="hover:underline cursor-pointer decoration-gray-500">
                  {CapitalizeWords(str)}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="flex gap-1 items-center mb-2">
        <AiOutlineControl className="text-green-5 w-5 h-5" />
        <h4 className="font-black text-gray-700 text-lg">Filter by:</h4>
      </div>

      {/* filters */}
      <div className="bg-white p-4 rounded-lg text-[0.95rem] tracking-wide w-48">
        {/* price */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-gray-600 font-extrabold">Price</h5>
            <button onClick={() => setPriceOpen((prev) => !prev)}>
              {priceOpen ? (
                <FaChevronUp className="text-green-4 w-4 h-4" />
              ) : (
                <FaChevronDown className="text-green-4 w-4 h-4" />
              )}
            </button>
          </div>
          <div className={`${priceOpen ? "block" : "hidden"} px-[0.5rem]`}>
            <p className="text-gray-500">Price interval</p>
            <div className="flex flex-col justify-center items-center">
              <PriceSlider
                getAriaLabel={() => "Price range"}
                min={MIN}
                max={MAX}
                width={"90%"}
                railwidth={"110%"}
                value={value}
                onChange={handleChange}
              />
              <div className="flex w-full justify-between text-gray-500 text-[0.82rem] leading-3">
                <span>$&nbsp;{value[0]}</span>
                <span>$&nbsp;{value[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* categories */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-gray-600 font-extrabold">Category</h5>
            <button onClick={() => setCategoriesOpen((prev) => !prev)}>
              {categoriesOpen ? (
                <FaChevronUp className="text-green-4 w-4 h-4" />
              ) : (
                <FaChevronDown className="text-green-4 w-4 h-4" />
              )}
            </button>
          </div>
          <div className={`${categoriesOpen ? "block" : "hidden"} px-[0.5rem]`}>
            <ol>
              {categories.map((item, index) => {
                const lowercaseCategory = item.toLowerCase();
                return (
                  <li key={index} className="">
                    <label className="relative flex items-center text-gray-500 font-semibold tracking-normal leading-[26px]">
                      <input
                        type="checkbox"
                        checked={
                          checkboxValues[lowercaseCategory]
                            ? checkboxValues[lowercaseCategory]
                            : false
                        }
                        onChange={() =>
                          onCheckboxChange(
                            lowercaseCategory,
                            !checkboxValues[lowercaseCategory]
                          )
                        }
                        value={item}
                        className="mr-2 w-4 h-4 shrink-0 accent-green-3"
                      />
                      {item}
                    </label>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
