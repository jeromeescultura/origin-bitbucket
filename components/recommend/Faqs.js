import Image from "next/image";
import MoreDetailsComponent from "../MoreDetailsComponent";

const Faqs = () => {
  return (
    <div className="bg-white pb-4">
      <div className="max-w-[550px] py-8 px-4 lg:p-8  space-y-4 mx-auto">
        <p className="text-[24px] font-medium pb-4 text-primaryText text-center">
          FAQ’s
        </p>
        <MoreDetailsComponent text="Can I leave the program at any time?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
            molestias voluptate itaque saepe quibusdam rem, beatae accusamus ex
            dolores eius similique cumque suscipit!
          </p>
        </MoreDetailsComponent>
        <MoreDetailsComponent text="Can my household also join the program?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
            molestias voluptate itaque saepe quibusdam rem, beatae accusamus ex
            dolores eius similique cumque suscipit!
          </p>
        </MoreDetailsComponent>
        <MoreDetailsComponent text="How else can I get involved?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
            molestias voluptate itaque saepe quibusdam rem, beatae accusamus ex
            dolores eius similique cumque suscipit!
          </p>
        </MoreDetailsComponent>
      </div>
    </div>
  );
};

export default Faqs;
