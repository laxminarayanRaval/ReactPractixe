import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  isDone: false,
};

const todoTaskSlice = createSlice({
  name: "todoTask",
  initialState,
  reducers: {
    add(state) {},
    done(state) {},
    remove(state) {},
  },
});

export const todoTaskActions = todoTaskSlice.actions;

export const todoTaskReducer = todoTaskSlice.reducer;
