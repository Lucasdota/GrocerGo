import Image from "next/image";
import restaurant from "../../../../public/images/specials/restaurant3.webp";
import Card from "./Card";

export const metadata = {
  title: "GrocerGo | Chefs",
  description: "GrocerGo chefs page.",
};

const Page = () => {
  return (
    <main className="w-full md:px-4 min-h-screen overflow-x-hidden max-w-[2560px] mx-auto flex items-center justify-center relative pb-[6.5rem]">
      <Image
        src={restaurant}
        alt="restaurant"
				width={1920}
				height={800}
        className="w-full h-full opacity-50 object-cover absolute top-0"
        priority
      />
      <div className="w-1/2 xxl:w-4/5 md:w-full whitespace-normal z-10 relative md:py-8">
        <Card />
      </div>
    </main>
  );
};

export default Page;
