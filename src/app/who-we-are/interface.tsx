"use client"
import React from "react";
import { motion } from "framer-motion";
import BG from "../../../public/images/others/who-we-are-bg.webp";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-start mx-auto min-h-screen py-20 relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
      <Image
        loading="eager"
        priority
				width={1920}
				height={1282}
        src={BG}
        alt="laptop white background"
        className="w-full h-full opacity-50 object-cover absolute top-0 left-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="bg-white/80 p-8 rounded shadow flex flex-col"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 mx-auto font-sansita tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-green-3 to-green-5">Who We Are</h1>
        <p className="text-lg text-gray-700 mb-2 whitespace-normal">
          GrocerGo is your one-stop solution for all your grocery needs. Our
          team is dedicated to providing our customers with a seamless online
          shopping experience and the highest quality products. We strive to
          maintain long-term relationships with our suppliers and ensure the
          safety and security of our products at all times.
        </p>
        <p className="text-lg text-gray-700 mb-4 whitespace-normal">
          We understand the importance of providing exceptional customer
          service, and our dedicated team is committed to delivering on this
          promise. We are continuously working to expand our product offerings
          and enhance the overall shopping experience. Whether you&apos;re a
          frequent visitor or just stopping by for a few essentials, GrocerGo is
          your go-to destination for all things grocery.
        </p>
        <h2 className="text-xl mb-2 font-bold text-gray-700">Our Mission</h2>
        <p className="text-lg mb-4 text-gray-700 whitespace-normal">
          At GrocerGo, our mission is simple: to revolutionize your grocery
          shopping experience. We&apos;re dedicated to bringing the freshest,
          highest-quality products directly to your doorstep. We work tirelessly
          to ensure convenience, affordability, and speedy delivery. Your trust
          in us fuels our commitment to making grocery shopping easier and more
          enjoyable.
        </p>
        <h2 className="text-xl mb-2 font-bold text-gray-700">
          Quality Guaranteed
        </h2>
        <p className="text-lg mb-4 text-gray-700 whitespace-normal">
          Quality is the heart of GrocerGo. We source our products carefully and
          rigorously, ensuring that everything you receive is of the highest
          standard. From farm-fresh produce to pantry staples, we stand behind
          every item we deliver. With GrocerGo, you can shop with confidence,
          knowing that quality is our promise to you.
        </p>
        <h2 className="text-xl mb-2 font-bold text-gray-700">
          Your Trusted Grocery Partner
        </h2>
        <p className="text-lg mb-4 text-gray-700 whitespace-normal">
          Thank you for choosing GrocerGo as your trusted grocery partner.
          We&apos;re more than an online store; we&apos;re your ally in making
          everyday life easier. Our team is dedicated to serving you, and
          we&apos;re here to meet your grocery needs with excellence, every
          time. Together, we&apos;ll make grocery shopping a breeze.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
