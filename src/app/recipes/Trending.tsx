import Image from 'next/image';
import React, { useCallback, useEffect} from 'react';
import UrlizeWords from '@/components/shared/UrlizeWords';
import { Recipe } from "./recipeTypes";
import { useRouter } from "next/navigation";
import { ImArrowRight} from "react-icons/im";

type Props = {
  trending: Recipe[];
  setTrending: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setClicked: (value: string) => void
};

const Trending = ({
  trending,
  setTrending,
  setClicked
}: Props) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const router = useRouter();

	//is there's already a trending item in the localStorage, grab it, otherwise, fetch 3 random recipes and store in it
  const getTrending = useCallback(async () => {
    const check = localStorage.getItem("trending");
    if (check) {
      setTrending(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`
      );
      const data = await api.json();
      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
    }
  }, [setTrending, apiKey]);

  useEffect(() => {
    getTrending();
  }, [getTrending]);

  function handleClick(url: string, id: number) {
    setClicked("trending");
    router.push(`/recipes?id=${id}name=${url}`);
  }

	function handleImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    e.currentTarget.classList.remove("opacity-0");
  }

  return (
    <section className="w-full space-y-8">
      <h3 className="text-2xl md:text-xl font-bold text-gray-800 md:text-center">Trending</h3>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8 md:gap-8 w-full place-content-center">
        {trending.map((recipe) => {
          const url = UrlizeWords(recipe.title);
          return (
            <button
              onClick={() => handleClick(url, recipe.id)}
              key={recipe.id}
              className="w-fit mx-auto rounded-[2rem] overflow-hidden flex justify-center shadow group relative"
            >
              <Image
                priority
                src={recipe.image}
                alt={recipe.title}
                width={556}
                height={370}
                className="rounded-[2rem] h-auto transition-opacity opacity-0 duration-[.3s]"
                onLoad={handleImageLoad}
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
    </section>
  );
};

export default Trending