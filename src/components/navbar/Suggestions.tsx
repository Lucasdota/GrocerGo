import { catalog } from "../shared/Catalog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
	className: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.04
    },
  },
};

const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Suggestions = ({ searchTerm, setSearchTerm, className }: Props) => {
  const [matchedWords, setMatchedWords] = useState<string[]>([]);
	const router = useRouter();

  useEffect(() => {
		const newMatchedWords: string[] = [];
    if (searchTerm.length > 2) {    
      catalog.forEach((obj) => {
        obj.products.forEach((obj2) => {
					const lowercaseTerm = searchTerm.toLowerCase();
					const lowercaseName = obj2.name.toLowerCase();
          if (
            lowercaseName.includes(lowercaseTerm) &&
            !newMatchedWords.includes(obj2.name)
          ) {
            newMatchedWords.push(obj2.name);
          }
        });
      }); 
    }

 		if (newMatchedWords.length > 0) {
			setMatchedWords(newMatchedWords);
		} else {
			setMatchedWords([]); // Reset the array when no matches are found
		}
		
  }, [searchTerm]);

	function clickSearch(str: string) {
    const finalTerm = str.replace(/\s/g, "-").toLocaleLowerCase();
		router.push(`/search?/${finalTerm}`);
    setSearchTerm("");
		setMatchedWords([]);
	}

  return (
    <>
      {matchedWords.length > 0 && 
        <motion.ul
          variants={container}
          className={`${className} absolute w-full z-[60]`}
          initial="hidden"
          animate="show"
        >
          {matchedWords.map((item, index) => (
            <motion.li variants={child} key={index}>
              <button
                onClick={() => clickSearch(item)}
                className="w-full text-left shadow border-t border-x bg-white hover:bg-slate-100 px-4 py-1.5"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      }
    </>
  );
};

export default Suggestions;
