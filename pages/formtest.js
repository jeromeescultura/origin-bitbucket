import FormInputDropdown from "../form-components/FormInputDropdown";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FormInputSlider from "../form-components/FormInputSlider";
import { useEffect, useState } from "react";

const FormTest = () => {
  const storedData = {
    storedValues: JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("FORM_INPUT")
    ),
  };
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

  const [formValues, setFormValues] = useState({
    dropdownValue: "",
    sliderValue: 3,
  });

  useEffect(() => {
    window.localStorage.setItem("FORM_INPUT", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    if (storedData.storedValues !== null) {
      setFormValues(storedData.storedValues);
    }
  }, []);

  console.log(formValues);

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
    setFormValues({
      ...formValues,
      sliderValue: newValue,
    });
  };

  const methods = useForm({ defaultValues: formValues });
  const { control, watch, setValue } = methods;
  const changeHandler = (data) => console.log(data);

  return (
    <div>
      <FormInputDropdown
        dropDownValue={formValues.dropdownValue}
        onChange={watch(changeHandler)}
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
        options={options}
      />

      <FormInputSlider
        name={"sliderValue"}
        setValue={setValue}
        control={control}
        label={"Slider Input"}
        sliderValue={formValues.sliderValue}
        sliderMarks={sliderMarks}
        min={1}
        max={5}
        handleLabel={handleLabel}
        handleChange={handleChange}
      />
    </div>
  );
};

export default FormTest;
