import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { PiArrowsDownUpBold } from 'react-icons/pi';

type Props = {
  handleOrder: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	orderedBy: string
};

const OrderBy = ({ handleOrder , orderedBy}: Props) => {
  return (
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
							tracking-wide text-[0.95rem] xxl:text-sm xxs:text-[0.7rem]"
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
  );
};

export default OrderBy