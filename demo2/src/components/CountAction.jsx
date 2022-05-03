import React from 'react'
import { useDispatch } from 'react-redux'

const CountAction = ({ type, val }) => {

    const dispatch = useDispatch();

    return (
        <button onClick={() => { dispatch({ type }) }} title={type}>{val}</button>
    )
}

export default CountAction