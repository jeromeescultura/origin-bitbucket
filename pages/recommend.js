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
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  fabClasses,
  Modal,
} from "@mui/material";
import {
  getExtraCost,
  getIndustryByName,
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
import Head from "next/head";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

const Recommend = () => {
  const dayjs = require("dayjs");
  const [userID, setUserID] = useState();
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
  const [animate, setAnimate] = useState(false);

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

  const goZeroScore = goZero.carbonOffset;
  const greenPowerScore = greenPower.greenPower;
  const solarPowerScore = solarPower.solar;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      router,
      userID,
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
    userID,
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
    setIndustry(getIndustryByName(industryId));
  }, [industryId]);

  useEffect(() => {
    handleContent(recommend, pageNo, products, pages, productPages, setContent);
  }, [pageNo, products, industry, pages, pageNo]);

  const [showFooter, setShowFooter] = useState(true);
  const [bigScreen, setBigScreen] = useState(false);
  const [enableBtn, setEnableBtn] = useState(false);
  const showref = useRef();
  const hideref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
    });

    if (hideref.current) {
      observer.observe(hideref.current);
    }
  }, [loading]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setBigScreen(true);
      } else {
        setBigScreen(false);
        setShowFooter(false);
      }
    });

    if (hideref.current) {
      observer.observe(showref.current);
    }
  }, [loading]);

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
    setAnimate(!animate);
    setTimeout(() => {
      setAnimate(false);
    }, 200);
    setTimeout(() => {
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
    }, 100);
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

  const [extraXX, setextraXX] = useState(0);

  const extraCost =
    Math.round((dailyUsage * offSet * level + Number.EPSILON) * 100) / 100;

    console.log('extraCost', extraCost)

  const increasePercentage =
    Math.round(((extraCost / industryCost) * 100 + Number.EPSILON) * 100) / 100;

    console.log('increasePercentage', increasePercentage)
   


  const totalCost =
    Math.round((extraCost + industryCost + Number.EPSILON) * 100) / 100;

    console.log('totalCost', totalCost)

  const withoutSolar =
    Math.round(((dailyUsage * offSet * 365) / 12 + Number.EPSILON) * 100) / 100;

  const solarSavings = Math.round(
    Math.round((withoutSolar - withSolar + Number.EPSILON) * 100) / 100
  );
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
    setLevel(1);
  }, [showContent]);

  useEffect(() => {
    setextraXX(getExtraCost(dailyUsage, offSet, level));
  }, [dailyUsage, offSet, level]);

  const [storedData, setStoredData] = useState({
    product: "",
    otherRecommendations: [],
    greenPowerLevel: "",
    biggerDiff: [],
    extraCost: 0,
    estimatedSavings: 0,
    impact: "",
  });

  useEffect(() => {
    setStoredData({
      product: showContent,
      greenPowerLevel: showContent === "greenPower" ? level * 100 : 0,
      biggerDiff: pledges,
      extraCost: showContent !== "solar" ? extraCost : 0,
      estimatedSavings: showContent === "solar" ? solarSavings : 0,
      impact: impact,
    });
  }, [showContent, level, pledges, extraCost, solarSavings, impact]);

  useEffect(() => {
    window.localStorage.setItem("PRODUCT_SELECTED", JSON.stringify(storedData));
    window.localStorage.setItem(
      "OTHER_RECOMMENDATIONS",
      JSON.stringify(otherRecommendations)
    );
    window.localStorage.setItem("TOP_RECOMMENDATION", recommend);
  }, [storedData, otherRecommendations, recommend]);

  useEffect(() => {
    handleImpactData(showContent, dailyUsage, level, setImpact, dayjs);
  }, [showContent, dailyUsage, level]);

  const showLocalStorage = () => {
    let data =
      JSON.parse(
        typeof window !== "undefined" &&
          window.localStorage.getItem("PRODUCT_SELECTED")
      ) || null;
  };

  useEffect(() => {
    setUserID(router.query.uuid);
  }, [router.query]);

  const handleChoose = () => {
    ButtonTrackingEvent("Selected Product", recommend);
    router.push({
      pathname: "/contact/signup",
      query: { uuid: userID },
    });
  };
  const handleExpress = () => {
    router.push({
      pathname: "/contact/",
      query: { uuid: userID },
    });
  };

  const [impactRanges, setImpactRanges] = useState(false);
  const openModal = () => setImpactRanges(true);
  const closeModal = () => setImpactRanges(false);

  return (
    <>
      <Head>
        <title>Origin Shift | We Suggest</title>
        <meta
          property="og:title"
          content="Origin Shift Product Suggestion"
          key="title"
        />
      </Head>

      <div className="bg-primaryBG h-full  ">
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
          {!loading ? (
            <div>
              <ContentContainer style="space-y-8">
                <div className="text-center w-full md:w-[500px] lg:w-[730px] max-w-[750px] mx-auto mt-8 lg:-mt-8">
                  <p className="text-[18px] text-secondaryText font-bold">
                    Your assessment is ready!
                  </p>
                  <p className="text-subTextColor mt-6">
                    Based on what you&apos;ve told us, your business is
                    interested in taking climate action, but aren&apos;t ready
                    to invest too much yet. And that&apos;s okay. We want to be
                    able to support everyone in the transition. Let&apos;s
                    review your next steps below.
                  </p>
                </div>

                {pages !== 1 && (
                  <div
                    className={`text-center  ${
                      pages !== 1 ? "py-6 md:py-12" : "py-4 md:py-10"
                    }`}
                  >
                    <p className="text-subTextColor lg:hidden mt-16">
                      Keen to understand more options? Toggle to view options at
                      different cost levels.
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
                        } text-sm font-medium !bg-white p-6 !rounded-l-full !shadow-md`}
                        startIcon={
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            className={`${
                              pageNo === 0
                                ? "fill-[#ABABAB]"
                                : "fill-primaryText"
                            } rotate-90`}
                          >
                            <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
                          </svg>
                        }
                      >
                        Previous option
                      </Button>
                      <div className="hidden lg:inline-flex bg-white z-50  min-w-[450px] align-text-bottom items-center justify-center px-6 !shadow-md">
                        <p className='text-center'>
                          Keen to understand more options?
                          <br /> Toggle to view options at different cost
                          levels.
                        </p>
                      </div>

                      <Button
                        disabled={pageNo === pages - 1 && true}
                        disableElevation
                        size="large"
                        onClick={() => handleButton("next")}
                        variant="contained"
                        className={`${
                          pageNo === 2 ? "text-[#ABABAB]" : "text-primaryText"
                        } text-sm font-medium !bg-white p-6 !rounded-r-full !shadow-md`}
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
                        Next option
                      </Button>
                    </ButtonGroup>
                  </div>
                )}
                <div
                  className={`${
                    animate
                      ? "opacity-0 translate-x-2"
                      : "opacity-100 translate-x-0"
                  } transition ease-in-out `}
                >
                  <div
                    className={`${pages === 1 && "pt-12"} text-center mb-8 `}
                    ref={hideref}
                  >
                    <h2 className="text-primaryText font-bold">
                      Making a difference
                    </h2>
                    <h2 className="text-primaryText">
                      with{" "}
                      {showContent === "carbonOffset" &&
                        "Origin Go Zero 100% carbon offset"}{" "}
                      {showContent === "solar" && "Solar"}
                      {showContent === "greenPower" && "GreenPower"}
                    </h2>

                    <div className="font-light text-xs mt-8 lg:mt-16 px-4 sm:px-0 md:w-[500px] lg:w-[768px] mx-auto">
                      These impact estimates are based on electricity usage
                      averages compiled from Origin&apos;s small and medium
                      business customer base in the{" "}
                      <span className="font-medium">{industry?.name}</span>.
                      This will change based on your business&apos; specific
                      usage.{" "}
                      <span
                        className="underline cursor-pointer"
                        onClick={openModal}
                      >
                        See the range of possible outcomes.
                      </span>
                    </div>
                  </div>
                </div>
                <ImpactRanges
                  dayjs={dayjs}
                  level={level}
                  impactRanges={impactRanges}
                  closeModal={closeModal}
                  showContent={showContent}
                  low={industry?.dailyUsage?.low}
                  medium={industry?.dailyUsage?.medium}
                  high={industry?.dailyUsage?.high}
                />
                <div className="lg:columns-2 gap-3 space-y-3 pb-12  ">
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
                      topRecommend={recommend}
                      recommend={showContent}
                      solarSavings={solarSavings}
                      extraCost={extraCost}
                      level={level}
                      handleLevel={handleLevel}
                    />
                  </div>
                  <div className="break-inside-avoid">
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
              <div ref={showref}>
                <Faqs />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full  bg-gray-300 bg-opacity-50 backdrop-blur-lg">
              <CircularProgress size="5rem" color="secondary" />
            </div>
          )}
        </div>
        {showFooter && (
          <FooterReco
            handleButton={handleButton}
            handleExpress={handleExpress}
            handleChoose={handleChoose}
            recommend={showContent}
            enableBtn={enableBtn}
            pageNo={pageNo}
            pages={pages}
          />
        )}
        {bigScreen && (
          <FooterReco
            handleButton={handleButton}
            handleExpress={handleExpress}
            handleChoose={handleChoose}
            recommend={showContent}
            enableBtn={enableBtn}
            pageNo={pageNo}
            pages={pages}
          />
        )}
      </div>
    </>
  );
};

export default Recommend;
