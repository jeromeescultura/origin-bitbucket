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
import { Button, ButtonGroup } from "@mui/material";
import {
  handleOtherRecommendations,
  handleProducts,
  handleSubCategory,
  recommendProduct,
  stepOneScore,
  stepTwoScore,
  sumArray,
} from "../functions/recofunctions/RecoFunctions";

const Recommend = ({ industries }) => {
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
    console.log(showContent, "showContent");
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
  const impact =
    (showContent === "carbonOffset" &&
      Math.round(dailyUsage * 365 * 0.0072 + 0.0482 + Number.EPSILON) * 100) /
      100 ||
    (showContent === "greenPower" &&
      ((dailyUsage * 365) / 33.333 / 60 / 24) * level) ||
    (showContent === "solar" &&
      ((dailyUsage * 365) / 33.333 / 60 / 24) * level);

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
            <p>dailyUsage {dailyUsage}</p>
            <p>offSet {offSet}</p>
            <p>withSolar {withSolar}</p>
            <p>withoutSolar {withoutSolar}</p>
            <p>solar Savings {withoutSolar - withSolar}</p>
            <p className="text-subTextColor mt-6">
              Based on what you’ve told us, your business is interested in
              taking climate action, but aren’t ready to invest too much yet.
              And that’s okay. We want to be able to support everyone in the
              transition. Let’s review your next steps below.
            </p>
          </div>

          <div
            className={`text-center  ${
              pages !== 1 ? "py-6 md:py-12" : "py-4 md:py-10"
            }`}
          >
            {pages !== 1 && (
              <>
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
              </>
            )}
          </div>
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
              change based on your business’ specific usage. See your impact
              ranges.
            </div>
          </div>
          <div className="lg:columns-2 gap-3 space-y-3 pb-32  ">
            <div className="break-inside-avoid">
              <ImpactCard recommend={showContent} impact={impact} />
            </div>
            <div className="break-inside-avoid">
              <FinanceCalc
                recommend={showContent}
                industry={industry}
                level={level}
                impactLevel={impactLevel}
                handleButtonSelect={handleButtonSelect}
                usage={usage}
                extraCost={extraCost}
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
                <ToggleCard recommend={showContent} adds={subCategory} />
              )}
            </div>
          </div>
        </ContentContainer>

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
