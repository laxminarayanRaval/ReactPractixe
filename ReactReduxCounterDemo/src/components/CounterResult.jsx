import React from 'react'
import { useSelector } from 'react-redux'
import CountAction from './CountAction'



const CounterResult = () => {

    const counter = useSelector(state => state.counter)
    const hide = useSelector(state => state.isHidden)

    return (
        <>
            <p className="App-intro">Total Counts</p>
            {!hide && <h1 className="count">{counter}</h1>}
            <CountAction val='show hide' type='toggle' />
        </>
    )
}

export default CounterResult