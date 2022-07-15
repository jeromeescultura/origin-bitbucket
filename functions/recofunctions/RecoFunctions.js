const INDUSTRIES_DATA = [
  {
    id: 1,
    name: "Accommodation and Food Services",
    dailyUsage: { avg: "119.8", low: "30.3", medium: "129.5", high: "533.8" },
    dailyCarbonEmissions: {
      avg: 105.69,
      low: 26.75,
      medium: 114.21,
      high: 470.81,
    },
    industryCost: { low: 332.74, medium: 1093.7, high: 3712.61 },
    withSolarCost: { low: 96.8, medium: 716.9, high: 2051.32 },
  },
  {
    id: 2,
    name: "Administrative and Support Services",
    dailyUsage: { avg: "64.18", low: "28.25", medium: "90.53" },
    dailyCarbonEmissions: { avg: 56.61, low: 24.92, medium: 79.86, high: 0 },
    industryCost: { low: 313.13, medium: 827.12, high: 0 },
    withSolarCost: { low: 80.98, medium: 420.77, high: 0 },
  },
  {
    id: 3,
    name: "Agriculture, Forestry and Fishing",
    dailyUsage: {
      avg: "106.45",
      low: "28.02",
      medium: "121.81",
      high: "708.90",
    },
    dailyCarbonEmissions: {
      avg: 93.9,
      low: 24.71,
      medium: 107.44,
      high: 625.29,
    },
    industryCost: { low: 322.25, medium: 1118.32, high: 5506.19 },
    withSolarCost: { low: 79.2, medium: 658.61, high: 3383.11 },
  },
  {
    id: 4,
    name: "Arts and Recreation Services",
    dailyUsage: {
      avg: "90.30",
      low: "29.32",
      medium: "110.84",
      high: "522.34",
    },
    dailyCarbonEmissions: {
      avg: 79.65,
      low: 25.86,
      medium: 97.77,
      high: 460.73,
    },
    industryCost: { low: 305.55, medium: 971.21, high: 3784.38 },
    withSolarCost: { low: 89.13, medium: 575.18, high: 1964.46 },
  },
  {
    id: 5,
    name: "Construction",
    dailyUsage: { avg: "74.25", low: "28.64", medium: "96.12", high: "629.28" },
    dailyCarbonEmissions: {
      avg: 65.49,
      low: 25.26,
      medium: 84.79,
      high: 555.06,
    },
    industryCost: { low: 292.42, medium: 869.81, high: 4366.86 },
    withSolarCost: { low: 83.92, medium: 463.28, high: 2777.65 },
  },
  {
    id: 6,
    name: "Education and Training",
    dailyUsage: {
      avg: "90.31",
      low: "28.92",
      medium: "116.20",
      high: "576.02",
    },
    dailyCarbonEmissions: {
      avg: 79.65,
      low: 25.51,
      medium: 102.5,
      high: 508.08,
    },
    industryCost: { low: 310.86, medium: 1089.8, high: 5259.51 },
    withSolarCost: { low: 86.05, medium: 615.96, high: 2372.68 },
  },
  {
    id: 7,
    name: "Electricity, Gas, Water and Waste Services",
    dailyUsage: {
      avg: "97.93",
      low: "30.09",
      medium: "100.47",
      high: "759.96",
    },
    dailyCarbonEmissions: {
      avg: 86.38,
      low: 26.54,
      medium: 88.62,
      high: 670.32,
    },
    industryCost: { low: 310.13, medium: 864.58, high: 4936.93 },
    withSolarCost: { low: 94.97, medium: 496.32, high: 3771.34 },
  },
  {
    id: 8,
    name: "Financial and Insurance Services",
    dailyUsage: {
      avg: "85.08",
      low: "28.54",
      medium: "110.86",
      high: "642.38",
    },
    dailyCarbonEmissions: {
      avg: 75.04,
      low: 25.17,
      medium: 97.79,
      high: 566.61,
    },
    industryCost: { low: 309.78, medium: 964.72, high: 4364.62 },
    withSolarCost: { low: 83.17, medium: 575.36, high: 2877.28 },
  },
  {
    id: 9,
    name: "Health Care and Social Assistance",
    dailyUsage: {
      avg: "68.88",
      low: "28.46",
      medium: "94.93",
      high: "525.11",
    },
    dailyCarbonEmissions: {
      avg: 60.75,
      low: 25.1,
      medium: 83.73,
      high: 463.18,
    },
    industryCost: { low: 294.19, medium: 842.95, high: 4320.51 },
    withSolarCost: { low: 82.56, medium: 454.2, high: 1985.55 },
  },
  {
    id: 10,
    name: "Information Media and Telecommunications",
    dailyUsage: {
      avg: "88.09",
      low: "29.30",
      medium: "101.74",
      high: "737.37",
    },
    dailyCarbonEmissions: { avg: 77.7, low: 25.84, medium: 89.74, high: 650.4 },
    industryCost: { low: 305.63, medium: 933.31, high: 4107.25 },
    withSolarCost: { low: 88.95, medium: 505.97, high: 3599.56 },
  },
  {
    id: 11,
    name: "Manufacturing",
    dailyUsage: {
      avg: "96.54",
      low: "28.84",
      medium: "114.97",
      high: "573.57",
    },
    dailyCarbonEmissions: {
      avg: 85.16,
      low: 25.44,
      medium: 101.41,
      high: 505.92,
    },
    industryCost: { low: 301.96, medium: 995.52, high: 4107.81 },
    withSolarCost: { low: 85.46, medium: 606.62, high: 2354 },
  },
  {
    id: 12,
    name: "Mining",
    dailyUsage: {
      avg: "95.40",
      low: "29.58",
      medium: "68.38",
      high: "1057.28",
    },
    dailyCarbonEmissions: {
      avg: 84.15,
      low: 26.09,
      medium: 60.32,
      high: 932.58,
    },
    industryCost: { low: 1542.13, medium: 5513.74, high: 7385.18 },
    withSolarCost: { low: 91.07, medium: 252.33, high: 6032.25 },
  },

  {
    id: 13,
    name: "Professional, Scientific and Technical Services",
    dailyUsage: {
      avg: "73.22",
      low: "28.61",
      medium: "99.86",
      high: "648.97",
    },
    dailyCarbonEmissions: {
      avg: 64.59,
      low: 25.24,
      medium: 88.08,
      high: 572.42,
    },

    industryCost: { low: 303.85, medium: 917.33, high: 5151.62 },
    withSolarCost: { low: 83.76, medium: 491.7, high: 2927.36 },
  },
  {
    id: 14,
    name: "Public Administration and Safety",
    dailyUsage: {
      avg: "81.10",
      low: "28.74",
      medium: "102.01",
      high: "1332.08",
    },
    dailyCarbonEmissions: {
      avg: 71.54,
      low: 25.35,
      medium: 89.98,
      high: 1174.96,
    },

    industryCost: { low: 307.48, medium: 881.56, high: 10742.43 },
    withSolarCost: { low: 84.7, medium: 508.04, high: 8121.83 },
  },
  {
    id: 15,
    name: "Rental, Hiring and Real Estate Services",
    dailyUsage: {
      avg: "65.97",
      low: "28.59",
      medium: "90.79",
      high: "710.36",
    },
    dailyCarbonEmissions: {
      avg: 58.19,
      low: 25.22,
      medium: 80.09,
      high: 626.57,
    },
    industryCost: { low: 308.53, medium: 812.67, high: 4015.72 },
    withSolarCost: { low: 83.57, medium: 422.75, high: 3394.16 },
  },
  {
    id: 16,
    name: "Retail Trade",
    dailyUsage: {
      avg: "90.74",
      low: "28.66",
      medium: "116.15",
      high: "526.79",
    },
    dailyCarbonEmissions: {
      avg: 80.04,
      low: 25.28,
      medium: 102.45,
      high: 464.66,
    },
    industryCost: { low: 311.32, medium: 1000.04, high: 4292.7 },
    withSolarCost: { low: 84.08, medium: 615.57, high: 1998.32 },
  },
  {
    id: 17,
    name: "Transport, Postal and Warehousing",
    dailyUsage: {
      avg: "88.85",
      low: "29.11",
      medium: "111.21",
      high: "688.47",
    },
    dailyCarbonEmissions: {
      avg: 78.37,
      low: 25.67,
      medium: 98.1,
      high: 607.26,
    },
    industryCost: { low: 294.08, medium: 994.45, high: 5370.06 },
    withSolarCost: { low: 87.51, medium: 578.01, high: 3227.7 },
  },
  {
    id: 18,
    name: "Wholesale Trade",
    dailyUsage: {
      avg: "91.96",
      low: "29.07",
      medium: "113.23",
      high: "576.99",
    },
    dailyCarbonEmissions: {
      avg: 81.12,
      low: 25.64,
      medium: 99.87,
      high: 508.94,
    },
    industryCost: { low: 304.68, medium: 969.21, high: 4078.97 },
    withSolarCost: { low: 87.19, medium: 593.33, high: 2380.05 },
  },
  {
    id: 19,
    name: "Other Services",
    dailyUsage: {
      avg: "65.21",
      low: "28.04",
      medium: "94.28",
      high: "515.81",
    },
    dailyCarbonEmissions: {
      avg: 57.52,
      low: 24.74,
      medium: 83.16,
      high: 454.97,
    },
    industryCost: { low: 295.77, medium: 876.18, high: 4393.07 },
    withSolarCost: { low: 79.41, medium: 449.22, high: 1914.81 },
  },
];

