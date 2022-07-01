import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "@mui/material";

function HeroComponent() {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };
  return (
    <div className="flex justify-center flex-grow rounded-lg w-[92vw] max-w-[1140px] sm:w-[84vw] md:w-[94vw] mx-auto mb-16">
      <div className="w-full sm:w-[90vw] md:w-full relative h-[550px] sm:h-[400px] md:h-[350px] lg:h-[680px]">
        <Image
          src="/images/hero.png"
          layout="fill"
          objectFit="cover"
          alt="bg-image"
          className="rounded-2xl"
          objectPosition="left"
          priority
        />
      </div>
      <div className="absolute max-w-[920px] pt-2 xs:pt-16 lg:pt-28 text-center lg:text-left sm:w-[80%] md:w-[90%] lg:w-[75%] xl:w-[65%]">
        <h2 className="text-4xl lg:text-[56px] lg:leading-snug  text-primaryText font-bold px-10 sm:px-10 lg:px-0 lg:w-[600px]">
          We help your business take steps to support cleaner energy
        </h2>
        <p className="text-secondaryText mt-2 xs:mt-8 font-light px-4 sm:px-4 lg:px-0 lg:w-[70%]">
          Our online assessment tool takes the effort out of understanding how
          your business can access or support cleaner energy solutions. Get
          tailored guidance for you to do this. That&apos; good for business -
          and good for our planet, too.
        </p>
        <div className="flex flex-col w-[70%] md:flex-row sm:w-[80%] md:w-[80%] lg:w-[60%] mx-auto lg:mx-0 gap-4 mt-2 xs:mt-10 lg:mt-16 items-center sm:flex-row justify-center lg:justify-start">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={(e) => handleClick(e, "/disclaimer")}
            style={{
              backgroundColor: "#EC0000",
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Start assessment
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={(e) => handleClick(e, "/contact")}
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
