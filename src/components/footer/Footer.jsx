import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaFacebook
} from "@react-icons/all-files/fa/FaFacebook";
import {
  FaInstagram
} from "@react-icons/all-files/fa/FaInstagram";
import {
  FaYoutube
} from "@react-icons/all-files/fa/FaYoutube";
import {
  FaTwitter
} from "@react-icons/all-files/fa/FaTwitter";
import Cart from '../../../public/images/footer/cart.webp';
import GooglePlay from '../../../public/images/footer/google-play.webp';
import Apple from '../../../public/images/footer/apple.webp';

const Footer = () => {
	return (
    <footer className="w-full text-neutral-400 relative z-40">
      {/* TOP CURVES */}
      <div className="absolute top-[-6.7rem] lg:top-[-4rem] w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(152%+1.3px)] h-[112px] lg:h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#262626]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#262626]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#262626]"
          ></path>
        </svg>
      </div>
      {/* TOP PART */}
      <nav
        aria-label="footer navigation"
        role="navigation"
        className="w-full bg-[#262626] text-sm xl:text-[0.75rem] md:text-[0.9rem] px-40 gg:px-32 xxl:px-24 xl:px-16 xxs:px-4 lg:pr-0 lg:pl-4 md:px-10 md:py-8 pt-8"
      >
        <div className=" flex justify-between md:flex-col md:gap-12 md:justify-center max-w-[2560px] w-full mx-auto">
          {/* FIRST DIV */}
          <section className="mt-10">
            <div className="flex flex-col mb-6 gap-1 md:mb-0">
              <h2 className="text-green-1 brightness-125 text-xl xl:text-lg md:text-3xl mb-3">
                Institucional
              </h2>
              <div className="flex flex-col flex-wrap gap-1 md:flex-row md:gap-4">
                <Link
                  href="/who-we-are"
                  className="hover:underline hover:text-neutral-200"
                >
                  Who We Are
                </Link>
                <Link
                  href="/work-with-us"
                  className="hover:underline hover:text-neutral-200"
                >
                  Work With Us
                </Link>
                <Link
                  href="/marketplace"
                  className="hover:underline hover:text-neutral-200"
                >
                  GG Marketplace | Sell Your Products
                </Link>
                <Link
                  href="/terms"
                  className="hover:underline hover:text-neutral-200"
                >
                  Privacy Policy and Terms of Use
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:hidden">
              <h2 className="text-green-1 brightness-125 text-xl xl:text-lg md:text-3xl mb-3">
                Searched Words
              </h2>
              <div className="flex flex-col gap-1">
                <Link
                  href="/search?/apple"
                  className="hover:underline hover:text-neutral-200"
                >
                  Apple
                </Link>
                <Link
                  href="/search?/juice"
                  className="hover:underline hover:text-neutral-200"
                >
                  Juice
                </Link>
                <Link
                  href="/search?/meat"
                  className="hover:underline hover:text-neutral-200"
                >
                  Meat
                </Link>
                <Link
                  href="/search?/watermelon"
                  className="hover:underline hover:text-neutral-200"
                >
                  Watermelon
                </Link>
              </div>
            </div>
          </section>
          <div className="mt-10 md:mt-0 mb-14 w-[0.15rem] h-96 lg:h-80 bg-neutral-700 lg:hidden" />
          {/* SECOND DIV */}
          <section className="mt-10 mb-10 md:mb-0 md:mt-0 lg:hidden md:block">
            <div className="flex flex-col gap-1">
              <h2 className="text-green-1 brightness-125 text-xl xl:text-lg md:text-3xl mb-3">
                Categories
              </h2>
              <div className="flex flex-col gap-1 md:flex-row md:gap-4 flex-wrap">
                <Link
                  href="/sections/bakery"
                  className="hover:underline hover:text-neutral-200"
                >
                  Bakery
                </Link>
                <Link
                  href="/sections/beverages"
                  className="hover:underline hover:text-neutral-200"
                >
                  Beverages
                </Link>
                <Link
                  href="/sections/canneds"
                  className="hover:underline hover:text-neutral-200"
                >
                  Canneds
                </Link>
                <Link
                  href="/sections/cheeses-and-dairy"
                  className="hover:underline hover:text-neutral-200"
                >
                  Cheeses and dairy
                </Link>
                <Link
                  href="/sections/cleaning"
                  className="hover:underline hover:text-neutral-200"
                >
                  Cleaning
                </Link>
                <Link
                  href="/sections/dietary"
                  className="hover:underline hover:text-neutral-200"
                >
                  Dietary
                </Link>
                <Link
                  href="/sections/eggs"
                  className="hover:underline hover:text-neutral-200"
                >
                  Eggs
                </Link>
                <Link
                  href="/sections/essentials"
                  className="hover:underline hover:text-neutral-200"
                >
                  Essentials
                </Link>
                <Link
                  href="/sections/fishery"
                  className="hover:underline hover:text-neutral-200"
                >
                  Fishery
                </Link>
                <Link
                  href="/sections/frozen"
                  className="hover:underline hover:text-neutral-200"
                >
                  Frozen
                </Link>
                <Link
                  href="/sections/fruits"
                  className="hover:underline hover:text-neutral-200"
                >
                  Fruits
                </Link>
                <Link
                  href="/sections/full-fridge"
                  className="hover:underline hover:text-neutral-200"
                >
                  Full fridge
                </Link>
                <Link
                  href="/sections/offers"
                  className="hover:underline hover:text-neutral-200"
                >
                  Offers
                </Link>
                <Link
                  href="/sections/petshop"
                  className="hover:underline hover:text-neutral-200"
                >
                  Petshop
                </Link>
                <Link
                  href="/sections/rotisserie"
                  className="hover:underline hover:text-neutral-200"
                >
                  Rotisserie
                </Link>
                <Link
                  href="/sections/seasoning"
                  className="hover:underline hover:text-neutral-200"
                >
                  Seasoning
                </Link>
                <Link
                  href="/sections/snacks"
                  className="hover:underline hover:text-neutral-200"
                >
                  Snacks
                </Link>
                <Link
                  href="/sections/sweets"
                  className="hover:underline hover:text-neutral-200"
                >
                  Sweets
                </Link>
              </div>
            </div>
          </section>
          <div role='separator' className="mt-10 md:mt-0 mb-14 w-[0.15rem] h-96 lg:h-80 md:h-64 sm:h-52 bg-neutral-700 md:hidden" />
          {/* THIRD DIV */}
          <section className="mt-10 md:mt-0">
            <div className="flex flex-col mb-6 gap-1">
              <h2 className="text-green-1 brightness-125 text-xl xl:text-lg md:text-3xl mb-3">
                Callcenter
              </h2>
              <div className="flex flex-col gap-1 md:flex-row md:gap-4 flex-wrap">
                <Link href="tel:5559997777">555 999 7777</Link>

                <Link
                  href="/contact-us"
                  className="hover:underline hover:text-neutral-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/our-stores"
                  className="hover:underline hover:text-neutral-200"
                >
                  Find a Store
                </Link>
                <Link
                  href="/how-to-buy"
                  className="hover:underline hover:text-neutral-200"
                >
                  Payment Methods
                </Link>
                <Link
                  href="/exchanges"
                  className="hover:underline hover:text-neutral-200"
                >
                  Exchanges and Returns
                </Link>
                <Link
                  href="/credit-card"
                  className="hover:underline hover:text-neutral-200"
                >
                  FAQ and Details
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-green-1 brightness-125 text-xl xl:text-lg md:text-3xl mb-3">
                Our Channels
              </h2>
              <div className="flex gap-3 md:flex-row md:gap-4 flex-wrap">
                <Link
                  target="_blank"
                  aria-label="grocergo facebook page"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <Link
                  target="_blank"
                  aria-label="grocergo instagram profile"
                  href="https://www.instagram.com/"
                >
                  <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <Link
                  target="_blank"
                  aria-label="grocergo youtube channel"
                  href="https://www.youtube.com/"
                >
                  <FaYoutube className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <Link
                  target="_blank"
                  aria-label="grocergo twitter account"
                  href="https://www.twitter.com/"
                >
                  <FaTwitter className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </div>
            </div>
          </section>
          {/* FOURTH DIV */}
          <section className="w-1/4 gg:w-96 lg:w-80 lg:mr-4 lg:mb-3 md:mb-0 md:mr-0 md:w-96 sm:w-full">
            <Link target="_blank" href="https://play.google.com/store">
              <div className="bg-green-4 p-6 font-nunito w-full h-full text-white">
                <div className="border-2 w-full h-full border-white flex flex-col lg:gap-6 items-center justify-between p-6 rounded-lg">
                  <div className="w-24 lg:w-16 lg:h-16 aspect-square bg-green-3 rounded-lg flex flex-col gap-2 lg:gap-1 items-center justify-center p-2">
                    <h3 className="text-center text-xl lg:text-sm leading-4 lg:leading-[12px] font-sansita">
                      Grocer
                      <br />
                      Go
                    </h3>
                    <Image
                      src={Cart}
                      alt="cart"
                      width={512}
                      height={512}
                      className="w-8 lg:w-6"
                    />
                  </div>
                  <h3 className="text-5xl lg:text-3xl font-sansita text-center italic lg:leading-[25px]">
                    Download
                    <br />
                    Our
                    <br />
                    App
                  </h3>
                  <p className="whitespace-normal lg:text-center lg:leading-[13px]">
                    Enjoy our offers and buy without leaving home.
                  </p>
                  <div className="flex gap-2 w-full lg:flex-col items-center justify-center">
                    <div className="flex gap-0.5 h-full bg-black p-2 w-1/2 items-center lg:w-full lg:justify-center max-w-fit">
                      <Image
                        src={GooglePlay}
                        alt="google play"
                        width={128}
                        height={128}
                        className="w-10 h-10"
                      />
                      <p className="text-[0.6rem] flex items-start justify-center flex-col leading-3">
                        Available on
                        <br />
                        <span className="text-[0.75rem]">Google Play</span>
                      </p>
                    </div>
                    <div className="flex gap-0.5 h-full bg-black p-2 w-1/2 items-center lg:w-full lg:justify-center max-w-fit">
                      <Image
                        src={Apple}
                        alt="apple"
                        width={128}
                        height={128}
                        className="w-9 h-9"
                      />
                      <p className="text-[0.6rem] flex items-start justify-center flex-col leading-3">
                        Available in the
                        <br />
                        <span className="text-[0.75rem]">App Store</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </div>
        {/* FIRST DIV */}
      </nav>
      {/* BOTTOM PART */}
      <div className="z-50 w-full bg-[rgb(18,18,18)] px-40 gg:px-32 xxl:px-24 xl:px-16 lg:px-4 md:px-10 xxs:px-4 md:py-8 py-7">
        <div className="w-full max-w-[2560px] mx-auto flex md:flex-col md:gap-8">
          {/* PAYMENT LOGOS */}
          <div className="lg:pr-4 md:pr-0">
            <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-8">
              <Link
                href="/credit-card"
                className="font-bold italic font-sansita w-20 h-7 flex items-center text-green-3 text-xl bg-clip-text"
              >
                Grocer<span className="text-green-1">Go</span>
              </Link>
              <Image
                src="/images/footer/alelo.webp"
                alt="alelo"
                width={40}
                height={40}
                className=""
              />
              <Image
                src="/images/footer/american-express.webp"
                alt="american express"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/card.webp"
                alt="mastercard"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/diners.webp"
                alt="diners"
                width={40}
                height={40}
                className="border"
              />
              <Image
                src="/images/footer/discover.webp"
                alt="discover"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/discover2.webp"
                alt="discover2"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/ideal.webp"
                alt="ideal"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/jcb.webp"
                alt="jcb"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/paypal.webp"
                alt="paypal"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/postepay.webp"
                alt="psotepay"
                width={40}
                height={40}
              />
              <Image
                src="/images/footer/visa.webp"
                alt="visa"
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-[.65rem] leading-[.7rem] text-neutral-300">
                SALE AND CONSUMPTION OF ALCOHOLIC BEVERAGES ARE PROHIBITED TO
                PEOPLE UNDER THE AGE OF 18 YEARS. ALCOHOLIC BEVERAGE CAN CAUSE
                CHEMICAL DEPENDENCE AND, IN EXCESS, SERIOUS HEALTH PROBLEMS.
                DRINK WITH MODERATION. Prices, offers and conditions exclusive
                to the internet valid only for today, subject to change without
                prior notification. If any product is missing, it will not be
                delivered and the corresponding amount will not be charged. Co.
                Distribution / NUMBER: 4700000/0001-06 / Rd. Ficticious Road,
                3142, Zip Code: 01002-000 - California - USA
              </p>
            </div>
          </div>
          {/* DIAMOND LOGO */}
          <div className="w-1/2 flex justify-end md:justify-start">
            <Link
              target="_blank"
              href="https://play.google.com/store"
              className="h-full w-20"
            >
              <div className=" bg-black flex flex-col items-center px-2 py-1">
                <span className="text-[0.65rem]">EXCELENT</span>
                <Image
                  src="/images/footer/diamond.webp"
                  alt="diamond"
                  width={512}
                  height={512}
                  className="w-10"
                />
              </div>
              <div className="bg-white px-2 py-1 flex flex-col items-center text-neutral-800 font-semibold">
                <span className="text-[0.65rem]">PlusRated</span>
                <span className="text-[0.5rem]">CHECK IT OUT</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer