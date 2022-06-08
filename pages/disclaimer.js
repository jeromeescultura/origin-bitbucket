import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const disclaimer = () => {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };
  return (
    <div className="w-[90vw] sm:w-[80vw] md:w-[90vw] max-w-[1140px] mx-auto">
      <div className="w-16 lg:w-20 cursor-pointer pt-4 lg:pt-8">
        <Image
          src="/images/origin-logo.svg"
          width={90}
          height={90}
          objectFit="contain"
          alt="origin-logo"
          onClick={handleClick}
        />
      </div>
      <div className="inline-grid md:grid-cols-3 gap-8 xl:gap-32 mt-8 lg:mt-24">
        <div className="space-y-8 lg:space-y-12 col-span-2">
          <h2 className="text-primaryText font-bold">
            Getting started with your Clean Energy Consultant
          </h2>
          <div>
            <p className="font-medium subtitle">Eligibility</p>
            <p className="my-4 lg:hidden">
              Our small & medium business Clean Ambition Program is currently
              running a trial only in <strong>South Australia</strong> and{" "}
              <strong>Victoria.</strong>
            </p>
            <p className="hidden lg:block my-6">
              Our online Clean Energy Consultant is currently able to identify
              clean energy altertives for small & medium businesses in{" "}
              <strong>South Australia, Queensland</strong> and{" "}
              <strong>Victoria.</strong>
            </p>
            <p>
              If your business does not operate in these states, but you would
              like to find out when the program becomes available to you, please
              let us know by indicating your expression of interest.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:w-2/3 lg:flex-row lg:w-full xl:pr-12">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="lg:w-full"
              onClick={(e) => handleClick(e, "/assessment")}
              style={{
                borderRadius: 200,
                boxShadow: "none",
              }}
            >
              Continue
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="error"
              className="lg:w-full"
              onClick={(e) => handleClick(e, "/signup")}
              style={{
                borderRadius: 200,
                boxShadow: "none",
              }}
            >
              Submit expression of interest
            </Button>
          </div>
        </div>
        <div className="relative hidden md:inline md:h-[250px] lg:h-[350px] xl:w-[350px] xl:h-full">
          <Image
            src="/images/disclaimer-tree.png"
            layout="fill"
            objectFit="cover"
            alt="trees"
            className="rounded-2xl"
          />
        </div>

        {/* <Image
            src="/images/disclaimer-tree.png"
            width={800}
            height={800}
            objectFit="cover"
            alt="trees"
            className="rounded-2xl"
          /> */}
      </div>
    </div>
  );
};

export default disclaimer;
