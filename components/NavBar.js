import Image from "next/image";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="bg-white py-3 mt-2 lg:pt-10 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto">
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
