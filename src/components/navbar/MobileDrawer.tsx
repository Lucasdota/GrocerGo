import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileLogin from "./MobileLogin";
import MobileCategories from "./drawer-links/MobileCategories";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const swipeDown = {
  open: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  closed: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
};

export default function MobileDrawer({ isOpen, setIsOpen }: Props) {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const navContainer = useRef<HTMLElement>(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>();

  //is mobile checker
  useEffect(() => {
    const mediaQueryXl = window.matchMedia("(max-width: 1279px)");
    if (mediaQueryXl.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function handleMobile() {
      if (mediaQueryXl.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    //keeps drawer closed on first load due to framer-motion behavior
    setTimeout(() => {
      setFirstLoad(false);
    }, 300);

    window.addEventListener("resize", handleMobile);
    return () => {
      window.addEventListener("resize", handleMobile);
    };
  }, []);

  //drawer animations with class
  useEffect(() => {
    const button = document.querySelectorAll(".mobile-haschild > button");
    button.forEach((item) => item.parentElement?.classList.remove("expand"));
    button.forEach((menu) =>
      menu.addEventListener("click", function (this: HTMLButtonElement) {
        let modal = document.querySelector(".mobile-modal");
        modal?.classList.add("show");
        mobileNavRef.current?.scrollTo(0, 0);
        if (!this.parentElement?.classList.contains("expand")) {
          this.parentElement?.classList.add("expand");
        }
        //back button
        this.parentElement
          ?.querySelector<any>(".back")
          .addEventListener("click", function () {
            modal?.classList.remove("show");
            menu.parentElement?.classList.remove("expand");
            mobileNavRef.current?.scrollTo(0, 0);
          });
      })
    );
  });

  //close drawer when clicking outside of it
  useEffect(() => {
    const button = document.querySelectorAll(".mobile-haschild > button");
    const modal = document.querySelector(".mobile-modal");
    let closeHandler = (e: MouseEvent) => {
      if (!navContainer.current?.contains(e.target as Node) && isMobile) {
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

    document.addEventListener("mousedown", closeHandler);
    document.addEventListener("keydown", pressESC);
    return () => {
      document.removeEventListener("mousedown", closeHandler);
      document.removeEventListener("keydown", pressESC);
    };
  });

  //trap the keyboard focus only in the drawer when it's on
  useEffect(() => {
    const mobileHandleFocus = (event: FocusEvent) => {
      // Check if the target is a Node
      if (event.target instanceof Node) {
        if (navContainer.current && !navContainer.current.contains(event.target)) {
          // Prevent focusing outside the drawer
          navContainer.current.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("focusin", mobileHandleFocus);
    }

    return () => {
      document.removeEventListener("focusin", mobileHandleFocus);
    };
  }, [isOpen]);

  return (
    <div className="z-50 hidden xl:block">
      <button
        aria-label="open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`group w-[130px] xs:w-[50px] pb-2 group ${
          isOpen ? "pointer-events-none" : ""
        }`}
      >
        <div className="flex flex-col justify-between h-3">
          <span className="w-6 h-[2px] bg-green-4 rounded-sm group-active:scale-90 transition duration-100"></span>
          <span className="w-6 h-[2px] bg-green-4 rounded-sm group-active:scale-90 transition duration-100"></span>
          <span className="w-6 h-[2px] bg-green-4 rounded-sm group-active:scale-90 transition duration-100"></span>
        </div>
      </button>
      {/* DRAWER */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            ref={navContainer}
						tabIndex={-1}
            variants={swipeDown}
            initial="closed"
            animate="open"
            exit="closed"
            layout
            className={`w-64 h-[100vh] absolute left-0 top-0 select-none ${
              firstLoad ? "hidden" : null
            }`}
          >
            <MobileLogin setIsOpen={setIsOpen} />
            <motion.div
              ref={mobileNavRef}
              className={`w-full z-50 bg-neutral-200 text-[0.95rem] py-4 xl:py-0 xl:pb-4 overflow-y-auto overflow-x-hidden text-green-5 mobile-modal h-[calc(100vh-7rem)]`}
            >
              <ul className="flex flex-col mb-6 xl:mt-6">
                <h2 className="text-xl font-semibold mb-6 ml-6">Menu</h2>
                <Link onClick={() => setIsOpen(false)} href="/insurance">
                  <li className="hover:bg-neutral-300 px-6 py-2">Insurance</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/contact-us">
                  <li className="hover:bg-neutral-300 px-6 py-2">Contact Us</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/our-stores">
                  <li className="hover:bg-neutral-300 px-6 py-2">Our Stores</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/how-to-buy">
                  <li className="hover:bg-neutral-300 px-6 py-2">How To Buy</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/credit-card">
                  <li className="hover:bg-neutral-300 px-6 py-2">
                    GrocerGo Credit Card
                  </li>
                </Link>
              </ul>
              <ul className="flex flex-col mb-6 xl:mt-6">
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
                  <li className="hover:bg-neutral-300 px-6 py-2">
                    GrocerGo Blog
                  </li>
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/specials/space-you"
                >
                  <li className="hover:bg-neutral-300 px-6 py-2">Space You</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/recipes">
                  <li className="hover:bg-neutral-300 px-6 py-2">Recipes</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/catalog">
                  <li className="hover:bg-neutral-300 px-6 py-2">Catalog</li>
                </Link>
                <Link onClick={() => setIsOpen(false)} href="/my-favorites">
                  <li className="hover:bg-neutral-300 px-6 py-2">
                    My Favorites
                  </li>
                </Link>
              </ul>

              {/* SECTIONS */}
              <ul className="flex flex-col text-green-5">
                <h2 className="text-xl font-semibold mb-6 ml-6">Sections</h2>
                <MobileCategories setIsOpen={setIsOpen} />
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
