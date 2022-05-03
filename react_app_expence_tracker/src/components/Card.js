import React from "react";
import { Grid } from "@mui/material";

function Card(props) {
  return <Grid container spacing={2}>{props.children}</Grid>;
}

export default Card;
