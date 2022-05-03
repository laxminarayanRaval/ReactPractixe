import React from "react";
import moment from "moment";

import { Button, TextField } from "@mui/material";

function ExpenseForm(props) {
  const [expense, setExpense] = React.useState({
    title: "",
    amount: "",
    date: moment().format('yyyy-MM-D'),
  });


  return (
    <div>
      <TextField label="Expense Title" required autoComplete={'off'} helperText="A Rememberable Title for Expense"
        onChange={e => { setExpense((prevState) => ({ ...prevState, title: e.target.value }) ) } }       
      />
      <TextField type="number" label="Expense Amount" value={expense.amount} autoComplete={'off'} required helperText="Amount of Expense"
        onChange={e => { setExpense((prevState) => ({ ...prevState, amount: e.target.value }) ) } }
      />
      <TextField label='Description' required autoComplete={'off'} helperText="A Details regarding Expense"
      onChange={e => { setExpense((prevState) => ({ ...prevState, desc: e.target.value }) ) } }
      />
      <TextField type="date" label="Expense Date" value={expense.date} required helperText="The Date on Expense Made"
        onChange={e => { setExpense((prevState) => ({ ...prevState, date: e.target.value }) ) } }
      /><br />
      <Button variant="contained" color="error" onClick={props.onCancel} >Cancel</Button>
      <Button type="submit" variant="contained" color="success"
        onClick={(e) => {
          e.preventDefault();
          console.log(expense);
          props.onAddExpense({...expense, date: moment(expense.date)});
        }} > Add Expense </Button>
    </div>
  );
}

export default ExpenseForm;
