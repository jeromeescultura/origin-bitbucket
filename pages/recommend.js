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

import UsageButtons from "../components/recommend/UsageButtons";
import ImpactData from "../components/recommend/ImpactData";
import NavBar from "../components/NavBar";

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

  const startAssessment =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STARTASSESSMENT")
    ) || null;

  useEffect(() => {
    if (startAssessment === null) {
      router.push("/");
    }
  }, [startAssessment]);

  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  const [industryId, setIndustryId] = useState();
  const [industry, setIndustry] = useState("");
  const [recommend, setRecommend] = useState("");
  const [subCategory, setSubCategory] = useState();
  const [otherRecommendations, setOtherRecommendations] = useState([]);
  const [products, setProducts] = useState([{}]);
  const [highLow, setHighLow] = useState({});

  const [offSet, setOffSet] = useState();
  const [usage, setUsage] = useState("");
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyCarbonEmissions, setDailyCarbonEmissions] = useState(0);

  const productPages = ["carbonOffset", "greenPower", "solar"];

  const [pages, setPages] = useState();
  const [pageNo, setPageNo] = useState(0);
  const [showContent, setContent] = useState();

  // const [greenPowerToggle, setGreenPowerToggle] = useState(false);

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
    if (recommend === "carbonOffset") {
      if (greenPowerScore > solarPowerScore) {
        setHighLow({
          second: "greenPower",
          third: solarPowerScore > 0 ? "solar" : "none",
        });
      } else {
        setHighLow({
          second: "solar",
          third: greenPowerScore > 0 ? "greenPower" : "none",
        });
      }
    } else if (recommend === "greenPower") {
      if (goZeroScore > solarPowerScore) {
        setHighLow({
          second: "carbonOffset",
          third: solarPowerScore > 0 ? "solar" : "none",
        });
      } else {
        setHighLow({
          second: "solar",
          third: goZeroScore > 0 ? "carbonOffset" : "none",
        });
      }
    } else if (recommend === "solar") {
      if (goZeroScore > greenPowerScore) {
        setHighLow({
          second: "carbonOffset",
          third: greenPowerScore > 0 ? "greenPower" : "none",
        });
      } else {
        setHighLow({
          second: "greenPower",
          third: goZeroScore > 0 ? "carbonOffset" : "none",
        });
      }
    }
  }, [goZeroScore, greenPowerScore, solarPowerScore, recommend]);

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

  const [showFooter, setShowFooter] = useState(false);
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

    if (showref.current) {
      observer.observe(showref.current);
    }
  }, [loading]);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       setBigScreen(true);
  //     } else {
  //       setBigScreen(false);
  //       setShowFooter(false);
  //     }
  //   });

  //   if (hideref.current) {
  //     observer.observe(showref.current);
  //   }
  // }, [loading]);

  useEffect(() => {
    setPages(products.length);
  }, [products]);

  useEffect(() => {
    handlePageNo(recommend, pages, products, setPageNo);
  }, [recommend, pages, products]);

  const router = useRouter();
  const source = router.query.src;
  const version = router.query.v;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(
      `/${
        source !== "" && source !== undefined && source !== null
          ? `?src=${source}&`
          : ""
      }${
        version !== "" && version !== undefined && source !== null
          ? `v=${version}`
          : ""
      }`
    );
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
      setDailyCarbonEmissions,
      setIndustryCost,
      setWithSolar,
      source,
      version
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

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const handleButtonSelect = (value) => {
    if (value === 0) {
      setUsage("<40");
      setDailyUsage(industry?.dailyUsage?.low);
      setDailyCarbonEmissions(industry?.dailyCarbonEmissions.low);
      setIndustryCost(industry?.industryCost?.low);
      setWithSolar(industry?.withSolarCost?.low);
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    } else if (value === 1) {
      setUsage("40-440");
      setDailyUsage(industry?.dailyUsage?.medium);
      setDailyCarbonEmissions(industry?.dailyCarbonEmissions.medium);
      setIndustryCost(industry?.industryCost?.medium);
      setWithSolar(industry?.withSolarCost?.medium);
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    } else if (value === 2) {
      setUsage(">440");
      setDailyUsage(industry?.dailyUsage?.high);
      setDailyCarbonEmissions(industry?.dailyCarbonEmissions.high);
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
  // Math.round(
  //   (((dailyUsage * 365) / 12) * offSet * level + Number.EPSILON) * 100
  // ) / 100;

  const increasePercentage =
    Math.round(
      (((extraCost * 365) / 12 / industryCost) * 100 + Number.EPSILON) * 100
    ) / 100;

  const totalCost =
    Math.round(((extraCost * 365) / 12 + industryCost + Number.EPSILON) * 100) /
    100;

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
    setUsage("");
    setDailyUsage(industry?.dailyUsage?.low);
    setDailyCarbonEmissions(industry?.dailyCarbonEmissions?.low);
    setIndustryCost(industry?.industryCost?.low);
    setWithSolar(industry?.withSolarCost?.low);
    setBtn1(false);
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
    window.localStorage.setItem(
      "OTHER_PRODUCTS_RANKING",
      JSON.stringify(highLow)
    );
  }, [storedData, otherRecommendations, recommend, highLow]);

  useEffect(() => {
    handleImpactData(
      showContent,
      dailyUsage,
      dailyCarbonEmissions,
      level,
      setImpact,
      dayjs
    );
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
    window.localStorage.setItem("USERID", JSON.stringify(router.query.uuid));
  }, [router.query]);

  const handleChoose = () => {
    ButtonTrackingEvent("Selected Product", recommend);
    router.push(
      `/signup?uuid=${userID}${
        source !== "" && source !== null && source !== undefined
          ? `&src=${source}&`
          : ""
      }${
        version !== "" && version !== null && version !== undefined
          ? `v=${version}`
          : ""
      }`
    );
  };
  const handleExpress = () => {
    router.push(
      `/contact?path=eoi&uuid=${userID}${
        source !== "" && source !== null && source !== undefined
          ? `&src=${source}&`
          : ""
      }${
        version !== "" && version !== null && version !== undefined
          ? `v=${version}`
          : ""
      }`
    );
  };

  const [impactRanges, setImpactRanges] = useState(false);
  const [impactDataModal, setImpactDataModal] = useState(false);

  const openModal = () => setImpactRanges(true);
  const closeModal = () => setImpactRanges(false);

  const openImpactData = () => setImpactDataModal(true);
  const closeImpactData = () => setImpactDataModal(false);

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

      <div className="bg-primaryBG h-full">
        <div className="bg-reco-xs-bg sm:bg-reco-bg bg-top bg-no-repeat bg-contain h-full lg:bg-reco-lg-bg mb-[17rem] lg:mb-56">
          <NavBar />
          {!loading ? (
            <div>
              <ContentContainer style="space-y-8 !max-w-[1140px]">
                <div className="text-center w-full md:w-[500px] lg:w-[730px] max-w-[750px] mx-auto mt-8  ">
                  <p className="text-[18px] text-secondaryText font-bold">
                    Your assessment is ready!
                  </p>
                  <p className="text-subTextColor mt-6">
                    Based on what you&apos;ve told us, your business is
                    interested in taking steps towards supporting cleaner
                    energy. Let&apos;s review your next steps below.
                  </p>
                </div>
                <div
                  className={`${
                    animate
                      ? "opacity-0 translate-x-2"
                      : "opacity-100 translate-x-0"
                  } transition ease-in-out pt-6`}
                >
                  <div
                    className={`${pages === 1 && "pt-12"} text-center mb-8 `}
                  >
                    <h2 className="text-primaryText font-bold">
                      Making a difference
                    </h2>
                    <h2 className="text-primaryText">
                      with{" "}
                      {showContent === "carbonOffset" &&
                        "Origin Go Zero 100% carbon neutral"}{" "}
                      {showContent === "solar" && "Solar"}
                      {showContent === "greenPower" && "GreenPower"}
                    </h2>
                  </div>
                </div>
                {pages !== 1 && (
                  <div
                    className={`text-center ${
                      pages !== 1 ? "py-6 md:py-10" : "py-4 md:py-10"
                    }`}
                  >
                    <p className="text-subTextColor lg:hidden">
                      Keen to understand more options with Origin? Toggle to
                      view options at different cost levels.
                    </p>
                    <ButtonGroup
                      fullWidth
                      className="mt-6 md:w-[500px] lg:w-full max-w-full"
                      aria-label="outlined button group"
                    >
                      <Button
                        disabled={pageNo === 0 && true}
                        size="large"
                        onClick={() => handleButton("back")}
                        variant="contained"
                        className={`${
                          pageNo === 0 ? "text-[#ABABAB]" : "text-primaryText"
                        } text-sm font-medium !bg-white p-6 !rounded-l-full !shadow-md lg:py-8`}
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
                        <p className="text-center">
                          Keen to understand more options with Origin?
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

                <div className="text-center" ref={showref}>
                  <p>
                    The examples below vary depending on usage. Please select
                    the usage specific to your business site.
                  </p>
                  <UsageButtons
                    recommend={showContent}
                    impactLevel={impactLevel}
                    handleButtonSelect={handleButtonSelect}
                    industry={industry}
                    btn1={btn1}
                    btn2={btn2}
                    btn3={btn3}
                  />
                  <p className="text-xs md:text-sm">
                    {usage === "<40"
                      ? "Low usage is"
                      : usage === "40-440"
                      ? "Medium usage is"
                      : usage === ">440"
                      ? "High usage is"
                      : ""}{" "}
                    {usage === "<40"
                      ? "below 40 kWh average"
                      : usage === "40-440"
                      ? "between 40-440 kWh average"
                      : usage === ">440"
                      ? "above 440 kWh average"
                      : ""}{" "}
                    {usage !== "" && showContent === "solar" && "monthly use"}
                    {usage !== "" && showContent !== "solar" && "daily use"}
                  </p>
                </div>

                <ImpactRanges
                  dayjs={dayjs}
                  level={level}
                  offSet={offSet}
                  impactRanges={impactRanges}
                  closeModal={closeModal}
                  showContent={showContent}
                  industry={industry}
                  low={industry?.dailyUsage?.low}
                  medium={industry?.dailyUsage?.medium}
                  high={industry?.dailyUsage?.high}
                  carbonEmissions={industry?.dailyCarbonEmissions}
                />

                <ImpactData
                  dayjs={dayjs}
                  level={level}
                  offSet={offSet}
                  impactRanges={impactDataModal}
                  closeModal={closeImpactData}
                  showContent={showContent}
                  industry={industry}
                  low={industry?.dailyUsage?.low}
                  medium={industry?.dailyUsage?.medium}
                  high={industry?.dailyUsage?.high}
                  carbonEmissions={industry?.dailyCarbonEmissions}
                />
                <div className="lg:columns-2 gap-3 space-y-3 pb-12">
                  <div className="break-inside-avoid block">
                    <RecommentCard
                      subCategory={subCategory}
                      topRecommend={recommend}
                      recommend={showContent}
                      solarSavings={solarSavings}
                      extraCost={extraCost}
                      level={level}
                      handleLevel={handleLevel}
                      btn1={btn1}
                      btn2={btn2}
                      btn3={btn3}
                      usage={usage}
                      industry={industry}
                      source={source}
                      version={version}
                    />
                    <div className="pt-3 ">
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
                        openModal={openModal}
                      />
                    </div>
                  </div>

                  <div className="break-inside-avoid block">
                    <ImpactCard
                      recommend={showContent}
                      impact={impact}
                      level={level}
                      industry={industry?.name}
                      dailyUsage={dailyUsage}
                      openModal={openImpactData}
                      btn1={btn1}
                      btn2={btn2}
                      btn3={btn3}
                    />
                  </div>
                  <div className="break-inside-avoid lg:pb-12">
                    {(subCategory?.includes("decarbEOI") ||
                      (subCategory?.includes("greenPower") &&
                        showContent === "solar")) && (
                      <ToggleCard
                        recommend={showContent}
                        pledges={pledges}
                        setPledges={setPledges}
                        subCategory={subCategory}
                      />
                    )}
                  </div>
                  {/* <div className="break-inside-avoid lg:hidden block">
                    {subCategory?.includes("greenPower") &&
                      showContent === "solar" && (
                        <GreenPowerToggle
                          greenPower={greenPowerToggle}
                          setGreenPower={setGreenPowerToggle}
                          recommend={showContent}
                          pledges={pledges}
                          setPledges={setPledges}
                        />
                      )}
                  </div> */}
                </div>
              </ContentContainer>

              <div>{/* <Faqs /> */}</div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full  bg-gray-300 bg-opacity-50 backdrop-blur-lg">
              <CircularProgress size="5rem" color="secondary" />
            </div>
          )}
        </div>
        {showFooter && !loading && (
          <div className="bg-white w-full shadow-t-lg z-50 fixed bottom-0">
            <div className="w-full border-b border-[#E3E3E3] p-5 text-center">
              <p className="text-xs leading-5">
                The examples above vary depending on usage. Please select the
                usage specific to your business site.
              </p>
              <UsageButtons
                recommend={showContent}
                impactLevel={impactLevel}
                handleButtonSelect={handleButtonSelect}
                industry={industry}
                btn1={btn1}
                btn2={btn2}
                btn3={btn3}
              />
              <p className="text-xs md:text-sm mt-2">
                {usage === "<40"
                  ? "Low usage is"
                  : usage === "40-440"
                  ? "Medium usage is"
                  : usage === ">440"
                  ? "High usage is"
                  : ""}{" "}
                {usage === "<40"
                  ? "below 40 kWh average"
                  : usage === "40-440"
                  ? "between 40-440 kWh average"
                  : usage === ">440"
                  ? "above 440 kWh average"
                  : ""}{" "}
                {usage !== "" && showContent === "solar" && "monthly use"}
                {usage !== "" && showContent !== "solar" && "daily use"}
              </p>
            </div>
            <FooterReco
              handleButton={handleButton}
              handleExpress={handleExpress}
              handleChoose={handleChoose}
              recommend={showContent}
              enableBtn={enableBtn}
              pageNo={pageNo}
              pages={pages}
            />
          </div>
        )}

        <div className="hidden 3xl:block bg-white w-full shadow-t-lg z-50 fixed bottom-0 ">
          <div className="w-full border-b border-[#E3E3E3] p-5 text-center">
            <p className="text-xs leading-5">
              The examples above vary depending on usage. Please select the
              usage specific to your business site.
            </p>
            <UsageButtons
              recommend={showContent}
              impactLevel={impactLevel}
              handleButtonSelect={handleButtonSelect}
              industry={industry}
              btn1={btn1}
              btn2={btn2}
              btn3={btn3}
            />
            <p className="text-xs md:text-sm mt-2">
              {usage === "<40"
                ? "Low usage is"
                : usage === "40-440"
                ? "Medium usage is"
                : usage === ">440"
                ? "High usage is"
                : ""}{" "}
              {usage === "<40"
                ? "below 40 kWh average"
                : usage === "40-440"
                ? "between 40-440 kWh average"
                : usage === ">440"
                ? "above 440 kWh average"
                : ""}{" "}
              {usage !== "" && showContent === "solar" && (
                <span>
                  <br />
                  monthly use
                </span>
              )}
              {usage !== "" && showContent !== "solar" && "daily use"}
            </p>
          </div>
          <FooterReco
            handleButton={handleButton}
            handleExpress={handleExpress}
            handleChoose={handleChoose}
            recommend={showContent}
            enableBtn={enableBtn}
            pageNo={pageNo}
            pages={pages}
          />
        </div>
      </div>
    </>
  );
};

export default Recommend;

export async function getStaticProps() {
  return {
    props: { page: "Recommend Page" },
  };
}
