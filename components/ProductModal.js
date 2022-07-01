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

const ProductModal = ({ product, closeModal, productModal }) => {
  const orient = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (orient) {
      closeModal();
    }
  }, [orient]);
  return (
    <Modal open={productModal} onClose={closeModal}>
      <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] p-5 rounded-lg ">
        <div className="flex justify-end" onClick={closeModal}>
          <button className="w-5 h-5">
            <Image
              src="/icons/close-icon.svg"
              width={500}
              height={500}
              alt="close-icon"
            />
          </button>
        </div>
        <div className="text-center space-y-2 mt-4">
          <p className="text-sm pb-4">You have chosen to participate with</p>
          <p className="font-medium subtitle">
            {product === "carbonOffset" && "Origin Go Zero 100% carbon offset"}
            {product === "greenPower" && `GreenPower ${greenPowerLevel}%`}
            {product === "solar" && "Solar"}
          </p>
        </div>
      </Box>
    </Modal>
  );
};

export default ProductModal;
