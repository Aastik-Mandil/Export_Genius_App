import React from "react";
import { Paper, Typography } from "@mui/material";
import PlayIcon from "../assets/play.png";
import CustomCarousel from "./CustomCarousel";
import { BsImage, BsImageFill } from "react-icons/bs";

const Card = ({ title, Icon, name, time, active }) => {
  return (
    <Paper className={`m-[10px] p-[10%] space-y-6 ${active && "!bg-primary"}`}>
      <Typography
        className={`!text-[20px] ${active ? "text-white" : "text-[#5E84A1]"}`}
      >
        {title}
      </Typography>

      <div className="flex items-center space-x-6">
        {Icon && (
          <div
            className={`${active ? "bg-white" : "bg-primary"} p-4 rounded-full`}
          >
            <Icon
              className={`${
                active ? "text-primary" : "text-white"
              } !text-[30px]`}
            />
          </div>
        )}

        <div className="flex flex-col">
          <Typography
            className={`!text-[18px] font-bold ${
              active ? "!text-white" : "!text-[#1E5068]"
            }`}
          >
            {name}
          </Typography>

          <Typography
            className={`!text-[14px] ${
              active ? "!text-white" : "!text-[#C5E9FB]"
            }`}
          >
            {time}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

function Client() {
  return (
    <>
      <div className="w-[100%] h-[450px] relative clientDiv">
        <img
          src={PlayIcon}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-[100%] !px-[5%] !py-[5%]">
        <Typography className="text-center !text-[45px] font-bold">
          What our clients say about us
        </Typography>

        <div className="w-[100%]">
          <CustomCarousel>
            <Card
              title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              }
              Icon={BsImage}
              name={"Aaron Baby"}
              time={"2 November 2021"}
              active={true}
            />
            <Card
              title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              }
              Icon={BsImageFill}
              name={"Daren Axell"}
              time={"29 August 2021"}
              active={false}
            />
            <Card
              title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
              }
              Icon={BsImageFill}
              name={"Dion Channing"}
              time={"22 August 2021"}
              active={false}
            />
          </CustomCarousel>
        </div>
      </div>
    </>
  );
}

export default Client;
