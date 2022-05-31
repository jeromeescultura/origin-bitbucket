import Image from "next/image";
import { useState, useEffect } from "react";

function IconsQuestion({ id, text, icon, answer, answers, ans }) {
  const [selected, setSelected] = useState(false);
  const handleSelected = (e) => {
    let target = e.target;
    let item;
    setSelected(!selected);
    if (target.children.length === 2) {
      item = target.children[1].children[0];
      if (item.checked) {
        answer({
          ...answers,
          QTwo: answers.QTwo.filter((val) => val !== item.value),
        });
      } else {
        answer({
          ...answers,
          QTwo: [...answers.QTwo, item.value],
        });
      }
    } else if (target.children.length === 3) {
      item = target.children[0];
      if (item.checked) {
        answer({
          ...answers,
          QTwo: answers.QTwo.filter((val) => val !== item.value),
        });
      } else {
        answer({
          ...answers,
          QTwo: [...answers.QTwo, item.value],
        });
      }
    } else {
      item = target;
      if (item.checked) {
        answer({
          ...answers,
          QTwo: [...answers.QTwo, item.value],
        });
      } else {
        answer({
          ...answers,
          QTwo: answers.QTwo.filter((val) => val !== item.value),
        });
      }
    }
  };

  useEffect(() => {
    if (answers?.QTwo?.includes(ans)) {
      setSelected(!selected);
    }
  }, []);

  return (
    <div
      className={`${
        selected && "lg:bg-highlight border-accentColor"
      } form-check flex flex-col lg:items-center gap-10 lg:border rounded-xl min-w-[180px] max-w-[220px] py-4 lg:py-6 bg-white  cursor-pointer`}
      onClick={handleSelected}
    >
      <div className="md:w-14 md:h-18 w-8 h-8 hidden lg:block pointer-events-none select-none">
        <Image
          src={icon}
          width={100}
          height={100}
          objectFit="contain"
          alt={icon}
        />
      </div>
      <div className="flex gap-4 items-start lg:items-center">
        <input
          className="relative form-check-input appearance-none h-6 w-6 border-2 border-[#737373] cursor-pointer rounded-sm bg-white checked:bg-accentColor checked:border-accentColor focus:outline-none transition duration-200"
          type="checkbox"
          value={ans}
          id={id}
          onChange={handleSelected}
          checked={selected && true}
        />
        <div
          className={`${
            selected ? "block" : "hidden"
          } absolute lg:pt-2 pointer-events-none`}
        >
          <Image
            src="/icons/check.svg"
            width={24}
            height={24}
            objectFit="contain"
            onClick={handleSelected}
            alt="checkmark"
          />
        </div>
        <label
          className="form-check-label inline-block text-secondaryText font-light text-sm md:text-base pointer-events-none select-none"
          htmlFor={id}
        >
          {text}
        </label>
      </div>
    </div>
  );
}

export default IconsQuestion;
