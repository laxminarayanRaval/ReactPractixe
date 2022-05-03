import React from "react";
import { Grid, Typography } from "@mui/material";

function Calendar(props) {
  // console.log(props.date.format('DD'))
  const month = props.date.format('MMMM');
  const day = props.date.format('DD');
  const year = props.date.format('yyyy');
  return (
    <Grid sx={{backgroundColor: '#0a1c20', color:'#c9c599', textAlign: "center", borderRadius: 2,}}>
      <Typography variant="p" component="b">
        {month}
      </Typography>
      <Typography variant="subtitle2" component="p">
        {year}
      </Typography>
      <Typography variant="h4" component="h4">
        {day}
      </Typography>
    </Grid>
  );
}

export default Calendar;
