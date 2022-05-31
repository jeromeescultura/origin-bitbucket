import Image from "next/image";
import { useState } from "react";
import CheckboxComponent from "./CheckboxComponent";

function CheckboxContainer({
  icon,
  title,
  questionsList,
  id,
  answer,
  answers,
}) {
  return (
    <div className="flex gap-12">
      <div className="flex mt-12">
        <div className="flex flex-col md:flex-row items-start gap-3">
          {icon && (
            <div className="min-w-[40px] min-h-[40px] w-12 h-12 p-2 hidden md:inline">
              <Image src={icon} width={50} height={50} objectFit="contain" />
            </div>
          )}
          <div className="flex flex-col gap-8 mt-2">
            <div className="flex">
              {icon && (
                <div className="min-w-[30px] min-h-[30px] w-10 h-10 p-2 md:hidden">
                  <Image
                    src={icon}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt={icon}
                  />
                </div>
              )}
              <p className="text-[20px] font-bold text-secondaryText">
                {title}
              </p>
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
        </div>
      </div>
    </div>
  );
}

export default CheckboxContainer;
