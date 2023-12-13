import { FaSearch } from "react-icons/fa";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  handleSearch: () => void;
  loading: boolean;
};

const SearchBar = ({ query, setQuery, handleSearch, loading }: Props) => {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Search recipes by ingredients:</h2>
      <form onSubmit={handleSearch} className="h-9 relative flex items-center">
        <input
					aria-label="search recipes by ingredients"
          spellCheck="false"
          type="text"
          placeholder="Enter an ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-xl pl-10 pr-3 py-1.5 text-white bg-gradient-to-br from-[#494949] to-[#313131] placeholder-neutral-200 focus:outline-none text-sm shadow h-full w-[13.7rem]"
        />
        <button
					aria-label="search"
          onClick={handleSearch}
          disabled={loading}
          className="rounded-r-xl h-full shadow bg-transparent absolute bottom-0 left-[0.8rem] group"
        >
          <FaSearch className="text-neutral-200 group-active:scale-90" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
