import { Button } from "@mui/material";
import Image from "next/image";
import LeafRating from "../LeafRating";
import MoreDetailsComponent from "../MoreDetailsComponent";

const RecommentCard = () => {
  return (
    <div className="bg-white py-8 px-4 lg:p-12 rounded-lg space-y-8">
      <div className="text-center space-y-2">
        <p className="text-[20px] font-medium pb-4">
          You have chosen to pledge with
        </p>
        <LeafRating count={4} />
        <p className="font-medium subtitle">Origin Go Zero</p>
        <Button className="lg:hidden">Pledge details</Button>
      </div>
      <div className="space-y-1 mt-8 text-center">
        <p className="font-medium">How you reduce impact</p>
        <p>Through offsetting your energy use</p>
      </div>
      <MoreDetailsComponent text="More Details">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          <div className="space-y-2 mt-8 pr-5 lg:border-r text-center lg:text-left ">
            <p className="font-medium">Estimated cost</p>
            <h2 className="text-secondaryText">$0</h2>
            <p className="text-xs text-subTextColor">
              extra p/month on any <br />
              Origin Energy plan*
            </p>
          </div>
          <div className="space-y-2 mt-8 pl-5">
            <p className="font-medium  text-center lg:text-left">
              By pledging you’ll get access to
            </p>
            <ul className="space-y-4 text-left py-3">
              <li className="flex items-start gap-4">
                <Image
                  src="/icons/check-yellow.svg"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
                <p> Progress reporting on your impact</p>
              </li>
              <li className="flex items-start gap-4">
                <Image
                  src="/icons/check-yellow.svg"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
                <p> Amplify toolkit to communicate your impact</p>
              </li>
              <li className="flex items-start gap-4">
                <Image
                  src="/icons/check-yellow.svg"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
                <p> Dedicated Clean Ambition club support</p>
              </li>
            </ul>
          </div>
        </div>
      </MoreDetailsComponent>
      <p className="text-xs text-subTextColor text-center leading-6">
        *Once you submit your application, one of our Clean Ambition club
        representatives will get in contact to review your energy plan options.
      </p>
    </div>
  );
};

export default RecommentCard;
