import {AiFillAppstore} from '@react-icons/all-files/ai/AiFillAppstore'
import {GiShoppingCart} from '@react-icons/all-files/gi/GiShoppingCart'
import {BiCreditCardFront} from '@react-icons/all-files/bi/BiCreditCardFront'

type Props = {}

const HowToApp = (props: Props) => {
	return (
    <div className="px-20 py-16 md:px-10 md:py-8 w-full bg-gradient-to-r from-green-5 to-green-6 text-neutral-100">
      <div className="max-w-[2560px] mx-auto space-y-16">
				<h3 className="text-3xl font-bold tracking-wide font-sansita xxl:whitespace-normal xxs:flex-wrap xxs:flex">
        See how to use your discounts from the&nbsp;
        <span className="italic text-green-3 brightness-125">GrocerGo</span>
        &nbsp;Credit Card
      </h3>
      <div>
        <div className="flex justify-between xxl:gap-8 xl:flex-col">
          <div className="flex items-center xs:items-start gap-2 w-1/3 xxl:w-fit">
            <AiFillAppstore className="w-20 h-20 min-w-[80px] sm:min-w-[60px]" />
            <p>
              1 - Activate the offers in the &quot;My Discount&quot; section
              from the GrocerGo App
            </p>
          </div>
          <div className="flex items-center xs:items-start gap-2 w-1/3 xxl:w-fit">
            <GiShoppingCart className="w-20 h-20 min-w-[80px] sm:min-w-[60px]" />
            <p>
              2 - You can make your purchases in our physical stores, on our
              website, or through our app
            </p>
          </div>
          <div className="flex items-center xs:items-start gap-2 w-1/3 xxl:w-fit">
            <BiCreditCardFront className="w-20 h-20 min-w-[80px] sm:min-w-[60px]" />
            <p>
              3 - The eligible discounts will be applied at the conclusion of
              your purchases when using the GrocerGo Credit Card for payment
            </p>
          </div>
        </div>
      </div>
      <p className="font-[350] xxl:whitespace-normal text-sm">
        Discounts cannot be combined with other &quot;My Discount&quot;
        promotions. Please review the unit-specific limits. Online offers are
        valid for products sold and delivered by GrocerGo
      </p>
			</div>
      
    </div>
  );
}

export default HowToApp