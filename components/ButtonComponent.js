function ButtonComponent({ text, action, type, style }) {
  let mainBtn = "bg-secondaryBG text-white hover:bg-red-600";

  let borderBtn =
    "text-secondaryBG border-secondaryBG border hover:bg-gray-100";

  return (
    <button
      className={`${
        type ? borderBtn : mainBtn
      } ${style} text-base w-full min-w-[120px] py-3 px-8 rounded-full whitespace-nowrap`}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
