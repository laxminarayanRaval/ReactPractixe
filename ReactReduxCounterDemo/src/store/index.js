import { createStore } from "redux";

const initialState = { counter: 0, isHidden: false };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        isHidden: false,
      };

    case "decrement":
      return {
        counter: state.counter - 1,
        isHidden: false,
      };

    case "toggle":
      return {
        isHidden: !state.isHidden,
        counter: state.counter,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
