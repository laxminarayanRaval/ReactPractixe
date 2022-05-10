import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState: any = [];

const todoTaskSlice = createSlice({
  name: "todoTask",
  initialState,
  reducers: {
    add(state, action) {
      state.push({
        id: state.length + 1,
        text: action.payload,
        isDone: false,
        addTime: moment().format('HH:mm DD-MM-YYYY'),
      });
    },
    done(state, action) {
      state[action.payload - 1].isDone = true;
      state[action.payload - 1].doneTime = moment().format('HH:mm DD-MM-YYYY');
    },
    remove(state) {},
  },
});

export const todoTaskActions = todoTaskSlice.actions;

export const todoTaskReducer = todoTaskSlice.reducer;
