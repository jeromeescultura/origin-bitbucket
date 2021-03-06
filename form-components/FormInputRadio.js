import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

const generateRadioOptions = (options, name) => {
  return options?.map((singleOption, index) => (
    <div key={index} className="mt-4">
      <FormControlLabel
        sx={
          singleOption?.subText && {
            display: "flex",
            alignItems: "start",
            mb: 5,
          }
        }
        value={singleOption?.value ?? ""}
        label={
          <div className="">
            <span
              className={`${
                singleOption?.subText && "text-lg font-GorditaMedium"
              }`}
            >
              {singleOption?.label}
            </span>
            {singleOption?.subText && (
              <p className="text-base font-light ml-2">
                {singleOption?.subText}
              </p>
            )}
          </div>
        }
        control={
          <Radio
            color="secondary"
            size="medium"
            onClick={() => ButtonTrackingEvent(name, singleOption?.value)}
          />
        }
      />
    </div>
  ));
};

const FormInputRadio = ({
  name,
  control,
  label,
  validation,
  options,
  radioValue,
  setValue,
  radioDefault,
}) => {
  useEffect(() => {
    if (radioValue) {
      setValue(name, radioValue);
    }
  }, [radioValue]);
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl component="fieldset" error={error ? true : false}>
          {label && (
            <FormLabel component="legend" color="secondary">
              {label}
            </FormLabel>
          )}
          <RadioGroup
            sx={{
              border: error && "2px solid red",
              p: error && "5px",
              borderRadius: error && "10px",
            }}
            value={value ? value : ""}
            onChange={onChange}
          >
            {generateRadioOptions(options, name)}
          </RadioGroup>
          {error && (
            <FormHelperText>{error ? error.message : null}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default FormInputRadio;
