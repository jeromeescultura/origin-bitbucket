import React from "react";
import { set } from "react-hook-form";

export const sumArray = (accumulator, curr) => accumulator + curr;

export const stepOneScore = (val, setGZ, setGP, setSP) => {
  //   ENERGY SOURCE
  if (val.enSource.includes("carbon_offsets")) {
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
  if (val.enSource.includes("green_power")) {
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
  if (val.enSource.includes("solar")) {
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
  if (val.enSource.includes("batteries")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
  }
  if (val.enSource.includes("ev")) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
  }
  if (val.enSource.includes("expert_advice")) {
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
  if (val.radio === "easy") {
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
  } else if (val.radio === "open_decision") {
    setGP((prevState) => {
      return { ...prevState, greenPower: prevState.greenPower + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.radio === "fully_invest") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 3 };
    });
  }

  //   PRIORITY
  if (val.slider === 5) {
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
  } else if (val.slider === 4) {
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
  } else if (val.slider === 3) {
    setGP((prevState) => {
      return {
        ...prevState,
        greenPower: prevState.greenPower + 1,
      };
    });
  } else if (val.slider === 2) {
    setGZ((prevState) => {
      return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
    });
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 1 };
    });
  } else if (val.slider === 1) {
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
  if (val.radioEnUsage.includes("constant")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }
  if (val.radioEnUsage.includes("mornings")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
  if (val.radioEnUsage.includes("evenings")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
  if (val.radioEnUsage.includes("standard")) {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }

  //   SPACE
  if (val.choice === "0") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  } else if (val.choice === "1") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar + 1 };
    });
  }
  if (val.choice === "2") {
    setSP((prevState) => {
      return { ...prevState, solar: prevState.solar - 9999 };
    });
  }
};

export const recommendProduct = (gz, gp, sp, setRP) => {
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
