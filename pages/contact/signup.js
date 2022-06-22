import { useDebugValue, useEffect, useState } from "react";
import { server } from "../../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import ContentContainer from "../../containers/ContentContainer";
import { FormInputText } from "../../form-components/FormInputText";

import FormInputDropdown from "../../form-components/FormInputDropdown";
import LeafRating from "../../components/LeafRating";

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
import FormInputButton from "../../form-components/FormInputButton";
import ButtonQuestion from "../../components/ButtonQuestion";
import MoreDetailsComponent from "../../components/MoreDetailsComponent";
import ContactForms from "../../components/ContactForms";

function signup() {
  const router = useRouter();
  const [userID, setUserID] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    setUserID(router.query.uuid);
  }, [router.query]);

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
        <section className="w-full  lg:order-2 lg:col-span-2 relative z-10">
          <div className="hidden xl:inline absolute w-[150px]  top-[50px] -right-[125px] -z-10">
            <Image
              src="/icons/bg-plant.svg"
              width={180}
              height={180}
              objectFit="contain"
              alt="Plant"
            />
          </div>
          <div className="bg-white py-8 px-4 lg:p-12 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-sm pb-4">You have chosen to pledge with</p>
              <LeafRating count={4} />
              <p className="font-medium subtitle">Origin Go Zero</p>
              <Button className="lg:hidden">Pledge details</Button>
            </div>
            <div className="lg:inline hidden text-center">
              <div className="space-y-1 mt-8">
                <p className="font-medium">How you reduce impact</p>
                <p>Through offsetting your energy use</p>
              </div>
              <div className="mt-8">
                <MoreDetailsComponent text="More Details">
                  <div className="flex">
                    <div className="space-y-2 mt-8 pr-5 border-r text-left">
                      <p className="font-medium">Estimated cost</p>
                      <h2 className="text-secondaryText">$0</h2>
                      <p className="text-xs text-subTextColor">
                        extra p/month on any <br />
                        Origin Energy plan*
                      </p>
                    </div>
                    <div className="space-y-2 mt-8 pl-5">
                      <p className="font-medium">
                        By pledging you’ll get access to
                      </p>
                      <ul className="space-y-8 text-left py-8">
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                          />
                          <p> Progress reporting on your impact</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                          />
                          <p> Amplify toolkit to communicate your impact</p>
                        </li>
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                          />
                          <p> Dedicated Clean Ambition club support</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </MoreDetailsComponent>
              </div>
              <div className="space-y-2 mt-8">
                <p className="font-medium">Estimated cost</p>
                <h2>$0</h2>
                <p className="text-xs text-subTextColor">
                  extra p/month on any <br />
                  Origin Energy plan*
                </p>
              </div>
              <div className="mt-16">
                <div className="w-24 h-24 mx-auto">
                  <Image
                    src="/icons/recommend/trees.svg"
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
                <p className="font-medium">You’ve chosen to do more</p>
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
        <ContactForms
          text="Please give us a few details, and one of our specialists will contact
        you about finalising your application."
          withUserId={userID}
        />
      </ContentContainer>
    </div>
  );
}

export default signup;
