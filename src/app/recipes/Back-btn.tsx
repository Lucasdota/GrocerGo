import {ImArrowLeft} from 'react-icons/im';
import { useRouter } from "next/navigation";

type Props = {
  setClicked: (value: string) => void;
};

const BackBtn = ({ setClicked }: Props) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/recipes`);
    setClicked("main");
  }

  return (
    <button
      onClick={() => handleClick()}
      className="absolute bg-white rounded-full p-2 shadow active:translate-y-0.5"
    >
      <ImArrowLeft className="w-5 h-5 drop-shadow text-neutral-800" />
    </button>
  );
};

export default BackBtn