import React from "react";

import ExpenseForm from "./ExpenseForm";

import { Button, Grid, Typography } from "@mui/material";

function NewExpense(props) {
  const saveExpenseData = (data) => {
    const expenseData = { ...data, id: (Math.random() ** 10).toString() };
    console.log(expenseData);
    props.onExpense(expenseData);
  };

  const [isAdding, setIsAdding] = React.useState(false);

  return (
    <Grid container justifyContent={"space-around"}>
      <Typography variant="h5" component="b">
        Add New Expense Record
      </Typography>
      { !isAdding && (
        <Button variant="contained" onClick={() => {setIsAdding(true)}}>New Expense</Button>
      ) }
      { isAdding && (
        <ExpenseForm onCancel={() => {setIsAdding(false)}} onAddExpense={saveExpenseData} />
      )}
    </Grid>
  );
}

export default NewExpense;
