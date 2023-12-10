"use client";
import Image from "next/image";

const ThirdCards = () => {
  return (
    <section className="w-full h-fit flex flex-col gap-4 lg:gap-2 lg:px-2 px-64 gg:px-44 xxl:px-28 xl:px-20">
      <div className="w-full h-full flex md:flex-col gap-4 lg:gap-2">
        {/* FIRST CARD */}
        <div className="h-full drop-shadow-lg w-1/2 md:w-full rounded-lg lg:rounded overflow-hidden relative transition duration-500">
          <Image
            src="/images/thirdcards/propa1.webp"
            alt="prime cattle, nurtured in optimal environments"
            width={900}
            height={506}
            loading="lazy"
            className="w-full h-full rounded-lg lg:rounded"
          />
        </div>
        {/* SECOND CARD */}
        <div className="h-full drop-shadow-lg w-1/2 md:w-full transition duration-500 rounded-lg lg:rounded overflow-hidden relative">
          <Image
            src="/images/thirdcards/propa2.webp"
            alt="don't forget to eat, your grocery haven for quality and savings"
            width={900}
            height={506}
            loading="lazy"
            className="w-full h-full rounded-lg lg:rounded"
          />
        </div>
      </div>

      <div className="w-full h-full flex md:flex-col gap-4 lg:gap-2">
        {/* THIRD CARD */}
        <div className="drop-shadow-lg h-full w-1/2 md:w-full transition duration-500 rounded-lg lg:rounded overflow-hidden relative">
          <Image
            src="/images/thirdcards/propa3.webp"
            alt="spice up your table, embark on a jorney through our hand-raised spices"
            width={900}
            height={506}
            loading="lazy"
            className="w-full h-full rounded-lg lg:rounded"
          />
        </div>
        {/* FOURTH CARD */}
        <div className="h-full drop-shadow-lg w-1/2 md:w-full transition duration-500 rounded-lg lg:rounded overflow-hidden relative">
          <Image
            src="/images/thirdcards/propa4.webp"
            alt="to do list, go to grocergo, cook my favorite meal, be happy"
            width={900}
            height={506}
            loading="lazy"
            className="w-full h-full rounded-lg lg:rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdCards;
