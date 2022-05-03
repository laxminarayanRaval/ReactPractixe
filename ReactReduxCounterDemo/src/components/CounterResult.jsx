import React from 'react'
import { useSelector } from 'react-redux'

const CounterResult = () => {

    const counter = useSelector(state => state.counter)

    return (
        <h1 className="count">{counter}</h1>
    )
}

export default CounterResult