import Image from "next/image";
import { useState, useEffect } from "react";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function IconsQuestion({ answer, answers, ans, setValue, name, options }) {
  const [selected, setSelected] = useState([]);
  const [electricity, setElectricity] = useState(false);
  const [naturalGas, setnaturalGas] = useState(false);
  const [lpg, setLpg] = useState(false);

  const handleSelected = (e, value) => {
    if (value === "electricity") {
      setElectricity(!electricity);
      ButtonTrackingEvent("energySources", !electricity);
    } else if (value === "natural_gas") {
      setnaturalGas(!naturalGas);
      ButtonTrackingEvent("energySources", !naturalGas);
    } else if (value === "lpg") {
      setLpg(!lpg);
      ButtonTrackingEvent("energySources", !lpg);
    }

    let target = e.target;
    let item;

    if (target.children.length === 2) {
      item = target.children[1].children[0];
      if (item.checked) {
        let remaining = selected.filter((val) => val !== item.value);
        setSelected(remaining);
      } else {
        setSelected((prevState) => [...prevState, item.value]);
      }
    } else if (target.children.length === 3) {
      item = target.children[0];
      if (item.checked) {
        let remaining = selected.filter((val) => val !== item.value);
        setSelected(remaining);
      } else {
        setSelected((prevState) => [...prevState, item.value]);
      }
    } else {
      item = target;
      if (item.checked) {
        setSelected((prevState) => [...prevState, item.value]);
      } else {
        let remaining = selected.filter((val) => val !== item.value);
        setSelected(remaining);
      }
    }
  };

  useEffect(() => {
    if (answers) {
      if (answers.length > 0) {
        setSelected(answers);
      }
    }
  }, [answers]);

  useEffect(() => {
    if (answer) answer(selected);
  }, [selected]);

  useEffect(() => {
    if (answers) {
      setValue(name, answers);
    } else {
      setValue(name, selected);
    }
  }, [selected, answers]);

  return (
    <div className="flex flex-col lg:flex-row md:gap-4">
      {options &&
        options?.map((item, index) => (
          <div
            key={index}
            className={`${
              selected?.includes(item.value) &&
              "lg:bg-highlight border-accentColor"
            } form-check flex flex-col lg:items-center gap-10 lg:border rounded-xl min-w-[180px] max-w-[220px] py-4 lg:py-6 bg-white  cursor-pointer`}
            onClick={(e) => handleSelected(e, item.value)}
          >
            <div className="md:w-14 md:h-18 w-8 h-8 hidden lg:block pointer-events-none select-none">
              <Image
                src={item.icon}
                width={100}
                height={100}
                objectFit="contain"
                alt={item.icon}
              />
            </div>
            <div className="flex gap-4 items-start lg:items-center">
              <input
                className="relative form-check-input pointer-events-none appearance-none h-6 w-6 border-2 border-[#737373] cursor-pointer rounded-sm bg-white checked:bg-accentColor checked:border-accentColor focus:outline-none transition duration-200"
                type="checkbox"
                value={item.value}
                id={item.id}
                onChange={handleSelected}
                checked={selected?.includes(item.value)}
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
                  alt="checkmark"
                />
              </div>
              <label
                className="form-check-label inline-block text-secondaryText font-light text-sm md:text-base pointer-events-none select-none"
                htmlFor={item.id}
              >
                {item.text}
              </label>
            </div>
          </div>
        ))}
    </div>
  );
}

export default IconsQuestion;
