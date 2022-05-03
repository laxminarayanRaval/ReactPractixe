import React from "react";

import Calendar from "./Calendar";
// import Card from "./Card";

import { styled } from "@mui/material/styles";
import { Button, Grid, Paper, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: '#021e3a',
  color:'#cec76e',
  borderRadius: 2,
  textAlign: "center",
}));
function ExpenseItem(props) {
  const [title, setTitle] = React.useState(props.title);
  const chngTitle = () => {
    setTitle(" Update " + title);
    console.log(title);
  };
  return (
    <Grid container columns={{ md: 12, xs: 12 }} marginBottom={'5px'} marginRight='5px' >
      <Grid item md={3} xs={6} padding={0}>
          <Calendar date={props.date}></Calendar>
      </Grid>
      <Grid item md={9} xs={6}>
        <Item>
          <Typography variant="h5" component="b">
            {title}
          </Typography>
          <Typography variant="body" component="div">
            {props.desc}
          </Typography>
          <Typography variant="body2" component="div">
            ${props.amount}
          </Typography>
          <Button variant="standard" onClick={chngTitle}>
            Click Me
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
}
export default ExpenseItem;
