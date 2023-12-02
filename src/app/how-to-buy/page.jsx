import Image from 'next/image';
import React from 'react'
import Carousel from './Carousel';
import MobileCarousel from './MobileCarousel';
import Delivery from './Delivery';
import SmallCreditCard from '../../../public/images/mini-pages/small-cards.webp'
import Paypal from '../../../public/images/mini-pages/paypal.webp'
import Money from '../../../public/images/mini-pages/money.webp'
import Apple from '../../../public/images/mini-pages/apple-icon.webp'

export const metadata = {
  title: "GrocerGo | How To Buy",
  description:
    "Purchasing online at GrocerGo is effortless, straightforward, and convenient.",
};

const page = () => {
	return (
    <div className="pb-[6.5rem] w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 flex flex-col items-center mb-16 mx-auto max-w-[2560px] min-h-screen">
      <header className="flex sm:flex-col sm:items-center pt-16 lg:pt-8 justify-around md:pr-4 sm:px-4">
        <div className="relative">
          <Image
            src="/images/mini-pages/grocery-bag.webp"
            alt="bag full of vegetables"
            priority
            width={620}
            height={720}
            className="w-96 mb-4 lg:w-80 sm:w-52 sm:drop-shadow-sm"
          />
          <div className="w-72 h-48 absolute shadow-images -bottom-24 left-16 xl:left-14 lg:left-10 md:left-5 sm:hidden" />
        </div>
        <div className="flex flex-col justify-center gap-8 w-3/5 sm:w-full">
          <h2 className="text-5xl lg:text-3xl font-bold text-green-3 whitespace-normal leading-normal tracking-wide font-sansita">
            Purchasing online at{" "}
            <span className="italic text-green-5">GrocerGo</span> is effortless,
            straightforward, and convenient
          </h2>
          <p className="text-3xl lg:text-xl xs:text-base sm:whitespace-normal text-neutral-800 font-thin font-sansita tracking-wide leading-8">
            Happiness can be found in shopping online and receiving products at
            home with comfort, speed, and efficiency, as if you had personally
            selected them in our stores.
          </p>
        </div>
      </header>
      <div className="h-[1px] w-full bg-neutral-300 my-16 lg:my-12" />
      <main className="w-full">
        {/* BUY ON DESKTOP */}
        <section className="md:flex flex-col justify-around items-center sm:px-4">
          <h3 className="text-5xl lg:text-3xl text-green-3 font-bold mb-16 leading-normal tracking-wide font-sansita">
            How to Make a Purchase
            <br /> on the <span className="text-green-5">Website</span>
          </h3>
          <div className="w-full flex justify-around">
            <Carousel />
            <div className="relative">
              <Image
                src="/images/mini-pages/laptop.webp"
                alt="laptop with our website on"
                width={500}
                height={500}
                className="w-80 xxl:h-64 lg:hidden rotate-12 drop-shadow-sm"
              />
              <div className="w-96 h-64 absolute shadow-images -bottom-28 xxl:-bottom-32 right-0 lg:hidden" />
            </div>
          </div>
        </section>
        <div className="h-[1px] w-full bg-neutral-300 mt-24 mb-16 lg:my-12" />
        {/* BUY ON MOBILE */}
        <section className="flex justify-around items-center md:flex-col xxs:ml-4">
          <div className="relative">
            <Image
              src="/images/mini-pages/smartphone.webp"
              alt="smartphone with our website on"
              width={250}
              height={500}
              className="w-48 xxl:w-32 lg:hidden -rotate-12"
            />
            <div className="w-72 h-48 absolute shadow-images -bottom-36 left-0 xxl:w-52 lg:hidden" />
          </div>

          <h3 className="text-5xl lg:text-3xl text-green-3 font-bold mb-16 leading-normal tracking-wide font-sansita">
            How to <br className="md:hidden" />
            Make a Purchase
            <br /> on the <span className="text-green-5">App</span>
          </h3>
          <MobileCarousel />
        </section>
        <div className="h-[1px] w-full bg-neutral-300 mt-24 mb-16" />
        {/* DELIVERY OPTIONS */}
        <Delivery />
        <div className="h-[1px] w-full bg-neutral-300 my-16" />
        {/* HOW TO PAY */}
        <section className="w-full space-y-24 md:px-4">
          <div>
            <h3 className="text-green-5 text-5xl lg:text-3xl font-bold leading-normal tracking-wide font-sansita">
              Payment Methods
            </h3>
            <p className="text-green-3 text-3xl lg:text-xl sm:whitespace-normal leading-8 font-sansita">
              Choose convenience and savings when it comes to paying for your
              purchases!
            </p>
          </div>
          {/* CARDS */}
          <div className="w-full flex items-center justify-center gap-8 flex-wrap whitespace-normal font-nunito">
            <div className="w-[678px] flex md:flex-wrap md:justify-center gap-8 mb-8">
              <div className="w-1/2 md:w-fit md:h-fit h-60 bg-white flex items-start justify-center p-8 md:mb-8 relative rounded-b-xl drop-shadow-xl">
                <Image
                  src={SmallCreditCard}
                  alt="credit-card"
                  width={256}
                  height={256}
                  className="absolute -top-8 text-green-4 w-14 h-14"
                />
                <p>
                  <span className="font-bold text-green-4">
                    CREDIT & DEBIT CARD:
                  </span>{" "}
                  We accept Visa, MasterCard, American Express, and Discover.
                </p>
              </div>
              <div className="w-1/2 md:w-fit md:h-fit h-60 bg-white flex items-start justify-center p-8 relative rounded-b-xl drop-shadow-xl">
                <Image
                  src={Paypal}
                  alt="paypal"
                  width={256}
                  height={256}
                  className="absolute -top-8 text-green-4 w-14 h-14"
                />
                <p>
                  <span className="font-bold text-green-4">PAYPAL:</span> Users
                  can link their bank accounts or credit cards to their account
                  and make secure online payments without sharing their
                  financial information.
                </p>
              </div>
            </div>
            <div className="w-[678px] flex gap-8 mb-8 md:mb-0 md:flex-wrap md:justify-center">
              <div className="w-1/2 h-60 md:w-fit md:h-fit md:mb-8 bg-white flex items-start justify-center p-8 relative rounded-b-xl drop-shadow-xl">
                <Image
                  src={Money}
                  alt="money"
                  width={256}
                  height={256}
                  className="absolute -top-8 text-green-4 w-14 h-14"
                />
                <p>
                  <span className="font-bold text-green-4">CASH:</span> Accepted
                  exclusively within the &apos;Scheduled&apos; delivery option
                  at distribution centers in the largest cities across the
                  country.
                </p>
              </div>
              <div className="w-1/2 h-60 md:w-fit md:h-fit bg-white flex items-start justify-center p-8 relative rounded-b-xl drop-shadow-xl">
                <Image
                  src={Apple}
                  alt="apple"
                  width={256}
                  height={256}
                  className="absolute -top-8 text-green-4 w-14 h-14"
                />
                <p>
                  <span className="font-bold text-green-4">APPLE PAY:</span>{" "}
                  Experience seamless payments with Apple Pay for a swift and
                  secure checkout in the comfort of your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page