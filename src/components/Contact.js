import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import ContactIcon from "../assets/contact.png";
import VillageHub from "../assets/VillageHub.png";
import Climate from "../assets/Climate.png";
import Jaaims from "../assets/Jaaims.png";
import Castle from "../assets/Castle.png";

function Contact() {
  return (
    <div className="!p-[10%] space-y-10 bg-black">
      <div className="text-center">
        <Typography className="text-white !text-[64px] font-medium">
          We are open and accepting to all.
        </Typography>

        <Typography className="text-white !text-[64px] font-medium">
          Come work with us
        </Typography>
      </div>

      <Typography className="text-[20px] text-[#E0E0E0] text-center">
        Experts teach you everything from the comfort of your own home. Improve
        your career today by enrolling in excellent courses at affordable
        prices.
      </Typography>

      <div className="text-center">
        <Button
          variant="contained"
          className="uppercase !bg-primary !rounded-[30px] text-black !px-10"
        >
          Get Started
        </Button>
      </div>

      <Grid container spacing={2} className="inline lg:hidden">
        <Grid item xs={6} lg={3} className="flex items-center justify-center">
          <img src={VillageHub} alt="" className="inline lg:hidden" />
        </Grid>
        <Grid item xs={6} lg={3} className="flex items-center justify-center">
          <img src={Climate} alt="" className="inline lg:hidden" />
        </Grid>
        <Grid item xs={6} lg={3} className="flex items-center justify-center">
          <img src={Jaaims} alt="" className="inline lg:hidden" />
        </Grid>
        <Grid item xs={6} lg={3} className="flex items-center justify-center">
          <img src={Castle} alt="" className="inline lg:hidden" />
        </Grid>
      </Grid>

      <div>
        <img src={ContactIcon} alt="" className="hidden lg:inline w-[120px]" />

        <div className="flex flex-col space-y-8 lg:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2">
            <img
              src={ContactIcon}
              alt=""
              className="hidden lg:inline w-[100px]"
            />

            <Typography className="!text-[16px] text-[#e0e0e0] ">
              Turning Uncertainty Into Your Advantage
            </Typography>
          </div>

          <div className="flex flex-col">
            <Typography className="!text-[18px] text-white">
              Resources
            </Typography>

            {["Home", "Articles", "Video & Guides", "About Us"]?.map(
              (text, ind) => (
                <Typography key={ind} className="!text-[16px] text-[#e0e0e0]">
                  {text}
                </Typography>
              )
            )}
          </div>

          <div className="flex flex-col">
            <Typography className="!text-[18px] text-white">Careers</Typography>

            {["Olevera academy", "Privacy Policy", "Cookies"]?.map(
              (text, ind) => (
                <Typography key={ind} className="!text-[16px] text-[#e0e0e0]">
                  {text}
                </Typography>
              )
            )}
          </div>

          <div className="flex flex-col space-y-3">
            {[
              "Liability Limited By A Scheme Approved Under Professional Services Scheme",
              "Phone: (64) 09 973 4905 ",
              "CoEmail: ezibuyenquiries@olveraadvisors.comokies",
              "Website: olvera.co.nz/ezibuy",
            ]?.map((text, ind) => (
              <Typography
                key={ind}
                className="!text-[10px] font-semibold text-white"
              >
                {text}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
