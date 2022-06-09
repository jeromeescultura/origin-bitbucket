function QuestionContainer(props) {
  return (
    <div
      className={`${
        props.style
          ? `${props.style} pt-12`
          : "px-8 py-9 lg:pl-16 lg:pr-24 lg:py-16 "
      } bg-white rounded-3xl`}
    >
      <div
        className={`flex flex-col lg:flex-row ${
          props.style ? "" : "gap-4 lg:gap-12"
        }`}
      >
        <div>
          <p className="text-4xl lg:text-[56px] text-primaryText">{props.id}</p>
        </div>
        <div>
          {props.text && (
            <p className="text-base lg:text-[20px] text-secondaryText font-light">
              {props.text}
            </p>
          )}
          {props.subText && (
            <p className="mt-8 font-light text-sm lg:text-base">
              {props.subText}
            </p>
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;

