import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import ContentContainer from "../containers/ContentContainer";
import { FormInputText } from "../form-components/FormInputText";
import {
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
function signup() {
  const router = useRouter();
  const [activeBtn, setActiveBtn] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
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
  };
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, onChange, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-primaryBG pb-32">
      <section className="pt-6 lg:pt-8 ">
        <div className="w-full xl:w-[1108px] mx-auto">
          <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
            <Image
              src="/images/origin-logo.svg"
              width={90}
              height={90}
              objectFit="contain"
              alt="origin-logo"
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="text-center font-light w-full mt-4 lg:-mt-8">
          <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
            Applying to Origin&#39;s Clean Ambition Program
          </h2>
          <p className="subtitle my-6 leading-loose w-[300px] sm:w-full mx-auto">
            Thank you for choosing to join the program!
          </p>
        </div>
      </section>

      <ContentContainer style="grid gap-6 lg:gap-8 lg:grid-col-5 lg:grid-flow-col lg:grid-flow-col">
        <section className="w-full  lg:order-2 lg:col-span-2">
          <div className="bg-white py-8 px-4 lg:p-12 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-sm">You have chosen to pledge with</p>
              <p className="font-bold pt-4 subtitle">Origin Go Zero</p>
              <Button className="lg:hidden">Pledge details</Button>
            </div>
            <div className="lg:inline hidden text-center">
              <div className="space-y-1 mt-8">
                <p className="font-bold">How you reduce impact</p>
                <p>Through offsetting your energy use</p>
              </div>
              <div className="space-y-2 mt-8">
                <p className="font-bold">Estimated cost</p>
                <h2>$0</h2>
                <p className="text-xs">
                  extra p/month on any <br />
                  Origin Energy plan*
                </p>
              </div>
              <div className="mt-16">
                <div className="w-24 h-24 mx-auto">
                  <Image
                    src="/icons/trees.svg"
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="trees"
                  />
                </div>
                <p className="text-xs mt-6">
                  If all businesses like yours did this, we could neutralise
                  [XX] tonnes of carbon emissions - equivalent planting [20,000]
                  young trees to clean up the atmosphere.
                </p>
              </div>
              <div className="mt-16">
                <p className="font-bold">You’ve chosen to do more</p>
                <div className="flex gap-4 justify-center mt-4">
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src="/icons/check-green.svg"
                      width={50}
                      height={50}
                      objectFit="contain"
                      alt="trees"
                    />
                  </div>
                  <p className="text-left">
                    Participate in our net zero <br />
                    strategy review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg lg:col-span-3">
          <p>
            Please give us a few details, and one of our specialists will
            contact you about finalising your application.
          </p>
          <p className="font-bold text-sm">
            Do you have an existing business account with Origin?
          </p>

          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size="large"
            color="secondary"
            fullWidth
          >
            <Button
              sx={{
                color: "#505050",
                borderColor: "#E3E3E3",
                ":6": {
                  borderColor: "#FFB432",
                  backgroundColor: "#FFF9EF",
                },
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                color: "#505050",
                borderColor: "#E3E3E3",
                ":focus": {
                  borderColor: "#FFB432",
                  backgroundColor: "#FFF9EF",
                },
              }}
            >
              No
            </Button>
          </ButtonGroup>

          <p className="font-bold text-sm">
            What is the address of your primary site on the account?
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputText name="unitNo" label="Unit no." control={control} />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="streetNo"
                label="Street no."
                control={control}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <FormInputText name="street" label="Street" control={control} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="city"
                label="City/Suburb"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputText name="state" label="State" control={control} />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="postcode"
                label="Postcode"
                control={control}
              />
            </Grid>
          </Grid>

          <p className="font-bold text-sm">Your contact details</p>

          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="firstName"
                label="First Name"
                control={control}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="lastName"
                label="Last Name"
                control={control}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="email"
                label="Email Address"
                control={control}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="phone"
                label="Phone number"
                control={control}
              />
            </Grid>
          </Grid>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              label=" I am the primary account holder for this account"
            />
          </FormGroup>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit(onSubmit)}
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginTop: "1rem",
            }}
          >
            Submit my application
          </Button>

          <p>
            *Once you submit your application, one of our Clean Ambition club
            representatives will get in contact to review your energy plan
            options.
          </p>
        </section>
      </ContentContainer>
    </div>
    // <div className="bg-primaryBG">
    //   <div className="bg-assessment-bg bg-no-repeat bg-contain h-full">
    //     <ContentContainer>
    //       <div>
    //         <div className="w-16 lg:w-20 cursor-pointer ml-auto mt-8">
    //           <Image
    //             src="/images/origin-logo.svg"
    //             width={90}
    //             height={90}
    //             objectFit="contain"
    //             alt="origin-logo"
    //             onClick={handleClick}
    //           />
    //         </div>
    //         <div className="text-center font-light md:w-[80vw] lg:w-full mx-auto mt-4 max-w-[400px]">
    //           <h2 className="text-primaryText font-bold">
    //             Applying to Origin&#39;s Clean Ambition Program
    //           </h2>
    //           <p className="mb-4 mt-8 sm:leading-loose">
    //             Thank you for choosing to join the program! You have chosen to
    //             pledge with <strong>Carbon Offsets.</strong>
    //           </p>
    //           <p className="text-secondaryBG font-bold">
    //             View your pledge details
    //           </p>
    //         </div>
    //       </div>
    //       <QuestionContainer text="Please give us a few details, and one of our specialists will contact you about finalising your application.  ">
    //         <div className="space-y-12 mt-12">
    //           <div>
    //             <p className="font-bold text-sm">
    //               Do you have an existing business account with Origin?
    //             </p>
    //             {/* <ButtonQuestion options={buttonQuestions.options}  /> */}
    //           </div>
    //           <div>
    //             <CheckboxContainer
    //               questionsList={checkboxQuestions.questionsList}
    //             />
    //             <div className="max-w-[240px] mx-auto">
    //               <ButtonComponent text="Submit my application" style="mt-8" />
    //             </div>
    //           </div>
    //           <p className="text-sm">
    //             *Once you submit your application, one of our Clean Ambition
    //             club representatives will get in contact to review your energy
    //             plan options.
    //           </p>
    //         </div>
    //       </QuestionContainer>
    //     </ContentContainer>
    //   </div>
    // </div>
  );
}

export default signup;
