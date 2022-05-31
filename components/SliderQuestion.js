import React, { useEffect, useState } from "react";

const SliderQuestion = ({ qst, answer, answers }) => {
  const [sliderChoice, setChoice] = useState(answers.QThree);
  const [ulWidth, setWidth] = useState("w-[50%]");

  useEffect(() => {
    toggleActive(answers.QThree);
  }, [answers.QThree]);

  const toggleActive = (val) => {
    setChoice(val);
    answer({ ...answers, QThree: val });
    switch (val) {
      case 1:
        setWidth("w-[0%]");
        break;
      case 2:
        setWidth("w-[25%]");
        break;
      case 3:
        setWidth("w-[50%]");
        break;
      case 4:
        setWidth("w-[75%]");
        break;
      case 5:
        setWidth("w-[100%]");
        break;
      default:
        setWidth("w-[50%]");
        break;
    }
  };

  return (
    <div className="w-full">
      <div className="mt-12 bg-[#FFB43255] flex items-center w-full h-4 md:h-7 rounded-full relative">
        <div
          className={`flex  rounded-full bg-accentColor h-full min-h-[10px] ${ulWidth}`}
        ></div>
        <div className="w-full absolute ">
          <ul className="flex h-full rounded-full  transition-all ease-linear duration-100  w-full justify-between px-1">
            {qst &&
              qst.map((val, index) => (
                <li key={val.id} className="flex items-center">
                  <button
                    id={val.id}
                    onClick={() => toggleActive(val.id)}
                    className={`origin-center rounded-full transition-all ease-linear duration-300 ${
                      val.id > sliderChoice
                        ? "bg-accentColor hover:bg-[#d5982d]"
                        : "bg-white"
                    } ${
                      sliderChoice === val.id
                        ? "w-14 h-14 bg-accentColor hover:bg-accentColor drop-shadow-sm -m-5"
                        : "hover:scale-125 cursor-pointer w-[10px] h-[10px] md:w-[15px] md:h-[15px] m-0"
                    }`}
                  ></button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="labels mt-6 md:mt-10 text-sm md:text-lg leading-[24px] flex justify-between">
        <label>Not Important</label>
        <label>Very Important</label>
      </div>
    </div>
  );
};

export default SliderQuestion;
