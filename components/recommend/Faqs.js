import Image from "next/image";
import MoreDetailsComponent from "../MoreDetailsComponent";

const Faqs = () => {
  return (
    <div className="relative  bg-white rotate-180">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="#F5FCFE"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-[550px] px-4   space-y-4 mx-auto rotate-180">
          <p className="text-[24px] font-medium pb-4 text-primaryText text-center">
            FAQ’s
          </p>
          <MoreDetailsComponent text="Can I leave the program at any time?">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
              molestias voluptate itaque saepe quibusdam rem, beatae accusamus
              ex dolores eius similique cumque suscipit!
            </p>
          </MoreDetailsComponent>
          <MoreDetailsComponent text="Can my household also join the program?">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
              molestias voluptate itaque saepe quibusdam rem, beatae accusamus
              ex dolores eius similique cumque suscipit!
            </p>
          </MoreDetailsComponent>
          <MoreDetailsComponent text="How else can I get involved?">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit illo ratione magnam mollitia? Cupiditate, sunt velit
              molestias voluptate itaque saepe quibusdam rem, beatae accusamus
              ex dolores eius similique cumque suscipit!
            </p>
          </MoreDetailsComponent>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
