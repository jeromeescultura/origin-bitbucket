import { useRouter } from "next/router";
import Image from "next/image";

import { Button } from "@mui/material";
import ContentContainer from "../../containers/ContentContainer";

function FooterReco({
  handleButton,
  recommend,
  enableBtn,
  handleChoose,
  pageNo,
  pages,
}) {
  const router = useRouter();
  const handleClick = () => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="bg-white w-full py-2 shadow-t-sm z-50 fixed bottom-0 ">
      {pages !== 1 && (
        <div className="flex justify-evenly lg:px-8 lg:justify-between  xl:max-w-[920px] mx-auto items-center ">
          <Button
            disabled={pageNo === 0 && true}
            size="large"
            onClick={() => handleButton("back")}
            variant="contained"
            className={`${
              pageNo === 0 ? "text-[#ABABAB]" : "text-primaryText"
            } text-sm font-medium !bg-white p-6 !rounded-l-full shadow-none lg:-mb-20`}
            startIcon={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className={`${
                  pageNo === 0 ? "fill-[#ABABAB]" : "fill-primaryText"
                } rotate-90`}
              >
                <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
              </svg>
            }
          >
            Do less
          </Button>
          <div className="lg:py-3">
            <p className="text-center">
              <span className="hidden lg:inline">Make a difference with </span>
              <span className="capitalize font-medium">
                {recommend === "carbonOffset" ? "Origin go Zero" : recommend}
              </span>
            </p>
          </div>

          <Button
            disabled={pageNo === pages - 1 && true}
            size="large"
            onClick={() => handleButton("next")}
            variant="contained"
            className={`${
              pageNo === 2 ? "text-[#ABABAB]" : "text-primaryText"
            } text-sm font-medium !bg-white p-6 !rounded-r-full shadow-none lg:-mb-20`}
            endIcon={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className={`${
                  pageNo === pages - 1 ? "fill-[#ABABAB]" : "fill-primaryText"
                } -rotate-90`}
              >
                <path d="M10.585 0.584961L6 5.16996L1.415 0.584961L0 1.99996L6 7.99996L12 1.99996L10.585 0.584961Z" />
              </svg>
            }
          >
            Do more
          </Button>
        </div>
      )}
      <div className="flex flex-col sm:flex-row w-full max-w-[230px] sm:max-w-none gap-2 p-2 mb-1 mx-auto justify-center pt-3">
        <Button
          className="w-[230px] lg:py-3"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleChoose}
          style={{
            borderRadius: 200,
            boxShadow: "none",
            fontSize: 14,
          }}
        >
          Choose this energy shift
        </Button>
        <Button
          className="w-[230px] lg:py-3"
          variant="outlined"
          size="large"
          color="error"
          onClick={handleClick}
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
