"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import MiniNavbar from "./MiniNavbar";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";
import Drawer from "./Drawer";
import MobileDrawer from "./MobileDrawer";
import MobileSearchBar from "./MobileSearchBar";
import Links from "./Links";
import { useScrollBlock } from "@/app/hooks/useScrollBlock";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isTop, setIsTop] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isSmartphone, setIsSmartphone] = useState<boolean>(false);
	const [blockScroll, allowScroll] = useScrollBlock();

  //is mobile and smartphone checker
  useEffect(() => {
    const mediaQueryXl = window.matchMedia("(max-width: 1279px)");
		const mediaQueryMd = window.matchMedia("(max-width: 767px)");

    if (mediaQueryXl.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

		if (mediaQueryMd.matches) {
      setIsSmartphone(true);
    } else {
      setIsSmartphone(false);
    }

		function handleMobile() {
			if (mediaQueryXl.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
		}

		function handleSmartphone() {
			if (mediaQueryMd.matches) {
        setIsSmartphone(true);
      } else {
        setIsSmartphone(false);
      }
		}

		window.addEventListener("resize", handleMobile);
		window.addEventListener("resize", handleSmartphone);
		return () => {
			window.removeEventListener("resize", handleMobile);
			window.removeEventListener("resize", handleSmartphone);
		}
  }, []);
  
	//proper blockScroll when all categories menu is open
  useEffect(() => {
    if (isOpen) {	
			if (!isSmartphone) {			
				blockScroll();	
			} else {		
				const html = document.documentElement;
				const { body } = document;
				html.style.position = "relative";
				body.style.position = "relative";
				html.style.overflow = "hidden";
				body.style.overflow = "hidden";
			}     		
    } else {						
      allowScroll();
    }
  }, [isOpen, isSmartphone, blockScroll, allowScroll]);

  useEffect(() => {
    if (window.scrollY < 31.61) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    //if top checker
    const handleScroll = () => {
      if (window.scrollY < 31.61) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: Remove the event listener before the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsTop]);

  return (
    <header
      className={`navbar-header block w-full min-w-[320px] fixed xl:static top-0 z-50 shadow-md`}
    >
      {isTop && <MiniNavbar />}
      {/* gray overlay prevents interactivity in other areas of the app when drawer is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="overlay"
            className={`fixed h-full w-full bg-black/40 z-50 top-0 left-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <nav
        className={`flex flex-col h-28 px-8 z-40 max-w-[2560px] mx-auto w-full bg-[rgb(240,240,240)]`}
      >
        <div className="flex h-[65%] xl:h-full xl:justify-between xl:items-center">
          <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* LOGO */}
          <Link
            aria-label="grocergo logo, click to go to the homepage"
            href="/"
            className={`font-bold font-sansita tracking-wide italic flex items-center text-green-5 text-2xl xl:h-full xl:items-end xl:pb-1`}
          >
            Grocer<span className="text-green-3">Go</span>
          </Link>
          <SearchBar />
          <Login />
          <Cart isSmartphone={isSmartphone} />
        </div>
        <MobileSearchBar />
        <div className="xl:hidden flex h-[35%] justify-center items-center">
          {!isMobile && (
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} isTop={isTop} />
          )}
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
