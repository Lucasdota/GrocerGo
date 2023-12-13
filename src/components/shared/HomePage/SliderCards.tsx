import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCart from "../AddToCart";
import UrlizeWords from "../UrlizeWords";
import AddToFav from "../AddToFav";
import HandleImageLoad from "../HandleImageLoad";

type Props = {
  image: string;
  title: string;
  price: number;
  section: string;
};

const SliderCards = ({ image, title, price, section }: Props) => {
  //if the title has any space, replaces with dashes
  const url = UrlizeWords(title);

  return (
    <li className="flex-col border justify-between w-full flex bg-white text-center p-4 rounded-lg relative group card snap-start h-full">
      <AddToFav title={title} />
      <Link
        href={`/sections/${section}/${url}`}
        className={`rounded-t-lg flex-col flex items-center justify-center`}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          loading="lazy"
					onLoad={HandleImageLoad}
          className={`w-3/5 rounded-t-lg pt-3 xl:px-3
          drop-shadow transition-opacity opacity-0 duration-[.3s]`}
        />
        <div
          className={`mt-4 sm:mt-2 sm:py-2 text-gray-700 font-bold w-full py-4 leading-6 flex flex-col items-center justify-center`}
        >
          <h3
            className={`flex items-center justify-center h-14 sm:text-sm sm:h-12 whitespace-normal `}
          >
            {title}
          </h3>
          <span
            className={`inline-block sm:text-base text-green-4 font-extrabold text-2xl`}
          >
            $&nbsp;{price.toFixed(2)}
          </span>
        </div>
      </Link>
      <AddToCart
        name={title}
        image={image}
        price={price}
				section={section}
        text={"ADD TO CART"}
        className={`w-full xs:p-2 xxs:gap-0.5
					rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] px-2.5 py-1`}
      />
    </li>
  );
};

export default SliderCards;
