import { createSlice } from "@reduxjs/toolkit";
// import moment from "moment";

const initialState: any = [];

const removedTaskSlice = createSlice({
  name: "removedTask",
  initialState,
  reducers: {
    add(state, action) {
      console.log("i'm ;(",action.payload);
      state.push(action.payload);
      console.log("i got it ;) :",state);
    },
  },
});

export const removedTaskActions = removedTaskSlice.actions;

export const removedTaskReducer = removedTaskSlice.reducer;
