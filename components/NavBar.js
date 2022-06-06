import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="bg-white py-3 lg:pt-8 w-[90vw] sm:w-[80vw] md:w-[90vw] lg:w-[95vw] max-w-[1140px] mx-auto ">
      <div className="w-16 lg:w-20 cursor-pointer">
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
  );
}

export default NavBar;
