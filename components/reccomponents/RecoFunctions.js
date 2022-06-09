import React from "react";

export const sumArray = (accumulator, curr) => accumulator + curr;

export const stepOneScore = (val, setGZ, setGP, setSP) => {
    console.log("Step One Scores");
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
        return { ...prevState, solar: solarPower.solar - 1 };
      });
    } else {
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
