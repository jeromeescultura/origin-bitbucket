import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { server } from "../config";
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
import { Box, Button, ButtonGroup, Modal } from "@mui/material";
import {
  handleContent,
  handleImpactData,
  handleOffset,
  handleOtherRecommendations,
  handlePageNo,
  handleProducts,
  handleSubCategory,
  recommendProduct,
  stepOneScore,
  stepTwoScore,
  sumArray,
} from "../functions/recofunctions/RecoFunctions";
import ImpactRanges from "../components/recommend/ImpactRanges";

const Recommend = ({ industries }) => {
  const dayjs = require("dayjs");
  var duration = require("dayjs/plugin/duration");
  dayjs.extend(duration);

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

  const [loading, setLoading] = useState(true);

  const [industryId, setIndustryId] = useState();
  const [industry, setIndustry] = useState("");
  const [recommend, setRecommend] = useState("");
  const [subCategory, setSubCategory] = useState();
  const [otherRecommendations, setOtherRecommendations] = useState([]);
  const [products, setProducts] = useState([{}]);

  const [offSet, setOffSet] = useState();
  const [usage, setUsage] = useState("<40");
  const [dailyUsage, setDailyUsage] = useState(0);

  const productPages = ["carbonOffset", "greenPower", "solar"];

  const [pages, setPages] = useState();
  const [pageNo, setPageNo] = useState(0);
  const [showContent, setContent] = useState();

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

  const goZeroScore = Object.values(goZero).reduce(sumArray);
  const greenPowerScore = Object.values(greenPower).reduce(sumArray);
  const solarPowerScore = Object.values(solarPower).reduce(sumArray);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, [recommend]);

  useEffect(() => {
    if (storedStepOneData !== null && storedStepTwoData !== null) {
      stepOneScore(storedStepOneData, setGoZero, setGreenPower, setSolarPower);
      stepTwoScore(storedStepTwoData, setSolarPower);
    }
  }, []);

  useEffect(() => {
    setIndustryId(storedStepTwoData?.typeOfIndustry);

    recommendProduct(
      goZeroScore,
      greenPowerScore,
      solarPowerScore,
      setRecommend
    );

    handleSubCategory(
      recommend,
      goZero,
      greenPower,
      solarPower,
      setSubCategory
    );
  }, [
    goZero,
    greenPower,
    solarPower,
    goZeroScore,
    greenPowerScore,
    solarPowerScore,
    recommend,
  ]);

  useEffect(() => {
    handleOtherRecommendations(
      recommend,
      goZero,
      greenPower,
      solarPower,
      setOtherRecommendations
    );
  }, [recommend, goZero, greenPower, solarPower]);

  useEffect(() => {
    handleProducts(recommend, otherRecommendations, setProducts);
  }, [recommend, otherRecommendations]);

  useEffect(() => {
    let currIndustry = industries?.filter((item) => item.name === industryId);
    setIndustry(currIndustry[0]);
  }, [industryId]);

  useEffect(() => {
    handleContent(recommend, pageNo, products, pages, productPages, setContent);
  }, [pageNo, products, industry, pages, pageNo]);

  const [showFooter, setShowFooter] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);
  const myref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowFooter(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  useEffect(() => {
    setPages(products.length);
  }, [products]);

  useEffect(() => {
    handlePageNo(recommend, pages, products, setPageNo);
  }, [recommend, pages, products]);

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleButton = (value) => {
    switch (value) {
      case "next":
        if (pageNo >= 2) {
          setPageNo(2);
        } else {
          setPageNo((prevState) => prevState + 1);
        }
        break;
      case "back":
        if (pageNo <= 0) {
          setPageNo(0);
        } else {
          setPageNo((prevState) => prevState - 1);
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    handleOffset(
      showContent,
      industry,
      setOffSet,
      setDailyUsage,
      setIndustryCost,
      setWithSolar
    );
  }, [industry, showContent]);

  // Toggle card
  const [pledges, setPledges] = useState([]);

  // Impact card
  const [impact, setImpact] = useState(0);

  // Recommend Card
  const [level, setLevel] = useState(1);

  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  // Financial Calculator Card
  const [impactLevel, setImpactLevel] = useState(0);

  const [industryCost, setIndustryCost] = useState(0);
  const [withSolar, setWithSolar] = useState(0);

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const handleButtonSelect = (value) => {
    if (value === 0) {
      setUsage("<40");
      setDailyUsage(industry?.dailyUsage?.low);
      setIndustryCost(industry?.industryCost?.low);
      setWithSolar(industry?.withSolarCost?.low);
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    } else if (value === 1) {
      setUsage("40-440");
      setDailyUsage(industry?.dailyUsage?.medium);
      setIndustryCost(industry?.industryCost?.medium);
      setWithSolar(industry?.withSolarCost?.medium);
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    } else if (value === 2) {
      setUsage(">440");
      setDailyUsage(industry?.dailyUsage?.high);
      setIndustryCost(industry?.industryCost?.high);
      setWithSolar(industry?.withSolarCost?.high);
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
    }
  };

  // Calculations
  // Round of formula
  // Math.round((num + Number.EPSILON) * 100) / 100;

  const extraCost =
    Math.round(
      (((dailyUsage * 365) / 12) * offSet * level + Number.EPSILON) * 100
    ) / 100;

  const increasePercentage =
    Math.round(((extraCost / industryCost) * 100 + Number.EPSILON) * 100) / 100;

  const totalCost =
    Math.round((extraCost + industryCost + Number.EPSILON) * 100) / 100;

  const withoutSolar =
    Math.round(((dailyUsage * offSet * 365) / 12 + Number.EPSILON) * 100) / 100;

  const solarSavings =
    Math.round((withoutSolar - withSolar + Number.EPSILON) * 100) / 100;
  const solarReduction =
    Math.round(
      (((withoutSolar - withSolar) / withoutSolar) * 100 + Number.EPSILON) * 100
    ) / 100;

  useEffect(() => {
    setUsage("<40");
    setDailyUsage(industry?.dailyUsage?.low);
    setIndustryCost(industry?.industryCost?.low);
    setWithSolar(industry?.withSolarCost?.low);
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  }, [showContent]);

  const [storedData, setStoredData] = useState({
    product: "",
    greenPowerLevel: "",
    biggerDiff: [],
    extraCost: 0,
    estimatedSavings: 0,
    impact: "",
  });

  useEffect(() => {
    setStoredData({
      product: showContent,
      greenPowerLevel: level * 100,
      biggerDiff: pledges,
      extraCost: extraCost,
      estimatedSavings: solarSavings,
      impact: impact,
    });
  }, [showContent, level, pledges, extraCost, solarSavings, impact]);

  useEffect(() => {
    window.localStorage.setItem("RECOMMENDED", JSON.stringify(storedData));
  }, [storedData]);

  useEffect(() => {
    handleImpactData(showContent, dailyUsage, level, setImpact, dayjs);
  }, [showContent, dailyUsage, level]);

  const showLocalStorage = () => {
    let data =
      JSON.parse(
        typeof window !== "undefined" &&
          window.localStorage.getItem("RECOMMENDED")
      ) || null;

    const uid = 1231;
    router.push({
      pathname: "/contact/signup",
      query: { uid: uid },
    });
  };

  const [impactRanges, setImpactRanges] = useState(false);
  const openModal = () => setImpactRanges(true);
  const closeModal = () => setImpactRanges(false);

  return (
    <div className="bg-primaryBG h-full pb-24 sm:pb-20 ">
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

          {pages !== 1 && (
            <div
              className={`text-center  ${
                pages !== 1 ? "py-6 md:py-12" : "py-4 md:py-10"
              }`}
            >
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
                  disabled={pageNo === 0 && true}
                  size="large"
                  onClick={() => handleButton("back")}
                  variant="contained"
                  className={`${
                    pageNo === 0 ? "text-[#ABABAB]" : "text-primaryText"
                  } text-sm font-medium !bg-white p-6 !rounded-l-full lg:shadow-md`}
                  startIcon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`${
                        pageNo === 0 ? "fill-[#ABABAB]" : "fill-primaryText"
                      } rotate-90`}
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
                  disabled={pageNo === pages - 1 && true}
                  size="large"
                  onClick={() => handleButton("next")}
                  variant="contained"
                  className={`${
                    pageNo === 2 ? "text-[#ABABAB]" : "text-primaryText"
                  } text-sm font-medium !bg-white p-6 !rounded-r-full lg:shadow-md`}
                  endIcon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`${
                        pageNo === pages - 1
                          ? "fill-[#ABABAB]"
                          : "fill-primaryText"
                      } -rotate-90`}
                    >
                      <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
                    </svg>
                  }
                >
                  Do more
                </Button>
              </ButtonGroup>
            </div>
          )}

          <div className={`${pages === 1 && "pt-12"} text-center mb-8 `}>
            <h2 className="text-primaryText font-bold">Making a difference</h2>
            {!loading && (
              <h2 className="text-primaryText">
                with{" "}
                {showContent === "carbonOffset" &&
                  "Origin Go Zero 100% carbon offset"}{" "}
                {showContent === "solar" && "Solar"}
                {showContent === "greenPower" && "GreenPower"}
              </h2>
            )}
            <div className="font-light text-xs mt-8 lg:mt-16 px-4 sm:px-0 md:w-[500px] lg:w-[768px] mx-auto">
              Impact estimates below are calculated with usage averages
              collected from Origin’s small & medium business customers in{" "}
              <span className="font-medium">{industry?.name}</span>. This will
              change based on your business’ specific usage.{" "}
              <span className="underline cursor-pointer" onClick={openModal}>
                See your impact ranges.
              </span>
            </div>
          </div>
          <ImpactRanges
            impactRanges={impactRanges}
            closeModal={closeModal}
            showContent={showContent}
          />
          <div className="lg:columns-2 gap-3 space-y-3 pb-32  ">
            <div className="break-inside-avoid">
              <ImpactCard
                recommend={showContent}
                impact={impact}
                level={level}
              />
            </div>
            <div className="break-inside-avoid">
              <FinanceCalc
                recommend={showContent}
                industry={industry}
                level={level}
                impactLevel={impactLevel}
                handleButtonSelect={handleButtonSelect}
                usage={usage}
                industryCost={industryCost}
                increasePercentage={increasePercentage}
                withoutSolar={withoutSolar}
                withSolar={withSolar}
                solarReduction={solarReduction}
                totalCost={totalCost}
                btn1={btn1}
                btn2={btn2}
                btn3={btn3}
              />
            </div>
            <div className="break-inside-avoid">
              <RecommentCard
                recommend={showContent}
                solarSavings={solarSavings}
                extraCost={extraCost}
                level={level}
                handleLevel={handleLevel}
              />
            </div>
            <div className="break-inside-avoid" ref={myref}>
              {(subCategory?.includes("decarbEOI") ||
                (subCategory?.includes("greenPower") &&
                  showContent === "solar")) && (
                <ToggleCard
                  recommend={showContent}
                  adds={subCategory}
                  level={level}
                  handleLevel={handleLevel}
                  pledges={pledges}
                  setPledges={setPledges}
                  setLevel={setLevel}
                />
              )}
            </div>
          </div>
        </ContentContainer>
        <Faqs />
      </div>
      {showFooter && (
        <FooterReco
          handleButton={handleButton}
          recommend={showContent}
          enableBtn={enableBtn}
          pageNo={pageNo}
          pages={pages}
        />
      )}
    </div>
  );
};

export default Recommend;

export async function getServerSideProps() {
  const industries = await fetch(`${server}/api/industries`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      industries,
    },
  };
}
