import { useState } from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

type Props = {
  post: {
    id: number;
    date: string;
    title: string;
    text: string;
  };
  setOnPost: (value: number) => void;
};

function GeneratePosts({ post, setOnPost }: Props) {
  const [like, setLike] = useState<string>("none");

  function checkLike(str: string) {
    if (str === "liked") {
      if (like === "none" || like === "disliked") {
        setLike(str);
      } else {
        setLike("none");
      }
    } else {
      if (like === "none" || like === "liked") {
        setLike(str);
      } else {
        setLike("none");
      }
    }
  }

	function handleClick() {
		setOnPost(post.id);
		window.scrollTo(0, 350); 
	}

  return (
    <div className="w-full h-64 font-serif bg-neutral-100 rounded-lg drop-shadow relative p-6 flex flex-col items-center justify-between text-gray-800 overflow-hidden">
      <div className="flex w-full justify-between mb-6 xxs:flex-col">
        <h3 className="text-xl tracking-wide font-semibold sm:text-base">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm italic tracking-widest sm:text-[0.7rem]">
          {post.date}
        </p>
      </div>
      <p className="w-full tracking-wide whitespace-normal sm:text-sm">
        {post.text}
      </p>
      <div className="absolute w-full h-full top-0 bg-blog-posts flex flex-col justify-end pb-4 px-6">
        <div className="w-full flex justify-between">
          <div className="flex items-center font-mono gap-2">
            <div className="flex items-center">
              <button
                aria-label="like this post"
                onClick={() => checkLike("liked")}
              >
                <BiSolidLike
                  className={`w-6 h-6 mr-1 ${
                    like === "liked" ? "text-green-3" : "text-gray-400"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-semibold mr-2 ${
                  like === "liked" ? "text-green-3" : "text-gray-600"
                }`}
              >
                {like === "liked" ? 1 : 0}
              </span>
            </div>
            <div className="flex items-center">
              <button
                aria-label="dislike this post"
                onClick={() => checkLike("disliked")}
              >
                <BiSolidDislike
                  className={`w-6 h-6 mr-1 ${
                    like === "disliked" ? "text-red-400" : "text-gray-400"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-semibold ${
                  like === "disliked" ? "text-red-400" : "text-gray-600"
                }`}
              >
                {like === "disliked" ? 1 : 0}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleClick()}
            className="text-gray-600 tracking-wider text-sm"
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeneratePosts;
