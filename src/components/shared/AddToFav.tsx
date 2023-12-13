import React from "react";
import { useAppContext } from "@/app/api/AppContext";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import { useSession } from "next-auth/react";

type Props = {
  title: string;
};

const AddToFav = ({ title }: Props) => {
  const {
		loggedIn,
		setLoginPopUp,
    currentUserFavs,
    setCurrentUserFavs,
		setSnackbarSeverity, 
		setSnackbarText,
		setSnackbar
  } = useAppContext();
	const { data: session } = useSession();
	const { email } = session?.user || {};

	function handleClick() {
		if (!loggedIn) {
			setLoginPopUp(true);
			return
		}

		setSnackbar(true);
		const updatedCart = currentUserFavs;
    const jsonCart = localStorage.getItem("favorites");
    const localFavs = JSON.parse(jsonCart!);
    const findItem = currentUserFavs!.items.find(
      (item: any) => item === title
    );
    if (findItem) { // If the item is already in the favorites, removes it
			setSnackbarSeverity(true);
      setSnackbarText(`${title} removed from your favorites.`);
			updatedCart?.items.map((item) => {
				if (item === title) {
					updatedCart?.items.splice(updatedCart?.items.indexOf(item), 1)
				}
			});
			setCurrentUserFavs(updatedCart!);
			localFavs.map((obj: any) => {
				if (obj.userEmail === email) {
					obj.items.map((item: string) => {
						if (item === title) {
							obj.items.splice(obj.items.indexOf(item), 1)
						}
					})
				}
			});
			localStorage.setItem("favorites", JSON.stringify(localFavs));
		} else { // If the item is not in the favorites, set state and local storage
			
			setSnackbarSeverity(false);
      setSnackbarText(`${title} added to your favorites.`);

			updatedCart?.items.push(title);
			setCurrentUserFavs(updatedCart!);
			localFavs.map((obj: any) => {
				if (obj.userEmail === email) {
					obj.items.push(title);
				}
			});
			localStorage.setItem("favorites", JSON.stringify(localFavs));
		}	
  }

  return (
    <button
      role="checkbox"
      aria-checked={currentUserFavs?.items.includes(title)}
      aria-label="add to favorite"
      onClick={handleClick}
      className={`${
        currentUserFavs?.items.includes(title) ? "opacity-100" : null
      } absolute top-4 right-4 opacity-0 transition-[opacity] duration-200 group-hover:opacity-100 lg:opacity-100 focus:opacity-100`}
    >
      {currentUserFavs?.items.includes(title) ? (
        <BsHeartFill className="fill-green-2/80 w-5 h-5 xxs:w-4 xxs:h-4" />
      ) : (
        <BsHeart className="fill-gray-400/80 w-5 h-5 xxs:w-4 xxs:h-4" />
      )}
    </button>
  );
};

export default AddToFav;
