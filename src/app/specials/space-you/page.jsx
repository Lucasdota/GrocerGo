import Image from 'next/image';
import Icon from "../../../../public/images/specials/spa-icon.webp";
import Spa1 from '../../../../public/images/specials/spa1.webp';
import Spa2 from '../../../../public/images/specials/spa2.webp';
import Spa3 from '../../../../public/images/specials/spa-3.webp';
import Spa4 from '../../../../public/images/specials/spa4.webp';
import Spa5 from '../../../../public/images/specials/spa5.webp';
import Spa6 from '../../../../public/images/specials/spa6.webp';
import Spa7 from '../../../../public/images/specials/spa7.webp';
import BG from "../../../../public/images/specials/spa-bg.webp";

export const metadata = {
  title: "GrocerGo | Space You",
  description: "GrocerGo space you page.",
};

const page = () => {
	return (
    <main className="w-full min-h-screen overflow-x-hidden max-w-[2560px] mx-auto flex flex-col items-center justify-center relative pb-[10.5rem] px-64 gg:px-44 xxl:px-28 xl:px-20 lg:px-0 gap-16 sm:gap-8">
      <header
        className="px-16 sm:px-8 xs:px-4 sm:pt-8 sm:pb-4 pt-16 pb-8 text-center z-10 w-full flex items-center text-gray-800 
			gap-8 font-sansita flex-col justify-center rounded-b-xl"
      >
        <div className="relative flex items-center justify-center gap-6">
          <h2 className="text-6xl font-bold tracking-wide z-20 sm:text-4xl xs:text-2xl">
            Space You
          </h2>
          <Image
            src={Icon}
            alt="space you icon"
            width={128}
            height={128}
            className="opacity-20 sm:w-20 sm:h-20 xs:w-12 xs:h-12"
          />
        </div>
        <p className="tracking-wide text-lg text-gray-600 whitespace-normal leading-6 w-1/2 sm:w-full sm:text-base xs:text-sm">
          Customers who hold our credit cards are entitled to a complimentary
          monthly spa session, which can be availed at any of our spa facilities
          located within every GrocerGo store.
        </p>
      </header>
      <section className="space-y-16 sm:space-y-8 xs:space-y-4 z-10">
        {/* services */}
        <div className="space-y-16 text-gray-800 text-center sm:space-y-8 xs:space-y-4">
          <h3 className="text-3xl font-semibold mx-12 sm:text-xl sm:mx-6">
            Variety of Services
          </h3>
          <div className="grid grid-cols-3 gap-4 w-full lg:px-4 xs:grid-cols-1">
            <Image
              src={Spa1}
              alt="spa1"
              width={640}
              height={427}
              className="w-full rounded-xl"
            />
            <Image
              src={Spa2}
              alt="spa2"
              width={640}
              height={427}
              className="w-full rounded-xl"
            />
            <Image
              src={Spa3}
              alt="spa3"
              width={640}
              height={479}
              className="w-full rounded-xl"
            />
          </div>
          <p className="mx-12 pb-10 sm:pb-16 sm:mx-6 sm:text-sm">
            Whether you&apos;re looking for a therapeutic massage, a refreshing
            facial, or a calming aromatherapy session, our spas offer a wide
            variety of services to suit your preferences. You can customize your
            experience to address your specific needs.
          </p>
        </div>
        {/* aromatherapy */}
        <div className="text-neutral-100 text-center rounded-b-xl lg:rounded-b-none bg-green-5/50 relative px-16 sm:px-8 sm:pt-8 pt-16 pb-24 sm:pb-12 xs:pb-8">
          <div className="absolute -top-10 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block h-10 w-full"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-green-5/50"
              ></path>
            </svg>
          </div>
          {/* relaxation area */}
          <div className="flex xl:flex-col justify-between items-center text-neutral-100 mb-16 sm:mb-8 xs:mb-4">
            <Image
              src={Spa7}
              alt="relaxation area"
              width={640}
              height={424}
              className="rounded-xl xxl:w-96 xl:w-fit"
            />
            <div className="p-16 sm:p-8 sm:space-y-4 space-y-8 whitespace-normal brightness-150">
              <h3 className="text-3xl font-semibold text-left sm:text-xl">
                Spacious Relaxation Areas
              </h3>
              <p className="text-neutral-200 text-left sm:text-sm">
                After your treatment, unwind in our spacious relaxation areas.
                Sip on herbal tea, read a book, or simply bask in the post-spa
                glow as you take in the tranquil surroundings.
              </p>
              <p className="text-neutral-200 text-left sm:text-sm">
                With spa centers conveniently located in every GrocerGo store,
                you can easily incorporate a spa visit into your shopping
                routine or schedule a separate appointment for your convenience.
              </p>
              <p className="text-neutral-200 text-left sm:text-sm">
                Cleanliness and hygiene are our top priorities. We maintain the
                highest standards of cleanliness and sanitation in all our spa
                facilities to provide you with a safe and worry-free experience.
              </p>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mx-12 sm:text-xl sm:mx-6 mb-6 brightness-150">
            Aromatherapy and Soothing Ambiance
          </h3>
          <p className="text-neutral-200 mb-16 brightness-150 sm:text-sm sm:mb-8">
            Indulge your senses with the calming aroma of essential oils and
            soothing music that permeates the air in our spa centers. Our
            ambiance is carefully curated to enhance your relaxation.
          </p>
          <div className="grid grid-cols-3 gap-4 w-full xs:grid-cols-1">
            <Image
              src={Spa4}
              alt="spa4"
              width={640}
              height={427}
              className="w-full rounded-xl"
            />
            <Image
              src={Spa5}
              alt="spa5"
              width={640}
              height={427}
              className="w-full rounded-xl"
            />
            <Image
              src={Spa6}
              alt="spa6"
              width={640}
              height={427}
              className="w-full rounded-xl"
            />
          </div>
        </div>
        {/* conclusion */}
        <div className="text-gray-800 gap-6 whitespace-normal text-center flex flex-col items-center justify-center rounded-xl w-1/2 mx-auto p-8 sm:w-full">
          <h3 className="text-3xl font-semibold mb-6 sm:mb-3 w-fit sm:text-xl">We invite you</h3>
          <p className="text-gray-700 sm:text-sm">
            Our spas feature a team of highly trained and certified therapists,
            dedicated to providing you with the utmost care and attention. They
            are skilled in a wide range of treatments to cater to your
            individual needs.
          </p>
          <p className="text-gray-700 sm:text-sm">
            Our spa facilities are designed to provide you with an unparalleled
            wellness experience, making your visit a perfect blend of luxury,
            relaxation, and rejuvenation. Experience the ultimate in self-care
            as you immerse yourself in our world of tranquility and wellness.
          </p>
        </div>
      </section>
      <Image
        src={BG}
				width={2400}
				height={1600}
        alt="water background"
        className="w-full h-full opacity-50 object-cover absolute top-0"
        priority
      />
    </main>
  );
}

export default page