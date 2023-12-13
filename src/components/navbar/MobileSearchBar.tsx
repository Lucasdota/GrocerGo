import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import Suggestions from "./Suggestions";

export default function MobileSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
	const mobileSearchBarRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    // Redirect to the search results page with the search term
    const dashedTerm = searchTerm.replace(/, +/g, "/").replace(/,/g, "/");
    const finalTerm = dashedTerm.replace(/\s+/g, "-");

    router.push(`/search?/${finalTerm}`);
    setSearchTerm("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

	useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!mobileSearchBarRef.current?.contains(e.target as Node)) {
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      ref={mobileSearchBarRef}
      className="hidden xl:flex h-1/2 pb-1 w-full rounded-l-sm my-4 mx-6 xl:my-3 xl:mx-0 min-w-[15rem]"
    >
      <div className="w-full h-full relative text-gray-600 text-sm">
        <input
          aria-label="Search using comma, i.e.: beer, olive oil, milk, iogurt, wine"
          name="mobile-search-bar"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          spellCheck="false"
          className="h-full w-full px-4 border border-black/10 text-gray-600 text-sm rounded-l-sm placeholder:text-sm outline-none decoration-none"
          placeholder="Search using comma, i.e.: beer, olive oil, milk, iogurt, wine"
        />
        <Suggestions
          className={"top-[2.2rem]"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <button
        aria-label="search product"
        onClick={handleSearch}
        className="flex border-l border-black/10 gap-2 items-center px-6 py-2 bg-green-4 rounded-r-sm text-white text-[0.7rem] group"
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
