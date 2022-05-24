import { useState } from "react";

function ButtonQuestion({ text, action }) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <button
      className={`${
        selected ? "z-10" : "z-0"
      } w-[203px] h-[48px] bg-white  text-[#505050] font-light text-center border rounded-md focus:bg-highlight focus:border-darkHighlight transition duration-200`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default ButtonQuestion;