export const sumArray = (accumulator, curr) => accumulator + curr;

export const stepOneScore = (val, setGZ, setGP, setSP) => {
  //   ENERGY SOURCE
  if (val.energySourceChanges.includes("carbon_offsets")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset - 9999 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }
  if (val.energySourceChanges.includes("green_power")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset - 9999 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower - 9999 };
    });
    setSP((prevState) => {
      return {
        ...prevState,
        solar: prevState.solar + 3,
        greenPower: prevState.greenPower - 9999,
      };
    });
  }
  if (val.energySourceChanges.includes("solar")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
  if (val.energySourceChanges.includes("batteries")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
  }
  if (val.energySourceChanges.includes("electric_vehicles")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
  }
  if (val.energySourceChanges.includes("expert_advice")) {
    setGZ((prevState) => {
      return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
    });
    setGP((prevState) => {
      return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
    });
    setSP((prevState) => {
      return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
    });
  }

  //   TIME AND ENERGY
  if (val.timeAndEnergy === "easy") {
    setGZ((prevState) => {
      return {
        carbonOffset: prevState.carbonOffset + 3,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
    setGP((prevState) => {
      return {
        greenPower: prevState.greenPower + 3,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
    setSP((prevState) => {
      return {
        ...prevState,
        solar: prevState.solar - 2,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
  } else if (val.timeAndEnergy === "open_decision") {
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.timeAndEnergy === "fully_invest") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 3 };
    });
  }

  //   PRIORITY
  if (val.howMuchPriority === 5) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset - 1 };
    });
    setGP((prevState) => {
      return {
        ...prevState,
        greenPower: prevState.greenPower + 1,
      };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.howMuchPriority === 4) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset - 1 };
    });
    setGP((prevState) => {
      return {
        ...prevState,
        greenPower: prevState.greenPower + 1,
      };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.howMuchPriority === 3) {
    setGP((prevState) => {
      return {
        ...prevState,
        greenPower: prevState.greenPower + 1,
      };
    });
  } else if (val.howMuchPriority === 2) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 1 };
    });
  } else if (val.howMuchPriority === 1) {
    setGZ((prevState) => {
      return {
        carbonOffset: prevState.carbonOffset + 1,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
    setGP((prevState) => {
      return {
        ...prevState,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
    setSP((prevState) => {
      return {
        ...prevState,
        solar: prevState.solar - 1,
        decarbEOI: prevState.decarbEOI - 9999,
      };
    });
  }
};

export const stepTwoScore = (val, setSP) => {
  // ENERGY USAGE
  if (val.energyUsage.includes("constant")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }
  if (val.energyUsage.includes("mornings")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
  if (val.energyUsage.includes("evenings")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
  if (val.energyUsage.includes("standard")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }

  //   SPACE
  if (val.spaceForInstallation === "yes") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.spaceForInstallation === "some") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }
  if (val.spaceForInstallation === "no") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
};

export const recommendProduct = (gz, gp, sp, router, userID, setRP) => {
  if (gz >= 0 || gp >= 0 || sp >= 0) {
    if (gz > gp && gz > sp) {
      setRP("carbonOffset");
    } else if (gp > gz && gp > sp) {
      setRP("greenPower");
    } else if (sp > gz && sp > gp) {
      setRP("solar");
    } else if (gz === gp) {
      setRP("greenPower");
    } else if (gz === sp || gp === sp) {
      setRP("solar");
    }
  } else {
    router.push({
      pathname: "/norecommendations",
      query: { uuid: userID },
    }, '/norecommendations');
  }
};

export const handleSubCategory = (recommend, gz, gp, sp, setSC) => {
  switch (recommend) {
    case "carbonOffset":
      setSC(
        Object.keys(gz).filter(
          (item) => gz[item] >= 0 && item !== "solar" && item !== "carbonOffset"
        )
      );
      break;
    case "greenPower":
      setSC(
        Object.keys(gp).filter(
          (item) => gp[item] >= 0 && item !== "solar" && item !== "carbonOffset"
        )
      );
      break;
    case "solar":
      setSC(
        Object.keys(sp).filter(
          (item) => sp[item] >= 0 && item !== "solar" && item !== "carbonOffset"
        )
      );
      break;
    default:
      break;
  }
};

export const handleOtherRecommendations = (rec, gz, gp, sp, setOR) => {
  let goZeroOthers = [];
  let greenPowerOthers = [];
  let solarPowerOthers = [];

  if (Object.keys(gz).some((item) => gz[item] >= 0)) {
    goZeroOthers = Object.keys(gz).filter(
      (item) => gz[item] >= 0 && item !== rec && item !== "decarbEOI"
    );
  }
  if (Object.keys(gp).some((item) => gp[item] >= 0)) {
    greenPowerOthers = Object.keys(gp).filter(
      (item) => gp[item] >= 0 && item !== rec && item !== "decarbEOI"
    );
  }
  if (Object.keys(sp).some((item) => sp[item] >= 0)) {
    solarPowerOthers = Object.keys(sp).filter(
      (item) => sp[item] >= 0 && item !== rec && item !== "decarbEOI"
    );
  }

  let combinedSubCategories = [
    ...goZeroOthers,
    ...greenPowerOthers,
    ...solarPowerOthers,
  ];

  let filteredRecommendations = [];

  for (let i of combinedSubCategories) {
    if (filteredRecommendations.indexOf(i) === -1) {
      filteredRecommendations.push(i);
    }
  }

  setOR(filteredRecommendations);
};

export const handleProducts = (rec, or, setProducts) => {
  setProducts([{ title: rec }]);
  if (or.length > 0) {
    or.map((item) =>
      setProducts((prevState) => [...prevState, { title: item }])
    );
  }
};

export const handlePageNo = (recommend, pages, products, setPageNo) => {
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
};

export const handleContent = (
  recommend,
  pageNo,
  products,
  pages,
  productPages,
  setContent
) => {
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
};

export const handleImpactData = (
  showContent,
  dailyUsage,
  dailyCarbonEmissions,
  level,
  setImpact,
  dayjs
) => {
  let yearlyCarbonEmissions;
  let tempYearlyCarbonEmissions;
  let low;
  let tempLow;
  let high;
  let tempHigh;
  let impactCalc;
  let tempImpactCalc;
  let metricTons;
  let tempMetricTons;
  let cars;
  let tempCars;

  if (showContent === "carbonOffset") {
    yearlyCarbonEmissions = Math.round(dailyCarbonEmissions * 365);
    if (yearlyCarbonEmissions > 1) {
      tempYearlyCarbonEmissions = Math.round(yearlyCarbonEmissions);
    } else {
      tempYearlyCarbonEmissions = Math.ceil(yearlyCarbonEmissions);
    }
    setImpact(separator(tempYearlyCarbonEmissions));
  } else if (showContent === "greenPower") {
    impactCalc = dayjs.duration(dailyUsage * 365 * 0.001305873 * level, "h");

    if (impactCalc?.$d?.days > 0) {
      if (impactCalc?.$d?.days > 1) {
        setImpact(`${impactCalc?.$d?.days} days`);
        if (impactCalc?.$d?.hours > 0) {
          if (impactCalc?.$d?.hours > 1) {
            setImpact(
              (prevState) => `${prevState}, ${impactCalc?.$d?.hours} hours`
            );
          } else {
            setImpact(
              (prevState) => `${prevState}, ${impactCalc?.$d?.hours} hour`
            );
          }
        }
      } else {
        setImpact(`${impactCalc?.$d?.days} day`);
        if (impactCalc?.$d?.hours > 0) {
          if (impactCalc?.$d?.hours > 1) {
            setImpact(
              (prevState) => `${prevState}, ${impactCalc?.$d?.hours} hours`
            );
          } else {
            setImpact(
              (prevState) => `${prevState} ${impactCalc?.$d?.hours} hour`
            );
          }
        }
      }
    } else if (impactCalc?.$d?.hours > 0) {
      if (impactCalc?.$d?.hours > 1) {
        setImpact(`${impactCalc?.$d?.hours} hours`);
      } else {
        setImpact(`${impactCalc?.$d?.hours} hour`);
      }
    }
  } else if (showContent === "solar") {
    tempMetricTons = Math.round(dailyCarbonEmissions * 365);
    if (tempMetricTons > 1) {
      metricTons = Math.round(tempMetricTons);
    } else {
      metricTons = Math.ceil(tempMetricTons);
    }
    tempCars = Math.round((dailyCarbonEmissions * 365) / 2401);
    if (tempCars > 1) {
      cars = Math.round(tempCars);
    } else {
      cars = Math.ceil(tempCars);
    }
    setImpact([separator(metricTons), separator(cars)]);
  }
};

export const handleOffset = (
  showContent,
  industry,
  setOffSet,
  setDailyUsage,
  setDailyCarbonEmissions,
  setIndustryCost,
  setWithSolar,
  source,
  version
) => {
  if (showContent === "carbonOffset") {
    if (version === "a") {
      setOffSet(0);
    } else {
      setOffSet(0.015);
    }
  } else if (showContent === "greenPower") {
    setOffSet(0.028);
  } else if (showContent === "solar") {
    setOffSet(0.25);
  }

  setDailyUsage(industry?.dailyUsage?.low);
  setDailyCarbonEmissions(industry?.dailyCarbonEmissions?.low);
  setIndustryCost(industry?.industryCost?.low);
  setWithSolar(industry?.withSolarCost?.low);
};

export const formatPrice = (number) => {
  return Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(number);
};

export function getIndustryByName(name) {
  return INDUSTRIES_DATA.find((industry) => industry.name === name);
}

export function getExtraCost(dailyUsage, offSet, level) {
  Math.round((dailyUsage * offSet * level + Number.EPSILON) * 100) / 100;
}

export const separator = (numb) => {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};
