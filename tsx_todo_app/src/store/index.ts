import { configureStore } from "@reduxjs/toolkit";
import { todoTaskReducer } from "./todoTask";

const store = configureStore({
  reducer: {
    todoTask: todoTaskReducer,
  },
});

export default store;
