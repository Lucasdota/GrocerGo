import Image from 'next/image';
import HeaderBG from "../../../public/images/others/catalog-header.webp";
import Interface from './Interface';

export const metadata = {
  title: "GrocerGo | Catalog",
};

const page = () => {
	return (
    <main
      className="text-white w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		 mx-auto relative"
    >
      <header className="bg-green-5 h-60 md:h-fit md:gap-12 flex justify-between rounded-b-[3rem] md:rounded-b-none">
        <div className="m-16 md:m-6">
          <h1 className="text-3xl lg:text-2xl tracking-wide font-sansita">
            Catalog
          </h1>
          <p className="md:text-base md:whitespace-normal tracking-wide font-sansita text-neutral-100">
            See all of our products and check discounts applied by cards.
          </p>
        </div>
        <Image
          src={HeaderBG}
          alt="cart"
          width={640}
          height={360}
          loading="eager"
          className="w-[26rem] xl:w-[24rem] md:w-[18rem] xs:hidden rounded-br-[3rem] md:rounded-br-none"
        />
      </header>
      <Interface />
    </main>
  );
}

export default page