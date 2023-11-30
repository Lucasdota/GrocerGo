import { useAppContext } from "../api/AppContext";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  product: string;
  reRender: boolean;
  setReRender: (value: boolean) => void;
};

const RemoveItem = ({ product, reRender, setReRender }: Props) => {
  const { currentUserFavs, setCurrentUserFavs } = useAppContext();
  const { data: session } = useSession();
  const { email } = session?.user || {};

  function removeItem() {
    const updatedCart = currentUserFavs;
    const jsonCart = localStorage.getItem("favorites");
    const localFavs = JSON.parse(jsonCart!);
		updatedCart?.itens.map((item) => {
			if (item === product) {
				updatedCart?.itens.splice(updatedCart?.itens.indexOf(item), 1);
			}
		});
		setCurrentUserFavs(updatedCart!);
		localFavs.map((obj: any) => {
			if (obj.userEmail === email) {
				obj.itens.map((item: string) => {
					if (item === product) {
						obj.itens.splice(obj.itens.indexOf(item), 1);
					}
				});
			}
		});
		localStorage.setItem("favorites", JSON.stringify(localFavs));
		setReRender(!reRender)
  }

  return (
    <button onClick={() => removeItem()} className="absolute right-4 top-4">
      {currentUserFavs?.itens.includes(product) ? (
        <IoIosCloseCircle className="text-red-400 w-5 h-5" />
      ) : (
        <AiFillPlusCircle className="text-green-400 w-5 h-5" />
      )}
    </button>
  );
};

export default RemoveItem;
