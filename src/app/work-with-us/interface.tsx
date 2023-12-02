"use client"
import React, { useState } from "react";
import BG from "../../../public/images/others/working-bg.webp";
import Image from "next/image";

const WorkWithUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Insert your own email sending logic here
    console.log("Email sent:", { name, email, phone, message });
  };

  return (
    <section className="container mx-auto min-h-screen py-20 relative px-64 xxl:px-28 xl:px-20 lg:px-10 md:px-0">
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
      <form
        onSubmit={sendEmail}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white/70"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 hover:bg-white focus:bg-white transition duration-200"
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-2 items-center">
          <label
            htmlFor="resume"
            className="text-gray-700 shadow text-sm font-bold cursor-pointer bg-white/40 px-4 py-2 rounded border border-neutral-200 active:translate-y-0.5 focus:shadow-outline hover:bg-white focus:bg-white transition duration-200"
          >
            Upload your resume
          </label>
          <p className="text-gray-700 text-sm">(PDF format only)</p>
          <input
            type="file"
            className="hidden"
            id="resume"
            name="resume"
            accept=".pdf"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            spellCheck="false"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white/40 min-h-[100px] hover:bg-white focus:bg-white transition duration-200"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-4/90 hover:bg-green-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default WorkWithUs;
