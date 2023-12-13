import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useAppContext } from "@/app/api/AppContext";
import { PiTrashThin } from "react-icons/pi";
import Link from 'next/link';
import UrlizeWords from '@/components/shared/UrlizeWords';

type Props = {
  email: string;
  totalPrice: number;
  setTotalPrice: (value: number) => void;
	setDrawer: (value: boolean) => void
};

const DrawerItems = ({ email, setTotalPrice, setDrawer }: Props) => {
  const { currentUserCart } = useAppContext();

  return (
    <ul className="flex flex-col grow overflow-y-scroll gap-2 cart-drawer px-2">
      {currentUserCart!.items.map((product: any, index: number) => (
        <GenerateItems
          key={`product-number-${index}`}
          name={product.name}
          image={product.image}
          price={product.price}
          quantity={product.quantity}
          section={product.section}
          email={email}
          setTotalPrice={setTotalPrice}
          setDrawer={setDrawer}
        />
      ))}
    </ul>
  );
};

export default DrawerItems

type GenerateItemsProps = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  email: string;
	section: string;
  setTotalPrice: (value: number) => void;
	setDrawer: (value: boolean) => void
};

const GenerateItems = ({
  name,
  image,
  price,
  quantity,
  email,
	section,
  setTotalPrice,
	setDrawer
}: GenerateItemsProps) => {
  const [itemPrice, setItemPrice] = useState<number>(price * quantity);
  const [itemQuantity, setItemQuantity] = useState<number>(quantity);
  const { currentUserCart, setCurrentUserCart, setTotalCartItems } = useAppContext();
	const url = UrlizeWords(name);

  function decreaseQuantity() {
    setItemQuantity((prevState) => prevState - 1);
    setItemPrice((prevState) => prevState - price);

    //decreases from the current user cart
    const updatedCart: any = { ...currentUserCart };
    updatedCart.items?.map((item: any) => {
      if (item.name === name) {
        item.quantity -= 1;
      }
    });
    setCurrentUserCart(updatedCart);

    //decreases from the local storage "cart"
    const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    localCart.map((obj: any) => {
      if (obj.userEmail === email) {
        obj.items.map((item: any) => {
          if (item.name === name) {
            item.quantity -= 1;
          }
        });
      }
    });
    localStorage.setItem("cart", JSON.stringify(localCart));
  }

  function increaseQuantity() {
    setItemQuantity((prevState) => prevState + 1);
    setItemPrice((prevState) => prevState + price);

    //increases from the current user cart
    const updatedCart: any = { ...currentUserCart };
    updatedCart.items?.map((item: any) => {
      if (item.name === name) {
        item.quantity += 1;
      }
    });
    setCurrentUserCart(updatedCart);

    //increases from the local storage "cart"
    const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    localCart.map((obj: any) => {
      if (obj.userEmail === email) {
        obj.items.map((item: any) => {
          if (item.name === name) {
            item.quantity += 1;
          }
        });
      }
    });
    localStorage.setItem("cart", JSON.stringify(localCart));
  }

  function deleteItem() {   
    //deletes from the current user cart
    const updatedCart: any = { ...currentUserCart };
    updatedCart.items?.map((item: any) => {
      if (item.name === name) {
        updatedCart.items?.splice(updatedCart!.items.indexOf(item), 1);
      }
    });
    setCurrentUserCart(updatedCart);

		//recalculates totalPrice
		const newTotalPrice: number = currentUserCart!.items.reduce(
      (accumulator: number, item: any) =>
        accumulator + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);

    //deletes from the local storage "cart"
    const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    localCart.map((obj: any) => {
      if (obj.userEmail === email) {
        obj.items.map((item: any) => {
          if (item.name === name) {
            obj.items.splice(obj.items.indexOf(item), 1);
          }
        });
      }
    });
    localStorage.setItem("cart", JSON.stringify(localCart));
    setTotalCartItems(currentUserCart!.items.length);
  }

  useEffect(() => {
    //calculates totalPrice and updates it
		const newTotalPrice: number = currentUserCart!.items.reduce(
      (accumulator: number, item: any) =>
        accumulator + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [currentUserCart, setTotalPrice]);	

  return (
    <li className={`w-full gap-5 select-none flex`}>
      <Link
        aria-label={`go to ${name} product page`}
        onClick={() => setDrawer(false)}
        href={`/sections/${section}/${url}`}
      >
        <Image
          src={image}
          width={50}
          height={50}
          alt={name}
          loading="eager"
          priority
          className="bg-green-1/20 rounded-bl-xl rounded-tr-xl p-1.5 w-12 h-12 xs:w-10 xs:h-10"
        />
      </Link>
      <div className="flex flex-col grow justify-between">
        {/* title and price */}
        <div className="flex justify-between w-full font-black gap-4 xs:text-sm">
          <Link
            aria-label={`go to ${name} product page`}
            onClick={() => setDrawer(false)}
            href={`/sections/${section}/${url}`}
          >
            {name}
          </Link>
          <p className="tracking-wider">${itemPrice.toFixed(2)}</p>
        </div>

        {/* buttons */}
        <div className="flex w-full justify-between">
          <button onClick={deleteItem} className="cursor-alias">
            <PiTrashThin className="text-red-500" />
          </button>

          <div className="flex items-center text-lg">
            <button
              disabled={itemQuantity < 2}
              onClick={decreaseQuantity}
              className={`${
                itemQuantity > 1 ? "text-green-2" : "text-green-2/30"
              } px-1`}
            >
              -
            </button>
            <p className="text-[0.7rem] px-1">{itemQuantity}</p>
            <button onClick={increaseQuantity} className="px-1">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};