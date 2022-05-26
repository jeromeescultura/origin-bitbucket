import Image from "next/image";
import { useState } from "react";

function CheckboxComponent({ id, text, action }) {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div className="form-check flex items-center gap-4 ">
      <input
        className="form-check-input appearance-none min-h-g[24px] min-w-[24px] w-6 h-6 border-2 border-[#737373] rounded-sm bg-white checked:bg-accentColor checked:border-accentColor focus:outline-none transition duration-200 cursor-pointer"
        type="checkbox"
        value=""
        id={text}
        onChange={handleSelected}
        checked={selected && true}
      />
      <div
        className={`${
          selected ? "block" : "hidden"
        } absolute pt-1 cursor-pointer`}
      >
        <Image
          src="/icons/check.svg"
          width={24}
          height={24}
          objectFit="contain"
          onClick={handleSelected}
        />
      </div>
      <label
        className="form-check-label inline-block text-secondaryText font-light text-sm md:text-base"
        htmlFor={text}
      >
        {text}
      </label>
    </div>
  );
}

export default CheckboxComponent;
