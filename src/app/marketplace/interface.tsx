import Link from "next/link";
import BG from "../../../public/images/others/marketplace-bg.webp";
import Image from "next/image";

const Interface = () => {
	return (
    <section className="flex flex-col items-center justify-start mx-auto min-h-screen py-20 relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
      <Image
        loading="eager"
        priority
        src={BG}
				width={1920}
				height={1440}
        alt="laptop white background"
        className="w-full h-full opacity-50 object-cover absolute top-0 left-0 -z-10"
      />
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10 font-sansita tracking-wide bg-white rounded-lg px-4 pt-3 pb-4 shadow">
        Sell Your Products on&nbsp;<span className="italic text-green-5">Grocer<span className="text-green-3">Go</span></span>
      </h1>
      <div className="grid grid-cols-1 gap-10">
        <div className="bg-white rounded-lg p-8 shadow md:whitespace-normal">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Start Selling Today
          </h2>
          <p className="text-gray-600 mb-4">
            Get your products in front of thousands of customers daily by
            selling on GrocerGo.
          </p>
          <p className="text-gray-600 mb-4">
            It&apos;s easy and affordable! Our partnership programs offer
            competitive rates and support.
          </p>
          <Link
            href="/contact-us"
            className="bg-green-4/80 text-white rounded-lg px-6 py-2 text-center inline-block hover:bg-green-4 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
        <div className="bg-white rounded-lg p-8 shadow md:whitespace-normal">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Join Our Growing Partner Network
          </h2>
          <p className="text-gray-600 mb-4">
            We are proud to have a diverse range of products and services
            offered by our partners.
          </p>
          <p className="text-gray-600 mb-4">
            From local artisans to national brands, GrocerGo has a place for all
            businesses.
          </p>
          <Link
            href="/contact-us"
            className="bg-green-4/80 text-white rounded-lg px-6 py-2 text-center inline-block hover:bg-green-4 transition-all duration-200"
          >
            Meet Our Partners
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Interface