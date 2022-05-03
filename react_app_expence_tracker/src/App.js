import React, { Component } from "react";
import moment from "moment";

import { Grid } from "@mui/material";

import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import Chart from "./components/Chart";

// import './App.css';
const DUMMY_EXPENSE_LIST = [
  {
    title: "Games of Thrones",
    amount: 5000,
    date: moment('2000-2-25'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "sdf r we ones",
    amount: 5000,
    date: moment('2010-8-5'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "wer ygfjrones",
    amount: 5000,
    date: moment('2012-12-15'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "Games of Thrones",
    amount: 5000,
    date: moment('2000-2-25'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "sdf r we ones",
    amount: 5000,
    date: moment('2015-8-5'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "wer ygfjrones",
    amount: 5000,
    date: moment('2017-12-15'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "Games of Thrones",
    amount: 5000,
    date: moment('2022-2-25'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "sdf r we ones",
    amount: 5000,
    date: moment('2022-8-5'),
    desc: "lorem ipsum Dummy Text",
  },
  {
    title: "wer ygfjrones",
    amount: 5000,
    date: moment('2022-12-15'),
    desc: "lorem ipsum Dummy Text",
  },
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      expenseList: DUMMY_EXPENSE_LIST,
      filter: {mode: '', data: ''},
    }
  }
  render() {
    const years = this.state.expenseList.map(e => e.date.format('YYYY')).filter((v, i, a) => a.indexOf(v) === i).sort();
    const getNewExpense = (data) => {
      this.setState(prevState => ({...prevState, expenseList: [ ...this.state.expenseList,data]}));
    };
    const filterHandle = (data) => {
      this.setState((prevState) => ({ ...prevState, filter: {data} }) );
      console.log("state: ", this.state);
    }; 

    const filteredData = this.state.expenseList.filter(e => !this.state.filter.data || e.date.format('YYYY') === this.state.filter.data);
    console.log("Filtered Data", filteredData);
    return (
      <Grid container m={1} columns={{ md: 12, xs: 6 }}>
        <h1>Expense Tracker.</h1>
        <p>Everything Works Great.</p>
        <Grid sx={{backgroundColor: '#fa2', border: '1rem double #042', borderRadius: 2, padding: 2}} flex flexDirection={"row"} flexWrap={"nowrap"} alignItems={"center"} container spacing={2} mb={5}>
          <NewExpense onExpense={getNewExpense} />
          <ExpenseFilter mode='year' data={years} selected={''} onFilter={filterHandle} />
        </Grid>
        {this.state.filter.data && (
          <Chart width={800} height={400} data={filteredData.map(e => ({date: e.date.format('MMMM'), amount: e.amount}))} label={'Year: '+filteredData[0].date.format('YYYY')} backgroundColor='#1f2937' />
        )}
        { filteredData.map((e, i) => 
          <Grid key={i} item md={4} xs={6}>
            <ExpenseItem key={i} title={e.title} desc={e.desc} amount={e.amount} date={e.date} />
          </Grid>
        )}
      </Grid>
    );
  }
}

export default App;
