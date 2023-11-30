import { MdOutlineDoneOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

type Props = {
  name: string;
  setPopUp: (value: boolean) => void
};

const AddPopUp = ({ name, setPopUp }: Props) => {
  return (
    <motion.div
      key={"addtocart-snackbar"}
      className="fixed bottom-6 left-6 z-[60] bg-[#EDF7ED] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] py-[0.6rem] px-[1.15rem] rounded-lg flex gap-4 items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <MdOutlineDoneOutline className="text-green-2 w-4 h-4" />
      <p className="text-green-5 text-[0.98rem] font-sans">
        <span className="text-green-4">{name}</span>&nbsp;added
        to cart.
      </p>
      <button
        onClick={() => setPopUp(false)}
        className="rounded-full hover:bg-neutral-200/50 p-1"
      >
        <IoMdClose className="w-4 h-4 text-green-5" />
      </button>
    </motion.div>
  );
};

export default AddPopUp;
