import React from "react";
import Header from "../components/Header";
import { Typography } from "@mui/material";
const bg = {
  color: " #12100e",
};
export const Shop = () => {
  return (
    <div>
      <Header />
      <Typography variant="h1" sx={ bg }>
        i am shop
      </Typography>
    </div>
  );
};
