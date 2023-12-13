import Image from "next/image";
import Blog from "../../../../public/images/specials/blog-bg.webp";
import Interface from './Interface';

export const metadata = {
  title: "GrocerGo | Blog",
  description: "GrocerGo blog page.",
};

const page = () => {
  return (
    <main className="w-full min-h-screen max-w-[2560px] mx-auto flex items-center justify-center relative px-64 gg:px-44 xxl:px-28 xl:px-20 lg:px-0">
      <Image
        src={Blog}
        width={1920}
        height={1280}
        alt="table with typing machine"
        className="w-full h-full opacity-50 object-cover fixed top-0 -z-10"
        priority
      />
      <Interface />
    </main>
  );
};

export default page;
