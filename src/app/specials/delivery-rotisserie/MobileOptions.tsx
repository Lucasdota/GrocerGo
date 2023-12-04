import { motion } from "framer-motion";
import Image from "next/image";
import RoastedChicken from "../../../../public/images/specials/roasted-chicken3.webp";
import RoastedDuck from "../../../../public/images/specials/roasted-duck.webp";
import Kebab from "../../../../public/images/specials/kebab.webp";
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
              src={RoastedChicken}
              alt={"roasted chicken"}
              width={177}
              height={150}
              onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Roasted Chicken
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;4 people
          </p>
          <p className="leading-5 gg:text-sm grow">
            Experience our mouthwatering roasted chicken. Order now for a
            delectable, savory feast delivered to your doorstep. Enjoy the rich
            flavors at your convenience.
          </p>
          <button className="py-2 grow-0 gg:text-sm gg:h-6 w-full h-7 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold">
            Order
          </button>
        </div>
      </div>
      {/* CHEF 2 */}
      <div className="basis-1/3 bg-neutral-50 drop-shadow">
        <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={RoastedDuck}
              alt={"roasted duck"}
              width={189}
              height={150}
              onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Roasted Duck
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;6 people
          </p>
          <p className="leading-5 gg:text-sm grow">
            Savor aromatic, locally-sourced roasted duck, nourished by nature,
            delivered to your doorstep. Irresistibly original! Order for
            delivery today.
          </p>
          <button className="py-2 grow-0 gg:text-sm gg:h-6 w-full h-7 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold">
            Order
          </button>
        </div>
      </div>
      {/* CHEF 3 */}
      <div className="basis-1/3 bg-neutral-50 drop-shadow">
        <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={Kebab}
              alt={"kebab"}
              width={157}
              height={150}
							onLoad={HandleImageLoad}
              className="rounded-full brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
            />
            <h3 className="font-bold text-lg tracking-wide gg:text-base">
              Shish Kebab
            </h3>
          </div>
          <p className="leading-5 gg:text-sm">
            <span className="font-semibold">For:</span>&nbsp;3 people.
          </p>
          <p className="leading-5 gg:text-sm grow">
            Savor shish kebabs, expertly grilled and delivered to your door.
            Experience a taste of authentic Mediterranean culture and cuisine.
          </p>
          <button className="py-2 w-full h-7 gg:text-sm gg:h-6 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold grow-0">
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileOptions;
