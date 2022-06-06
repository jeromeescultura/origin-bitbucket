import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

function ButtonQuestion({ options, action, answer, answers }) {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const activeStyles =
    "z-50 bg-highlight border-accentColor text-sm max-w-[200px] lg:text-base w-full h-[48px] bg-white text-[#505050] font-light text-center border transition duration-200";

  const notActiveStyles =
    "text-sm max-w-[200px] lg:text-base w-full h-[48px] bg-white  text-[#505050] font-light text-center border   transition duration-200";

  useEffect(() => {
    if ("QFour" in answers) {
      handleClick(answers?.QFour);
    } else if (typeof answers?.QOne !== "number") {
      if ("choice" in answers?.QOne) {
        handleClick(answers?.QOne?.choice);
      }
    } else {
      handleClick(answers?.QThree);
    }
  }, []);

  const handleClick = (value) => {
    if ("QFour" in answers) {
      console.log("four");
      answer({
        ...answers,
        QFour: value,
      });
    } else if (typeof answers?.QOne !== "number") {
      if ("choice" in answers?.QOne) {
        console.log("one");
        answer({
          ...answers,
          QOne: { ...answers?.QOne, choice: value },
        });
      }
    } else {
      console.log("three");
      answer({
        ...answers,
        QThree: value,
      });
    }

    switch (value) {
      case 1:
        setBtn1(!btn1);
        setBtn2(false);
        setBtn3(false);

        break;
      case 2:
        setBtn2(!btn2);
        setBtn1(false);
        setBtn3(false);

        break;
      case 3:
        setBtn3(!btn3);
        setBtn1(false);
        setBtn2(false);

        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-row gap-0 mt-8">
      <ButtonGroup>
        {options?.map((item) => (
          <Button size="large" variant="outlined" color="secondary">
            {item.text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default ButtonQuestion;
