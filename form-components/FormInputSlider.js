import { useEffect, useState } from "react";
import { FormLabel, Slider } from "@mui/material";
import { Controller } from "react-hook-form";

const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
  sliderValue,
  setSliderValue,
  min,
  max,
  sliderMarks,
  handleLabel,
  handleChange,
}) => {

  return (
    <div className="border mt-10">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={() => (
          <Slider
            sx={{
              width: "700px",
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
