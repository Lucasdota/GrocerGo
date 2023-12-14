import UrlizeWords from '@/components/shared/UrlizeWords';
import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";
import { Recipe } from "./recipeTypes";
import { ImArrowRight } from 'react-icons/im';

type Props = {
  searched: Recipe[];
  setClicked: (value: string) => void;
};

const Results = ({ searched, setClicked }: Props) => {
  const router = useRouter();

  function handleClick(url: string, id: number) {
    setClicked("searched");
    router.push(`/recipes?id=${id}name=${url}`);
  }

	function handleImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.classList.remove("opacity-0");
  }

  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 gap-y-0 md:gap-y-4 md:gap-4 md:pb-12 w-full place-content-center">
      {searched.map((recipe) => {
        const url = UrlizeWords(recipe.title);
        return (
          <button
            onClick={() => handleClick(url, recipe.id)}
            key={recipe.id}
            className="relative w-fit mx-auto h-[calc(100%-30px)] rounded-[2rem] overflow-hidden flex justify-center shadow group"
          >
            <Image
              priority
              loading="eager"
              src={recipe.image}
              alt={recipe.title}
              width={556}
              height={370}
              onLoad={handleImageLoad}
              className="rounded-[2rem] h-auto max-h-[370px] transition-opacity opacity-0 duration-[.3s]"
            />

            <div className="absolute top-0 w-full h-fit bg-gradient-to-b from-black/70 to-transparent p-4 pb-8">
              <p className="font-semibold text-white xxs:text-sm md:whitespace-normal text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                {recipe.title}
              </p>
            </div>
            <p className="text-white lg:hidden rounded-tl-[2rem] font-semibold absolute -bottom-5 -right-5 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 w-fit bg-neutral-100 py-2 px-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              <ImArrowRight className="text-neutral-700" />
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default Results