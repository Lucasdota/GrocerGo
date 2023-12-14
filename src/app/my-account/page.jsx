import Image from "next/image";
import headerBG from "../../../public/images/others/settings.webp";
import pageBG from "../../../public/images/others/settings-bg.webp";
import Content from "./Content";

export const metadata = {
  title: "GrocerGo | My Account",
  description: "Check informations about your account.",
};

const myAccountPage = () => {
  return (
    <main className="max-w-[2560px] mx-auto w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 relative">
      <Image
        loading="eager"
        src={pageBG}
				width={1920}
				height={1280}
        alt="laptop white background"
        className="w-full h-full opacity-50 object-cover fixed top-0 left-0 -z-10"
      />
      <header className="bg-green-5 h-80 xl:h-64 md:h-fit flex justify-between xs:justify-center">
        <Image
          loading="eager"
					priority
          src={headerBG}
          alt="cogs image"
          width={640}
          height={427}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] xs:hidden"
        />
        <div className="m-16 md:m-8 text-right">
          <h2 className=" italic text-green-1 brightness-125 text-4xl lg:text-2xl tracking-wide font-sansita">
            My&nbsp;<span className="text-white brightness-100">Account</span>
          </h2>
          <p className="text-white text-xl lg:text-lg md:whitespace-normal tracking-wider font-sansita">
            Your account&apos;s settings.
          </p>
        </div>
      </header>
    <Content />
    </main>
  );
};

export default myAccountPage;
