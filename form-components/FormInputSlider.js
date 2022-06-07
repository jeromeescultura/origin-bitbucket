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
           
              width: "90%",
              height: "20px",
            
              "& .MuiSlider-markLabel": {
                marginTop: "24px",
              },
              "& .MuiSlider-thumb": {
                width: "50px",
                height: "50px",
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
