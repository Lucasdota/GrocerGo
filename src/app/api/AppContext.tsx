"use client"
import { createContext, useContext, useState, ReactNode, SyntheticEvent } from "react";
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
  totalCartItens: number;
  setTotalCartItens: (value: number) => void;
}

interface CurrentUserCartType {
  userEmail: string | null | undefined;
  itens: {
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
}

interface CurrentUserFavsType {
	userEmail: string | null | undefined;
	itens: string[]
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
  totalCartItens: 0,
  setTotalCartItens: () => 0,
});

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }: AppContextProviderProps) {
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [snackbarText, setSnackbarText] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<boolean>(false);
  const [loginPopUp, setLoginPopUp] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean|undefined>(undefined);
	const [currentUserFavs, setCurrentUserFavs] =
    useState<CurrentUserFavsType|undefined>(undefined);
  const [currentUserCart, setCurrentUserCart] =
    useState < CurrentUserCartType|undefined>(undefined);
  const [totalCartItens, setTotalCartItens] = useState<number>(0);

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
        totalCartItens,
        setTotalCartItens
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </AppContext.Provider>
  );
}
