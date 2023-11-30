import { TiChevronRightOutline } from "@react-icons/all-files/ti/TiChevronRightOutline";
import { TiChevronLeftOutline } from "@react-icons/all-files/ti/TiChevronLeftOutline";
import GenerateLinks from "./GenerateLinks";
import { catalog } from "@/components/shared/Catalog";
import CapitalizeWords from "@/components/shared/CapitalizeWords";
import { useMemo } from "react";

type Props = {
  setIsOpen: (value: boolean) => void;
};

const Categories = ({ setIsOpen }: Props) => {
  const sortedCatalog = useMemo(
    () => catalog.sort((a, b) => a.section.localeCompare(b.section)),
    []
  );
  return (
    <>
      {sortedCatalog.map((item, index) => {
        const capitalizedSection = CapitalizeWords(item.section);
        return (
          <li key={index} className="mobile-haschild">
            <button aria-label={`${capitalizedSection}`} className="w-full">
              <span className="hover:bg-neutral-300 px-6 py-2 flex items-center justify-between group">
                {capitalizedSection}
                <TiChevronRightOutline className="text-green-5 group-hover:-translate-x-1 transition duration-100 " />
              </span>
            </button>
            <ul>
              <li className="back">
                <button
                  aria-label="back"
                  className="mb-6 w-full flex items-center group px-6 py-4 gap-4 hover:bg-neutral-300"
                >
                  <TiChevronLeftOutline className="group-hover:translate-x-1 transition duration-100 w-5 h-5 min-w-[1.25rem]" />
                  <h2 className="text-xl font-semibold text-left">
                    {capitalizedSection}
                  </h2>
                </button>
              </li>
              <GenerateLinks section={item.section} setIsOpen={setIsOpen} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Categories;
