import { motion } from "framer-motion";
import Image from "next/image";
import Chef1 from "../../../../public/images/specials/chef1.webp";
import Chef2 from "../../../../public/images/specials/chef2.webp";
import Chef3 from "../../../../public/images/specials/chef3.webp";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

const MobileOptions = () => {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center gap-6 text-gray-800"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}
      transition={{ delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* CHEF 1 */}
      <div className="basis-1/3 bg-neutral-50 drop-shadow">
        <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Chef1}
              alt={"chef 1"}
              width={200}
              height={200}
              onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Isaac Poleskaz
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;birthdays, small
            gatherings, reunions and casual parties.
          </p>
          <p className="leading-5 gg:text-sm grow">
            Specialized in delivering excellence through his creation of
            desserts, cakes, and beverages. His team is well-equipped to turn
            any party into a memorable event!
          </p>
          <button className="py-2 grow-0 gg:text-sm gg:h-6 w-full h-7 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold">
            Select
          </button>
        </div>
      </div>
      {/* CHEF 2 */}
      <div className="basis-1/3 bg-neutral-50 drop-shadow">
        <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Chef2}
              alt={"chef 2"}
              width={200}
              height={200}
              onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Lin Park
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;company events,
            average gatherings, exotic reunions and social parties.
          </p>
          <p className="leading-5 gg:text-sm grow">
            Her team brings the latest and freshest experience of Oriental
            cuisine, including major culinary influences from the East, such as
            Thai, Chinese, Japanese, and much more.
          </p>
          <button className="py-2 grow-0 gg:text-sm gg:h-6 w-full h-7 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold">
            Select
          </button>
        </div>
      </div>
      {/* CHEF 3 */}
      <div className="basis-1/3 bg-neutral-50 drop-shadow">
        <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Chef3}
              alt={"chef 3"}
              width={200}
              height={200}
							onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Jonathan Maxwell
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;big events, big
            gatherings, weddings and special parties.
          </p>
          <p className="leading-5 gg:text-sm grow">
            An experienced team capable of delivering the most satisfying
            experience for all types of large events, led by a renowned chef
            with two Michelin stars.
          </p>
          <button className="py-2 w-full h-7 gg:text-sm gg:h-6 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold grow-0">
            Select
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileOptions;
