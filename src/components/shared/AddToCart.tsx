import { useAppContext } from "@/app/api/AppContext";
import { useSession } from "next-auth/react";
import AddToCartPopUp from "./AddToCartPopUp";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  text: string;
  className: string;
  name: string;
	image: string;
  price: number;
};

const AddToCart = ({ text, className, name, image, price }: Props) => {
	const [popUp, setPopUp] = useState<boolean>(false);
	const {
    currentUserCart,
    setCurrentUserCart,
    setTotalCartItens,
    setLoginPopUp,
  } = useAppContext();
	const { data: session } = useSession();
  const { email } = session?.user || {};

  function handleClick() {
		if (!session) {
      setLoginPopUp(true);
      return;
    } 
		
		setPopUp(true);
		setTimeout(() => {
			setPopUp(false)
		}, 3000)

		const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    const findItem = currentUserCart!.itens!.find(
      (item: any) => item.name === name
    );
    if (findItem) {
      // If the item is already in the cart, increase its quantity
			const updatedCart = currentUserCart;
			updatedCart!.itens.map((item: any) => {
        if (item.name === name) {
          item.quantity += 1;
        }
      });
      setCurrentUserCart(updatedCart)
      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.itens.map((item: any) => {
            if (item.name === name) {
              item.quantity += 1;
            }
          });
        }
      });
    } else {
      // If the item is not in the cart, add it with quantity 1
      const newItem = {
        name: name,
        image: image,
        price: price,
        quantity: 1,
      };

			const updatedCart = currentUserCart;
			updatedCart!.itens.push(newItem);

      setCurrentUserCart(updatedCart)

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
        className={`${className} flex items-center justify-center group active:translate-y-[1px]`}
      >
        <span className="group-hover:-translate-x-[0.1rem] group-hover:lg:translate-x-0 lg:translate-x-0 translate-x-[0.45rem] transition duration-200">
          {text}
        </span>
        <span className="group-hover:opacity-100 opacity-0 transition duration-200 lg:hidden">
          +
        </span>
      </button>
      <AnimatePresence>
        {popUp && <AddToCartPopUp name={name} setPopUp={setPopUp} />}
      </AnimatePresence>
    </>
  );
};

export default AddToCart;
