import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "@mui/material";
import ContentContainer from "../../containers/ContentContainer";

function FooterReco({ handleButton, enableBtn }) {
  const router = useRouter();
  const handleClick = (e, url) => {
    e.preventDefault();
    router.push(url);
  };
  return (
    <div className="bg-white w-full py-4 shadow-t-md z-50 fixed bottom-0 ">
      <ContentContainer>
        <div className="flex justify-around py-3 items-center">
          <Button
            disabled={!enableBtn}
            onClick={() => handleButton("back")}
            className={`${
              !enableBtn ? "!text-[#ABABAB]" : "!text-primaryText"
            } text-sm font-medium !bg-white p-6 !rounded-l-full lg:shadow-md`}
            startIcon={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className={`${
                  !enableBtn ? "fill-[#ABABAB]" : "fill-primaryText"
                } rotate-90`}
              >
                <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
              </svg>
            }
          >
            Do less
          </Button>
          <p className="font-medium font-sm">Origin Go Zero</p>
          <Button
            onClick={() => handleButton("next")}
            className="text-sm font-medium"
            endIcon={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="fill-secondaryBG -rotate-90"
              >
                <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
              </svg>
            }
          >
            Do more
          </Button>
        </div>
      </ContentContainer>
      <div className="grid grid-cols-2 w-full gap-2 p-2 mb-1 justify-around sm:w-[380px] mx-auto">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={(e) => handleClick(e, "/disclaimer")}
          style={{
            borderRadius: 200,
            boxShadow: "none",
            fontSize: 14,
          }}
        >
          Apply with offsets
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="error"
          onClick={(e) => handleClick(e, "/contact/signup")}
          style={{
            borderRadius: 200,
            boxShadow: "none",
            fontSize: 14,
          }}
        >
          Let’s chat more
        </Button>
      </div>
    </div>
  );
}

export default FooterReco;
