"use client";
import AddToCart from "@/components/shared/AddToCart";
import Image from "next/image";
import Link from "next/link";
import { catalog } from "@/components/shared/Catalog";
import UrlizeWords from "@/components/shared/UrlizeWords";
import RemoveItem from "./RemoveItem";
import { useAppContext } from "../api/AppContext";
import { useEffect, useState } from "react";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

const GenerateCards = () => {
	const [reRender, setReRender] = useState<boolean>(false);
  const { currentUserFavs } = useAppContext();
	//used to avoid duplicated items, because catalog has the same product in different sections
  const products: string[] = [];	

	useEffect(() => {
		//causes a re-render in this component when reRender state changes to update UI when an item is removed
		//state changes when an item is removed in the RemoveItem component
	}, [reRender])

	if (!currentUserFavs || currentUserFavs.items.length < 1) {
		return (
			<li className="left-1/2 absolute -translate-x-1/2">
        <p className="text-gray-700 text-2xl">No favorited items.</p>
      </li>
		)
	}

  return (
		<>
			{currentUserFavs?.items.map((product: string, index: number) =>
				catalog.map((obj) =>
					obj.products.map((obj2) => {
						if (obj2.name === product && !products.includes(obj2.name)) {
							products.push(product);
							return (
								<Card
									key={index}
									section={obj.section}
									obj={obj2}
									reRender={reRender}
									setReRender={setReRender}
								/>
							);
						}
						return null;
					})
				)
			)}
		</>
  );
};

export default GenerateCards;

type Props = {
  section: string;
  obj: {
    id: number;
    category: string;
    image: string;
    name: string;
    old_price: number;
    price: number;
    search_words: string[];
  };
  reRender: boolean;
	setReRender: (value: boolean) => void
};

const Card = ({ section, obj, reRender, setReRender }: Props) => {
	const url = UrlizeWords(obj.name);

	return (
    <li
      className={`flex-col border justify-between h-fit w-full flex text-center p-4 rounded-lg transition duration-200 ease-in-out relative bg-white group`}
    >
      <RemoveItem
        product={obj.name}
        reRender={reRender}
        setReRender={setReRender}
      />
      <Link
        href={`/sections/${section}/${url}`}
        className={`rounded-t-lg flex-col flex items-center`}
      >
        <Image
          src={obj.image}
          alt={obj.name}
          width={300}
          height={300}
					onLoad={HandleImageLoad}
          className={`w-3/5 rounded-t-lg pt-3 xl:px-3 drop-shadow transition-opacity opacity-0 duration-[.3s]`}
        />
        <div
          className={`mt-4 sm:mt-2 sm:py-2  font-bold w-full py-4 leading-6 flex  flex-col`}
        >
          <p
            className={`flex items-center justify-center h-14 sm:text-sm sm:h-12 whitespace-normal text-gray-700`}
          >
            {obj.name}
          </p>
          <div>
            <span
              className={`inline-block sm:text-[.7rem] sm:mr-1 text-red-500 ${
                obj.old_price === 0 ? "hidden" : "inline-block"
              } font-normal text-sm line-through mr-2`}
            >
              {obj.old_price.toFixed(2)}
            </span>
            <span
              className={`inline-block sm:text-base font-extrabold text-2xl text-green-4`}
            >
              $&nbsp;{obj.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <div className={`w-full flex flex-col gap-2`}>
        <AddToCart
          name={obj.name}
          image={obj.image}
          price={obj.price}
          text={"ADD TO CART"}
					section={section}
          className={`w-full xs:text-[.65rem] xs:p-2 xxs:text-[.55rem] xxs:gap-0.5 rounded-lg shrink-0 gap-1 font-black text-[0.75rem] p-2.5 bg-green-4 text-neutral-50`}
        />
      </div>
    </li>
  );
}
