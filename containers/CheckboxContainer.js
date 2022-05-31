import Image from "next/image";
import CheckboxComponent from "../components/CheckboxComponent";

function CheckboxContainer({
  icon,
  title,
  questionsList,
  id,
  answer,
  answers,
}) {
  return (
    <div className="flex flex-col gap-12 mt-12">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="w-6 h-6 lg:w-12 lg:h-12">
            <Image src={icon} width={50} height={50} objectFit="contain" />
          </div>
        )}
        <p className="text-[20px] font-bold text-secondaryText">{title}</p>
      </div>

      {questionsList &&
        questionsList?.map((item) => (
          <CheckboxComponent
            id={item.id}
            text={item.text}
            key={item.id}
            ans={item.value}
            container={id}
            answer={answer}
            answers={answers}
          />
        ))}
    </div>
  );
}

export default CheckboxContainer;
