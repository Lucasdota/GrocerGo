import BG from "../../../public/images/others/exchanges-bg.webp";
import Image from "next/image";

const Interface = () => {
  return (
    <section className="flex flex-col items-center justify-start mx-auto min-h-screen relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
      <Image
        loading="eager"
        priority
        src={BG}
				width={1920}
				height={1440}
        alt="laptop white background"
        className="w-full h-full opacity-50 object-cover absolute top-0 left-0 -z-10"
      />
      <div>
        <div className="bg-neutral-100/90 shadow-md rounded px-8 pt-6 pb-8 mb-40 mt-20 whitespace-normal flex flex-col">
          <h1 className="text-4xl font-sansita tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-3 to-green-5 font-bold mb-8 mx-auto h-12 xs:h-fit xs:min-h-[3rem]">Exchange and Returns</h1>
          <p className="text-lg mb-4 text-gray-700">
            If you are not satisfied with your purchase for any reason, you can
            return it within 7 days of receiving it. To make an exchange, you
            must contact our customer service within 30 days of receiving your
            order.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            In order to make a return, you need to provide the following:
          </p>
          <ul className="text-lg list-disc list-inside mb-4 text-gray-700">
            <li>
              The product(s) you are returning, with the original packaging,
              tags, and all other materials included.
            </li>
            <li>
              The original invoice or receipt, which is issued to you when you
              place an order on our website.
            </li>
            <li>
              The product&apos;s original manufacturer&apos;s label or other comparable
              label affixed to the product, which may indicate any additional
              procedures that must be followed to return the product.
            </li>
          </ul>
          <p className="text-lg mb-4 text-gray-700">
            After you have returned the product, you should wait for an email
            confirmation from our customer service. Please note that all returns
            must be inspected and approved by our customer service team before a
            refund will be issued.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Refunds for approved returns will be processed and transferred to
            your original payment method within 1-2 business days.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Please contact our customer service team if you have any questions
            or need further assistance with an exchange or return.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interface;
