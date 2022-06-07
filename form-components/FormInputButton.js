import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputButton = ({ name, control, options, setValue, validation }) => {
  const [selectedBtn, setSelectedBtn] = useState([]);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-medium";

  const handleSelect = (value) => {
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      setSelectedBtn("Yes");
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      setSelectedBtn("No");
    }
  };
  useEffect(() => {
    if (selectedBtn) setValue(name, selectedBtn);
  }, [selectedBtn]);

  return (
    <div>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        size="large"
        color="secondary"
        arial-label="contained button group"
        fullWidth
      >
        <Controller
          control={control}
          name={name}
          render={({}) => {
            return (
              <>
                <Button
                  className={btn1 ? activeStyles : ""}
                  value={options[1].value}
                  onClick={() => handleSelect(0)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  {options[0].value}
                </Button>
                <Button
                  className={btn2 ? activeStyles : ""}
                  value={options[1].value}
                  onClick={() => handleSelect(1)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  {options[1].value}
                </Button>
              </>
            );
          }}
        />
      </ButtonGroup>
    </div>
  );
};

export default FormInputButton;
