import { useEffect, useState, useMemo } from "react";
import { PiArrowsDownUpBold, PiSquaresFourLight } from "react-icons/pi";
import Pagination from "@mui/material/Pagination";
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
import { AiOutlineControl } from "@react-icons/all-files/ai/AiOutlineControl";
import { AiOutlineBars } from "@react-icons/all-files/ai/AiOutlineBars";
import PriceSlider from "@/components/shared/SectionsPage/PriceSlider";
import GenerateCards from "./GenerateCards";

interface CheckboxValues {
  [key: string]: boolean;
}

type Props = {
	section: string;
  sectionObj: {
    section: string;
    products: {
      id: number;
      category: string;
      image: string;
      name: string;
      old_price?: number;
      price: number;
      search_words: string[];
    }[];
  };
  value: number[];
  MIN: number;
  MAX: number;
  categories: string[];
  checkboxValues: CheckboxValues;
  onCheckboxChange: (category: string, isChecked: boolean) => void;
  handleChange: (event: Event, newValue: number | number[]) => void;
};

const Cards = ({
	section,
  sectionObj,
  value,
  MIN,
  MAX,
  categories,
  checkboxValues,
  onCheckboxChange,
  handleChange,
}: Props) => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);
  const numberOfProducts = sectionObj.products.length.toString();
  const [itensPerPage, setItensPerPage] = useState<string>(numberOfProducts);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [uiGrid, setUiGrid] = useState<boolean>(true);
  const [orderedBy, setOrderedBy] = useState<string>("alphabetical order");

  const checkedCategories = useMemo(() => {
    const categories: string[] = [];
    // Populate the array with checked values from the checkboxes
    Object.keys(checkboxValues).forEach((key) => {
      if (checkboxValues[key] === true) {
        categories.push(key);
      }
    });
    return categories;
  }, [checkboxValues]);

  // Sort items based on the selected order
  const sortedItems = useMemo(() => {
    switch (orderedBy) {
      case "alphabetical order":
        return [...sectionObj.products].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      case "ascending price":
        return [...sectionObj.products].sort((a, b) => a.price - b.price);
      case "descending price":
        return [...sectionObj.products].sort((a, b) => b.price - a.price);
      default:
        // Default to alphabetical order if orderedBy is not recognized
        return [...sectionObj.products].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
    }
  }, [sectionObj.products, orderedBy]);

  // Filter items based on selected filters (price, category)
  const filteredItems = useMemo(() => {
    return sortedItems.filter((item) => {
      // Apply price filter
      const priceInRange = item.price >= value[0] && item.price <= value[1];
      // Apply category filter
      const categoryMatch =
        checkedCategories.length === 0 ||
        checkedCategories.includes(item.category.toLowerCase());
      return priceInRange && categoryMatch;
    });
  }, [sortedItems, value, checkedCategories]);

  // Calculate the total number of filtered items
  const totalFilteredItems = filteredItems.length;

  // Calculate the correct range of items to display on the current page
  const startIndex = (currentPage - 1) * parseInt(itensPerPage);
  const endIndex = startIndex + parseInt(itensPerPage);

  // Paginate and display the items based on the calculated range
  const itemsToDisplay = filteredItems.slice(startIndex, endIndex);

  //calculate the number of pages based on the total number of filtered items
  useEffect(() => {
    setNumberOfPages(Math.ceil(totalFilteredItems / Number(itensPerPage)));
  }, [itensPerPage, totalFilteredItems]);

  //resets filtersOpen state when resizing window
  useEffect(() => {
    window.addEventListener("resize", handleResizing);

    return () => {
      window.removeEventListener("resize", handleResizing);
    };
  }, []);

  function handleOrder(e: React.ChangeEvent<HTMLSelectElement>) {
    setOrderedBy(e.target.value);
  }

  function handlePerPage(e: React.ChangeEvent<HTMLSelectElement>) {
    setItensPerPage(e.target.value);
    setCurrentPage(1);
  }

  function handlePagination(e: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  function handleResizing() {
    setFiltersOpen(false);
  }

  return (
    <div className="w-full mb-8 flex flex-col items-center gap-4">
      <div className="flex justify-between pl-4 xl:pl-0 xl:gap-4 w-full select-none xl:flex-col">
        <div
          className={`flex xl:w-full xl:justify-between md:justify-normal md:gap-4 md:flex-col`}
        >
          {/* order by */}
          <form className="relative w-80 xxl:w-72 md:w-full flex items-center justify-center gap-3">
            <label
              id="orderedby-label"
              className="font-black text-gray-700 whitespace-nowrap flex items-center gap-2 flex-nowrap text-[0.95rem]"
            >
              <PiArrowsDownUpBold className="text-green-4" />
              Order by:
            </label>
            <select
              aria-labelledby="orderedby-label"
              id="orderedby-select"   
              onChange={handleOrder}
              aria-label="orderedby-select"
              className="text-gray-600 w-full py-2.5 px-4 rounded-md bg-white border-transparent focus:outline-neutral-700 appearance-none
							tracking-wide text-[0.95rem] xxl:text-sm"
							value={orderedBy}
            >
              <option value="alphabetical order" className="text-base">
                Alphabetical order
              </option>
              <option value="ascending price" className="text-base">
                Ascending price
              </option>
              <option value="descending price" className="text-base">
                Descending price
              </option>
            </select>
            <FaChevronDown className="absolute text-neutral-600 right-3 pointer-events-none" />
          </form>

          {/* display per page */}
          <form className="relative w-80 xxl:w-72 md:w-full flex items-center justify-center gap-3 ml-4 md:ml-0">
            <label
              id="display-label"
              className="font-black md:indent-8 text-gray-700 whitespace-nowrap text-[0.95rem]"
            >
              Display:
            </label>
            <select
              aria-labelledby="display-label"
              id="display-select"            
              onChange={handlePerPage}
              aria-label="display-select"
              className="text-gray-600 w-full py-2.5 px-4 rounded-md focus:border-green-3 bg-white border-transparent focus:outline-neutral-700 appearance-none
							tracking-wide text-[0.95rem] xxl:text-sm"
							value={itensPerPage}
            >
              <option value={"2"} className="text-base">
                2 per page
              </option>
              <option value={"4"} className="text-base">
                4 per page
              </option>
              {sectionObj.products.length > 4 && (
                <option
                  value={sectionObj.products.length}
                  className="text-base"                  
                >
                  {sectionObj.products.length}
                  &nbsp;per page
                </option>
              )}
            </select>
            <FaChevronDown className="absolute text-neutral-600 right-3 pointer-events-none" />
          </form>

          {/* mobile products in total */}
          <div className="h-full items-center justify-center text-gray-500 hidden lg:flex self-center">
            <p className="font-bold text-gray-600">{totalFilteredItems}</p>
            <span className="tracking-wide">&nbsp;products</span>
          </div>
        </div>

        <div
          className={`flex w-full justify-end xl:justify-between gap-4 items-center lg:justify-normal xs:flex-col`}
        >
          {/* mobile filters appears at < 1023px */}
          {/* mobile open filter button */}
          <button
            onClick={() => setFiltersOpen((prev) => !prev)}
            className="hidden lg:flex gap-2 items-center justify-center w-fit bg-white rounded-lg py-2.5 px-4 tracking-wide text-[0.95rem] text-gray-700 font-black active:scale-90 transition duration-100"
          >
            <AiOutlineControl className="text-green-5 w-5 h-5" />
            Filters
          </button>

          {/* mobile price */}
          <div
            className={`${
              filtersOpen ? "scale-100 xs:inline-block" : "scale-0 xs:hidden"
            } w-full text-center transition-transform duration-100 ease-in-out hidden lg:inline-block`}
          >
            <div className={`px-[0.5rem]`}>
              <p className="text-gray-500 text-sm leading-[.40rem]">
                Price interval
              </p>
              <div className="flex flex-col justify-center items-center">
                <PriceSlider
                  getAriaLabel={() => "Price range"}
                  min={MIN}
                  max={MAX}
                  value={value}
                  width={"100%"}
                  railwidth={"100%"}
                  onChange={handleChange}
                />
                <div className="flex w-full justify-between text-gray-500 text-[0.77rem] leading-[.40rem]">
                  <span>$&nbsp;{value[0]}</span>
                  <span>$&nbsp;{value[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* products in total */}
          <div className="flex h-full items-center w-full justify-center xl:w-fit text-gray-500 xl:h-fit lg:hidden">
            <p className="font-bold text-gray-600">{totalFilteredItems}</p>
            <span className="tracking-wide">&nbsp;products</span>
          </div>

          {/* ui buttons */}
          <div className="flex gap-6 items-center xxl:gap-2">
            <button onClick={() => setUiGrid(false)}>
              <AiOutlineBars
                className={`${
                  !uiGrid ? "text-green-3" : "text-gray-600"
                } w-7 h-7`}
              />
            </button>
            <button onClick={() => setUiGrid(true)}>
              <PiSquaresFourLight
                className={`${
                  uiGrid ? "text-green-3" : "text-gray-600"
                } w-7 h-7`}
              />
            </button>
          </div>
        </div>

        {/* mobile categories */}
        <div
          className={`${
            filtersOpen ? "block scale-100" : "hidden scale-0"
          } transition duration-500 px-[0.5rem] mx-auto`}
        >
          <ol className="flex gap-4 flex-wrap">
            {categories.map((item, index) => {
              const lowercaseCategory = item.toLowerCase();
              return (
                <li key={index}>
                  <label className="relative flex items-center text-gray-500 font-semibold tracking-normal leading-[.5rem]">
                    <input
                      type="checkbox"
                      checked={checkboxValues[lowercaseCategory] ? checkboxValues[lowercaseCategory] : false}
                      onChange={() =>
                        onCheckboxChange(
                          lowercaseCategory,
                          !checkboxValues[lowercaseCategory]
                        )
                      }                 
                      className="mr-2 w-4 h-4 shrink-0 accent-green-3"
											value={item}
                    />
                    {item}
                  </label>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* cards */}
			{itemsToDisplay.length === 0 ? (
				<h1 className="text-3xl text-gray-700 font-extrabold mt-10">
					No products match your filter criteria.
				</h1>
			) : (
				<ol
					className={`${
						uiGrid
							? "grid grid-cols-5 gap-4 xgg:grid-cols-4 xl:grid-cols-3 md:grid-cols-2"
							: "flex flex-col gap-4"
					} w-full border-t pt-4 border-neutral-400`}
				>
					{itemsToDisplay.map((item, index) => (
						<GenerateCards
							section={section}
							uiGrid={uiGrid}
							key={index}
							image={item.image}
							alt={item.name}
							title={item.name}
							old_price={item.old_price}
							price={item.price}
						/>))
					}
				</ol>
			)}
      {/* pagination */}
      <div className={`${numberOfPages === 1 ? "hidden" : "block"} mt-3`}>
        <Pagination
          count={Math.round(numberOfPages)}
          page={currentPage}
          onChange={handlePagination}
          sx={{
            ".MuiPaginationItem-root": {
              color: "rgb(180,180,180)",
              fontWeight: "800",
            },
            ".Mui-selected": {
              color: "#409A3C",
              backgroundColor: "rgba(0, 0, 0, 0.00)",
            },
            ".css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": {
              margin: "0px",
            },
            ".MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.00)",
            },
            ".Mui-selected:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.00)",
            },
          }}
        />
      </div>
    </div>
  );
};
export default Cards;