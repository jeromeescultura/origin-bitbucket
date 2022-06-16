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
import { Button, ButtonGroup, Modal } from "@mui/material";
import {
  handleContent,
  handleImpactData,
  handleOtherRecommendations,
  handleProducts,
  handleSubCategory,
  recommendProduct,
  stepOneScore,
  stepTwoScore,
  sumArray,
} from "../functions/recofunctions/RecoFunctions";

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
    if (storedStepOneData !== null && storedStepTwoData !== null) {
      stepOneScore(storedStepOneData, setGoZero, setGreenPower, setSolarPower);
      stepTwoScore(storedStepTwoData, setSolarPower);
    }
  }, []);

  useEffect(() => {
    setIndustryId(storedStepTwoData?.dropdown);

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
    let currIndustry = industries?.filter((item) => item.id === industryId);
    setIndustry(currIndustry[0]);
  }, [industryId]);

  // useEffect(() => {
  //   console.log("INDUSTRY", industry?.name);
  // }, [industry]);

  // useEffect(() => {
  //   console.log("");
  //   console.log("");
  //   console.log("");
  //   console.log("");
  //   console.log("");
  //   console.log("********** START **********");
  //   console.log("GOZERO", goZero);
  //   console.log("GREENPOWER", greenPower);
  //   console.log("SOLAR", solarPower);
  //   console.log("RECOMMEND", recommend);
  //   console.log("OTHER RECOMMENDATIONS:", otherRecommendations);
  //   console.log("SUBCATEGORIES", subCategory);
  //   console.log("PRODUCTS", products);
  //   console.log("PAGES", pages);
  //   console.log("PAGE NO", pageNo);
  //   console.log("INDUSTRY", industry);
  // }, [products, industry, pages, pageNo]);

  useEffect(() => {
    if (pages === 3) {
      setContent(productPages[pageNo]);
    } else if (pages === 2) {
      if (recommend === "carbonOffset") {
        setContent(productPages[pageNo]);
      } else if (recommend === "greenPower") {
        if (products?.some((item) => item.title === "carbonOffset")) {
          setContent(productPages[pageNo]);
        } else if (products?.some((item) => item.title === "solar")) {
          setContent(productPages[pageNo + 1]);
        }
      } else if (recommend === "solar") {
        setContent(productPages[pageNo + 1]);
      }
    } else {
      if (recommend === "carbonOffset") {
        setContent(productPages[0]);
      } else if (recommend === "greenPower") {
        setContent(productPages[1]);
      } else if (recommend === "solar") {
        setContent(productPages[2]);
      }
    }
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
    if (recommend === "carbonOffset") {
      setPageNo(pages - pages);
    } else if (recommend === "greenPower") {
      if (pages === 2) {
        if (products?.some((item) => item.title === "carbonOffset")) {
          setPageNo(1);
        } else if (products?.some((item) => item.title === "solar")) {
          setPageNo(0);
        }
      } else if (pages === 3) {
        setPageNo(1);
      }
    } else if (recommend === "solar") {
      setPageNo(pages - 1);
    }
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
    if (showContent === "carbonOffset") {
      setOffSet(0.015);
    } else if (showContent === "greenPower") {
      setOffSet(0.028);
    } else if (showContent === "solar") {
      setOffSet(0.25);
    }
    setDailyUsage(industry?.dailyUsage?.low);
    setIndustryCost(industry?.industryCost?.low);
    setWithSolar(industry?.withSolarCost?.low);
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

  useEffect(() => {}, [extraCost]);

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
  });

  useEffect(() => {
    setStoredData({
      product: showContent,
      greenPowerLevel: level * 100,
      biggerDiff: pledges,
      extraCost: extraCost,
      estimatedSavings: solarSavings,
    });
  }, [showContent, level, pledges, extraCost, solarSavings]);

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

    console.log("RECOMMENDATION LOCAL STORAGE", data);
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
  };

  const [impactRanges, setImpactRanges] = useState(false);
  const openModal = () => setImpactRanges(true);
  const closeModal = () => setImpactRanges(false);

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

          {pages !== 1 && (
            <div
              className={`text-center  ${
                pages !== 1 ? "py-6 md:py-12" : "py-4 md:py-10"
              }`}
            >
              {" "}
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

          <div className="text-center mb-8">
            <h2 className="text-primaryText font-bold">Making a difference</h2>
            <h2 className="text-primaryText">
              with{" "}
              {showContent === "carbonOffset" &&
                "Origin Go Zero 100% carbon offset"}{" "}
              {showContent === "solar" && "Solar"}
              {showContent === "greenPower" && "GreenPower"}
            </h2>
            <div className="font-light text-xs mt-8 lg:mt-16">
              Impact estimates below are calculated with usage averages
              collected from Origin’s small & medium business customers in{" "}
              <span className="font-medium">{industry?.name}</span>. This will
              change based on your business’ specific usage.{" "}
              <span className="underline cursor-pointer" onClick={openModal}>
                See your impact ranges.
              </span>
            </div>
          </div>
          <Modal open={impactRanges} onClose={closeModal}>
            <div className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] min-w-[311px] border p-6 rounded-lg">
              <div className="flex items-start justify-between">
                <h1 className="font-GorditaMedium text-lg lg:text-xl ">
                  Understanding your impact estimates with{" "}
                  {showContent === "carbonOffset" && "Carbon Offsets"}
                  {showContent === "greenPower" && "GreenPower"}
                  {showContent === "solar" && "Solar"}
                </h1>
                <button
                  className="w-[30px] h-[30px] lg:w-[20px] lg:h-[20px] ml-5"
                  onClick={closeModal}
                >
                  <Image
                    src="/icons/close-icon.svg"
                    width={500}
                    height={500}
                    alt="close-icon"
                  />
                </button>
              </div>
              <div className="font-GorditaRegular text-sm mt-6">
                <div>
                  By understanding the industry your business is in, we’re able
                  to make an estimated assessment of the impact your business
                  could make from{" "}
                  <span className="font-GorditaMedium">
                    {showContent === "carbonOffset" &&
                      "offsetting your carbon emissions for a year"}
                    {(showContent === "greenPower" ||
                      showContent === "solar") &&
                      "matching your usage with 100% GreenPower for a year"}
                  </span>
                  .
                  <br />
                  <br />
                  If your usage is higher or lower than the average, these
                  ranges could better indicate the impact on your business.
                </div>
                <div className="space-y-2 mt-6">
                  <h1 className="text-base font-GorditaMedium">
                    Lower than the average usage
                  </h1>
                  <div>
                    {showContent === "carbonOffset" &&
                      `Equivalent to planting and growing 80 tree seedlings for 10
                    years With no additional costs to your business energy
                    bills`}
                    {showContent === "greenPower" &&
                      `It will take approximately 5 hours to put the same amount of renewable energy back into the grid
And approximately $25.81 extra per month to your business energy bills`}
                    {showContent === "solar" &&
                      `Prevent 4.36 tonnes of carbon from ever being emitted per year, equivalent to immediately taking 0.99 cars off the road
And save approximately $133.61 per month to your business energy bills`}
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <h1 className="text-base font-GorditaMedium">
                    Higher than the average usage
                  </h1>
                  <div>
                    {showContent === "carbonOffset" &&
                      `Equivalent to planting and growing 1,403 tree seedlings for 10
                    years With no additional costs to your business energy
                    bills`}
                    {showContent === "greenPower" &&
                      `It will take approximately 4 days to put the same amount of renewable energy back into the grid
And approximately $454.62 extra per month to your business energy bills`}
                    {showContent === "solar" &&
                      `Prevent 77.88 tonnes of carbon from ever being emitted per year, equivalent to immediately taking 17.53 cars off the road
And save approximately $2007.78 per month to your business energy bills`}
                  </div>
                </div>
                <div className="text-xs mt-6">
                  We calculate your impact analogy using credible conversions
                  from{" "}
                  <a
                    href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator"
                    className="underline"
                  >
                    https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
                  </a>
                </div>
              </div>
            </div>
          </Modal>
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

        <div className="flex justify-center">
          <Button onClick={showLocalStorage}>Click me</Button>
        </div>

        <Faqs />
      </div>
      {showFooter && (
        <FooterReco handleButton={handleButton} enableBtn={enableBtn} />
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
