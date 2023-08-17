import React from "react";
import { Grid, Typography } from "@mui/material";
import Hawards from "../assets/Harwards.png";
import CommonWealth from "../assets/CommonWealth.png";
import Ellergy from "../assets/Ellergy.png";
import GingerAndSmart from "../assets/GingerAndSmart.png";

const data = [
  { name: "Hawards", logo: Hawards },
  { name: "CommonWealth", logo: CommonWealth },
  { name: "Ellergy", logo: Ellergy },
  { name: "GingerAndSmart", logo: GingerAndSmart },
];

function About() {
  return (
    <div className="bg-primary w-[100%] !py-[10%] !px-[10%] flex flex-col">
      <Typography className="text-white text-left !text-[30px]">
        About Olvera
      </Typography>

      <Typography className="text-white text-right text-[18px] md:w-[40%] md:!ml-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Grid container spacing={2} className="items-center">
        {data?.map((d, ind) => (
          <Grid key={ind} item xs={6} md={3}>
            <div>
              <img src={d?.logo} alt={d?.name} className="w-[120px]" />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default About;
