import React from 'react'
import { CgMenuCheese } from "react-icons/cg"
import { GiWineGlass, GiSwordBrandish } from "react-icons/gi";
import { BiBeer, BiAtom, BiBulb, BiCreditCardAlt } from "react-icons/bi";

const Discounts = () => {
	return (
    <div className="flex flex-col sm:px-4">
      <h3 className="font-bold text-3xl mb-16 tracking-wide xl:self-center font-sansita md:whitespace-normal">
        Reasons to ask your <span className="text-green-3">card</span> today
      </h3>
      <div className="flex mx-auto w-full justify-between xl:grid grid-cols-2 grid-rows-2 xl:gap-12 xl:w-[33rem] sm:w-full sm:flex sm:flex-col sm:items-center">
        {/* FIRST */}
        <div className="w-60 h-fit bg-white rounded-t-lg drop-shadow-xl flex flex-col items-center">
          <div className="h-12 w-full bg-green-4 font-bold text-white rounded-t-lg flex items-center justify-center tracking-widest">
            +20% OFF
          </div>
          <div className="px-10 py-8  flex flex-col items-center gap-6 w-full">
            <h3 className="whitespace-normal text-center font-semibold h-14">
              Cheeses, Wines and Sparklings
            </h3>
            <div className="flex border w-24 h-24 rounded-lg items-center justify-center p-2">
              <CgMenuCheese className="w-full h-full text-green-4" />
              <GiWineGlass className="w-full h-full text-green-4" />
            </div>
						<button className='hover-border-effect w-full px-4 py-1 before:border-neutral-200 before:rounded-full hover:text-green-3 before:border after:border-green-3 after:rounded-full after:border'>
							How it works
						</button>
          </div>
        </div>
        {/* SECOND */}
        <div className="w-60 h-fit bg-white rounded-t-lg drop-shadow-xl flex flex-col items-center">
          <div className="h-12 w-full bg-green-4 font-bold text-white rounded-t-lg flex items-center justify-center tracking-widest">
            +20% OFF
          </div>
          <div className="px-10 py-8  flex flex-col items-center gap-6 w-full">
            <h3 className="whitespace-normal text-center font-semibold h-14">
              Special Beers
            </h3>
            <div className="flex border w-24 h-24 rounded-lg items-center justify-center p-2">
              <BiBeer className="w-3/5 h-3/5 text-green-4" />
            </div>
            <button className='hover-border-effect w-full px-4 py-1 before:border-neutral-200 before:rounded-full hover:text-green-3 before:border after:border-green-3 after:rounded-full after:border'>
							How it works
						</button>
          </div>
        </div>
        {/* THIRD */}
        <div className="w-60 h-fit bg-white rounded-t-lg drop-shadow-xl flex flex-col items-center">
          <div className="h-12 w-full bg-green-4 font-bold text-white rounded-t-lg flex items-center justify-center tracking-widest">
            +20% OFF
          </div>
          <div className="px-10 py-8  flex flex-col items-center gap-6 w-full">
            <h3 className="whitespace-normal text-center font-semibold h-14">
              Exclusive Brands
            </h3>
            <div className="flex border w-24 h-24 rounded-lg items-center justify-center p-2">
              <GiSwordBrandish className="w-full h-full text-green-4" />
              <BiAtom className="w-full h-full text-green-4" />
              <BiBulb className="w-full h-full text-green-4" />
            </div>
            <button className='hover-border-effect w-full px-4 py-1 before:border-neutral-200 before:rounded-full hover:text-green-3 before:border after:border-green-3 after:rounded-full after:border'>
							How it works
						</button>
          </div>
        </div>
        {/* FOURTH */}
        <div className="w-60 h-fit bg-white rounded-t-lg drop-shadow-xl flex flex-col items-center">
          <div className="h-12 w-full bg-green-4 font-bold text-white rounded-t-lg flex items-center justify-center tracking-widest">
            +20% OFF
          </div>
          <div className="px-10 py-8  flex flex-col items-center gap-6 w-full">
            <h3 className="whitespace-normal text-center font-semibold h-14">
              Special Conditions
            </h3>
            <div className="flex border w-24 h-24 rounded-lg items-center justify-center p-2">
              <BiCreditCardAlt className="w-3/5 h-3/5 text-green-4" />
            </div>
            <button className='hover-border-effect w-full px-4 py-1 before:border-neutral-200 before:rounded-full hover:text-green-3 before:border after:border-green-3 after:rounded-full after:border'>
							How it works
						</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discounts