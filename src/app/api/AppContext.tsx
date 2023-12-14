"use client"
import { createContext, useContext, useState, ReactNode, SetStateAction } from "react";
import { SessionProvider } from "next-auth/react";

interface AppContextProps {
  snackbar: boolean;
  setSnackbar: (value: boolean) => void;
  snackbarText: string;
  setSnackbarText: (value: string) => void;
  snackbarSeverity: boolean;
  setSnackbarSeverity: (value: boolean) => void;
  loginPopUp: boolean;
  setLoginPopUp: (value: boolean) => void;
  loggedIn: boolean | undefined;
  setLoggedIn: (value: boolean | undefined) => void;
  currentUserFavs: CurrentUserFavsType | undefined;
  setCurrentUserFavs: (value: CurrentUserFavsType) => void;
  currentUserCart: CurrentUserCartType | undefined;
  setCurrentUserCart: (value: CurrentUserCartType | undefined) => void;
  totalCartItems: number;
  setTotalCartItems: (value: number) => void;
  addedPopUp: boolean;
  setAddedPopUp: (value: boolean) => void;
  addedItemName: string;
  setAddedItemName: (value: string) => void;
  handleAddToCartTimeout: () => void;
  cancelTimeout: () => void;
  cartDrawerOn: boolean;
  setCartDrawerOn: (value: boolean) => void
}

interface CurrentUserCartType {
  userEmail: string | null | undefined;
  items: {
    name: string;
    image: string;
    price: number;
    quantity: number;
		section: string
  }[];
}

interface CurrentUserFavsType {
	userEmail: string | null | undefined;
	items: string[]
}

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({
  snackbar: false,
  setSnackbar: () => false,
  snackbarText: "",
  setSnackbarText: () => "",
  snackbarSeverity: false,
  setSnackbarSeverity: () => false,
  loginPopUp: false,
  setLoginPopUp: () => false,
  loggedIn: undefined,
  setLoggedIn: () => undefined,
  currentUserFavs: undefined,
  setCurrentUserFavs: () => undefined,
  currentUserCart: undefined,
  setCurrentUserCart: () => undefined,
  totalCartItems: 0,
  setTotalCartItems: () => 0,
  addedPopUp: false,
  setAddedPopUp: () => false,
  addedItemName: "",
  setAddedItemName: () => "",
  handleAddToCartTimeout: () => null,
  cancelTimeout: () => null,
  cartDrawerOn: false,
	setCartDrawerOn: () => false
});

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }: AppContextProviderProps) {
  //global states
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<boolean>(false);
  const [loginPopUp, setLoginPopUp] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);
  const [currentUserFavs, setCurrentUserFavs] = useState<
    CurrentUserFavsType | undefined
  >(undefined);
  const [currentUserCart, setCurrentUserCart] = useState<
    CurrentUserCartType | undefined
  >(undefined);
  const [totalCartItems, setTotalCartItems] = useState<number>(0);
  const [addedPopUp, setAddedPopUp] = useState<boolean>(false);
  const [addedItemName, setAddedItemName] = useState<string>("");
  const [popUpTimer, setPopUpTimer] = useState<NodeJS.Timeout | null>(null);
	const [cartDrawerOn, setCartDrawerOn] = useState<boolean>(false);

  //add to cart pop up timer
  const handleAddToCartTimeout = () => {
    setPopUpTimer(setTimeout(() => setAddedPopUp(false), 3000));
  };
  //cleanup function add to cart pop up
  const cancelTimeout = () => {
    clearTimeout(popUpTimer!);
  };

  return (
    <AppContext.Provider
      value={{
        snackbar,
        setSnackbar,
        snackbarSeverity,
        setSnackbarSeverity,
        snackbarText,
        setSnackbarText,
        loginPopUp,
        setLoginPopUp,
        loggedIn,
        setLoggedIn,
        currentUserFavs,
        setCurrentUserFavs,
        currentUserCart,
        setCurrentUserCart,
        totalCartItems,
        setTotalCartItems,
        addedPopUp,
        setAddedPopUp,
        addedItemName,
        setAddedItemName,
        handleAddToCartTimeout,
        cancelTimeout,
        cartDrawerOn,
        setCartDrawerOn,
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </AppContext.Provider>
  );
}
