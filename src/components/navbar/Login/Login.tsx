import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Menu from './Menu';
import User from './User';
import { useSession } from "next-auth/react";
import { useAppContext } from "@/app/api/AppContext";
import LoginPopUp from './LoginPopUp';

type sessionType = {
  id: number;
  infos: {
    user: {
      email: string | null | undefined;
      image: string | null | undefined;
      name: string | null | undefined;
    };
    expires: string;
  };
};

export default function Login()  {
  //open and close dropdown menu
  const [menu, setMenu] = useState<boolean>(false);
  //creates a localSession item in the local storage
  const [localSession, setLocalSession] = useState<sessionType[]>([]);
  //set first name to display in the welcome message
  const [userName, setUserName] = useState<string>("");
  //set profile picture to display in the welcome message
  const [userImage, setUserImage] = useState<string>("");
	//prevents infinite re-renders in the last useEffect
  const [sessionUpdated, setSessionUpdated] = useState<boolean>(false);
	//set accessibility in arias attributes
  const open = Boolean(menu);
  const dropdownRef = useRef<HTMLElement>(null);
	//access obj returned from next-auth with user infos
  const { data: session } = useSession();
	const { email, image, name } = session?.user || {};
  const { setLoggedIn } = useAppContext();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(!menu);
  };

  const handleClose = () => {
    setMenu(false);
  };

  const handleSessions = useCallback(() => {
    const hasUser = localSession.some((obj) => obj.infos.user.email === email);
    //return if user is not new
    if (hasUser) return;
    //create new user and updates localSession and local storage
    const newUserObj = {
      id: localSession.length + 1,
      infos: {
        user: {
          email: email,
          image: image,
          name: name,
        },
        expires: session!.expires,
      },
    };
    localStorage.setItem(
      "session",
      JSON.stringify([...localSession, newUserObj])
    );
    setLocalSession([...localSession, newUserObj]);
  }, [localSession, session, email, image, name]);

	useEffect(() => {
		const check = localStorage.getItem("session");
			if (check) {
				setLocalSession(JSON.parse(check));
			} else {
				setLocalSession([])
			}	
	}, [])

  useEffect(() => {
    if (session) {
      const nameWords = name?.split(" ") || "";
      setUserName(nameWords[0]);
      setUserImage(image!);
    }
  }, [session, userName, image, name]);

	//close dropdown when clicking outside of it
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        handleClose();
      }
    };

		let pressESC = (e: KeyboardEvent) => {
      if (menu && e.code === "Escape") {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
		document.addEventListener("keydown", pressESC);
    return () => {
      document.removeEventListener("mousedown", handler);
			document.removeEventListener("keydown", pressESC);
    };
  });

	//store sessions in local storage; normally it would be stored and retrieved in a server I imagine; but back-end is not my part right now
  useEffect(() => {
    if (!session) {		
      setLoggedIn(false);
      return;
    }
    if (sessionUpdated) return;
    setLoggedIn(true);
    const check = localStorage.getItem("session");
    //if there's a session in the localStore, call the handleSessions function to straight things up
    //if there's no session in the localStore, create one
    if (check) {
      setLocalSession(JSON.parse(check));
      handleSessions();
    } else {
      const setObject = {
        id: 1,
        infos: {
          user: {
            email: email,
            image: image,
            name: name,
          },
          expires: session.expires,
        },
      };
			localStorage.setItem("session", JSON.stringify([setObject]));
      setLocalSession([setObject]);
    }
    setSessionUpdated(true);
  }, [email, image, name, session, handleSessions, sessionUpdated, setLoggedIn]);

  return (
    <>
      <nav ref={dropdownRef} className="w-64 h-full relative xl:hidden ">
        <button
          id="basic-button"
					aria-label='open login menu'
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          className={`text-gray-800 font-semibold flex gap-3 items-center w-full group h-full text-sm justify-center hover-bg-effect z-40 py-4 overflow-hidden ${
            menu ? "bg-neutral-300/50" : "after:bg-neutral-300/50"
          }`}
        >
          {!session && <FaUserAlt className="text-green-3" size={15} />}
          {session && <User userName={userName} userImage={userImage} />}
          <IoIosArrowDown
            className={`text-green-5 ${
              menu ? "-rotate-180" : "rotate-0"
            } transition duration-200`}
            size={15}
          />
        </button>
        {menu && <Menu session={session} setMenu={setMenu} />}
      </nav>
      <LoginPopUp />
    </>
  );
}
