import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function UsageButtons({
  recommend,
  impactLevel,
  handleButtonSelect,
  industry,
  btn1,
  btn2,
  btn3,
}) {
  const methods = useForm({ defaultValues: impactLevel });
  const { control, watch } = methods;
  const handleUsage = (data) => setButtonSelect(data.usage);

  const activeStyles = "border-accentColor bg-highlight font-medium";
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      size="large"
      color="secondary"
      arial-label="contained button group"
      fullWidth
      className="max-w-[550px] my-2 bg-white !shadow-md"
    >
      <Controller
        onChange={watch(handleUsage)}
        control={control}
        name={"usage"}
        render={() => {
          return (
            <>
              <Button
                className={`${
                  btn1 ? activeStyles : "hover:border hover:border-gray-300"
                } flex flex-col text-center`}
                value={"low"}
                onClick={() => handleButtonSelect(0)}
                sx={{
                  color: "#505050",
                  borderColor: "#E3E3E3",
                  fontSize: "16",
                  py: "18px",
                }}
              >
                <div className="flex justify-around flex-col h-full">
                  <p
                    className={`${
                      btn1 ? "font-medium" : ""
                    } whitespace-nowrap text-[13px]`}
                  >
                    {"Low usage"} <br />
                  </p>
                </div>
              </Button>
              <Button
                className={`${
                  btn2
                    ? activeStyles
                    : `hover:border hover:border-gray-300 ${
                        btn1 &&
                        "border-l-accentColor hover:border-l-accentColor"
                      }`
                } flex flex-col`}
                value={"medium"}
                onClick={() => handleButtonSelect(1)}
                sx={{
                  color: "#505050",
                  borderColor: "#E3E3E3",
                  fontSize: "16",
                  py: "18px",
                }}
              >
                <div className="flex justify-around flex-col h-full">
                  <p
                    className={`${
                      btn2 ? "font-medium" : ""
                    } whitespace-nowrap text-[13px]`}
                  >
                    {"Medium usage"} <br />
                  </p>
                </div>
              </Button>
              {industry?.industryCost?.high > 0 && (
                <Button
                  className={`${
                    btn3
                      ? activeStyles
                      : `hover:border hover:border-gray-300 ${
                          btn2 &&
                          "border-l-accentColor hover:border-l-accentColor"
                        }`
                  } flex flex-col`}
                  value={"high"}
                  onClick={() => handleButtonSelect(2)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                    py: "18px",
                  }}
                >
                  <div className="flex justify-around flex-col h-full">
                    <p
                      className={`${
                        btn3 ? "font-medium" : ""
                      } whitespace-nowrap text-[13px]`}
                    >
                      {"High usage"} <br />
                    </p>
                  </div>
                </Button>
              )}
            </>
          );
        }}
      />
    </ButtonGroup>
  );
}

export default UsageButtons;
