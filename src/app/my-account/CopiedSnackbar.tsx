import { IoCheckmarkDone } from "react-icons/io5";
import { motion } from "framer-motion";

const CopiedSnackbar = () => {
  return (
    <motion.div key={"snackbar"} className="fixed bottom-6 left-6 z-[70] bg-neutral-100 shadow px-3 py-2 rounded-lg flex gap-2 items-center"
		initial={{opacity: 0, y: 30}}
		animate={{opacity: 1, y: 0}}
		exit={{opacity: 0, y: 30}}
		>
      <p className="text-neutral-700">Copied</p>
			<IoCheckmarkDone className="text-green-2" />
    </motion.div>
  );
};

export default CopiedSnackbar;
