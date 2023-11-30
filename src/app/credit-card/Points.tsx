import { FaFly } from "@react-icons/all-files/fa/FaFly";
import { GiFlyingFlag } from "@react-icons/all-files/gi/GiFlyingFlag";
import { GiFlyingShuriken } from "@react-icons/all-files/gi/GiFlyingShuriken";
import { ImCart } from "@react-icons/all-files/im/ImCart";

type Props = {}

const Points = (props: Props) => {
	return (
    <div className="flex flex-col gap-16">
      <div className="flex w-full gap-8 xl:gap-16 xl:flex-col items-center justify-center">
        <h3 className="font-bold w-1/2 text-3xl xl:w-full xl:text-center font-sansita tracking-wide whitespace-normal">
          Paying using your <span className="text-green-4">GrocerGo cards</span>{" "}
          earns you airline miles or cashback rewards with us
        </h3>
        <h4 className="w-1/2 xl:w-fit border border-green-4 py-2 px-4 flex items-center justify-center text-xl sm:text-sm gg:flex-wrap">
          Every<span className="font-bold">&nbsp;US$1</span>&nbsp;spent on
          purchases equals up to&nbsp;
          <span className="font-bold">&nbsp;5 points*</span>
        </h4>
      </div>
      <div className="flex w-full gap-8 xl:flex-col xl:gap-16 items-center">
        <div className="w-1/2 xl:w-full rounded-xl border border-neutral-300 text-center">
          <p className="h-16 bg-gray-200 rounded-t-xl flex items-center justify-center">
            Exchange for&nbsp;
            <span className="font-bold">&nbsp;Airline Miles</span>
          </p>
          <div className="h-fit bg-gray-100 rounded-b-xl px-10 py-8 flex flex-col items-center justify-center">
            <div className="h-1/2 mb-8 flex items-center justify-center w-full whitespace-normal sm:flex-col sm:h-fit">
              <p className="w-2/5 text-right sm:text-center font-sansitalight">
                <span className="font-bold">1 point</span>&nbsp;earned on the
                card
              </p>
              <p className="text-green-5 text-6xl mb-8 px-8 pt-4">=</p>
              <p className="w-2/5 text-left sm:text-center font-sansitalight">
                <span className="font-bold">1 point</span>&nbsp;in the mileage
                program
              </p>
            </div>
            <div className="h-1/2 flex justify-around w-full">
              <FaFly className="text-green-5 w-14 h-14" />
              <GiFlyingFlag className="text-green-5 w-14 h-14" />
              <GiFlyingShuriken className="text-green-5 w-14 h-14" />
            </div>
          </div>
        </div>
        <div className="w-1/2 xl:w-full rounded-xl border border-neutral-300 text-center">
          <p className="h-16 bg-gray-200 rounded-t-xl flex items-center justify-center">
            Exchange for&nbsp;
            <span className="font-bold">&nbsp;Cashback</span>
          </p>
          <div className="h-fit bg-gray-100 rounded-b-xl px-10 py-8 flex flex-col items-center justify-center">
            <div className="h-1/2 mb-8 flex items-center justify-center whitespace-normal sm:flex-col sm:h-fit">
              <p className="text-right w-2/5 sm:text-center">
                <span className="font-bold font-sansitalight">1000 points</span>
                &nbsp;earned on the card
              </p>
              <p className="text-green-5 text-6xl mb-8 px-8 pt-4">=</p>
              <p className="w-2/5 text-left sm:text-center">
                <span className="font-bold font-sansitalight">
                  Up to U$30 Cashback
                </span>
                &nbsp;in purchases in our store
              </p>
            </div>
            <div className="h-1/2 flex justify-around w-full">
              <ImCart className="text-green-5 w-14 h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points