import { configureStore } from "@reduxjs/toolkit";
import { removedTaskReducer } from "./removedTasks";
import { todoTaskReducer } from "./todoTask";

const store = configureStore({
  reducer: {
    todoTask: todoTaskReducer,
    removedTask: removedTaskReducer,
  },
});

export default store;
