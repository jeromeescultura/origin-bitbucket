import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

function ButtonQuestion({ options }) {
  const [selectedBtn, setSelectedBtn] = useState(true);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-bold";

  const handleClick = (value) => {
    setSelectedBtn(!selectedBtn);
    // switch (value) {
    //   case 1:
    //     setBtn1(!btn1);
    //     setBtn2(false);
    //     setBtn3(false);
    //     break;
    //   case 2:
    //     setBtn2(!btn2);
    //     setBtn1(false);
    //     setBtn3(false);
    //     break;
    //   case 3:
    //     setBtn3(!btn3);
    //     setBtn1(false);
    //     setBtn2(false);
    //     break;
    //   default:
    //     break;
    // }
  };
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      size="large"
      color="secondary"
      fullWidth
      arial-label="contained button group"
    >
      {options?.map((item, index) => (
        <Button
          key={index}
          className={selectedBtn && activeStyles}
          onClick={() => handleClick(index)}
          sx={{ color: "#505050", borderColor: "#E3E3E3" }}
        >
          {item.value}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default ButtonQuestion;
