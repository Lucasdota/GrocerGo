"use client"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/app/api/AppContext";

const AddToCartPopUp = () => {
  const { addedPopUp, addedItemName } = useAppContext();

  return (
    <AnimatePresence>
      {addedPopUp && (
        <motion.div
          key={"addtocart-snackbar"}
          className="fixed bottom-6 md:bottom-2 md:right-2 right-6 z-[60] bg-[#EDF7ED] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] py-[0.65rem] px-[1.10rem] rounded flex gap-3 items-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
        >
          <IoMdCheckmarkCircleOutline className="text-green-4 w-[1.35rem] h-[1.35rem]" />
          <p className="text-green-5 text-[0.98rem] font-sans">
            {addedItemName}&nbsp;added to cart.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToCartPopUp;
