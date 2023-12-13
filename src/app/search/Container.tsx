"use client";
import { catalog } from "@/components/shared/Catalog";
import Interface from "./Interface";
import NoResults from "../../../public/images/mini-pages/no_results.webp";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HandleImageLoad from "@/components/shared/HandleImageLoad";


type Product = {
  id: number;
  category: string;
  image: string;
  name: string;
  old_price: number;
  price: number;
  search_words: string[];
  section?: string;
};

function Container () {
	const router = useRouter();
  const [urlConditionMet, setUrlConditionMet] = useState(false);
  const [splitTerms, setSplitTerms] = useState<string[]>([]);
  const searchParams = useSearchParams();

	useEffect(() => {
    //useEffect to monitor changes in window.location.search
    const checkUrlCondition = () => {
      if (window.location.search.length !== 0) {
        setUrlConditionMet(true);
      } else {
        setUrlConditionMet(false);
      }
    };

    setSplitTerms(
      window.location.search.replace("?/", "").replace(/-/g, " ").split("/")
    );

    // Call the function initially
    checkUrlCondition();

    // Add an event listener to handle changes in the URL
    window.addEventListener("popstate", checkUrlCondition);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", checkUrlCondition);
    };
  }, [searchParams]);

  const uniqueProductNames: string[] = [];

  // Search logic
  const results = catalog.reduce((acc, section) => {
    const sectionResults = section.products.filter((product: Product) => {
      return product.search_words.some((word) => {
        return (
          splitTerms &&
          splitTerms.some((word2) => {
            // null/undefined check
            if (word2.toLowerCase() === word.toLowerCase()) {
              if (!uniqueProductNames.includes(product.name)) {
                product.section = section.section; // adds section to use it in the GenerateCards Link
                uniqueProductNames.push(product.name);
                return true; // Return true to include the product in the results
              }
            }
            return false; // Return false to continue searching for other matching words
          })
        );
      });
    });
    return [...acc, ...sectionResults];
  }, [] as Product[]);

	return (
    <>
      {urlConditionMet ? (
        <>
          {results.length === 0 ? (
            <div className="mx-auto flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col items-center gap-12">
                <h1 className="text-3xl font-bold mx-auto text-gray-800 mt-12">
                  No products match the criteria for &quot;
                  <span className="text-green-3">
                    {window.location.search
                      .replace("?/", "")
                      .replace(/-/g, " ")
                      .replace(/[/]/g, ", ")}
                  </span>
                  &quot;.
                </h1>
                <button
                  onClick={() => router.back()}
                  className="hover-bg2-effect text-neutral-100 bg-green-4 after:bg-green-3 hover:text-neutral-100 outline outline-[2px] outline-green-3 hover:outline-green-4 font-bold text-2xl  px-4 py-1.5 rounded-lg drop-shadow-md"
                >
                  Back
                </button>
              </div>
              <Image
                src={NoResults}
                alt="no results found"
                width={512}
                height={512}
								onLoad={HandleImageLoad}
                className="transition-opacity opacity-0 duration-[.3s]"
              />
            </div>
          ) : (
            <>
              <header>
                <h1 className="text-2xl mt-8 font-semibold text-gray-800 lg:ml-4">
                  Search results for &quot;
                  <span className="text-green-3">
                    {window.location.search
                      .replace("?/", "")
                      .replace(/-/g, " ")
                      .replace(/[/]/g, ", ")}
                  </span>
                  &quot;
                </h1>
              </header>
              <section>
                <Interface results={results} />
              </section>
            </>
          )}
        </>
      ) : (
        <div className="my-12 space-y-12">
          <div className="w-full h-64 rounded-lg bg-gray-200 animate-pulse"></div>
          <div className="w-full h-[32rem] rounded-lg bg-gray-200 animate-pulse"></div>
        </div>
      )}
    </>
  );
}

export default Container