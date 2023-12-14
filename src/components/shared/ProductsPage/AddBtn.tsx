//not using the AddToCart component, because this one needs to count the quantity added
import { useAppContext } from "@/app/api/AppContext";
import { useSession } from "next-auth/react";

type Props = {
  name: string;
  image: string;
  price: number;
  quantity: number;
	section: string
};

const AddBtn = ({ name, image, price, quantity, section }: Props) => {
  const {
    currentUserCart,
    setCurrentUserCart,
    setTotalCartItems,
    setLoginPopUp,
    setAddedPopUp,
    setAddedItemName,
    handleAddToCartTimeout,
    cancelTimeout,
  } = useAppContext();
  const { data: session } = useSession();
  const { email } = session?.user || {};

  function handleClick() {
    if (!session) {
      setLoginPopUp(true);
      return;
    }

    //pass name to added to cart pop up in global state
    setAddedItemName(name);
    //cancel timeout function so the pop up can stays for more 3s if another add to cart button is clicked
    cancelTimeout();
    //activates the pop up
    setAddedPopUp(true);
    //calls the timeout function
    handleAddToCartTimeout();

    const jsonCart = localStorage.getItem("cart");
    const localCart = JSON.parse(jsonCart!);
    const findItem = currentUserCart!.items!.find(
      (item: any) => item.name === name
    );
    if (findItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = currentUserCart;
      updatedCart!.items.map((item: any) => {
        if (item.name === name) {
          item.quantity += quantity;
        }
      });
      setCurrentUserCart(updatedCart);
      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.items.map((item: any) => {
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
        section: section,
      };

      const updatedCart = currentUserCart;
      updatedCart!.items.push(newItem);

      setCurrentUserCart(updatedCart);

      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.items.push(newItem);
        }
      });
    }
    setTotalCartItems(currentUserCart!.items.length);
    localStorage.setItem("cart", JSON.stringify(localCart));
  }

  return (   
		<button
			onClick={handleClick}
			className="bg-green-4 text-white font-black text-[0.75rem] w-36 h-10 gap-2 active:translate-y-[1px]"
		>
			ADD TO CART
		</button>   
  );
};

export default AddBtn;
