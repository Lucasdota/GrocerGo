import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  handlePerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  itensPerPage: string;
  results: {
    id: number;
    category: string;
    image: string;
    name: string;
    old_price?: number | undefined;
    price: number;
    search_words: string[];
    section?: string | undefined;
  }[];
};

const DisplayPerPage = ({ handlePerPage, itensPerPage, results }: Props) => {
  return (
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
							tracking-wide text-[0.95rem] xxl:text-sm xxs:text-[0.7rem]"
        value={itensPerPage}
      >
        <option value={"2"} className="text-base">
          2 per page
        </option>
        <option value={"4"} className="text-base">
          4 per page
        </option>
        {results.length > 4 && (
          <option value={results.length} className="text-base">
            {results.length}
            &nbsp;per page
          </option>
        )}
      </select>
      <FaChevronDown className="absolute text-neutral-600 right-3 pointer-events-none" />
    </form>
  );
};

export default DisplayPerPage