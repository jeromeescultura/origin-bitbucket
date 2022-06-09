import { useEffect, useState } from "react";
import { FormLabel, Slider } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
  sliderValue,
  min,
  max,
  sliderMarks,
  handleLabel,
  handleChange,
}) => {
  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue]);

  return (
    <div>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={() => (
          <Slider
            sx={{
              width: { xs: "100%", sm: "90%" },
              height: "20px",
              "& :nth-child(3)": {
                ml: { xs: "2%", md: "1%" },
              },
              "& :nth-last-child(3)": {
                ml: { xs: "-8%", md: "-4%" },
              },
              '&.MuiSlider-markLabel[data-index === "0"]': {
                ml: "50px",
              },

              "& .MuiSlider-markLabel": {
                marginTop: "30px",
              },
              "& .MuiSlider-thumb": {
                xs: {
                  width: "35px",
                  height: "35px",
                },
                lg: {
                  width: "50px",
                  height: "50px",
                },
              },

              "& .MuiSlider-mark": {
                width: "15px",
                height: "15px",
                borderRadius: "50%",
              },
            }}
            color="secondary"
            value={sliderValue}
            valueLabelFormat={(value) => handleLabel(value)}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            step={1}
            marks={sliderMarks}
          />
        )}
      />
    </div>
  );
};

export default FormInputSlider;
