function RadioQuestion({ id, text, action }) {
  return (
    <div className="form-check flex items-center mt-8">
      <input
        className="form-check-input appearance-none rounded-full h-6 w-6 border-2 border-[#737373] bg-white checked:bg-accentColor checked:border-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:ring-accentColor checked:ring-2 min-w-[24px]"
        type="radio"
        name="flexRadioDefault"
        id={text}
      />
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
