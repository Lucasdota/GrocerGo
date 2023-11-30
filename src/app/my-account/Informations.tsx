import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Billing from "./Billing";
import { HiOutlineCog } from "react-icons/hi";
import { FaRegCreditCard } from "react-icons/fa6";
import { signOut } from "next-auth/react";
import { IoMdArrowDropleft } from "react-icons/io";

type Props = {
  setCopiedSnackbar: (value: boolean) => void;
};

const Informations = ({ setCopiedSnackbar }: Props) => {
  const [btnClicked, setBtnClicked] = useState<string>("dashboard");

  return (
    <div className="flex lg:flex-col lg:items-center lg:justify-center gap-16 lg:gap-8 w-full">
      <aside className="p-8 lg:p-4 rounded-lg shadow-lg space-y-8 lg:space-y-4 w-60 min-w-[15rem] lg:w-full tracking-wide h-fit">
        <h3 className="text-xl font-semibold">Menu</h3>
        <div className="w-full h-0.5 bg-gray-200 rounded-lg" />
        <div className="flex flex-col lg:flex-row sm:flex-col sm:gap-4 items-start gap-4 lg:gap-0 lg:justify-between">
          <button
            onClick={() => setBtnClicked("dashboard")}
            className="flex items-center gap-1.5 group relative"
          >
            <HiOutlineCog className="text-gray-600" />
            <p
              className={`underline-offset-2 group-hover:underline text-gray-800`}
            >
              Dashboard
            </p>
            {btnClicked === "dashboard" && (
              <IoMdArrowDropleft className="text-gray-600 absolute -right-4" />
            )}
          </button>
          <button
            onClick={() => setBtnClicked("billing")}
            className="flex items-center gap-1.5 group relative"
          >
            <FaRegCreditCard className="text-gray-600" />
            <p
              className={`underline-offset-2 group-hover:underline text-gray-800`}
            >
              Billing
            </p>
            {btnClicked === "billing" && (
              <IoMdArrowDropleft className="text-gray-600 absolute -right-4" />
            )}
          </button>
          <button
            onClick={() => signOut()}
            className="text-gray-400 hover:text-black mt-4 lg:mt-0"
          >
            Sign out
          </button>
        </div>
      </aside>

      <div className="w-full">
        {btnClicked === "dashboard" ? (
          <Dashboard setCopiedSnackbar={setCopiedSnackbar} />
        ) : (
          <Billing />
        )}
      </div>
    </div>
  );
};

export default Informations;
