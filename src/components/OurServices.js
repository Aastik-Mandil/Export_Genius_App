import { Grid, Typography } from "@mui/material";
import React from "react";
import Wrapper from "./Wrapper";
import { BsArrowRight } from "react-icons/bs";

const data = [
  { name: "Projects", value: "150+" },
  { name: "Clients", value: "80+" },
  { name: "Professionals", value: "200+" },
  { name: "Clients", value: "97%" },
];
const values = [
  { name: "Sustainability" },
  { name: "Small Business" },
  { name: "Forensic Services" },
  { name: "Risk Management" },
  { name: "CFO Advisory" },
];

function OurServices() {
  return (
    <div className="!py-[6%] !px-[10%]">
      <Grid container spacing={2}>
        {data?.map((d, ind) => (
          <Grid key={ind} item xs={6} md={3} align="center">
            <Typography className="text-primary text-[62px] font-extrabold">
              {d?.value}
            </Typography>

            <Typography className="text-[20px] font-medium">
              {d?.name}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} className="pt-[80px]">
        <Grid item xs={12} md={6}>
          <Wrapper>
            <Typography className="text-primary uppercase !text-[22px] !font-medium">
              Services
            </Typography>

            <Typography className="text-black uppercase !text-[45px] !font-extrabold">
              Our Service That Can Help Your Business
            </Typography>

            <Typography className="text-[#6E6E6E] !text-[17px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt
            </Typography>
          </Wrapper>
        </Grid>

        <Grid item xs={12} md={6} className="space-y-3">
          {values?.map((value, ind) => (
            <div key={ind} className="flex flex-col">
              <Typography className="text-primary text-[16px] font-medium">
                O{ind + 1}.
              </Typography>
              <div className="flex items-center justify-between pr-[20px] border-b-2 border-[#bcbcbc]">
                <Typography className="">{value?.name}</Typography>

                <BsArrowRight />
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default OurServices;
