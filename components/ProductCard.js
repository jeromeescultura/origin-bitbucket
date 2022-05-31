import Image from "next/image";
import React from "react";
import ButtonComponent from "./ButtonComponent";

function ProductCard() {
  return (
    <div className="bg-white px-8 py-10 rounded-xl flex flex-col gap-2 items-center text-center space-y-6">
      <div className="w-12 h-12">
        <Image
          src="/icons/personalized.svg"
          width={50}
          height={50}
          objectFit="contain"
          alt="icon"
        />
      </div>

      <p className="font-bold text-[20px]">On-Site Energy Audit</p>
      <p>
        Assess your consumpion and identify inefficient energy use and areas to
        save.
      </p>
      <ul className="space-y-8 text-left py-8">
        <li className="flex gap-4">
          <Image
            src="/icons/flame.svg"
            width={15}
            height={15}
            objectFit="contain"
          />
          <p> Discount on fee for Origin customers</p>
        </li>
        <li className="flex gap-4">
          <Image
            src="/icons/flame.svg"
            width={15}
            height={15}
            objectFit="contain"
          />
          <p> Provided by an experienced auditor</p>
        </li>
        <li className="flex gap-4">
          <Image
            src="/icons/flame.svg"
            width={15}
            height={15}
            objectFit="contain"
          />
          <p> Guaranteed return on fee</p>
        </li>
        <li className="flex gap-4">
          <Image
            src="/icons/flame.svg"
            width={15}
            height={15}
            objectFit="contain"
          />
          <p> Business club exclusive services</p>
        </li>
      </ul>
      <div className="">
        <ButtonComponent type="border" text="Find out more" />
      </div>
    </div>
  );
}

export default ProductCard;
