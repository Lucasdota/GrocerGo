import HeaderBG from '../../../public/images/others/favourite-header.webp'
import Image from "next/image";
import BG from '../../../public/images/others/favourite-bg.webp';
import Content from './Content';

export const metadata = {
  title: "GrocerGo | My favourites",
};

const Page = () => {
  return (
    <main
      className="text-white w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		 mx-auto relative"
    >
      <Image
        priority
        src={BG}
        alt="market background"
        width={2400}
        height={1800}
        loading="eager"
        className="absolute top-0 left-0 object-cover w-full h-full opacity-60 -z-10"
      />
      <header className="bg-green-5 h-60 md:h-fit flex justify-between rounded-b-[3rem] md:rounded-b-none">
        <div className="m-16 md:m-8">
          <h2 className="text-3xl lg:text-2xl tracking-wide font-sansita">
            <span className="text-green-3 brightness-125">My</span> Favorites
          </h2>
          <p className="lg:text-base md:whitespace-normal tracking-wide font-sansita">
            Manage your whole favorited itens list.
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
			<Content />
    </main>
  );
};

export default Page;
