import { useAppContext } from "@/app/api/AppContext";
import { useSession } from "next-auth/react";
import { useState } from "react";
import AddPopUp from "./AddPopUp";
import { AnimatePresence } from "framer-motion";

type Props = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const AddBtn = ({ name, image, price, quantity }: Props) => {
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
    const findItem = currentUserCart!.itens.find(
      (item: any) => item.name === name
    );
    if (findItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = currentUserCart;
      updatedCart!.itens.map((item: any) => {
        if (item.name === name) {
          item.quantity += quantity;
        }
      });
      setCurrentUserCart(updatedCart);
      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.itens.map((item: any) => {
            if (item.name === name) {
              item.quantity += quantity;
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
        quantity: quantity,
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
				className="bg-green-4 text-white font-black text-[0.75rem] w-36 h-10 gap-2 active:translate-y-[1px]"
			>
				ADD TO CART
			</button>
			<AnimatePresence>
				{popUp && <AddPopUp name={name} setPopUp={setPopUp} />}
			</AnimatePresence>			
		</>
  );
};

export default AddBtn;
