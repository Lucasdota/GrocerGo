"use client"
import HeroSlider from "@/components/homepage/HeroSlider/HeroSlider";
import Beverages from "@/components/homepage/Beverages";
import TodaysOffers from "@/components/homepage/TodaysOffers/TodaysOffers";
import FullFridge from "@/components/homepage/FullFridge";
import Essentials from "@/components/homepage/Essentials";
import Cleaning from "@/components/homepage/Cleaning";
import Partners from "@/components/homepage/Partners/Partners";
import FirstCards from "@/components/homepage/FirstCards";
import ThirdCards from "@/components/homepage/ThirdCards";
import SnackbarComponent from "@/components/shared/SnackbarComponent";
import Sections from "@/components/homepage/Sections";
import SecondCards from "@/components/homepage/SecondCards/SecondCards";
import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [skeleton, setSkeleton] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setSkeleton(false);
  }, [setSkeleton]);

  //delaying the rendering of some components until the user has scrolled down a certain distance can improve the initial page load performance. This technique is often referred to as "lazy loading" or "deferred loading."
  useEffect(() => {
		if (window.scrollY > 100) {
      setHasScrolled(true);
    }

    const scrollCheck = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
        // Remove the event listener once the condition is met
        window.removeEventListener("scroll", scrollCheck);
      }
    };

    window.addEventListener("scroll", scrollCheck);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  return (
    <>
      {skeleton ? (
        <div className="w-[98%] min-h-screen mt-5 md:mt-2 space-y-5 md:space-y-2">
          <div className="h-[65dvh] rounded-xl bg-neutral-300 animate-pulse" />
          <div className="h-[35dvh] rounded-xl bg-neutral-300 animate-pulse" />
        </div>
      ) : (
        <>
          <HeroSlider />
          <FirstCards />
          <Sections />
					{hasScrolled && (
					<>
						<TodaysOffers />
						<Beverages />
						<FullFridge />
						<Essentials />
						<Cleaning />
						<SecondCards />
						<Partners />
						<ThirdCards />								
					</>
					)}
          <SnackbarComponent />
        </>
      )}
    </>
  );
};

export default Homepage;
