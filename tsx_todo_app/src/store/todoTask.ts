import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { removedTaskActions } from "./removedTasks";
import moment from "moment";
// import store from ".";

const initialState: any = [];

export const removeTask: any = createAsyncThunk(
  "todoTask/removeTask",
  async (obj, { getState }) => {
    console.log("obj:", obj, "getState:", getState);
    // let removedTask = state.splice(action.payload, 1);
  }
);

const todoTaskSlice = createSlice({
  name: "todoTask",
  initialState,
  reducers: {
    add(state, action) {
      state.push({
        // id: state.length + 1,
        text: action.payload,
        isDone: false,
        addTime: moment().format("HH:mm DD-MM-YYYY"),
      });
    },
    done(state, action) {
      if(!state[action.payload].isDone) state[action.payload].doneTime = moment().format("HH:mm DD-MM-YYYY");
      state[action.payload].isDone = !state[action.payload].isDone;
    },
    remove(state, action) {
      let removedTask = state.splice(action.payload, 1);
      // const dispatch = useDispatch();
      // store.dispatch(removedTaskActions.add(removedTask));
      // console.log({...removedTask[action.payload]});
    },
  },
  extraReducers: (builder) => {
    // [removeTask.pending]: (state, action) => {},
    builder.addCase(removeTask.fulfilled, (state, action) => {
      state.indexOf(action.payload);
    });
    // [removeTask.fulfilled]: (state, action) => {},
    // [removeTask.rejected]: (state, action) => {},
  },
});

export const todoTaskActions = todoTaskSlice.actions;

export const todoTaskReducer = todoTaskSlice.reducer;
