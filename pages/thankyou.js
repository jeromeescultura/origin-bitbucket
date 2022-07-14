import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function Thankyou() {
  const router = useRouter();
  const [userID, setUserID] = useState("");
  const [eoi, setEoi] = useState("");

  const handleClick = (e) => {
    ButtonTrackingEvent(e.target.name, "/");
    e.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    setUserID(router.query.uuid);
    setEoi(router.query.interest);
    setTimeout(() => {
      router.push("/");
      window.localStorage.clear();
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Origin Shift | Thank you</title>
        <meta property="og:title" content="Origin Shift" key="title" />
      </Head>
      {userID || eoi ? (
        <section className="pt-6 lg:pt-8 ">
          <div className="w-full xl:w-[1108px] mx-auto">
            <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
              <Image
                src="/images/origin-logo.svg"
                width={90}
                height={90}
                objectFit="contain"
                alt="origin-logo"
                onClick={(e) => handleClick(e)}
              />
            </div>
          </div>
          <div className="text-center font-light w-full mt-4 lg:-mt-8">
            <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
              All done
            </h2>
            <p className="subtitle my-6 leading-loose w-full px-8 sm:px-0 max-w-[550px] mx-auto">
              {userID
                ? "Thank you for choosing to make a difference. One of our Business Club Specialists will contact you to finalise your choice in energy shift."
                : "One of our Business Club Specialists will contact you about other bespoke options that might be available to you."}
            </p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Thankyou;
