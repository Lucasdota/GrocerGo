import HandleImageLoad from "@/components/shared/HandleImageLoad";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  onPost: number;
  setOnPost: (value: number) => void;
  staticPosts: {
    id: number;
    date: string;
    title: string;
    text: string;
    images: StaticImageData[];
    recipe: {
      name: string;
      image: StaticImageData;
      ingredients: string[];
      instructions: string[];
    };
  }[];
};

const SinglePostPage = ({staticPosts, onPost, setOnPost}: Props) => {
  return (
    <motion.div
      className="h-full w-full font-serif bg-neutral-100 drop-shadow text-gray-800 p-6 flex flex-col gap-6 rounded-lg flip-posts-animation"
      key={"single-post"}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        y: 50,
        opacity: 0,
        transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 },
      }}
    >
      <div className="w-full flex justify-between xs:gap-2">
        <div>
          <h3 className="text-xl tracking-wide font-semibold xs:text-base">
            {staticPosts[onPost - 1].title}
          </h3>
          <span className="text-gray-400 text-sm tracking-wide xs:text-[0.7rem]">
            {staticPosts[onPost - 1].date}
          </span>
        </div>
        <button
          onClick={() => setOnPost(0)}
          className="h-fit px-4 py-2 xs:text-[0.7rem] rounded-lg drop-shadow bg-neutral-100 active:translate-y-0.5 font-semibold text-sm text-gray-600"
        >
          Back
        </button>
      </div>
      <p className="whitespace-normal xs:text-sm">
        {staticPosts[onPost - 1].text}
      </p>
      <ul className="flex w-full gap-8 justify-center">
        {staticPosts[onPost - 1].images.map((img, index) => (
          <li key={index}>
            <Image
              src={img}
              alt={"img" + index}
              width={300}
              height={300}
              onLoad={HandleImageLoad}
              className="rounded-lg border-4 border-green-5/30 transition-opacity opacity-0 duration-[.3s]"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center gap-6 xs:gap-0">
        <h4 className="text-2xl font-semibold xs:text-base">Recipe:</h4>
        <div className="w-full flex flex-col gap-6 justify-between items-center bg-neutral-100 p-12 rounded-lg">
          <h5 className="text-xl underline underline-offset-2 xs:text-base whitespace-normal text-center">
            {staticPosts[onPost - 1].recipe.name}
          </h5>
          <Image
            src={staticPosts[onPost - 1].recipe.image}
            alt="recipe-image"
            width={600}
            priority
						onLoad={HandleImageLoad}
            className="rounded-full my-6 h-auto xs:my-1 transition-opacity opacity-0 duration-[.3s]"
          />
          <div className="flex flex-col gap-6 items-center">
            <h6 className="font-semibold xs:text-sm">Ingredients:</h6>
            <ul className="list-disc mb-6 text-gray-600 xs:text-sm">
              {staticPosts[onPost - 1].recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h6 className="font-semibold xs:text-sm">Instructions:</h6>
            <ul className="list-decimal text-gray-600 xs:text-sm">
              {staticPosts[onPost - 1].recipe.instructions.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePostPage;
