import { IconButton, Typography } from "@mui/material";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function Guide() {
  return (
    <div className="flex flex-col !p-[2%] md:!p-[8%] h-[100%] guideDiv object-cover">
      <Typography className="!text-[30px] text-white">Olvera Guides</Typography>

      <div className="flex items-center sapce-x-2 ml-auto !pt-[60px]">
        <Typography className="text-white !text-[21px]">View More</Typography>

        <IconButton size="large">
          <BsArrowRightCircle className="text-white" />
        </IconButton>
      </div>

      <Typography className="!text-[17px] text-white max-w-[350px] !pt-[40px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  );
}

export default Guide;
