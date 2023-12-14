import { useAppContext } from "@/app/api/AppContext";
import { ImCart } from "@react-icons/all-files/im/ImCart";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CartDrawer from "./CartDrawer";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollBlock } from "@/app/hooks/useScrollBlock";

type Props = {
  isSmartphone: boolean
};

//local storage acting like a server
export default function Cart({ isSmartphone }: Props) {
  const {
    setLoginPopUp,
    currentUserCart,
    setCurrentUserCart,
    totalCartItems,
    setTotalCartItems,
    setCurrentUserFavs,
		cartDrawerOn,
		setCartDrawerOn
  } = useAppContext();
  const { data: session } = useSession();
  const { email } = session?.user || {};
  const [blockScroll, allowScroll] = useScrollBlock();

  function handleClick() {
    if (!session) {
      setLoginPopUp(true);
    } else {
      setCartDrawerOn(true);
    }
  }

  //proper blockScroll when cart drawer is open
  useEffect(() => {
    if (cartDrawerOn) {
      if (!isSmartphone) {
        blockScroll();
      } else {
        const html = document.documentElement;
        const { body } = document;
        html.style.position = "relative";
        body.style.position = "relative";
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
      }
    } else {
      allowScroll();
    }
  }, [cartDrawerOn, isSmartphone, blockScroll, allowScroll]);

  // get/set local storage "cart"
  useEffect(() => {
    //if there's "cart" in the local storage(mimicking server), check if it has a cart assigned to the current user email, if yes, assign currentUserCart to it, if not, creates a new one and assign currentUserCart and local storage "cart" to it
    //if there's no "cart" in the local storage, create a new array with the correct format and assign both currentUserCart and local storage to it
    if (session) {
      const jsonCart = localStorage.getItem("cart");
      const localCart = JSON.parse(jsonCart!);
      if (jsonCart) {
        const hasUserCart = localCart.find(
          (obj: any) => obj.userEmail === email
        );
        //
        if (hasUserCart) {
          setCurrentUserCart(hasUserCart);
        } else {
          const newObj = {
            userEmail: email,
            items: [],
          };
          setCurrentUserCart(newObj);
          localCart.push(newObj);
          localStorage.setItem("cart", JSON.stringify(localCart));
        }
      } else {
        const newArray = [
          {
            userEmail: email,
            items: [],
          },
        ];
        localStorage.setItem("cart", JSON.stringify(newArray));
        setCurrentUserCart({ userEmail: email, items: [] });
      }
    }
  }, [setCurrentUserCart, email, session]);

  // get/set local storage "favorites"
  useEffect(() => {
    //if there's "favorites" in the local storage(mimicking server), check if it has a favorites assigned to the current user email, if yes, assign currentUserFavs to it, if not, creates a new one and assign currentUserFavs and local storage "favorites" to it
    //if there's no "favorites" in the local storage, create a new array with the correct format and assign both currentUserFavs and local storage to it
    if (session) {
      const jsonCart = localStorage.getItem("favorites");
      const localFavs = JSON.parse(jsonCart!);
      if (jsonCart) {
        const hasUserFavs = localFavs.find(
          (obj: any) => obj.userEmail === email
        );
        if (hasUserFavs) {
          setCurrentUserFavs(hasUserFavs);
        } else {
          const newObj = {
            userEmail: email,
            items: [],
          };
          setCurrentUserFavs(newObj);
          localFavs.push(newObj);
          localStorage.setItem("favorites", JSON.stringify(localFavs));
        }
      } else {
        const newArray = [
          {
            userEmail: email,
            items: [],
          },
        ];
        localStorage.setItem("favorites", JSON.stringify(newArray));
        setCurrentUserFavs({ userEmail: email, items: [] });
      }
    }
  }, [email, session, setCurrentUserFavs]);

  useEffect(() => {
    if (!currentUserCart) return;
    setTotalCartItems(currentUserCart.items.length);
  });

  return (
    <>
      <div
        className={`h-full flex items-center justify-center w-64 xl:w-[130px] xs:w-[50px]`}
      >
        <button
          onClick={handleClick}
          aria-label="open cart"
          className="h-full w-full rounded-none xl:mb-2 flex items-center justify-center xl:justify-end xl:items-end after:bg-neutral-300/50 hover-bg-effect z-40 xl:z-0 xl:after:bg-transparent"
        >
          <div className="relative w-6 h-6 xl:mr-2">
            <ImCart className="w-full h-full text-green-3" />
            {totalCartItems !== 0 && (
              <motion.span
                aria-label="total items in the cart"
                className={`px-1 py-[1px] flex justify-center items-center font-sans rounded-lg text-[0.61rem] bg-green-4 text-white absolute -top-2 -right-2`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {totalCartItems}
              </motion.span>
            )}
          </div>
        </button>
      </div>
      <AnimatePresence>
        {/* gray overlay */}
        {cartDrawerOn && (
          <motion.div
            aria-label="gray transparent overlay"
            key={"cart-drawer-overlay"}
            className="fixed left-0 top-0 h-full w-full bg-black/30 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {/* animated drawer */}
        {cartDrawerOn && (
          <CartDrawer
            drawer={cartDrawerOn}
            setDrawer={setCartDrawerOn}
            email={email!}
          />
        )}
      </AnimatePresence>
    </>
  );
}
