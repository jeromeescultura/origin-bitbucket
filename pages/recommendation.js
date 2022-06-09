import { useEffect, useState } from "react";
import { sumArray, stepOneScore } from "../components/reccomponents/RecoFunctions";

const Recommendation = () => {
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

  const goZeroScore = Object.values(goZero).reduce(sumArray);
  const greenPowerScore = Object.values(greenPower).reduce(sumArray);
  const solarPowerScore = Object.values(solarPower).reduce(sumArray);

  useEffect(() => {
    console.log("goZeroScore: ", goZeroScore);
    console.log("greenPowerScore: ", greenPowerScore);
    console.log("solarPowerScore: ", solarPowerScore);
  }, [goZero, greenPower, solarPower]);

  useEffect(() => {
    if (storedStepOneData !== null) {
      stepOneScore(storedStepOneData, setGoZero, setGreenPower, setSolarPower);
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

export default Recommendation;
