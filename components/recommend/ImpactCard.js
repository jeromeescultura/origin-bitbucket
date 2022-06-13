import Image from "next/image";
import MoreDetailsComponent from "../MoreDetailsComponent";

const ImpactCard = ({ industry }) => {
  return (
    <div className="bg-white py-8 px-4 lg:p-8 rounded-xl space-y-8 max-w-[510px] mx-auto">
      <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center">
        Your impact
      </p>
      <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto">
            <Image
              src="/icons/trees.svg"
              width={100}
              height={100}
              objectFit="contain"
              alt="trees"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-greenText font-bold">[XX,XXX]</h2>
            <p className="text-sm text-greenText">trees planted</p>
          </div>
        </div>

        <p className="text-subTextColor mt-6 text-center lg:text-left col-span-2">
          Average businesses{" "}
          {industry === "Other" ? (
            ""
          ) : (
            <span>
              in <span className="font-medium">{industry}</span>
            </span>
          )}{" "}
          will have the impact of planting and growing [XX,XXX] tree seedlings
          for 10 years, if they offset all their carbon emissions for a year.
        </p>
      </div>
      <MoreDetailsComponent text="How carbon offsets work">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          molestiae possimus, mollitia distinctio, unde non modi quas asperiores
          ratione dolore corrupti fugit culpa reiciendis error omnis in ea
          voluptates ipsa?
        </p>
      </MoreDetailsComponent>
    </div>
  );
};

export default ImpactCard;
