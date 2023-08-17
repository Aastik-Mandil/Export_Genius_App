import { Typography } from "@mui/material";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-[10px] px-[10%] bg-black border-t-2 border-[#7C7C7C] space-y-3">
      <Typography className="!text-[14px] text-[#e0e0e0]">
        ©2023 olevra advisors. All rights reserved
      </Typography>

      <div className="flex items-center justify-between space-x-4">
        <BsFacebook className="text-white" />
        <AiOutlineInstagram className="text-white" />
        <BsTwitter className="text-white" />
        <BsLinkedin className="text-white" />
      </div>
    </div>
  );
}

export default Footer;
