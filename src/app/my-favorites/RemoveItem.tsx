import { useAppContext } from "../api/AppContext";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSession } from "next-auth/react";

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
		updatedCart?.items.map((item) => {
			if (item === product) {
				updatedCart?.items.splice(updatedCart?.items.indexOf(item), 1);
			}
		});
		setCurrentUserFavs(updatedCart!);
		localFavs.map((obj: any) => {
			if (obj.userEmail === email) {
				obj.items.map((item: string) => {
					if (item === product) {
						obj.items.splice(obj.items.indexOf(item), 1);
					}
				});
			}
		});
		localStorage.setItem("favorites", JSON.stringify(localFavs));
		setReRender(!reRender)
  }

  return (
    <button id="removeItem" aria-label="remove item from favorites" onClick={() => removeItem()} className="absolute right-4 top-4">
      {currentUserFavs?.items.includes(product) ? (
        <IoIosCloseCircle className="text-red-400 w-5 h-5" />
      ) : (
        <AiFillPlusCircle className="text-green-400 w-5 h-5" />
      )}
    </button>
  );
};

export default RemoveItem;
