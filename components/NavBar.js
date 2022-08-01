import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const source = router.query.src || "";
  const version = router.query.v || "";
  const handleClick = (e) => {
    e.preventDefault();
    router.push(
      { pathname: "/", query: { src: source, v: version } },
      `/${source !== "" && source !== undefined ? `?src=${source}&` : ""}${
        version !== "" && version !== undefined ? `v=${version}` : ""
      }`
    );
  };
  const handleEOI = () => {
    router.push("/contact/");
  };
  return (
    <div className="bg-white py-3 lg:pt-8 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[95%] max-w-[1140px] mx-auto flex justify-between items-end lg:mb-4">
      <img
        src="/images/origin-logo.svg"
        alt="origin-logo"
        onClick={handleClick}
        className="w-[48px] lg:w-[71px] cursor-pointer"
      />
      <div
        className="flex gap-2 mb-1 items-center cursor-pointer"
        onClick={handleEOI}
      >
        <img
          src="/icons/icon_phone.svg"
          alt="phone-icon"
          className="h-[15px] lg:h-[18px]"
        />
        <p className="text-secondaryBG font-bold text-xs lg:text-sm">
          Get in touch
        </p>
      </div>

      {/* <Image
          src="/images/origin-logo.svg"
          width={90}
          height={90}
          objectFit="contain"
          alt="origin-logo"
          onClick={handleClick}
        /> */}
    </div>
  );
}

export default NavBar;
