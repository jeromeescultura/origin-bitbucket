import { useState, useEffect } from "react";

function RadioQuestion({ id, text, action, answer, answers }) {
  const [isChecked, setChecked] = useState(false);

  const changeHandler = () => {
    if (typeof answers.QOne !== "number") {
      if ("sites" in answers.QOne) {
        answer({ ...answers, QOne: { ...answers.QOne, sites: id } });
      }
    } else {
      answer({ ...answers, QTwo: id });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="form-check flex items-center mt-8">
      <div>
        <input
          className="form-check-input appearance-none rounded-full h-6 w-6 border-2 border-[#737373] bg-white checked:bg-accentColor checked:border-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:ring-accentColor checked:ring-2"
          type="radio"
          name="flexRadioDefault"
          id={text}
          onChange={changeHandler}
          defaultChecked={
            answers?.QOne?.sites === id || answers?.QTwo === id ? true : false
          }
        />
      </div>
      <label
        className="form-check-label inline-block text-secondaryText font-light  stroke-2 stroke-red-700 ml-5"
        htmlFor={text}
      >
        {text}
      </label>
    </div>
  );
}

export default RadioQuestion;
