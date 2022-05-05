import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isHidden: false, isEditable: true };

/*

// import { createStore } from "redux";
// Reducer for Redux
const counterReducer = (state = initialState, action) => {
  if (!state.isEditable && action.type !== "reset" && action.type !== "toggle")
    return state;
  switch (action.type) {
    case "reset":
      return {
        ...state,
        isEditable: true,
        counter: 0,
      };
    case "stop":
      return {
        ...state,
        isEditable: false,
      };
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "increseby":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "toggle":
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return state;
  }
};

// const store = createStore(counterReducer); // createStore for creating store for Redux

*/

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset(state) {
      state.counter = 0;
      state.isEditable = true;
    },
    stop(state) {
      state.isEditable = !state.isEditable;
    },
    increseby(state, action) {
      state.counter += action.payload;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

export const counterActions = countSlice.actions;

export const counterReducer = countSlice.reducer;
