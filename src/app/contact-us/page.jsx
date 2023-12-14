import Image from 'next/image';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import Link from 'next/link';
import Form from './form';

export const metadata = {
  title: "GrocerGo | Contact Us",
  description: "If you have any questions, feedback, or inquiries.",
};

const ContactUs = () => {

	return (
    <div className="w-full px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0 min-h-screen max-w-[2560px] mx-auto">
      <header className="bg-green-5 h-80 xl:h-64 md:h-fit flex justify-between xs:justify-center rounded-br-[3rem] md:rounded-br-none">
        <Image
          src="/images/mini-pages/contactus-1.webp"
          alt="contact us"
          width={1920}
          height={1080}
					loading='eager'
					priority
          className="w-[30rem] xl:w-[24rem] md:w-[18rem] xs:hidden"
        />
        <div className="m-16 md:m-8 text-right">
          <h1 className=" italic text-green-1 brightness-125 text-3xl lg:text-2xl tracking-wide font-sansita">
            <span className="text-white brightness-100">Contact</span> Us
          </h1>
          <p className="text-white lg:text-lg md:whitespace-normal tracking-wide font-sansita">
            We&apos;d love to hear from you.
          </p>
        </div>
      </header>
      <main className="w-[60%] gg:w-[90%] xxl:w-4/5 xl:w-[90%] lg:w-[90%] mx-auto p-8 md:px-4 md:w-full">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-4 mb-4 lg:text-lg lg:mb-3">
            Get in Touch
          </h2>
          <p className="text-green-5 md:whitespace-normal lg:text-base">
            If you have any questions, feedback, or inquiries, please fill out
            the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </section>
        <Form />
      </main>
      <div
        className="flex flex-col items-center justify-center bg-green-5 h-80 xl:h-64 md:h-48 
			rounded-tl-[3rem] md:rounded-tl-none md:p-4 md:pb-12"
      >
        <p className="text-green-1 brightness-125 whitespace-normal text-center">
          For urgent matters,{" "}
          <span className="text-white">please call our customer support</span>{" "}
          at
        </p>
        <span className="flex items-center gap-3">
          <BsFillTelephoneOutboundFill className="text-green-1 brightness-125" />
          <Link
            href="tel:+1234567890"
            className="text-2xl font-mono hover:underline underline-offset-2 text-white"
          >
            123-456-7890
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ContactUs