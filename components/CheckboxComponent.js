import Image from "next/image";
import { useEffect, useState } from "react";

function CheckboxComponent({
  id,
  text,
  subText,
  ans,
  action,
  answer,
  answers,
  container,
}) {
  const [selected, setSelected] = useState(false);

  const handleSelected = (e) => {
    let target = e.target;
    let item = target.value;
    console.log("target", target);
    setSelected(!selected);

    if (container === 0) {
      if (target.checked) {
        answer({
          ...answers,
          QTwo: {
            ...answers.QTwo,
            enSource: [...answers.QTwo.enSource, item],
          },
        });
      } else {
        answer({
          ...answers,
          QTwo: {
            ...answers.QTwo,
            enSource: answers.QTwo.enSource.filter((val) => val !== item),
          },
        });
      }
    } else if (container === 1) {
      if (target.checked) {
        answer({
          ...answers,
          QTwo: {
            ...answers.QTwo,
            genOp: [...answers.QTwo.genOp, item],
          },
        });
      } else {
        answer({
          ...answers,
          QTwo: {
            ...answers.QTwo,
            genOp: answers.QTwo.genOp.filter((val) => val !== item),
          },
        });
      }
    } else {
      if (target.checked) {
        answer({
          ...answers,
          QThree: [...answers.QThree, item],
        });
      } else {
        answer({
          ...answers,
          QThree: answers.QThree.filter((val) => val !== item),
        });
      }
    }
  };

  useEffect(() => {}, [answers]);

  return (
    <div className="form-check flex items-start gap-4">
      <input
        className="form-check-input appearance-none min-h-g[24px] min-w-[24px] w-6 h-6 border-2 border-[#737373] rounded-sm bg-white checked:bg-accentColor checked:border-accentColor focus:outline-none transition duration-200 cursor-pointer"
        type="checkbox"
        value={ans}
        id={text}
        onClick={handleSelected}
        defaultChecked={
          (typeof answers?.QThree === "object" &&
            answers?.QThree?.includes(ans)) ||
          answers?.QTwo?.enSource?.includes(ans) ||
          answers?.QTwo?.genOp?.includes(ans)
            ? true
            : false
        }
      />
      <div
        className={`${
          (typeof answers?.QThree === "object" &&
            answers?.QThree?.includes(ans)) ||
          answers?.QTwo?.enSource?.includes(ans) ||
          answers?.QTwo?.genOp?.includes(ans)
            ? "block"
            : "hidden"
        } absolute pt-1 cursor-pointer -mt-1 pointer-events-none`}
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
        className="form-check-label inline-block text-secondaryText font-light text-xl"
        htmlFor={text}
      >
        {text}
        {subText && <p className="text-base text-[#737373] mt-2">{subText}</p>}
      </label>
    </div>
  );
}

export default CheckboxComponent;
