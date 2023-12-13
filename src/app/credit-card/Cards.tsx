'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import InternationalCard from '../../../public/images/mini-pages/internacional-card.webp'
import PlatinumCard from "../../../public/images/mini-pages/platinum-card.webp";
import BlackCard from "../../../public/images/mini-pages/black-card.webp";
import { AiOutlinePercentage } from "@react-icons/all-files/ai/AiOutlinePercentage";
import { FaCcMastercard } from "@react-icons/all-files/fa/FaCcMastercard";
import { RiBillLine } from "@react-icons/all-files/ri/RiBillLine";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { AiOutlineCrown } from "@react-icons/all-files/ai/AiOutlineCrown";
import { GiWineGlass } from "@react-icons/all-files/gi/GiWineGlass";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

const Cards = () => {
	const [card, setCard] = useState<string>('international');

	return (
    <div
      id="select-cards"
      className="flex flex-col items-center justify-center gap-8"
    >
      <h3 className="font-bold font-sansita tracking-wide text-3xl md:text-center">
        Select the card that best suits you!
      </h3>
      {/* BUTTONS */}
      <div className="flex gap-4 xxs:flex-wrap justify-center">
        <button
          onClick={() => setCard("international")}
          className={`px-4 py-2 min-w-[5rem] brightness-110 transition-transform duration-700 hover:duration-300 border rounded-lg text-sm ${
            card === "international"
              ? "bg-gradient-to-r from-green-4 to-green-5 text-white border-transparent"
              : "bg-transparent text-green-4 border-green-4 hover:translate-y-1"
          }`}
        >
          International
        </button>
        <button
          onClick={() => setCard("platinum")}
          className={`px-4 py-2 min-w-[5rem] ease-out brightness-110 transition-transform duration-700 hover:duration-300 border rounded-lg text-sm ${
            card === "platinum"
              ? "bg-gradient-to-r from-[#505278] to-[#27293d] text-white border-transparent"
              : "bg-transparent text-green-4 border-green-4 hover:translate-y-1"
          }`}
        >
          Platinum
        </button>
        <button
          onClick={() => setCard("black")}
          className={`px-4 py-2 min-w-[5rem] ease-out brightness-110 transition-transform duration-700 hover:duration-300 border rounded-lg text-sm ${
            card === "black"
              ? "bg-gradient-to-r from-[#333333] to-black text-white border-transparent"
              : "bg-transparent text-green-4 border-green-4 hover:translate-y-1"
          }`}
        >
          Black
        </button>
      </div>
      {/* DETAILS */}
      <div
        className={`rounded-xl shadow-xl w-full px-16 py-8 lg:px-10 ${
          card === "black"
            ? "bg-neutral-800 text-white"
            : "bg-white text-neutral-700"
        } `}
      >
        {card === "international" ? (
          <div className="flex w-full gap-8 lg:flex-col lg:items-center international-card-details">
            {/* CARD */}
            <div className="flex flex-col w-fit h-full items-center justify-around">
              <Image
                src={InternationalCard}
                alt="internacional card"
								onLoad={HandleImageLoad}
                className="-rotate-90 max-w-[18rem] lg:max-w-[15rem] md:rotate-0 md:max-w-[17rem] xxs:max-w-[12rem] transition-opacity opacity-0 duration-[.3s]"
              />
              <button className=" px-4 py-2 w-full rounded-lg text-white z-10 bg-gradient-to-r from-green-4 to-green-5 mt-8 md:mt-0 active:translate-y-1 transition duration-100 ease-out">
                Ask now!
              </button>
            </div>
            {/* TEXTS */}
            <div className="space-y-6 md:text-center">
              <h4 className="font-bold ">
                GrocerGo JPMorgan Credit Card International
              </h4>
              <div className="flex gap-2 md:flex-col md:text-center">
                <div className="space-y-4 md:flex md:flex-col md:items-center">
                  <div>
                    <h5 className="flex items-center gap-2 text-green-4 font-bold text-left md:justify-center">
                      <AiOutlinePercentage className="w-7 h-7" />
                      +20% discount
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Activate through &quot;My Discount&quot; and pay with the
                      GrocerGo Card for cheeses, wines, specialty beers, and
                      exclusive brands (MiBaloon, Conquer, and NinjaIn).
                    </p>
                  </div>
                  <h5 className="flex items-center gap-2 text-left text-green-4 font-bold">
                    <FaCcMastercard className="w-7 h-7" />
                    Credit Card benefits¹
                  </h5>
                  <div>
                    <h5 className="flex items-center gap-2 text-left text-green-4 font-bold md:justify-center">
                      <RiBillLine className="w-7 h-7" />
                      100% digital billing
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Simpler and safer. You don&apos;t have to wait for the
                      paper statement to arrive at your home.
                    </p>
                  </div>
                </div>
                <div className="space-y-8 md:my-4 border-l border-neutral-500 p-4 ml-4 md:border-transparent md:p-0 md:ml-0">
                  <div>
                    <h5 className="leading-5 text-sm font-sansitalight">
                      Minimun income:
                    </h5>
                    <p className="font-bold">U$1.000,00</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-sansitalight">Annuity:</h5>
                    <p className="text-green-3 font-bold brightness-110">
                      Free
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-normal">
                <h5 className="font-bold">Card subject to credit approval.</h5>
                <p className="font-[350]">
                  https://www.grocergo.com/credit-card
                </p>
                <p className="font-[350]">
                  Refer to rules and benefits&apos; validity on the Credit Card
                  page.
                </p>
              </div>
            </div>
          </div>
        ) : card === "platinum" ? (
          <div className="flex w-full gap-8 lg:flex-col lg:items-center platinum-card-details">
            {/* CARD */}
            <div className="flex flex-col w-fit h-full items-center justify-around">
              <Image
                src={PlatinumCard}
                alt="internacional card"
                className="-rotate-90 max-w-[18rem] lg:max-w-[15rem] md:rotate-0 md:max-w-[17rem] xxs:max-w-[12rem]"
              />
              <button className=" px-4 py-2 w-full rounded-lg text-white z-10 bg-gradient-to-r from-[#505278] to-[#27293d] mt-8 md:mt-0 active:translate-y-1 transition duration-100 ease-out">
                Ask now!
              </button>
            </div>
            {/* TEXTS */}
            <div className="space-y-6 md:text-center">
              <h4 className="font-bold ">
                GrocerGo JPMorgan Credit Card Platinum
              </h4>
              <div className="flex gap-2 md:flex-col md:text-center">
                <div className="space-y-4 md:flex md:flex-col md:items-center">
                  <div>
                    <h5 className="flex items-center gap-2 text-green-4 font-bold text-left md:justify-center">
                      <AiOutlinePercentage className="w-7 h-7" />
                      +20% discount
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Activate through &quot;My Discount&quot; and pay with the
                      GrocerGo Card for cheeses, wines, specialty beers, and
                      exclusive brands (MiBaloon, Conquer, and NinjaIn).
                    </p>
                  </div>
                  <div>
                    <h5 className="flex items-center gap-2 text-green-4 font-bold text-left md:justify-center">
                      <AiOutlineStar className="w-7 h-7" />
                      Loyalty program
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Use your points for cashback and for airline miles.
                    </p>
                  </div>
                  <h5 className="flex items-center gap-2 text-left text-green-4 font-bold">
                    <FaCcMastercard className="w-7 h-7" />
                    Credit Card benefits²
                  </h5>
                  <div>
                    <h5 className="flex items-center gap-2 text-left text-green-4 font-bold md:justify-center">
                      <RiBillLine className="w-7 h-7" />
                      100% digital billing
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Simpler and safer. You don&apos;t have to wait for the
                      paper statement to arrive at your home.
                    </p>
                  </div>
                </div>
                <div className="space-y-8 md:my-4 border-l border-neutral-500 p-4 ml-4 md:border-transparent md:p-0 md:ml-0">
                  <div>
                    <h5 className="leading-5 text-sm font-sansitalight">
                      Minimun income:
                    </h5>
                    <p className="font-bold">U$2.500,00</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-sansitalight">Annuity:</h5>
                    <p className="font-bold brightness-110">U$405.00</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-sansitalight">Pontuation:</h5>
                    <p className="font-bold brightness-110">U$1 = 3 points</p>
                  </div>
                  <div>
                    <h5 className="text-sm mb-4">Exchange your points for:</h5>
                    <p className="font-bold brightness-110">
                      Cashback:&nbsp;
                      <span className="font-normal">
                        1.000 points = U$25 cashback
                      </span>
                    </p>
                    <p className="font-bold brightness-110">
                      Airline miles:&nbsp;
                      <span className="font-normal">1.000 points = 1 mile</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-normal">
                <h5 className="font-bold">Card subject to credit approval.</h5>
                <p className="font-[350]">
                  https://www.grocergo.com/credit-card
                </p>
                <p className="font-[350]">
                  Refer to rules and benefits&apos; validity on the Credit Card
                  page.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-full gap-8 lg:flex-col lg:items-center black-card-details">
            {/* CARD */}
            <div className="flex flex-col w-fit h-full items-center justify-around">
              <Image
                src={BlackCard}
                alt="internacional card"
                className="-rotate-90 max-w-[18rem] lg:max-w-[15rem] md:rotate-0 md:max-w-[17rem] xxs:max-w-[12rem]"
              />
              <button className=" px-4 py-2 w-full rounded-lg text-white z-10 bg-gradient-to-r from-[#333333] to-black mt-8 md:mt-0 active:translate-y-1 transition duration-100 ease-out">
                Ask now!
              </button>
            </div>
            {/* TEXTS */}
            <div className="space-y-6 md:text-center">
              <h4 className="font-bold ">
                GrocerGo JPMorgan Credit Card Black
              </h4>
              <div className="flex gap-2 md:flex-col md:text-center">
                <div className="space-y-4 md:flex md:flex-col md:items-center">
                  <div>
                    <h5 className="black-card-h5 flex items-center gap-2 text-green-3 font-bold text-left md:justify-center">
                      <AiOutlinePercentage className="w-7 h-7" />
                      +20% discount
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Activate through &quot;My Discount&quot; and pay with the
                      GrocerGo Card for cheeses, wines, specialty beers, and
                      exclusive brands (MiBaloon, Conquer, and NinjaIn).
                    </p>
                  </div>
                  <div>
                    <h5 className="black-card-h5 flex items-center gap-2 text-green-3 font-bold text-left md:justify-center">
                      <AiOutlineStar className="w-7 h-7" />
                      Loyalty program
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Use your points for cashback and for airline miles.
                    </p>
                  </div>
                  <h5 className="black-card-h5 flex items-center gap-2 text-left text-green-3 font-bold">
                    <FaCcMastercard className="w-7 h-7" />
                    Credit Card benefits³
                  </h5>
                  <div>
                    <h5 className="black-card-h5 flex items-center gap-2 text-left text-green-3 font-bold md:justify-center">
                      <RiBillLine className="w-7 h-7" />
                      100% digital billing
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Simpler and safer. You don&apos;t have to wait for the
                      paper statement to arrive at your home.
                    </p>
                  </div>
                  <div>
                    <h5 className="black-card-h5 flex items-center gap-2 text-left text-green-3 font-bold md:justify-center">
                      <AiOutlineCrown className="w-7 h-7" />
                      VIP lounges across major cities
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Exclusive spaces with unlimited access available in major
                      cities across the country.
                    </p>
                  </div>
                  <div>
                    <h5 className="black-card-h5 flex items-center gap-2 text-left text-green-3 font-bold md:justify-center">
                      <GiWineGlass className="w-7 h-7" />
                      Priceless - Corkage Fee Waiver
                    </h5>
                    <p className="leading-5 text-sm font-sansitalight">
                      Ensures the waiver of corkage fee on the first bottle at
                      over 200 partner restaurants.
                    </p>
                  </div>
                </div>
                <div className="space-y-8 border-l md:my-4 border-neutral-500 p-4 ml-4 md:border-transparent md:p-0 md:ml-0">
                  <div>
                    <h5 className="leading-5 text-sm font-sansitalight">
                      Minimun income:
                    </h5>
                    <p className="font-bold">U$5.000,00</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-sansitalight">Annuity:</h5>
                    <p className=" font-bold brightness-110">U$650.00</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-sansitalight">Pontuation:</h5>
                    <p className=" font-bold brightness-110">U$1 = 5 points</p>
                  </div>
                  <div>
                    <h5 className="text-sm mb-4">Exchange your points for:</h5>
                    <p className="font-bold brightness-110">
                      Cashback:&nbsp;
                      <span className="font-normal">
                        1.000 points = U$30 cashback
                      </span>
                    </p>
                    <p className="font-bold brightness-110">
                      Airline miles:&nbsp;
                      <span className="font-normal">1.000 points = 1 mile</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-normal">
                <h5 className="font-bold">Card subject to credit approval.</h5>
                <p className="font-[350]">
                  https://www.grocergo.com/credit-card
                </p>
                <p className="font-[350]">
                  Refer to rules and benefits&apos; validity on the Credit Card
                  page.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards