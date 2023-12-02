import Image from 'next/image';
import rotisserie from "../../../../public/images/specials/rotisserie2.webp";
import Card from './Card';

export const metadata = {
  title: "GrocerGo | Delivery Rotisserie",
  description: "GrocerGo delivery rotisserie page.",
};

const page = () => {
	return (
    <main className="w-full md:px-4 min-h-screen overflow-x-hidden max-w-[2560px] mx-auto flex items-center justify-center relative pb-[8.5rem]">
      <Image
        src={rotisserie}
        alt="rotisserie"
        className="w-full h-full opacity-50 object-cover absolute top-0"
        priority
      />
      <div className="w-1/2 xxl:w-4/5 md:w-full whitespace-normal z-10 relative md:py-8">
        <Card />
      </div>
    </main>
  );
}

export default page