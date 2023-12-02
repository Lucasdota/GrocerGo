import React, {useState} from 'react';
import { FaRegCreditCard } from "react-icons/fa6";
import Image from "next/image";
import EletroLogo from "../../../public/images/others/electronics.webp";
import { FaCircleInfo } from "react-icons/fa6";
import Link from 'next/link';

const Billing = () => {
	const [cardNumber, setCardNumber] = useState<number>(1234567891234567);
	const [expireDate, setExpireDate] = useState<string>("24/12");
	const [securityNumber, setSecurityNumber] = useState<string>("123");

	const spacedStringNumber = cardNumber
    .toString()
    .replace(/(\d)(?=(\d{4})+$)/g, "$1 ");

	return (
    <div className="flex flex-col lg:px-8 xxs:px-0">
      {/* title */}
      <h2 className="text-gray-800 text-3xl tracking-wider mx-auto mb-12 font-bold font-sansita drop-shadow-sm xxs:text-2xl">
        Payment Method
      </h2>

      {/* cards */}
      <div className="grow space-y-8">
        {/* fee */}
        <div className="rounded-lg p-8 border space-y-4 whitespace-normal text-gray-700 w-full">
          <h3 className="text-xl font-bold">Payment Guide</h3>
          <p>
            A fee will be charged according to the number of working days of the
            application per your devices.
          </p>
          <p>
            Here is the document -{" "}
            <Link href="/credit-card" className="font-bold underline underline-offset-2 cursor-pointer">
              Payment
            </Link>
          </p>
        </div>

        {/* card details */}
        <div className="flex gap-2 w-full gg:flex-col">
          {/* number */}
          <div className="flex flex-col gap-1 grow gg:grow-0">
            <label
              htmlFor="card-number"
              className="font-bold text-sm text-gray-600"
            >
              Card number:
            </label>
            <div className="relative flex items-center tracking-wider w-full xxl:w-fit">
              <FaRegCreditCard className="absolute left-3 text-neutral-300" />
              <input
                id="card-number"
                value={spacedStringNumber}
                type="text"
                aria-label="card number"
                readOnly
                className="pl-8 pr-3 py-1.5 focus:outline-none border-4 border-neutral-300 rounded text-neutral-300 w-full gg:w-fit"
              />
            </div>
          </div>

          {/* expire date */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="expire-date"
              className="font-bold text-sm text-gray-600"
            >
              Expire date:
            </label>
            <input
              id="expire-date"
              value={expireDate}
              type="text"
              aria-label="expire date"
              readOnly
              className="w-fit px-3 py-1.5 focus:outline-none border-4 border-neutral-300 rounded text-neutral-300 tracking-wider font-bold"
            />
          </div>

          {/* CVC */}
          <div className="flex flex-col gap-1">
            <label htmlFor="cvc" className="font-bold text-sm text-gray-600">
              CVC:
            </label>
            <input
              id="cvc"
              value={securityNumber}
              type="text"
              aria-label="CVC"
              readOnly
              className="w-fit px-3 py-1.5 focus:outline-none border-4 border-neutral-300 rounded text-neutral-300 tracking-wider font-bold"
            />
          </div>
        </div>

        {/* register btn */}
        <div className="flex justify-between items-center w-full">
          <Image
            src={EletroLogo}
            width={64}
            height={64}
            alt="eletronics logo"
            className="w-12 h-12"
          />
          <button className="flex items-center justify-center border-4 border-gray-700 rounded py-1 px-3 bg-white shadow active:translate-y-[1px]">
            <p className="text-gray-700 font-semibold bg-white">Register</p>
          </button>
        </div>
      </div>

      {/* second title*/}
      <h2 className="text-gray-800 my-12 text-3xl tracking-wider mx-auto mb-12 font-bold font-sansita drop-shadow-sm xxs:text-2xl">
        Payment History
      </h2>

      {/* payment history */}
      <div className="space-y-8">
        {/* year selection */}
        <select
          name="year"
          className="focus:outline-none shadow p-1 text-gray-700 font-bold tracking-wide bg-neutral-200"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        {/* history */}
        <div className="w-full rounded bg-neutral-200 py-4 px-8 flex items-center gap-2">
          <FaCircleInfo className="text-gray-700" />
          <p className="text-gray-700 font-bold">No Data</p>
        </div>
      </div>
    </div>
  );
}

export default Billing