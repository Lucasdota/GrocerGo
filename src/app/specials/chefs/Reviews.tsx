import Image from "next/image";
import Review1 from "../../../../public/images/specials/review1.webp";
import Review2 from "../../../../public/images/specials/review2.webp";
import Review3 from "../../../../public/images/specials/review3.webp";
import { motion } from "framer-motion";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

const staticReviews = [
  {
    author: "Jane Smith",
    comment:
      "My experience with the chef service was generally good, but there's room for improvement.",
    avatar: Review1,
  },
  {
    author: "John Doe",
    comment:
      "I'm impressed with the excellent quality and professionalism of this service.",
    avatar: Review2,
  },
  {
    author: "Bob Camira",
    comment:
      "The chef's team arrived on time, they were very professional, and the food was delicious!",
    avatar: Review3,
  },
];

const Reviews = () => {
  return (
    <motion.div
      key={"review-card"}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <ul className="flex md:flex-col gap-6 md:gap-8 w-full">
        {staticReviews.map((review, index) => (
          <li
            key={index}
            className="bg-neutral-50 rounded-lg p-4 w-1/3 md:w-full whitespace-normal flex flex-col items-center gap-1 drop-shadow"
          >
            <Image
              alt="picture"
              src={review.avatar}
              width={150}
              height={150}
							onLoad={HandleImageLoad}
              className="rounded-full w-20 h-20 transition-opacity opacity-0 duration-[.3s]"
            />
            <div className="text-gray-800 flex flex-col gap-2">
              <h4 className="font-semibold mx-auto xs:text-[0.9rem]">
                {review.author}
              </h4>
              <p className="text-[0.95rem] xs:text-sm leading-5">
                <span className="text-gray-400">&quot;</span>
                {review.comment}
                <span className="text-gray-400">&quot;</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Reviews;
