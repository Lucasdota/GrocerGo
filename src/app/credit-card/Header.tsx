"use client"
import { BsCardChecklist } from "@react-icons/all-files/bs/BsCardChecklist";
import Image from "next/image";
import CreditCard from "../../../public/images/mini-pages/cards-header.webp";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

type Props = {};

const Header = (props: Props) => {	

	function handleClick() {
		const selectCard = document.getElementById("select-cards");
		const rect = selectCard?.getBoundingClientRect();
		console.log(selectCard);
		console.log(rect);
		window.scrollTo({top: rect!.top - 132})
	}	
	
  return (
    <header className="bg-neutral-200 p-8 w-full">
      <div className="relative flex justify-around max-w-[2560px] mx-auto">
        <div className="flex flex-col items-start gap-6 relative tracking-wide font-sansita">
          <div className="flex gap-2 items-center justify-center">
            <BsCardChecklist className="text-green-3 w-6 h-6" />
            <p className="tracking-wider">JPMorgan Credit Card</p>
          </div>
          <h2 className="text-5xl font-bold">
            Exclusive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-3 to-green-4">
              benefits
            </span>{" "}
            for you!
          </h2>
          <h3 className="text-3xl mb-10 tracking-wider">
            Specials discounts and more
          </h3>
          <div className="relative w-1/2">
            <button
              onClick={handleClick}
              className="tracking-wider px-4 py-2 w-full rounded-lg text-white animate-bounce z-10 mb-8 drop-shadow-xl bg-gradient-to-r from-green-3 to-green-4"
            >
              Ask now!
            </button>
            <div className="w-full h-44 shadow-btn absolute -bottom-16 right-0" />
          </div>
        </div>
        <div className="relative lg:absolute lg:-top-16 lg:opacity-20 lg:right-0 xs:hidden">
          <Image
            src={CreditCard}
            alt="credit cards"
            width={700}
            height={700}
            priority
						onLoad={HandleImageLoad}
            className="w-[30rem] aspect-square -mt-28 -mb-10 lg:-mt-10 transition-opacity opacity-0 duration-[.3s]"
          />
        </div>
        <p className="absolute bottom-4 right-4 text-[.65rem] font-mono font-thin text-neutral-500">
          Subject to approval
        </p>
      </div>
    </header>
  );
};

export default Header;
