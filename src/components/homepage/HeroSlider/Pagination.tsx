import React from 'react'
import { motion } from "framer-motion";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";

type Props = {
	currentPage: number,
	setPage: (a: number, b?: number) => void,
	pages: Array<number>,
	autoSlide: boolean,
	setAutoSlide: (value: boolean) => void,
}

function Pagination({ currentPage, setPage, pages, autoSlide, setAutoSlide }: Props) {
  // Wrap all the pagination dots with 'layout' so we can detect
  // when dots with a layoutId are removed/added

	function PlayStop() {
		setAutoSlide(!autoSlide);
	}

  return (
    <motion.div
      className="lg:hidden flex justify-center absolute bottom-4 xl:bottom-10 bg-black/20 backdrop-blur-md p-0.5 px-1 shadow-[inset_0_0px_12px_rgba(0,0,0,0.1)] rounded-full border border-neutral-300/40 antialiased"
      layout
    >
      <button role="navigation" aria-label={`play/pause autoslide functionality, Status true means on. Status: ${autoSlide}`} onClick={() => PlayStop()} className='border-r mr-0.5 pr-0.5 border-neutral-300/40'>
        {autoSlide ? (
          <BsFillPauseFill className="text-neutral-400" />
        ) : (
          <BsPlayFill className="text-neutral-400" />
        )}
      </button>
      {pages.map((page) => (
        <Dot
          key={page}
          onClick={() => {
            setPage(page);
          }}
          isSelected={page === currentPage}
        />
      ))}
    </motion.div>
  );
}

type DotProps = {
  isSelected: boolean;
  onClick: () => void;
};

function Dot({ isSelected, onClick }: DotProps) {
  return (
    <div className="p-1 cursor-pointer" onClick={onClick}>
      <div
        className={`bg-neutral-400 shadow-[inset_0_0px_3px_rgba(0,0,0,0.2)] rounded-full relative w-2 h-2`}
      >
        {isSelected && (
          // By setting layoutId, when this component is removed and a new one
          // is added elsewhere, the new component will animate out from the old one.
          <motion.div
            className="bg-gradient-to-b from-green-2 to-green-4 rounded-full w-2 h-2 absolute"
            layoutId="highlight"
          />
        )}
      </div>
    </div>
  );
}

export default Pagination