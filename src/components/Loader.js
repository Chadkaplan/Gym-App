import React from "react";
import { Stack } from "@mui/material";
import { SpinnerCircular } from "spinners-react";

// https://www.npmjs.com/package/spinners-react

const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <SpinnerCircular color="red"/>
  </Stack>
);

export default Loader;
