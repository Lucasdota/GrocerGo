import Image from 'next/image'
import { useAppContext } from "@/app/api/AppContext";
import { useSession } from "next-auth/react";
import { AnimatePresence } from 'framer-motion';
import AddToCartPopUp from '@/components/shared/AddToCartPopUp';
import { useState } from 'react';
import HandleImageLoad from '@/components/shared/HandleImageLoad';

const firstDivData = [
  {
    id: 1,
    image: "/images/products/snacks/chips.webp",
    alt: "Potato Chips",
    first_title: "Potato",
    second_title: "Chips",
    fullPrice: 1.99,
    price: "1",
    decimal_price: ".99",
  },
  {
    id: 2,
    image: "/images/products/snacks/soft-drink.webp",
    alt: "Soda",
    first_title: "Soft",
    second_title: "Soda",
    fullPrice: 1.8,
    price: "1",
    decimal_price: ".80",
  },
  {
    id: 3,
    image: "/images/products/cheeses-and-dairy/parmesan.webp",
    alt: "Parmesan Cheese",
    first_title: "Parmesan",
    second_title: "Cheese",
    fullPrice: 3.8,
    price: "3",
    decimal_price: ".80",
  },
  {
    id: 4,
    image: "/images/products/full-fridge/prosciutto.webp",
    alt: "Prosciutto Di Parma",
    first_title: "Prosciutto",
    second_title: "Di Parma",
    fullPrice: 4.99,
    price: "4",
    decimal_price: ".99",
  },
  {
    id: 5,
    image: "/images/products/canneds/peach.webp",
    alt: "Canned Peach",
    first_title: "Canned",
    second_title: "Peach",
		fullPrice: 3.40,
    price: "3",
    decimal_price: ".70",
  },
];

const secondDivData = [
  {
    id: 1,
    image: "/images/products/cheeses-and-dairy/gouda.webp",
    alt: "Gouda Cheese",
    first_title: "Gouda",
    second_title: "Cheese",
    fullPrice: 3.75,
    price: "3",
    decimal_price: ".75",
  },
  {
    id: 2,
    image: "/images/products/fishery/tilapia.webp",
    alt: "Tilapia",
    first_title: "Southern",
    second_title: "Tilapia",
    fullPrice: 5.08,
    price: "5",
    decimal_price: ".08",
  },
  {
    id: 3,
    image: "/images/products/frozen/yogurt.webp",
    alt: "Strawberry Yogurt",
    first_title: "Strawberry",
    second_title: "Yogurt",
    fullPrice: 2.09,
    price: "2",
    decimal_price: ".09",
  },
  {
    id: 4,
    image: "/images/products/beverages/grapes-juice.webp",
    alt: "100% Grape Juice",
    first_title: "100%",
    second_title: "Grape Juice",
    fullPrice: 2.79,
    price: "2",
    decimal_price: ".79",
  },
  {
    id: 5,
    image: "/images/products/rotisserie/peking-duck.webp",
    alt: "Roasted Duck",
    first_title: "Roasted",
    second_title: "Duck",
		fullPrice: 16.09,
    price: "16",
    decimal_price: ".09",
  },
];

type Props = {}

export default function BigCards (props: Props)  {
	return (
    <div className="w-full">
      <div className="w-full flex lg:flex-col gap-4 xxl:gap-2 mb-4 xxl:mb-2 lg:mb-0 items-center justify-center">
        {firstDivData.map((card) => (
          <GenerateCards
            key={card.id}
            image={card.image}
            alt={card.alt}
            fullPrice={card.fullPrice}
            first_title={card.first_title}
            second_title={card.second_title}
            price={card.price}
            decimal_price={card.decimal_price}
          />
        ))}
      </div>
      <div className="flex lg:flex-col gap-4 xxl:gap-2 lg:mt-2 items-center justify-center">
        {secondDivData.map((card) => (
          <GenerateCards
            key={card.id}
            image={card.image}
            alt={card.alt}
            fullPrice={card.fullPrice}
            first_title={card.first_title}
            second_title={card.second_title}
            price={card.price}
            decimal_price={card.decimal_price}
          />
        ))}
      </div>
    </div>
  );
}

type CardsProps = {
	image: string;
	alt: string;
	fullPrice: number;
	first_title: string;
	second_title: string;
	price: string,
	decimal_price: string
}

