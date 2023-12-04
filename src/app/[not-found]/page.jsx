import HandleImageLoad from "@/components/shared/HandleImageLoad";
import NoResults from "../../../public/images/mini-pages/no_results.webp";
import Image from "next/image";

export const metadata = {
  title: "GrocerGo | Not found"
};

const page = () => {
  return (
    <main className="mx-auto flex flex-col items-center gap-12 min-h-screen bg-gradient-to-b from-neutral-100 to-[#262626]">
      <h1 className="text-5xl font-bold mx-auto text-gray-800 mt-12 font-sansita bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-700 xs:text-center">
        PAGE NOT FOUND.
      </h1>
      <Image
        src={NoResults}
        loading="eager"
        priority
        alt="no results found"
        width={512}
        height={512}
				onLoad={HandleImageLoad}
        className="transition-opacity opacity-0 duration-[.3s]"
      />
    </main>
  );
};

export default page;
