import Image from "next/image";
import { useState } from "react";

function CheckboxComponent({ id, text, subText, action }) {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div className="form-check flex items-start gap-4 lg:ml-16">
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
        } absolute pt-1 cursor-pointer -mt-1`}
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
        className="form-check-label inline-block text-secondaryText font-light text-sm lg:text-base"
        htmlFor={text}
      >
        {text}
        {subText && <p className="text-base text-[#737373] mt-2">{subText}</p>}
      </label>
    </div>
  );
}

export default CheckboxComponent;
