import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import Suggestions from "./Suggestions";

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
	const searchBarRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    // Redirect to the search results page with the search term
		const dashedTerm = searchTerm.replace(/, +/g, "/").replace(/,/g, "/").toLocaleLowerCase();
		const finalTerm = dashedTerm.replace(/\s+/g, "-");

    router.push(`/search?/${finalTerm}`);
		setSearchTerm("");
  };

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	}

	useEffect(() => {
		let handler = (e: MouseEvent) => {
			if (!searchBarRef.current?.contains(e.target as Node)) {
				setSearchTerm("")
			}
		}

		//if focus is not within the search bar, reset its value
		let checkFocus = (e: FocusEvent) => {
      // Check if the target is a Node
      if (e.target instanceof Node) {
        if (!searchBarRef.current?.contains(e.target)) {
          setSearchTerm("")
        }
      }
    }


    document.addEventListener("mousedown", handler);
		document.addEventListener("focusin", checkFocus);
		return () => {
      document.removeEventListener("mousedown", handler);
			document.removeEventListener("focusin", checkFocus);
    };
	}, [])

  return (
    <div
      ref={searchBarRef}
      className={`xl:hidden flex w-full rounded-l-sm my-4 mx-6 xl:my-3 xl:mx-0 min-w-[15rem]`}
    >
      <div
        role="search"
        className="w-full h-full relative text-gray-600 text-sm"
      >
        <input
          aria-label="Search using comma, i.e.: beer, olive oil, milk, iogurt, wine"
          name="search-bar"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          spellCheck="false"
          className="w-full h-full px-4 rounded-l-sm placeholder:text-sm outline-none decoration-none border border-black/10"
          placeholder="Search using comma, i.e.: beer, olive oil, milk, iogurt, wine"
        />
        <Suggestions
          className={"top-10"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <button
				aria-label="search product"
        onClick={handleSearch}
        className="flex  gap-2 items-center px-6 py-2 bg-green-4 rounded-r-sm text-white text-[0.7rem] group"
      >
        <BsSearch
          className="text-white group-hover:-scale-x-100 transition duration-100 group-active:scale-90"
          size={20}
        />
        <span className="lg:hidden">SEARCH</span>
      </button>
    </div>
  );
}
