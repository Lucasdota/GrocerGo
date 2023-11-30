"use client"
import HeroSlider from "@/components/homepage/HeroSlider/HeroSlider";
import BestBeverages from "@/components/homepage/BestBeverages";
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
import { useState, useEffect } from "react";

const Homepage = () => {
	const [skeleton, setSkeleton] = useState(true);

	useEffect(() => {
    setSkeleton(false);
  }, [setSkeleton]);

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
          <TodaysOffers />
          <BestBeverages />
          <FullFridge />
          <Essentials />
          <Cleaning />
          <SecondCards />
          <Partners />
          <ThirdCards />
          <SnackbarComponent />       
        </>
      )}
    </>
  );
};

export default Homepage;
