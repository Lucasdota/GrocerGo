import React from 'react'
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { useSession } from "next-auth/react";
import { useAppContext } from "@/app/api/AppContext";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link"

type Props = {
  setIsOpen: (value: boolean) => void
};

export default function MobileLogin({ setIsOpen }: Props) {
	const { data: session } = useSession();
  const { setLoginPopUp } = useAppContext();

	function handleSignIn() {
		setIsOpen(false);
		setLoginPopUp(true);
	}

	function handleSignOut() {
		setIsOpen(false);
		signOut();
	}

  return (
    <div className="h-28 w-full bg-green-3 text-slate-50 relative flex items-center justify-center">
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setIsOpen(false)}
        className="text-white absolute top-1 right-1 p-0.5 "
      >
        <IoIosClose className="text-neutral-200" />
      </button>
      {/* LOGIN AREA */}
      <div className="w-52 h-20 bg-white/20 flex items-center justify-around gap-2 rounded-tr-2xl rounded-bl-2xl p-8">
        {/* sign in interface */}
        {!session && (
          <>
            <FaUserAlt className="w-10 h-10" />
            <div className="text-sm flex flex-col gap-1 ">
              <h4 className="font-bold tracking-wide">Welcome!</h4>
              <button onClick={handleSignIn} className="tracking-wide">
                Sign in
              </button>
            </div>
          </>
        )}

        {/* sign out interface */}
        {session && (
          <>
            <Image
              src={session.user!.image!}
              alt="profile picture"
              width={96}
              height={96}
              className="rounded-full w-12 h-12"
            />
            <div className="text-sm flex flex-col gap-1 ">
              <Link onClick={() => setIsOpen(false)} href="/my-account" className="font-bold tracking-wide">
                My account
              </Link>
              <button onClick={handleSignOut} className="tracking-wide">
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
