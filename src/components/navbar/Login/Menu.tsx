import Image from "next/image";
import gearIcon from "../../../../public/images/login/config.png";
import loginIcon from "../../../../public/images/login/sign.png";
import type { Session } from "next-auth";
import { useAppContext } from "@/app/api/AppContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"

type Props = {
  session: Session | null;
  setMenu: (value: boolean ) => void
};

const Menu = ({ session, setMenu }: Props) => {
  const { setLoginPopUp, loggedIn } = useAppContext();
	const router = useRouter();

	function handleClick() {
		setLoginPopUp(true);
		setMenu(false);
	}

	function handleMyAccount() {
		setMenu(false);
		router.push("/my-account");
		if (!loggedIn) {
			setLoginPopUp(true);
		}	
	}

  return (
    <div
      id="basic-menu"
      aria-labelledby={"basic-button"}
      className={`w-full text-sm flex flex-col items-center absolute bottom-[-4.1rem] rounded-b-xl z-50 bg-white shadow text-green-5`}
    >
      {!session && (
        <button
          aria-label="sign in"
          onClick={handleClick}
          className="py-1.5 hover:bg-slate-100 w-full cursor-pointer flex items-center pl-16 relative border-b border-slate-100"
        >
          <Image
            src={loginIcon}
            alt="login icon"
            width={16}
            height={16}
            className="absolute left-4 opacity-60"
          />
          <p>Sign In</p>
        </button>
      )}
      <button
				aria-label="my account"
        onClick={handleMyAccount}
        className={`py-1.5 hover:bg-slate-100 w-full flex items-center pl-16 cursor-pointer 
				${session ? "border-b border-slate-100" : "rounded-b-xl"}
				`}
      >
        <Image
          src={gearIcon}
          alt="login icon"
          width={16}
          height={16}
          className="absolute left-4 opacity-60"
        />
        <p>My account</p>
      </button>
      {session && (
        <button
					aria-label="logout"
          onClick={() => signOut()}
          className="py-1.5 hover:bg-slate-100 w-full cursor-pointer flex items-center pl-16 relative rounded-b-xl"
        >
          <Image
            src={loginIcon}
            alt="login icon"
            width={16}
            height={16}
            className="absolute left-4 opacity-60"
          />
          <p>Sign Out</p>
        </button>
      )}
    </div>
  );
};

export default Menu;
