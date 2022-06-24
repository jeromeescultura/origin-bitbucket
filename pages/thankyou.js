import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Thankyou() {
  const router = useRouter();
  const [userID, setUserID] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  useEffect(() => {
    setUserID(router.query.uuid);
  }, [router.query]);

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <section className="pt-6 lg:pt-8 ">
      <div className="w-full xl:w-[1108px] mx-auto">
        <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
          <Image
            src="/images/origin-logo.svg"
            width={90}
            height={90}
            objectFit="contain"
            alt="origin-logo"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="text-center font-light w-full mt-4 lg:-mt-8">
        <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
          All done
        </h2>
        <p className="subtitle my-6 leading-loose w-full px-8 sm:px-0 max-w-[550px] mx-auto">
          {userID
            ? "Thank you for choosing to make a difference. One of our specialists will contact you to finalise your choice in energy shift."
            : "One of our specialists will contact you about other bespoke options that might be available to you."}
        </p>
      </div>
    </section>
  );
}

export default Thankyou;
