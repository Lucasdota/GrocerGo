"use client"
import { useState, useEffect, useCallback } from "react";
import SearchBar from "./SearchBar";
import Trending from "./Trending";
import Results from "./Results";
import Details from "./Details";
import { Recipe } from "./recipeTypes";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import LoadingGrid from "./LoadingGrid";
import chef from '../../../public/images/others/recipes-icons/chefs.png';
import plate from '../../../public/images/others/recipes-icons/plates.png';
import cooking from '../../../public/images/others/recipes-icons/cooking.png';
import recipe from '../../../public/images/others/recipes-icons/recipe.png';
import Image from "next/image";

const Recipes = () => {
	//attached to the search bar
  const [query, setQuery] = useState<string>("");
	//shows a loading grid when using the search bar
  const [loading, setLoading] = useState<boolean>(false);
	//store 3 random recipes for the trending section
  const [trending, setTrending] = useState<Recipe[]>([]);
	//store recipes retrieved from the search bar
	const [searched, setSearched] = useState<Recipe[]>([]);
	//change content of page based on buttons clicked
  const [clicked, setClicked] = useState<string>("main");
	//check the url path to dispaly main page or details page
	const [urlHasId, setUrlHasId] = useState<string|null>(null);
	//used to set the delay in the motion.div animation due to the direct shared url behavior
	const [timesRendered, setTimesRendered] = useState<number>(0);
  const apiKey = process.env.SPOONACULAR_API_KEY;
	const search = useSearchParams();

  const handleSearch = useCallback(async () => {
		setSearched([]);
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}`,
      );
      if (response.ok) {
        const data = await response.json();
        setSearched(data);	
      } else {
        console.error("Error fetching recipes:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  }, [query, apiKey]);

	useEffect(() => {
		setTimesRendered(1);
		const id = search.get("id");
		setUrlHasId(id);
		let handler = () => {
			setUrlHasId(id);
		}

		window.addEventListener('popstate', handler);

		return () => {
			window.removeEventListener('popstate', handler);
		}
	}, [search])

  return (
    <section className="w-full bg-neutral-100/90 md:p-10 xs:p-6 shadow min-h-screen p-20 pt-12 pb-40">
      <AnimatePresence mode="wait">
        {clicked === "main" && urlHasId === null ? (
          <motion.div
            key={"main"}
            className="flex flex-col items-center gap-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1, delay: timesRendered === 0 ? .3 : 0 }}
          >
            <h1 className="text-5xl md:text-3xl text-gray-800 font-sansita font-bold underline underline-offset-4 whitespace-normal text-center tracking-wide">
              Delicious Recipes to Elevate Your Culinary Experience
            </h1>
						<div className="flex w-full justify-around">
							<Image src={chef} alt="chef icon" width={64} height={64} />
							<Image src={recipe} alt="recipe icon" width={64} height={64} />
							<Image src={cooking} alt="cooking icon" width={64} height={64} />
							<Image src={plate} alt="plate icon" width={64} height={64} />
						</div>
            <p className="whitespace-normal text-gray-900">
              Welcome to our Recipes Page, your go-to destination for culinary
              inspiration and gastronomic adventures! At GrocerGo, we believe
              that great meals begin with quality ingredients. That&apos;s why
              we&apos;ve curated a collection of delectable recipes designed to
              make the most of the products you can find in our store. Whether
              you&apos;re a seasoned chef or a novice in the kitchen, our
              diverse range of recipes will surely tantalize your taste buds and
              provide you with creative cooking ideas. Explore our carefully
              crafted selection and discover the joy of cooking with the finest
              ingredients.
            </p>
            <Trending
              trending={trending}
              setTrending={setTrending}
              setClicked={setClicked}
            />
            <div className="rounded bg-black/20 w-full h-0.5" />
            <SearchBar
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
              loading={loading}
            />
            {loading && <LoadingGrid />}
            <Results
              searched={searched}
              setClicked={setClicked}
            />
          </motion.div>
        ) : (
					<Details
						clicked={clicked}
						setClicked={setClicked}
						trending={trending}
						searched={searched}
					/>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Recipes