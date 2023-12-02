"use client"
import { motion } from "framer-motion";
import BG from "../../../public/images/others/terms-bg.webp";
import Image from "next/image";

const Interface = () => {
  return (
    <section className="flex flex-col items-center justify-start mx-auto min-h-screen relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
      <Image
        loading="eager"
        priority
        src={BG}
				width={1920}
				height={1280}
        alt="laptop white background"
        className="w-full h-full opacity-50 object-cover absolute top-0 left-0 -z-10"
      />
      <motion.div
        className="bg-neutral-100/90 p-8 rounded-xl mt-20 mb-40 whitespace-normal flex flex-col shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className="text-4xl font-bold mb-8 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-green-3 to-green-5">
          Privacy Policy and Terms of Use
        </h1>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This privacy policy will inform you
          of the ways in which we collect, use, and share personal information.
          We are committed to ensuring transparency and maintaining the privacy
          of your personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Data Collection</h2>
        <p className="text-gray-600 mb-4">
          When you use our services, we may collect certain personal information
          about you, such as your name, email address, phone number, and postal
          address. We collect this information to better understand your needs
          and provide you with the best possible services and experiences.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Use of Data</h2>
        <p className="text-gray-600 mb-4">
          We use your personal information for various purposes, including but
          not limited to, creating a user account, facilitating your
          interactions with our services, enhancing your user experience,
          providing customer support, and ensuring compliance with applicable
          laws and regulations.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Sharing of Data</h2>
        <p className="text-gray-600 mb-4">
          We may share your personal information with our trusted partners,
          affiliates, or third-party service providers who assist us in offering
          or improving our services. We also may share your personal information
          if we believe that sharing is necessary to protect our rights,
          property, safety, or that of our users.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Security</h2>
        <p className="text-gray-600 mb-4">
          We take appropriate security measures to protect your personal
          information against unauthorized access or disclosure. We utilize
          encryption technology to safeguard your personal information,
          including credit card and bank account information. However, despite
          our best efforts, no method of electronic transmission or storage is
          completely secure, and we cannot guarantee the absolute security of
          your personal information.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Data Retention</h2>
        <p className="text-gray-600 mb-4">
          We will retain your personal information for as long as it is
          necessary for the purposes for which it was collected, unless a longer
          retention period is required or permitted by law. You have the right
          to request that we delete your personal information from our records
          at any time.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to access, update, or delete the personal
          information we have about you. If you have any questions or concerns
          about this privacy policy, please do not hesitate to contact us.
        </p>
      </motion.div>
    </section>
  );
};

export default Interface;
