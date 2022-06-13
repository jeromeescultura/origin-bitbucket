import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Faqs,
  FinanceCalc,
  FooterReco,
  ImpactCard,
  RecommentCard,
  ToggleCard,
} from "../components/recommend";
import ContentContainer from "../containers/ContentContainer";
import Image from "next/image";
import { Button, ButtonGroup } from "@mui/material";
import {
  stepOneScore,
  stepTwoScore,
  sumArray,
} from "../functions/recofunctions/RecoFunctions";

const Recommend = () => {
  const storedStepOneData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || null;

  const storedStepTwoData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || null;

  const [industry, setIndustry] = useState("");
  const [subCategory, setSubCategory] = useState();

  const [goZero, setGoZero] = useState({
    carbonOffset: 0,
    decarbEOI: 0,
  });

  const [greenPower, setGreenPower] = useState({
    greenPower: 0,
    decarbEOI: 0,
  });

  const [solarPower, setSolarPower] = useState({
    solar: 0,
    greenPower: 0,
    decarbEOI: 0,
  });

  const [recommend, setRecommend] = useState("");

  const goZeroScore = Object.values(goZero).reduce(sumArray);
  const greenPowerScore = Object.values(greenPower).reduce(sumArray);
  const solarPowerScore = Object.values(solarPower).reduce(sumArray);

  useEffect(() => {
    if (goZeroScore > greenPowerScore && goZeroScore > solarPowerScore) {
      setRecommend("go_zero");
    } else if (
      greenPowerScore > goZeroScore &&
      greenPowerScore > solarPowerScore
    ) {
      setRecommend("green_power");
    } else if (
      solarPowerScore > goZeroScore &&
      solarPowerScore > greenPowerScore
    ) {
      setRecommend("solar_power");
    }
    console.log(recommend);
  }, [goZeroScore, greenPowerScore, solarPowerScore]);

  useEffect(() => {
    console.log("Go Zero: ", goZero);
    console.log("Green Power: ", greenPower);
    console.log("Solar: ", solarPower);
    console.log("Industry: ", storedStepTwoData.dropdown);
    setIndustry(storedStepTwoData.dropdown);
    console.log("Go Zero Score: ", goZeroScore);
    console.log("Green Power Score: ", greenPowerScore);
    console.log("Solar Score: ", solarPowerScore);
    console.log("Recommend: ", recommend);

    switch (recommend) {
      case "go_zero":
        console.log(
          "Sub category: ",
          Object.keys(goZero).filter((item) => goZero[item] >= 0 && item)
        );
        setSubCategory(
          Object.keys(goZero).filter((item) => goZero[item] >= 0 && item)
        );
        break;
      case "green_power":
        console.log(
          "Sub category: ",
          Object.keys(greenPower).filter(
            (item) => greenPower[item] >= 0 && item
          )
        );
        setSubCategory(
          Object.keys(greenPower).filter(
            (item) => greenPower[item] >= 0 && item
          )
        );
        break;
      case "solar_power":
        console.log(
          "Sub category: ",
          Object.keys(solarPower).filter(
            (item) => solarPower[item] >= 0 && item
          )
        );
        setSubCategory(
          Object.keys(solarPower).filter(
            (item) => solarPower[item] >= 0 && item
          )
        );
        break;
      default:
        break;
    }
  }, [
    goZeroScore,
    greenPowerScore,
    solarPowerScore,
    goZero,
    greenPower,
    solarPower,
    recommend,
  ]);

  useEffect(() => {
    console.log("Sub Category state: ", subCategory);
    console.log("Other recommendations :");
    if (Object.keys(goZero).some((item) => goZero[item] >= 0)) {
      console.log(
        console.log(
          Object.keys(goZero).filter(
            (item) => goZero[item] >= 0 && !subCategory?.includes(item)
          )
        )
      );
    }
    if (Object.keys(greenPower).some((item) => greenPower[item] >= 0)) {
      console.log(
        console.log(
          Object.keys(greenPower).filter(
            (item) => greenPower[item] >= 0 && !subCategory?.includes(item)
          )
        )
      );
    }
    if (Object.keys(solarPower).some((item) => solarPower[item] >= 0)) {
      console.log(
        console.log(
          Object.keys(solarPower).filter(
            (item) => solarPower[item] >= 0 && !subCategory?.includes(item)
          )
        )
      );
    }
  }, [goZero, greenPower, solarPower, subCategory]);

  useEffect(() => {
    if (storedStepOneData !== null && storedStepTwoData !== null) {
      stepOneScore(storedStepOneData, setGoZero, setGreenPower, setSolarPower);
      stepTwoScore(storedStepTwoData, setSolarPower);
    }
  }, []);
  const [showFooter, setShowFooter] = useState(false);
  const myref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowFooter(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="bg-primaryBG h-full pb-36 lg:pb-0">
      <div className="bg-reco-xs-bg sm:bg-reco-bg bg-top bg-no-repeat bg-contain h-full lg:bg-reco-lg-bg">
        <section className="pt-6 lg:pt-8">
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
        </section>
        <ContentContainer style="space-y-8">
          <div className="text-center w-full md:w-[500px] lg:w-[730px] max-w-[750px] mx-auto mt-8 lg:-mt-8">
            <p className="text-[18px] text-secondaryText">
              Your assessment is ready!
            </p>
            <p className="text-subTextColor mt-6">
              Based on what you’ve told us, your business is interested in
              taking climate action, but aren’t ready to invest too much yet.
              And that’s okay. We want to be able to support everyone in the
              transition. Let’s review your next steps below.
            </p>
          </div>

          <div className="text-center py-6 md:py-12">
            <p className="text-subTextColor lg:hidden">
              Keen to do more? Toggle to see options for different levels of
              investment.
            </p>
            <ButtonGroup
              fullWidth
              className="mt-6 md:w-[500px] lg:w-[730px] max-w-[750px]"
              aria-label="outlined button group"
            >
              <Button
                size="large"
                variant="contained"
                className="text-sm font-medium !text-[#ABABAB] !bg-white p-6 !rounded-l-full lg:shadow-md"
                startIcon={
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-[#ABABAB] rotate-90"
                  >
                    <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
                  </svg>
                }
              >
                Do less
              </Button>
              <div className="hidden lg:inline-flex bg-white z-50  min-w-[450px] align-text-bottom items-center px-6 shadow-md">
                <p>
                  Keen to do more?
                  <br /> Toggle to see options for different levels of
                  investment.
                </p>
              </div>

              <Button
                size="large"
                variant="contained"
                className="text-sm font-medium !text-primaryText !bg-white p-6 !rounded-r-full lg:shadow-md"
                endIcon={
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className="fill-secondaryBG -rotate-90"
                  >
                    <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
                  </svg>
                }
              >
                Do more
              </Button>
            </ButtonGroup>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-primaryText font-bold">Making a difference</h2>
            <h2 className="text-primaryText">with Origin Go Zero</h2>
          </div>
          <div className="lg:columns-2 gap-3 space-y-3 pb-32  ">
            <div className="break-inside-avoid">
              <ImpactCard />
            </div>
            <div className="break-inside-avoid">
              <FinanceCalc />
            </div>
            <div className="break-inside-avoid">
              <RecommentCard />
            </div>
            <div className="break-inside-avoid" ref={myref}>
              <ToggleCard recommend={"solar_power"} />
            </div>
          </div>
        </ContentContainer>

        <Faqs />
      </div>
      {showFooter && <FooterReco />}
    </div>
  );
};

export default Recommend;
