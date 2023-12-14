"use client"
import { MdOutlineDoneOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/app/api/AppContext";

const AddToCartPopUp = () => {
  const { addedPopUp, addedItemName } = useAppContext();

  return (
    <AnimatePresence>
      {addedPopUp && (
        <motion.div
          key={"addtocart-snackbar"}
          className="fixed bottom-6 right-6 z-[60] bg-[#EDF7ED] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] py-[0.6rem] px-[1.15rem] rounded-lg flex gap-4 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <MdOutlineDoneOutline className="text-green-4 w-4 h-4" />
          <p className="text-green-5 text-[0.98rem] font-sans">
            <span className="text-green-4">{addedItemName}</span>&nbsp;added to
            cart.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddToCartPopUp;
