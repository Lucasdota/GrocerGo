import Image from "next/image";
import { Recipe } from "./recipeTypes";
import { useEffect, useState, useCallback } from "react";
import HappyFace from "../../../public/images/others/happy-face.webp";
import BackBtn from "./Back-btn";
import { useSearchParams } from "next/navigation";
import ErrorMessage from './ErrorMessage';
import { motion } from "framer-motion";
import HandleImageLoad from "@/components/shared/HandleImageLoad"

type Props = {
  clicked: string;
  setClicked: (value: string) => void;
  trending: Recipe[];
  searched: Recipe[]
};

const Details = ({
  clicked,
  setClicked,
  trending,
  searched
}: Props) => {
	//store recipe find by its id
  const [recipe, setRecipe] = useState<Recipe | undefined>();
	//guarantees the fetch method is only called once
  const apiKey = process.env.SPOONACULAR_API_KEY;
	//gets the id from the url to use in the fetch method
  const searchParams = useSearchParams();

  const getRecipeById = useCallback(async (id: string) => {	
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );
      if (!response.ok) {
				setRecipe(undefined);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();	
      setRecipe(data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching recipe:", error);
      throw error;
    }
  }, [apiKey]);

  useEffect(() => {	
      const details =
        clicked === "trending"
          ? trending
          : clicked === "searched"
          ? searched
          : [];

      //get the id from the url
      const getID = searchParams.get("id")?.split("name");
      if (getID !== undefined) {
        const id = getID![0];

        //handles the case where the user lands directly on an specific recipe page(i.e. through shared url)
        if (details.length === 0) {
          getRecipeById(id);
        } else {

					if (clicked === "trending" || clicked === "main") {
						// Find the recipe object in the details array					
						const recipeObj = details.find((obj) => obj.id === parseInt(id));
						setRecipe(recipeObj);
					} else {
						getRecipeById(id);
					}   
        }
      }
  }, [
    clicked,
    trending,
    getRecipeById,
    searchParams,
    searched
  ]);

  return (
    <div className="w-full min-h-screen">
      {recipe === undefined ? (
        <ErrorMessage clicked={clicked} />
      ) : (
        <motion.div
          className="gap-8 flex flex-col md:pb-16"
          key={"details"}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <BackBtn setClicked={setClicked} />
          <h2 className="md:whitespace-normal text-center text-3xl md:text-2xl text-gray-800 font-bold px-10">
            {recipe?.title}
          </h2>
					<Image
						src={recipe!.image}
						alt={recipe!.title}
						width={500}
						height={500}
						priority
						loading="eager"
						onLoad={HandleImageLoad}
						className="h-auto w-auto rounded-[2rem] shadow mx-auto transition-opacity opacity-0 duration-[.3s]"
					/>

          {/* ingredients */}
          <div className="mx-auto w-3/5 space-y-4">
            <h3 className="font-bold text-xl text-neutral-700">Ingredients:</h3>
            <ul className="list-disc whitespace-normal text-neutral-800 space-y-1.5">
              {recipe.extendedIngredients.length === 0 ? (
                <p>The author provided no ingredients.</p>
              ) : (
                recipe.extendedIngredients.map((obj, index) => (
                  <li key={index} className="leading-5">
                    {obj.original}
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* instructions */}
          <div className="mx-auto w-3/5 space-y-4">
            <h3 className="font-bold text-xl text-neutral-700">
              Instructions:
            </h3>
            <ol className="list-decimal whitespace-normal text-neutral-800 space-y-1.5">
              {recipe.analyzedInstructions.length === 0 ? (
                <p>The author provided no instructions.</p>
              ) : (
                recipe.analyzedInstructions[0].steps.map((obj, index) => (
                  <li key={index} className="leading-5">
                    {obj.step}
                  </li>
                ))
              )}
            </ol>
          </div>

          {/* happy message */}
          <div className="mx-auto flex flex-col items-center gap-2">
            <p className="text-neutral-700 text-xl font-bold text-center">
              That&apos;s it, now enjoy your delicious meal!
            </p>
            <Image
              src={HappyFace}
              alt="happy face"
              width={128}
              height={128}
              className="h-20 w-20"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Details;