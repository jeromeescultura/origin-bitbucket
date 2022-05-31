import Image from "next/image";

function ExclusiveCard({ icon, text, desc }) {
  return (
    <div className="bg-white min-w-[250px] md:basis-1/3 sm:w-[270px] lg:w-[49%] p-6 rounded-xl flex flex-col gap-2">
      <div className="w-12 h-12">
        <Image
          src={icon}
          width={50}
          height={50}
          objectFit="contain"
          alt="icon"
        />
      </div>

      <p className="font-bold">{text}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ExclusiveCard;
