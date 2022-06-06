import FormInputDropdown from "../form-components/FormInputDropdown";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FormInputSlider from "../form-components/FormInputSlider";
import { useEffect, useState } from "react";

const FormTest = () => {
  const storedData = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("FORM_INPUT")
  );

  const options = [
    {
      label: "Dropdown Option 1",
      value: "1",
    },
    {
      label: "Dropdown Option 2",
      value: "2",
    },
  ];

  const sliderMarks = [
    {
      value: 1,
      label: "Not Important",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "Very important",
    },
  ];
  const [sliderValue, setSliderValue] = useState(3);
  const [dropdownValue, setDropdownValue] = useState("");

  const [formValues, setFormValues] = useState({
    dropdownValue: "",
    sliderValue: 3,
  });

  const handleLabel = (val) => {
    switch (val) {
      case 1:
        return "Not Important";
      case 2:
        return "Somewhat Important";
      case 3:
        return "Neutral";
      case 4:
        return "Important";
      case 5:
        return "Very Important";
      default:
        break;
    }
  };

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const methods = useForm({ defaultValues: formValues });
  const { control, watch, setValue } = methods;
  const changeHandler = (data) => {
    setFormValues({
      sliderValue: data.sliderValue,
      dropdownValue: data.dropdownValue,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("FORM_INPUT", JSON.stringify(formValues));
    setSliderValue(formValues.sliderValue);
  }, [formValues]);

  useEffect(() => {
    if (storedData !== null) {
      setFormValues(storedData);
    }
  }, []);

  return (
    <div>
      <FormInputDropdown
        onChange={watch(changeHandler)}
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
        options={options}
        dropdownValue={dropdownValue}
      />

      <FormInputSlider
        name={"sliderValue"}
        setValue={setValue}
        onChange={watch(changeHandler)}
        control={control}
        label={"Slider Input"}
        sliderValue={sliderValue}
        sliderMarks={sliderMarks}
        min={1}
        max={5}
        handleLabel={handleLabel}
        handleChange={handleChange}
      />

      <h1 className="text-4xl">{formValues.sliderValue}</h1>
      <h1 className="text-4xl">
        {formValues.dropdownValue === "" ? "none" : formValues.dropdownValue}
      </h1>
    </div>
  );
};

export default FormTest;
