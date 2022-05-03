import React from "react";

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

function ExpenseFilter(props) {
  return (
    <Grid>
      <Typography variant="h5" component="b">
        Expense Filter
      </Typography>
      <FormControl sx={{ minWidth: 100, maxHeight: 'auto' }}>
        <InputLabel id="filter-select-label">{props.mode}</InputLabel>
        <Select color="secondary" labelId="filter-select-label" id="filter-select" label={props.mode} defaultValue={props.selected}
          onChange={e => { props.onFilter(e.target.value); }} >
          <MenuItem key={'no-filter'} value={false}>{'no-filter'}</MenuItem>
          {props.data.map((e) => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default ExpenseFilter;
