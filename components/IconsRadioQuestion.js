import Image from "next/image";
import React, { useState, useEffect } from "react";

const IconsRadioQuestion = ({ qst, answer, answers }) => {
  const [activeState, changeState] = useState(answers?.QOne);

  useEffect(() => {
    handleClick(answers?.QOne);
  }, []);

  const handleClick = (val) => {
    changeState(val);
    answer({ ...answers, QOne: val });
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 mt-12">
      {qst.map((val, index) => (
        <div
          key={val.id}
          onClick={() => handleClick(val.id)}
          className={`w-[219px] h-[178px] flex justify-center flex-col items-center bg-white  text-subTextColor font-light text-center border rounded-md text-[16px]  capitalize cursor-pointer mr-6 transition-all duration-100 ease-linear ${
            activeState === val.id
              ? "bg-highlight border-accentColor"
              : "hover:border-gray-400"
          }`}
        >
          <Image
            src={val.icon}
            width={index === 0 ? 82 : 72}
            height={index === 0 ? 64 : 72}
            alt={val.icon}
          />
          <p className="mt-8">{val.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsRadioQuestion;
