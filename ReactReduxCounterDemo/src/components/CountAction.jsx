import React from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const CountAction = ({ type, val, amount = 1 }) => {
    const actions = {
        increment: counterActions.increment(),
        decrement: counterActions.decrement(),
        reset: counterActions.reset(),
        stop: counterActions.stop(),
        toggle: counterActions.toggle(),
        increseby: counterActions.increseby(amount),
    };

    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                dispatch(actions[type]); // dispatch({ type, amount });
            }}
            title={type}
        >
            {val}
        </button>
    );
};

export default CountAction;
