import React from "react";
import { Button, Typography } from "@mui/material";

function BannerBox() {
  return (
    <div className="flex flex-col pt-[30%] pl-[10%]  !h-[95vh] bannerDiv object-cover relative">
      <div className="absolute top-1/2 left-1/5">
        <Typography className="!text-[72px] font-medium text-white max-w-[500px]">
          Start your story with Olvera
        </Typography>

        <div className="mb-[10px]">
          <Button
            variant="contained"
            className="uppercase !bg-primary !rounded-[30px] text-black !px-10"
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerBox;
