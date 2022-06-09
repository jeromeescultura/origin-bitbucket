import { useEffect, useState } from "react";

const RecoScore = () => {
  const storedStepOneData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || [];

  const storedStepTwoData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || [];

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

  const stepOneScore = (val) => {
    console.log("Step One Scores");
    if (val.enSource.includes("carbon_offsets")) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset - 9999 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, greenPower: prevState.greenPower + 1 };
      });
      setSolarPower((prevState) => {
        return { ...prevState, solar: prevState.solar + 1 };
      });
    }
    if (val.enSource.includes("green_power")) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset - 9999 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, greenPower: prevState.greenPower - 9999 };
      });
      setSolarPower((prevState) => {
        return {
          ...prevState,
          solar: prevState.solar + 3,
          greenPower: prevState.greenPower - 9999,
        };
      });
    }
    if (val.enSource.includes("solar")) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, greenPower: prevState.greenPower + 1 };
      });
      setSolarPower((prevState) => {
        return { ...prevState, solar: prevState.solar - 9999 };
      });
    }
    if (val.enSource.includes("batteries")) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, greenPower: prevState.greenPower + 1 };
      });
    }
    if (val.enSource.includes("ev")) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, greenPower: prevState.greenPower + 1 };
      });
    }
    if (val.enSource.includes("expert_advice")) {
      setGoZero((prevState) => {
        return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
      });
      setGreenPower((prevState) => {
        return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
      });
      setSolarPower((prevState) => {
        return { ...prevState, decarbEOI: prevState.decarbEOI - 9999 };
      });
    }

    if (val.slider === 5) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset - 1 };
      });
      setGreenPower((prevState) => {
        return {
          ...prevState,
          greenPower: prevState.greenPower + 1,
        };
      });
      setSolarPower((prevState) => {
        return { ...prevState, solar: prevState.solar + 1 };
      });
    } else if (val.slider === 4) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset - 1 };
      });
      setGreenPower((prevState) => {
        return {
          ...prevState,
          greenPower: prevState.greenPower + 1,
        };
      });
      setSolarPower((prevState) => {
        return { ...prevState, solar: solarPower.solar + 1 };
      });
    } else if (val.slider === 3) {
      setGreenPower((prevState) => {
        return {
          ...prevState,
          greenPower: prevState.greenPower + 1,
        };
      });
    } else if (val.slider === 2) {
      setGoZero((prevState) => {
        return { ...prevState, carbonOffset: prevState.carbonOffset + 1 };
      });
      setSolarPower((prevState) => {
        return { ...prevState, solar: solarPower.solar - 1 };
      });
    } else {
      setGoZero((prevState) => {
        return {
          carbonOffset: prevState.carbonOffset + 1,
          decarbEOI: prevState.decarbEOI - 9999,
        };
      });
      setGreenPower((prevState) => {
        return {
          ...prevState,
          decarbEOI: prevState.decarbEOI - 9999,
        };
      });
      setSolarPower((prevState) => {
        return {
          ...prevState,
          solar: solarPower.solar - 1,
          decarbEOI: prevState.decarbEOI - 9999,
        };
      });
    }
  };
  const reducer = (accumulator, curr) => accumulator + curr;

  const goZeroScore = Object.values(goZero).reduce(reducer);
  const greenPowerScore = Object.values(greenPower).reduce(reducer);
  const solarPowerScore = Object.values(solarPower).reduce(reducer);

  useEffect(() => {
    console.log("goZeroScore: ", goZeroScore);
    console.log("greenPowerScore: ", greenPowerScore);
    console.log("solarPowerScore: ", solarPowerScore);
  }, [goZero, greenPower, solarPower]);

  useEffect(() => {
    if (storedStepOneData !== null) {
      stepOneScore(storedStepOneData);
    }
  }, []);

  return (
    <div>
      <h1>
        Recommended:{" "}
        {goZeroScore > greenPowerScore &&
          goZeroScore > solarPowerScore &&
          "GO ZERO"}
        {greenPowerScore > goZeroScore &&
          greenPowerScore > solarPowerScore &&
          "GREEN POWER"}
        {solarPowerScore > goZeroScore &&
          solarPowerScore > greenPowerScore &&
          "SOLAR POWER"}
      </h1>
    </div>
  );
};

export default RecoScore;
