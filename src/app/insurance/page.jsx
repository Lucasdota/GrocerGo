import Image from "next/image";
import Form from "./form";

export const metadata = {
  title: "GrocerGo | Insurance",
  description: "We take care of what's important to you.",
};

const Insurance = () => {
  return (
    <section
      className="text-white w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 max-w-[2560px] 
		min-h-screen mx-auto"
    >
      <header className="bg-green-5 h-80 xl:h-64 md:h-fit flex justify-between rounded-bl-[3rem] md:rounded-bl-none">
        <div className="m-16 md:m-8 md:space-y-2">
          <h1 className="text-3xl lg:text-2xl tracking-wide font-sansita">
            <span className="italic text-green-1 brightness-125">GrocerGo</span>{" "}
            Insurance
          </h1>
          <p className="lg:text-lg md:text-base md:leading-5 md:whitespace-normal tracking-wide font-sansita">
            We take care of what&apos;s important to you.
          </p>
        </div>
        <Image
          src="/images/mini-pages/insurance-1.webp"
          alt="a happy family"
					priority
          width={900}
          height={600}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] xs:hidden"
        />
      </header>
      <main className="w-[60%] gg:w-[90%] xxl:w-4/5 xl:w-[90%] lg:w-[90%] mx-auto p-8 md:px-4 md:w-full">
        <section className="mb-8">
          <h2 className="text-2xl lg:text-lg font-semibold text-green-4 mb-3">
            Coverage Plans
          </h2>
          <p className="text-green-5 whitespace-normal lg:text-base">
            We offer a range of insurance coverage plans to protect your
            purchases. Whether it&apos;s accidental damage or theft, our
            insurance has you covered.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl lg:text-lg font-semibold text-green-4 mb-3">
            Benefits
          </h2>
          <ul className="list-disc list-inside text-green-5 lg:text-base">
            <li>Peace of mind knowing your purchases are protected.</li>
            <li>Quick and hassle-free claims process.</li>
            <li>Flexible coverage options to suit your needs.</li>
          </ul>
        </section>
        <Form />
      </main>
      <div className="bg-green-5 h-80 xl:h-64 md:h-48 flex justify-between rounded-tr-[3rem] md:rounded-tr-none">
        <Image
          src="/images/mini-pages/insurance-2.webp"
          alt="a happy family"
          width={1920}
          height={1080}
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] sm:hidden"
        />
        <p className="text-green-1 brightness-125 m-16 md:m-8 md:text-base">
          Contact us at{" "}
          <span className="text-white brightness-100">
            insurance@grocergo.com
          </span>{" "}
          for any inquiries or assistance.
        </p>
      </div>
    </section>
  );
};

export default Insurance;
