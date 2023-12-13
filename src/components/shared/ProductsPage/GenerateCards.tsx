import Image from "next/image";
import Link from "next/link";
import AddToCart from "../AddToCart";
import AddToFav from "../AddToFav";
import { BiSolidOffer } from "react-icons/bi";
import UrlizeWords from "@/components/shared/UrlizeWords";
import HandleImageLoad from "../HandleImageLoad";

type Props = {
	section: string;
  image: string;
  title: string;
  old_price: number | undefined;
  price: number;
};

const GenerateCards = ({
	section,
  image,
  title,
  old_price,
  price
}: Props) => {
  //if the title has any space, replaces with dashes
  const url = UrlizeWords(title);

  return (
    <li
      className={`h-full border w-full flex flex-col justify-between bg-white text-center p-4 rounded-lg transition duration-200 ease-in-out relative after:absolute after:w-full after:h-full after:shadow-[0_5px_20px_rgba(0,0,0,.15)] after:opacity-0 after:transition-[opacity] after:duration-200 after:ease-in-out after:hover:opacity-100 after:z-[0] after:pointer-events-none after:top-0 after:left-0 group`}
    >
      <AddToFav title={title} />
      <BiSolidOffer
        className={`absolute text-red-400 w-6 h-6 ${
          old_price === 0 ? "hidden" : null
        }`}
      />
      <Link
        href={`/sections/${section}/${url}`}
        className={`flex flex-col items-center`}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
					onLoad={HandleImageLoad}
          className={`drop-shadow w-32 gg:p-4 transition-opacity opacity-0 duration-[.3s]`}
        />
        <div
          className={`text-gray-700 font-bold w-full py-4 leading-6 flex flex-col`}
        >
          <h3 className={`whitespace-normal`}>{title}</h3>
          <div>
            <span
              className={`font-normal text-sm text-red-500 line-through mr-2 ${
                old_price === 0 ? "hidden" : null
              }`}
            >
              {old_price?.toFixed(2)}
            </span>
            <span className={`text-green-4 font-extrabold text-2xl`}>
              $&nbsp;{price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <AddToCart
        name={title}
        image={image}
        price={price}
				section={section}
        text={"ADD TO CART"}
        className={`w-full rounded-lg bg-green-4 shrink-0 text-neutral-50 gap-1 font-black text-[0.75rem] p-2.5 xs:w-fit xs:px-8 xs:mx-auto`}
      />
    </li>
  );
};

export default GenerateCards
