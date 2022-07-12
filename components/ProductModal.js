import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Modal,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";

const ProductModal = ({ product, closeModal, open }) => {
  const orient = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (orient) {
      closeModal();
    }
  }, [orient]);
  return (
    <Modal open={open} onClose={closeModal}>
      <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] p-5 rounded-lg ">
        <div className="space-y-2">
          <div className="flex items-start mb-6 justify-between">
            <div>
              <p className="text-lg font-medium">
                {product === "Solar" && "Solar"}
                {product === "GreenPower" && "GreenPower for electricity"}
                {product === "Origin Go Zero" &&
                  "Origin Go Zero – 100% Carbon Offset"}
                {product === "Decarbonisation Interview" && "Help us help you"}
              </p>
            </div>
            <div onClick={closeModal}>
              <button className="w-5 h-5 flex items-center justify-center">
                <Image
                  src="/icons/close-icon.svg"
                  width={500}
                  height={500}
                  alt="close-icon"
                />
              </button>
            </div>
          </div>

          {product === "Solar" && (
            <div className="font-light subtitle text-sm">
              <p>
                Solar uses clean, renewable energy from the sun, making you less
                reliant on traditional sources of electricity such as fossil
                fuels.
              </p>{" "}
              <br />
              <p>
                Going solar can help your business reduce daytime electricity
                costs and your bottom line.
              </p>
              <br />
              <p>
                Promoting your solar energy credentials may also assist your
                appeal to customers and suppliers – those looking to support
                businesses committed to sustainable energy practices.
              </p>
              <br />
              <p>By adding solar you’ll be:</p>
              <br />
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>Using self generated renewable energy</li>
                <li>Reducing carbon emissions</li>
                <li>Helping contribute to a healthier environment</li>
              </ul>
            </div>
          )}
          {product === "Origin Go Zero" && (
            <div className="font-light subtitle text-sm">
              <p>
                Our Origin Go Zero add-on is 100% carbon neutral and certified
                by Climate Active – a partnership between the Australian
                Government and Australian businesses to drive voluntary climate
                action.
              </p>
              <br />
              <p>
                Add Origin Go Zero to your electricity plan and we’ll offset the
                amount of greenhouse emissions created by the amount of
                electricity you use.
              </p>
              <br />
              <p>
                Origin will support a number of credible offset options sourced
                locally and internationally.
              </p>
              <br />
              <p>By adding Origin Go Zero you’ll be:</p>
              <br />

              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>Offsetting your carbon emissions</li>
                <li>Helping contribute to a healthier environment</li>
              </ul>
            </div>
          )}
          {product === "GreenPower" && (
            <div className="font-light subtitle text-sm">
              <p>
                GreenPower is a government-accredited program. When you add
                GreenPower to your electricity plan, the equivalent electricity
                consumed will be added to the energy grid using renewable
                sources.
              </p>
              <br />
              <p>
                The best part is, you can feel confident knowing your money is
                supporting government-accredited renewable projects in
                Australia.
              </p>
              <br />

              <br />
              <p>By adding GreenPower you’ll be:</p>
              <br />
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>
                  Supporting Australian renewables to reduce carbon emissions
                </li>
                <li>Helping contribute to a healthier environment</li>
              </ul>
            </div>
          )}
          {product === "Decarbonisation Interview" && (
            <div className="font-light subtitle text-sm">
              <p>
                The Decarbonisation Interview is an opportunity for Origin to
                understand your business&apos; energy needs and sustainability
                goals so that we can develop future services tailored to your
                business.
              </p>
              <br />
              <p>
                Express interest here, and one of our Business Club Specialists
                will reach out to provide further information. They will discuss
                the research approach and timing of the interview as well as
                anything else you&apos;d like to know before agreeing to
                proceed.
              </p>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default ProductModal;
