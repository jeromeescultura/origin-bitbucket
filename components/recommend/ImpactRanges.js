import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const ImpactRanges = ({ impactRanges, closeModal, showContent }) => {
  return (
    <Modal open={impactRanges} onClose={closeModal}>
      <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] min-w-[311px] p-6 rounded-lg">
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
            By understanding the industry your business is in, we’re able to
            make an estimated assessment of the impact your business could make
            from{" "}
            <span className="font-GorditaMedium">
              {showContent === "carbonOffset" &&
                "offsetting your carbon emissions for a year"}
              {(showContent === "greenPower" || showContent === "solar") &&
                "matching your usage with 100% GreenPower for a year"}
            </span>
            .
            <br />
            <br />
            If your usage is higher or lower than the average, these ranges
            could better indicate the impact on your business.
          </div>
          <div className="space-y-2 mt-6">
            <h1 className="text-base font-GorditaMedium">
              Lower than the average usage
            </h1>
            <div>
              {showContent === "carbonOffset" &&
                `Equivalent to planting and growing 80 tree seedlings for 10
                    years And approximately $13.82 extra per month to your business energy bills`}
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
                    years And approximately $243.55 extra per month to your business energy bills`}
              {showContent === "greenPower" &&
                `It will take approximately 4 days to put the same amount of renewable energy back into the grid
And approximately $454.62 extra per month to your business energy bills`}
              {showContent === "solar" &&
                `Prevent 77.88 tonnes of carbon from ever being emitted per year, equivalent to immediately taking 17.53 cars off the road
And save approximately $2007.78 per month to your business energy bills`}
            </div>
          </div>
          <div className="text-xs mt-6">
            We calculate your impact analogy using credible conversions from{" "}
            <a
              href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator"
              className="underline"
            >
              https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator
            </a>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ImpactRanges;
