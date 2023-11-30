"use client"
import GenerateCards from "./GenerateCards";
import { useSession } from "next-auth/react";
import { useAppContext } from "@/app/api/AppContext";

const Content = () => {
	const { data: session } = useSession();
  const { setLoginPopUp } = useAppContext();

  return (
    <section className="bg-neutral-100 min-h-[80dvh] shadow w-[90%] mx-auto p-8 md:px-4 md:w-full pb-44">
      {session ? (
        <ul
          className={`grid grid-cols-5 gg:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-4`}
        >
          <GenerateCards />
        </ul>
      ) : (
        <div className="flex items-start justify-center tracking-wide text-gray-800 text-lg mx-auto">
          <button
            onClick={() => setLoginPopUp(true)}
            className="font-semibold underline underline-offset-2 hover:text-gray-600"
          >
            Sign in
          </button>
          &nbsp;
          <p>to view the content of this page.</p>
        </div>
      )}
    </section>
  );
};

export default Content;
