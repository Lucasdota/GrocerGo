import { useAppContext } from "@/app/api/AppContext";
import { useSession } from "next-auth/react";

type Props = {
  text: string;
  className: string;
  name: string;
	image: string;
  price: number;
	section: string
};

const AddToCart = ({ text, className, name, image, price, section }: Props) => {
	const {
    currentUserCart,
    setCurrentUserCart,
    setTotalCartItems,
    setLoginPopUp,
    setAddedPopUp,
    setAddedItemName,
    handleAddToCartTimeout,
    cancelTimeout
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
          item.quantity += 1;
        }
      });
      setCurrentUserCart(updatedCart);
      //updates localCart	to apply to the local storage
      localCart.map((obj: any) => {
        if (obj.userEmail === email) {
          obj.items.map((item: any) => {
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
			aria-label={`add ${name} to cart`}
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
  );
};

export default AddToCart;
