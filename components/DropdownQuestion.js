import React from "react";
import Image from "next/image";

const DropdownQuestion = ({ qst, answer, answers }) => {
  return (
    <div className="relative mt-12">
      <select
        name="industry"
        id="industry"
        className="appearance-none md:text-[16px] cursor-pointer bg-white border border-gray-400 rounded-md p-4 w-full "
        value={answers.QOne.industry}
        onChange={(e) =>
          answer({
            ...answers,
            QOne: { ...answers.QOne, industry: e.target.value },
          })
        }
      >
        <option defaultValue>Please select</option>
        {qst.map((val) => (
          <option value={val.text} key={val.id} className="capitalize">
            {val.text}
          </option>
        ))}
      </select>
      <div className="absolute w-5 h-5 right-4 top-5 z-30 pointer-events-none">
        <Image
          src="/icons/chevron.svg"
          width={500}
          height={500}
          alt="chevron"
        />
      </div>
    </div>
  );
};

export default DropdownQuestion;
