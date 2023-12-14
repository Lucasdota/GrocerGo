import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Categories from "./drawer-links/Categories";

type Props = {
  isOpen: boolean;
	isTop: boolean|undefined;
  setIsOpen: (value: boolean) => void;
};

const swipeDown = {
  open: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  closed: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
};

export default function Drawer ({isOpen, isTop, setIsOpen}: Props)  {
  const navRef = useRef<HTMLElement>(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  //drawer animations with class
  useEffect(() => {
    const button = document.querySelectorAll(".has-child > button");
    button.forEach((item) => item.parentElement?.classList.remove("expand"));
    button.forEach((menu) =>
      menu.addEventListener("click", function (this: HTMLButtonElement) {
        let modal = document.querySelector(".modal");
        modal?.classList.add("show");
        navRef.current?.scrollTo(0, 0);
        if (!this.parentElement?.classList.contains("expand")) {
          this.parentElement?.classList.add("expand");
        }
        //back button
        this.parentElement
          ?.querySelector<any>(".back")
          .addEventListener("click", function () {
            modal?.classList.remove("show");
            menu.parentElement?.classList.remove("expand");
            navRef.current?.scrollTo(0, 0);
          });
      })
    );
  });

  //close drawer when clicking outside of it
  useEffect(() => {
    const button = document.querySelectorAll(".has-child > button");
    const modal = document.querySelector(".modal");
    let handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
        button.forEach(
          (menu) =>
            function () {
              menu.parentElement?.classList.remove("expand");
            }
        );
        setTimeout(() => {
          modal?.classList.remove("show");
        }, 500);
      }
    };

    let pressESC = (e: KeyboardEvent) => {
      if (isOpen && e.code === "Escape") {
        setIsOpen(false);
        button.forEach(
          (menu) =>
            function () {
              menu.parentElement?.classList.remove("expand");
            }
        );
        setTimeout(() => {
          modal?.classList.remove("show");
        }, 500);
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
    //keeps drawer closed on first load due to framer-motion behavior
    setTimeout(() => {
      setFirstLoad(false);
    }, 300);
  }, []);

  //trap the keyboard focus only in the drawer when it's on
  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      // Check if the target is a Node
      if (event.target instanceof Node) {
        if (
          navRef.current &&
          !navRef.current.contains(event.target)
        ) {
          // Prevent focusing outside the drawer
          navRef.current.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("focusin", handleFocus);
    }

    return () => {
      document.removeEventListener("focusin", handleFocus);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50 select-none h-full">
      <button
        aria-label="all categories"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center group gap-3 px-8 h-full justify-center w-auto after:bg-neutral-300/50 hover-bg-effect ${
          isOpen ? "pointer-events-none after:opacity-100 after:scale-100" : ""
        }`}
      >
        <div className="flex flex-col justify-between h-2">
          <span
            className={`w-6 h-[2px] group-hover:brightness-150 bg-green-5 rounded-sm transition-all duration-300 ease-out 
											${isOpen ? "rotate-45 translate-y-[0.180rem]" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`w-6 h-[2px] group-hover:brightness-150 bg-green-5 rounded-sm transition-all duration-300 ease-out
												${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`w-6 h-[2px] group-hover:brightness-150 bg-green-5 rounded-sm transition-all duration-300 ease-out  
												${isOpen ? "-rotate-45 -translate-y-[0.180rem]" : "translate-y-0.5"}`}
          ></span>
        </div>
        <span className="xl:hidden text-green-5 font-semibold text-sm group-hover:brightness-150 transition duration-300 ease-out whitespace-nowrap">
          All sections
        </span>
        <span
          className={`absolute -bottom-[.59rem] group-hover:w-full
								 bg-green-5 h-[3px] transition-[width] duration-300 ease-out left-0 ${
                   isOpen ? "w-full" : "w-0"
                 }`}
        />
      </button>
      {/* DRAWER */}
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.nav
						key="desktop-menu-drawer"
						tabIndex={-1}
						layout
						ref={navRef}
						variants={swipeDown}
						initial="closed"
						animate="open"
						exit="closed"
						className={`absolute -left-8 top-[100%] w-64 z-50 bg-neutral-200 text-[0.95rem] py-4 overflow-y-auto overflow-x-hidden text-green-5 modal ${
							firstLoad ? "hidden" : "block"
						} ${isTop ? "h-[calc(100vh-9rem)]" : "h-[calc(100vh-7rem)]"}
				`}
					>
						<ul className="flex flex-col mb-6 xl:mt-6 ">
							<h2 className="text-xl font-semibold mb-6 ml-6">Specials</h2>
							<Link onClick={() => setIsOpen(false)} href="/specials/chefs">
								<li className="hover:bg-neutral-300 px-6 py-2">Chefs</li>
							</Link>
							<Link
								onClick={() => setIsOpen(false)}
								href="/specials/delivery-rotisserie"
							>
								<li className="hover:bg-neutral-300 px-6 py-2">
									Delivery Rotisserie
								</li>
							</Link>
							<Link onClick={() => setIsOpen(false)} href="/specials/blog">
								<li className="hover:bg-neutral-300 px-6 py-2">GrocerGo Blog</li>
							</Link>
							<Link onClick={() => setIsOpen(false)} href="/specials/space-you">
								<li className="hover:bg-neutral-300 px-6 py-2">Space You</li>
							</Link>
						</ul>

						{/* SECTIONS */}
						<ul className="flex flex-col text-green-5">
							<h2 className="text-xl font-semibold mb-6 ml-6 ">Sections</h2>
							<Categories setIsOpen={setIsOpen} />
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
    </div>
  );
};
