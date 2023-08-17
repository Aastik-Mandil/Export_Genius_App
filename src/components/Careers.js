import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import CareerIcon from "../assets/Careers.png";

const Careers = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} className="!py-[11%]">
        <Wrapper>
          <div className="flex flex-col space-y-3 !py-[10px] !px-[8px] md:!py-[40px] md:!px-[20px]">
            <Typography className="text-primary uppercase text-[22px] font-medium">
              Careers
            </Typography>

            <Typography className="text-[53px] font-medium">
              Careers at Olvera
            </Typography>

            <Typography className="text-[20px]">
              Navigate change, develop on-demand skills. Your turnaround journey
              starts with Olvera.
            </Typography>

            <div>
              <Button
                variant="contained"
                className="!bg-primary text-[16px] font-medium !rounded-[30px] text-black !px-10"
              >
                Search Carrers
              </Button>
            </div>
          </div>
        </Wrapper>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img
          src={CareerIcon}
          alt=""
          className="w-[100%] h-[100%] object-fill"
        />
      </Grid>
    </Grid>
  );
};

export default Careers;
