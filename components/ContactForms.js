import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormInputDropdown from "../form-components/FormInputDropdown";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { FormInputText } from "../form-components/FormInputText";
import FormInputRadio from "../form-components/FormInputRadio";

function ContactForms({ text }) {
  const checkboxOptions = [
    {
      label: "I am the primary account holder for this account",
      value: "1",
    },
  ];
  const states = [
    {
      name: "australian capital territory",
      abbreviation: "act",
      capital: "canberra",
      type: "territory",
    },
    {
      name: "new south wales",
      abbreviation: "nsw",
      capital: "sydney",
      type: "state",
    },
    {
      name: "northern territory",
      abbreviation: "nt",
      capital: "darwin",
      type: "territory",
    },
    {
      name: "queensland",
      abbreviation: "qld",
      capital: "brisbane",
      type: "state",
    },
    {
      name: "south australia",
      abbreviation: "sa",
      capital: "adelaide",
      type: "state",
    },
    {
      name: "tasmania",
      abbreviation: "tas",
      capital: "hobart",
      type: "state",
    },
    {
      name: "victoria",
      abbreviation: "vic",
      capital: "melbourne",
      type: "state",
    },
    {
      name: "western australia",
      abbreviation: "wa",
      capital: "perth",
      type: "state",
    },
  ];

  const defaultValues = {
    unitNo: "",
    streetNo: "",
    street: "",
    city: "",
    dropdown: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    existingBusiness: false,
    accountNumber: "",
    primaryAccountHolder: false,
    contactMethod: "",
    preferredTime: [],
  };

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("CONTACT_FORMS_DETAILS")
    ) || null;

  const [contactFormsDetails, setContactFormsDetails] = useState(defaultValues);

  // Retain Values
  const [existingBusiness, setExistingBusiness] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [unitNo, setUnitNo] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [postcode, setpostcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryAccountHolder, setPrimaryAccountHolder] = useState(false);
  const [contactMethod, setContactMethod] = useState("");
  const [preferredTime, setPreferredTime] = useState([]);

  useEffect(() => {
    if (storedData !== null) {
      setContactFormsDetails(storedData);
      setExistingBusiness(storedData?.existingBusiness);
      setAccountNumber(storedData?.accountNumber);
      setUnitNo(storedData?.unitNo);
      setStreetNo(storedData?.streetNo);
      setStreet(storedData?.street);
      setCity(storedData?.city);
      setDropdown(storedData?.dropdown);
      setpostcode(storedData?.postcode);
      setFirstName(storedData?.firstName);
      setLastName(storedData?.lastName);
      setEmail(storedData?.email);
      setPhone(storedData?.phone);
      setPrimaryAccountHolder(storedData?.primaryAccountHolder);
      setContactMethod(storedData?.contactMethod);
      setPreferredTime(storedData?.preferredTime);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "CONTACT_FORMS_DETAILS",
      JSON.stringify(contactFormsDetails)
    );
  }, [contactFormsDetails]);

  const methods = useForm({ defaultValues: contactFormsDetails });
  const { handleSubmit, control, watch, setValue } = methods;
  const onSubmit = (data) => console.log(data.primaryAccountHolder);

  const handleChange = (data) => {
    setContactFormsDetails({
      existingBusiness: data.existingBusiness,
      accountNumber: data.accountNumber,
      unitNo: data.unitNo,
      streetNo: data.streetNo,
      street: data.street,
      city: data.city,
      dropdown: data.dropdown,
      postcode: data.postcode,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      primaryAccountHolder: data.primaryAccountHolder,
      contactMethod: data.contactMethod,
      preferredTime: data.preferredTime,
    });
  };

  // Handle Existing Button
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-medium";

  const handleButtonSelect = (value) => {
    setExistingBusiness(value.toString());
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
    } else {
      setBtn1(false);
      setBtn2(true);
    }
  };

  const checkboxHandler = () => {
    setPrimaryAccountHolder(!primaryAccountHolder);
    setValue("primaryAccountHolder", primaryAccountHolder);
  };

  useEffect(() => {
    setValue("primaryAccountHolder", primaryAccountHolder);
  }, [primaryAccountHolder]);

  useEffect(() => {
    if (existingBusiness !== "") {
      setValue("existingBusiness", existingBusiness);
      handleButtonSelect(parseInt(existingBusiness));
    }
  }, [existingBusiness]);
  return (
    <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg lg:col-span-3">
      <p>{text}</p>
      <p className="font-medium text-sm">
        Do you have an existing business account with Origin?
      </p>
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
          name="existingBusiness"
          render={({}) => {
            return (
              <>
                <Button
                  className={btn1 ? activeStyles : ""}
                  value={"Yes"}
                  onClick={() => handleButtonSelect(0)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  Yes
                </Button>
                <Button
                  className={btn2 ? activeStyles : ""}
                  value={"No"}
                  onClick={() => handleButtonSelect(1)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  No
                </Button>
              </>
            );
          }}
        />
      </ButtonGroup>

      {btn1 && (
        <>
          <p className="font-medium text-sm">
            What is your Origin Account Number?
          </p>
          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="accountNumber"
                label="Account number"
                control={control}
                setValue={setValue}
                inputValue={accountNumber}
                onChange={watch(handleChange)}
                validation={{ required: "Required" }}
              />
            </Grid>
          </Grid>
        </>
      )}
      <p className="font-medium text-sm">
        What is the address of your primary site on the account?
      </p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormInputText
            name="unitNo"
            label="Unit no."
            control={control}
            setValue={setValue}
            inputValue={unitNo}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputText
            name="streetNo"
            label="Street no."
            control={control}
            setValue={setValue}
            inputValue={streetNo}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="street"
            label="Street"
            control={control}
            setValue={setValue}
            inputValue={street}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="city"
            label="City/Suburb"
            control={control}
            setValue={setValue}
            inputValue={city}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormInputDropdown
            name="dropdown"
            control={control}
            label="State"
            states={states}
            setValue={setValue}
            dropdownValue={dropdown}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>

        <Grid item xs={6}>
          <FormInputText
            name="postcode"
            label="Postcode"
            control={control}
            setValue={setValue}
            inputValue={postcode}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <p className="font-medium text-sm">Your contact details</p>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="firstName"
            label="First Name"
            control={control}
            setValue={setValue}
            inputValue={firstName}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="lastName"
            label="Last Name"
            control={control}
            setValue={setValue}
            inputValue={lastName}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="email"
            label="Email Address"
            control={control}
            setValue={setValue}
            inputValue={email}
            onChange={watch(handleChange)}
            validation={{
              required: "Required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="phone"
            label="Phone number"
            control={control}
            setValue={setValue}
            inputValue={phone}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="primaryAccountHolder"
            render={() => {
              return (
                <FormControlLabel
                  label="I am the primary account holder for this account"
                  control={
                    <Checkbox
                      color="secondary"
                      size="large"
                      checked={primaryAccountHolder}
                      onChange={checkboxHandler}
                    />
                  }
                />
              );
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <p className="text-sm font-medium mb-3">Contact preferences</p>
          <FormInputRadio
            name="contactMethod"
            control={control}
            validation={{ required: "Required" }}
            options={[
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
            ]}
            radioValue={contactMethod}
            setValue={setValue}
          />
        </Grid>
      </Grid>
      {contactFormsDetails?.contactMethod === "phone" && (
        <Grid container>
          <Grid item xs={12}>
            <p className="text-sm font-medium mb-3">
              What time would you like us to contact you?
            </p>
            <FormInputMultiCheckbox
              name="preferredTime"
              control={control}
              setValue={setValue}
              options={[
                { label: "Morning", value: "morning" },
                { label: "Afternoon", value: "afternoon" },
                { label: "Evening", value: "evening" },
              ]}
              validation={{ required: "Required" }}
              checkboxValue={preferredTime}
              setCheckboxValue={setPreferredTime}
            />
          </Grid>
        </Grid>
      )}
      {/* <Grid container>
        <Grid item xs={12}>
          <FormInputMultiCheckbox
            control={control}
            name={"primaryAccountHolder"}
            options={checkboxOptions}
            setValue={setValue}
            checkboxValue={primaryAccountHolder}
            onChange={watch(handleChange)}
          />
        </Grid>
      </Grid> */}

      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        size="large"
        style={{
          borderRadius: 200,
          boxShadow: "none",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        Submit
      </Button>
      <p>
        *Once you submit your application, one of our Clean Ambition club
        representatives will get in contact to review your energy plan options.
      </p>
    </section>
  );
}

export default ContactForms;
