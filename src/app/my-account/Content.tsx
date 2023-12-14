"use client"
import { useAppContext } from "@/app/api/AppContext";
import Informations from "./Informations";
import { useSession } from "next-auth/react";
import { useState } from "react";
import CopiedSnackbar from "./CopiedSnackbar";
import { AnimatePresence } from "framer-motion";

const Content = () => {
  const { setLoginPopUp } = useAppContext();
	const [copiedSnackbar, setCopiedSnackbar] = useState<boolean>(false);
	const { data: session } = useSession();

  return (
      <section className="bg-neutral-100 min-h-screen p-12 lg:p-6 lg:pb-40 pb-40 flex items-start justify-center">
        {session ? (
          <Informations setCopiedSnackbar={setCopiedSnackbar} />
        ) : (
          <div className="flex items-start justify-start tracking-wide text-gray-800 text-lg mx-auto">
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
				<AnimatePresence>
				{copiedSnackbar && <CopiedSnackbar />}    
				</AnimatePresence>
      </section>
    
  );
};

export default Content;
