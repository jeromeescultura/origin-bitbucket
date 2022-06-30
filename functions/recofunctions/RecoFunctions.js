import React from "react";
import { set } from "react-hook-form";

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
  if (val.energySourceChanges.includes("ev")) {
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
    });
  }
};

export const handleSubCategory = (recommend, gz, gp, sp, setSC) => {
  switch (recommend) {
    case "carbonOffset":
      setSC(
        Object.keys(gz).filter(
          (item) =>
            gz[item] >= 0 && (item !== "solar" || item !== "carbonOffset")
        )
      );
      break;
    case "greenPower":
      setSC(
        Object.keys(gp).filter(
          (item) =>
            gp[item] >= 0 && (item !== "solar" || item !== "carbonOffset")
        )
      );
      break;
    case "solar":
      setSC(
        Object.keys(sp).filter(
          (item) =>
            sp[item] >= 0 && (item !== "solar" || item !== "carbonOffset")
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
  level,
  setImpact,
  dayjs
) => {
  let impactCalc;
  let tempImpactCalc;
  let metricTons;
  let tempMetricTons;
  let cars;
  let tempCars;

  if (showContent === "carbonOffset") {
    impactCalc = Math.round(
      ((dailyUsage * 365 * 0.0072 + 0.0482 + Number.EPSILON) * 100) / 100
    );
    if (impactCalc > 1) {
      tempImpactCalc = Math.round(impactCalc);
    } else {
      tempImpactCalc = Math.ceil(impactCalc);
    }
    setImpact(tempImpactCalc.toString());
  } else if (showContent === "greenPower") {
    impactCalc = dayjs.duration(
      ((dailyUsage * 365) / 33.333 / 60 / 24) * level,
      "d"
    );

    if (impactCalc?.$d?.days > 0) {
      if (impactCalc?.$d?.days > 1) {
        setImpact(`${impactCalc?.$d?.days} days`);
        if (impactCalc?.$d?.hours > 0) {
          if (impactCalc?.$d?.hours > 1) {
            setImpact(
              (prevState) => `${prevState} ${impactCalc?.$d?.hours} hrs`
            );
          } else {
            setImpact(
              (prevState) => `${prevState} ${impactCalc?.$d?.hours} hr`
            );
          }
        }
      } else {
        setImpact(`${impactCalc?.$d?.days} day`);
        if (impactCalc?.$d?.hours > 0) {
          if (impactCalc?.$d?.hours > 1) {
            setImpact(
              (prevState) => `${prevState} ${impactCalc?.$d?.hours} hours`
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
    tempMetricTons =
      Math.round(
        (0.0004 * (dailyUsage * 365) - 0.0593 + Number.EPSILON) * 100
      ) / 100;
    if (tempMetricTons > 1) {
      metricTons = Math.round(tempMetricTons);
    } else {
      metricTons = Math.ceil(tempMetricTons);
    }
    tempCars =
      Math.round(
        (0.00009 * (dailyUsage * 365) - 0.0073 + Number.EPSILON) * 100
      ) / 100;
    if (tempCars > 1) {
      cars = Math.round(tempCars);
    } else {
      cars = Math.ceil(tempCars);
    }
    setImpact([metricTons.toString(), cars.toString()]);
  }
};

export const formatPrice = (number) => {
  return Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
  }).format(number);
};

export const handleOffset = (
  showContent,
  industry,
  setOffSet,
  setDailyUsage,
  setIndustryCost,
  setWithSolar
) => {
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
};