function GenerateCards ({image, alt, fullPrice, first_title, second_title, price, decimal_price}: CardsProps) {
	const [popUp, setPopUp] = useState<boolean>(false);
	const {
    currentUserCart,
    setCurrentUserCart,
    setTotalCartItens,
		setLoginPopUp
  } = useAppContext();
  const { data: session } = useSession();
  const { email } = session?.user || {};

	function handleClick() {
		if (!session) {
			setLoginPopUp(true)
			return;
		} 

    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);

    const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    const findItem = currentUserCart!.itens!.find(
      (item: any) => item.name === alt
    );
    if (findItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = currentUserCart;
      updatedCart!.itens.map((item: any) => {
        if (item.name === alt) {
          item.quantity += 1;
        }
      });
      setCurrentUserCart(updatedCart);
      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.itens.map((item: any) => {
            if (item.name === alt) {
              item.quantity += 1;
            }
          });
        }
      });
    } else {
      // If the item is not in the cart, add it with quantity 1
      const newItem = {
        name: alt,
        image: image,
        price: fullPrice,
        quantity: 1,
      };

      const updatedCart = currentUserCart;
      updatedCart!.itens.push(newItem);

      setCurrentUserCart(updatedCart);

      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.itens.push(newItem);
        }
      });
    }
    setTotalCartItens(currentUserCart!.itens.length);
    localStorage.setItem("cart", JSON.stringify(localCart));
  }

	return (
    <>
      <button
        onClick={handleClick}
        className="flex w-1/5 flex-col items-center gap-8 xxl:gap-2 xl:gap-4 group bg-color-transition p-8 gg:p-6 xs:px-0 xs:h-24 h-[26rem] gg:h-[25rem] xxl:h-[23rem] lg:w-full lg:h-32 lg:flex-row lg:justify-around lg:py-4 lg:relative rounded-lg text-gray-700 lg:border-transparent group drop-shadow lg:rounded-none"
      >
        <div className="text-center text-2xl gg:text-xl xxl:text-[1.2rem] xl:text-[1.1rem] lg:text-xl lg:absolute lg:left-12 lg:text-left sm:text-[1rem] xs:left-3 xs:text-[0.8rem]">
          <h3 className="font-bold">{first_title}</h3>
          <h3 className=" md:-mt-2 xs:-mt-3">{second_title}</h3>
        </div>

        <div className="flex-col lg:flex-row justify-center text-center lg:absolute lg:mx-auto lg:flex lg:gap-28 md:gap-6 sm:gap-3 sm:ml-6 xs:ml-10 items-center">
          <div className="font-bold text-5xl gg:text-4xl xxl:text-2xl lg:text-4xl flex gap-1 items-center justify-center lg:w-10 md:w-16 sm:w-20 xs:w-12 xs:text-lg">
            <span className="font-normal text-lg xxl:text-sm xs:text-[.7rem]">
              $
            </span>
            {price}
            <span className="text-lg xxl:text-sm xs:text-[.7rem]">
              {decimal_price}
            </span>
          </div>
          <AddBtn
            className={
              "bg-neutral-50/50 lg:mt-0 mt-6 px-5 py-2 gg:px-4 xxl:px-3 text-[0.75rem] gg:text-[.65rem] lg:px-4 sm:text-[0.5rem] sm:px-3 sm:h-6 xs:text-[.4rem] xs:h-5 xs:px-2 xxs:mr-2 text-green-5 font-black rounded"
            }
            text={"ADD TO CART"}
          />
        </div>

        <Image
          src={image}
          width={320}
          height={500}
          alt={alt}
          loading="lazy"
					onLoad={HandleImageLoad}
          className="max-w-[160px] xgg:max-w-[170px] gg:p-8 gg:pt-0 px-6 xxl:p-8 lg:p-0 lg:w-20 lg:h-20 sm:w-14 sm:h-14 xs:w-10 xs:h-10 lg:absolute lg:right-12 xs:right-6 transition-all scale-90 group-hover:scale-100 ease-out drop-shadow opacity-0 duration-[.3s]"
        />
      </button>
      <AnimatePresence>
        {popUp && <AddToCartPopUp name={alt} setPopUp={setPopUp} />}
      </AnimatePresence>
    </>
  );	
}

type BtnProps = {
	text: string;
	className: string;
}

const AddBtn = ({ text, className }: BtnProps) => {
  return (
    <button className={`${className} flex items-center justify-center group group-active:translate-y-[2px]`}>
      <span>{text}</span>
    </button>     
  );
};