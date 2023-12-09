"use client"
import { signIn } from "next-auth/react";
import GoogleIcon from "../../../../public/images/login/google.png";
import GithubIcon from "../../../../public/images/login/giticon.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/app/api/AppContext";
import KeyIcon from "./KeyIcon";
import { useScrollBlock } from "@/app/hooks/useScrollBlock";

type Props = {
};

const LoginPopUp = ({}: Props) => {
	const menuRef = useRef<HTMLDivElement|null>(null);
	const { loginPopUp, setLoginPopUp } = useAppContext();
	const [blockScroll, allowScroll] = useScrollBlock();

  //close pop-up when clicking outside of it or by pressing ESC
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setLoginPopUp(false);
      }
    };

		let pressESC = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setLoginPopUp(false);
      }
    };

    document.addEventListener("mousedown", handler);
		document.addEventListener("keydown", pressESC);
    return () => {
      document.removeEventListener("mousedown", handler);
			document.removeEventListener("keydown", pressESC);
    };
  });

	useEffect(() => {
		if (loginPopUp) {
			blockScroll();
		} else {
			allowScroll();
		}   
  }, [loginPopUp, blockScroll, allowScroll]);

	//trap the keyboard focus only in the pop-up when it's on
	useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      // Check if the target is a Node
      if (event.target instanceof Node) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          // Prevent focusing outside the pop-up
          menuRef.current.focus();
        }
      }
    };

    if (loginPopUp) {
      document.addEventListener("focusin", handleFocus);
    }

    return () => {
      document.removeEventListener("focusin", handleFocus);
    };
  }, [loginPopUp]);

  return (
    <section
      role="dialog"
      aria-modal="true"
      className={`fixed z-[60] top-0 left-0 w-full h-full min-w-[320px] bg-black/30 flex items-center filter backdrop-blur-sm justify-center ${
        loginPopUp ? null : "hidden"
      }`}
    >
      <div		
				tabIndex={-1}		
        ref={menuRef}
        className="filter backdrop-blur-sm p-8 rounded-lg border border-neutral-500"
      >
        <div className="rounded-lg bg-[#161B22] text-neutral-100 p-6 flex flex-col items-center gap-5 z-[70]">
          <KeyIcon />
          <h2 className="text-lg font-semibold">Hello customer!</h2>
          <div className="w-full flex items-center gap-2">
            <div className="grow h-1 bg-neutral-100 rounded-lg" />
            <p className="">Sign in with:</p>
            <div className="grow h-1 bg-neutral-100 rounded-lg" />
          </div>
          <div className="w-60 xxs:w-40 space-y-3">
            {/* google */}
            <button
              role="login"
              onClick={() => signIn("google")}
              className="flex w-full items-center justify-start p-3 drop-shadow gap-2 bg-neutral-100 hover:bg-neutral-200 active:translate-y-0.5 text-white rounded-lg relative"
            >
              <Image
                src={GoogleIcon}
                alt="google icon"
                width={32}
                height={32}
                className="p-1"
              />
              <p className="tracking-wide absolute font-semibold text-lg left-1/2 -translate-x-1/2 text-gray-800">
                Google
              </p>
            </button>
            {/* github */}
            <button
              role="login"
              onClick={() => signIn("github")}
              className="flex w-full items-center justify-start p-3 drop-shadow gap-2 bg-[#24292F] hover:bg-gray-800 text-neutral-100 active:translate-y-0.5 rounded-lg relative"
            >
              <Image
                src={GithubIcon}
                alt="github icon"
                width={32}
                height={32}
                className="p-0.5"
              />
              <p className="tracking-wide absolute font-semibold text-lg left-1/2 -translate-x-1/2">
                Github
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPopUp;
