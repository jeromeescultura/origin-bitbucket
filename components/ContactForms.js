import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormInputDropdown from "../form-components/FormInputDropdown";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { FormInputText } from "../form-components/FormInputText";
import FormInputRadio from "../form-components/FormInputRadio";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function ContactForms({ text }) {
  const router = useRouter();

  const states = [
    {
      name: "Australian Capital Territory",
    },
    {
      name: "New South Wales",
    },
    {
      name: "Northern Territory",
    },
    {
      name: "Queensland",
    },
    {
      name: "South Australia",
    },
    {
      name: "Tasmania",
    },
    {
      name: "Victoria",
    },
    {
      name: "Western Australia",
    },
  ];

  const defaultValues = {
    unitNo: "",
    streetNo: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    existingBusiness: null,
    accountNumber: "",
    primaryAccountHolder: false,
    contactMethod: [],
    preferredTime: [],
  };

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("CONTACT_FORMS_DETAILS")
    ) || null;

  const topRecommendation =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("TOP_RECOMMENDATION")) ||
    null;

  const otherRecommendations =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("OTHER_RECOMMENDATIONS")
    ) || null;

  const selectedProduct =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("PRODUCT_SELECTED")
    ) || null;

  // Redirect
  const userID =
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("USERID")
    ) || null;

  const [contactFormsDetails, setContactFormsDetails] = useState(defaultValues);

  // Retain Values
  const [existingBusiness, setExistingBusiness] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [unitNo, setUnitNo] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setpostcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryAccountHolder, setPrimaryAccountHolder] = useState(false);
  const [contactMethod, setContactMethod] = useState([]);
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
      setState(storedData?.state);
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
    console.log("top", topRecommendation);
    console.log("other", otherRecommendations);
    console.log("selected", selectedProduct);
  }, [topRecommendation]);

  useEffect(() => {
    window.localStorage.setItem(
      "CONTACT_FORMS_DETAILS",
      JSON.stringify(contactFormsDetails)
    );
  }, [contactFormsDetails]);

  const methods = useForm({ defaultValues: contactFormsDetails });
  const { handleSubmit, control, watch, setValue } = methods;

  const onSubmit = (data) => {
    ButtonTrackingEvent("contact-submit", data);
    if (userID) {
      const json = fetch(
        "https://y22dnwyvbl.execute-api.ap-southeast-2.amazonaws.com/NonProd/contact/" +
          userID,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
            topRecommend: topRecommendation,
            otherRecommendation: otherRecommendations,
            productSelected: selectedProduct.product,
          }),
        }
      )
        .then((response) => response.json())
        .then(
          router.push("/thankyou"),
          // Clear Forms
          // Clear recommended product
          // Clear Assessment
          window.localStorage.clear()
        );
    } else {
      const json = fetch(
        "https://y22dnwyvbl.execute-api.ap-southeast-2.amazonaws.com/NonProd/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data), router.push("/thankyou"));
    }
  };

  const handleChange = (data) => {
    setContactFormsDetails({
      existingBusiness: data.existingBusiness,
      accountNumber: data.accountNumber,
      unitNo: data.unitNo,
      streetNo: data.streetNo,
      street: data.street,
      city: data.city,
      state: data.state,
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
    setExistingBusiness(value);
    if (value === true) {
      setBtn1(true);
      setBtn2(false);
    } else {
      setBtn1(false);
      setBtn2(true);
    }
  };

  const checkboxHandler = () => {
    setPrimaryAccountHolder(!primaryAccountHolder);
    ButtonTrackingEvent("primaryAccountHolder", !primaryAccountHolder);
    setValue("primaryAccountHolder", primaryAccountHolder);
  };

  useEffect(() => {
    setValue("primaryAccountHolder", primaryAccountHolder);
  }, [primaryAccountHolder]);

  useEffect(() => {
    setValue("existingBusiness", existingBusiness);
    if (existingBusiness !== null) {
      handleButtonSelect(existingBusiness);
    }
  }, [existingBusiness]);

  return (
    <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg">
      <p>{text}</p>
      <p className="font-medium text-sm">
        Do you have an existing business account with Origin?
      </p>

      <Controller
        control={control}
        name="existingBusiness"
        render={({}) => {
          return (
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              size="large"
              color="secondary"
              arial-label="contained button group"
              fullWidth
            >
              <Button
                className={
                  btn1 ? activeStyles : " hover:border hover:border-gray-300"
                }
                value={"Yes"}
                onClick={() => handleButtonSelect(true)}
                sx={{
                  color: "#505050",
                  borderColor: "#E3E3E3",
                  fontSize: "16",
                }}
                name="Do you have an existing business account with Origin?"
                id="existing-business"
              >
                Yes
              </Button>
              <Button
                className={`${btn2 ? activeStyles : ""} ${
                  btn1 &&
                  "border-l-accentColor hover:border-l-accentColor hover:border hover:border-gray-300"
                }`}
                value={"No"}
                onClick={() => handleButtonSelect(false)}
                sx={{
                  color: "#505050",
                  borderColor: "#E3E3E3",
                  fontSize: "16",
                }}
                name="Do you have an existing business account with Origin?"
                id="existing-business"
              >
                No
              </Button>
            </ButtonGroup>
          );
        }}
      />

      {existingBusiness && (
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
        <Grid item xs={12} md={6}>
          <FormInputDropdown
            name="state"
            control={control}
            label="State"
            states={states}
            setValue={setValue}
            dropdownValue={state}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormInputText
            name="postcode"
            label="Postcode"
            control={control}
            setValue={setValue}
            inputValue={postcode}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
            type="number"
            minValue={1000}
            maxValue={9999}
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
          <FormInputMultiCheckbox
            name="contactMethod"
            control={control}
            validation={{ required: "Required" }}
            options={[
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
            ]}
            checkboxValue={contactMethod}
            setCheckboxValue={setContactMethod}
            setValue={setValue}
          />
        </Grid>
      </Grid>
      {contactFormsDetails?.contactMethod.includes("phone") && (
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
          backgroundColor: "#EC0000",
          borderRadius: 200,
          boxShadow: "none",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        Submit
      </Button>
      <p>
        *Once you submit your application, one of our Business Club Specialists
        will get in contact to discuss your energy plan options.
      </p>
    </section>
  );
}

export default ContactForms;
