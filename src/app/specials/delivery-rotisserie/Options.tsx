import { motion } from "framer-motion";
import Image from "next/image";
import RoastedChicken from "../../../../public/images/specials/roasted-chicken3.webp";
import RoastedDuck from "../../../../public/images/specials/roasted-duck.webp";
import Kebab from "../../../../public/images/specials/kebab.webp";
import HandleImageLoad from "@/components/shared/HandleImageLoad";

type Props = {
  setOptions: (value: boolean) => void;
};

const Options = ({ setOptions }: Props) => {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between text-gray-800"
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.1 }}
    >
      <div className="flex gap-4">
        {/* CHEF 1 */}
        <motion.div
          className="basis-1/3 bg-neutral-50 drop-shadow"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={RoastedChicken}
                alt={"roasted chicken"}
                width={177}
                height={150}
                onLoad={HandleImageLoad}
                className="rounded-xl brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
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
              delectable, savory feast delivered to your doorstep. Enjoy the
              rich flavors at your convenience.
            </p>
            <button className="py-2 grow-0 gg:text-sm gg:h-6 w-full h-7 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold">
              Order
            </button>
          </div>
        </motion.div>
        {/* CHEF 2 */}
        <motion.div
          className="basis-1/3 bg-neutral-50 drop-shadow"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={RoastedDuck}
                alt={"roasted duck"}
                width={189}
                height={150}
                onLoad={HandleImageLoad}
                className="rounded-xl brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
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
        </motion.div>
        {/* CHEF 3 */}
        <motion.div
          className="basis-1/3 bg-neutral-50 drop-shadow"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6 lg:gap-4 w-full p-4 h-full">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={Kebab}
                alt={"kebab"}
                width={157}
                height={150}
								onLoad={HandleImageLoad}
                className="rounded-xl brightness-125 w-32 h-32 gg:w-28 gg:h-28 transition-opacity opacity-0 duration-[.3s]"
              />
              <h3 className="font-bold text-lg tracking-wide gg:text-base">
                Shish Kebab
              </h3>
            </div>
            <p className="leading-5 gg:text-sm">
              <span className="font-semibold">For:</span>&nbsp;3 people
            </p>
            <p className="leading-5 gg:text-sm grow">
              Savor shish kebabs, expertly grilled and delivered to your door.
              Experience a taste of authentic Mediterranean culture and cuisine.
            </p>
            <button className="py-2 w-full h-7 gg:text-sm gg:h-6 border-t border-gray-200 bg-neutral-50 tracking-wide font-semibold grow-0">
              Order
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}
        transition={{ delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          id="backbtn"
          className="hover:-translate-y-0.5 text-lg px-6 py-2 rounded-lg bg-neutral-50 drop-shadow w-fit active:translate-y-1 font-bold tracking-wide lg:text-sm"
          onClick={() => setOptions(false)}
        >
          Back
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Options;
