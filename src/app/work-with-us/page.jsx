import Image from "next/image";
import BG from "../../../public/images/others/working-bg.webp";
import Form from "./form";

export const metadata = {
  title: "GrocerGo | Work With Us",
  description: "Join the best of the bests.",
};

const WorkWithUs = () => {
  return (
    <main className="max-w-[2560px] mx-auto">
      <section className="container mx-auto min-h-screen pt-12 pb-20 relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
        <Image
          loading="eager"
          priority
          src={BG}
          width={1920}
          height={1280}
          alt="laptop white background"
          className="w-full h-full opacity-50 object-cover absolute top-0 left-0 -z-10"
        />
        <h2 className="text-4xl font-bold mb-10 text-center font-sansita tracking-wider text-gray-700 bg-clip-text text-transparent bg-gradient-to-r from-green-3 to-green-5">
          Work With Us
        </h2>
        <Form />
      </section>
    </main>
  );
};

export default WorkWithUs;

