import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import ContentContainer from "../containers/ContentContainer";
import Navbar from "../components/Navbar";

const disclaimer = () => {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };
  return (
    <ContentContainer>
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="space-y-8">
          <h2 className="text-secondaryBG font-bold">
            Getting started with your Clean Energy Consultant
          </h2>
          <div>
            <p className="font-medium subtitle">Eligibility</p>
            <p className="my-4">
              Our small & medium business Clean Ambition Program is currently
              running a trial only in <strong>South Australia</strong> and{" "}
              <strong>Victoria.</strong>
            </p>
            <p>
              If your business does not operate in these states, but you would
              like to find out when the program becomes available to you, please
              let us know by indicating your expression of interest.
            </p>
          </div>
          <div className="flex flex-col gap-4 border-2 md:w-3/4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={(e) => handleClick(e, "/assessment")}
              style={{
                borderRadius: 200,
                boxShadow: "none",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Continue
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="error"
              onClick={(e) => handleClick(e, "/signup")}
              style={{
                borderRadius: 200,
                boxShadow: "none",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Submit expression of interest
            </Button>
          </div>
        </div>
        <div className="hidden w-[80vw] md:inline">
          <Image
            src="/images/disclaimer-tree.png"
            width={800}
            height={940}
            objectFit="cover"
            alt="trees"
            className="rounded-2xl"
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default disclaimer;
