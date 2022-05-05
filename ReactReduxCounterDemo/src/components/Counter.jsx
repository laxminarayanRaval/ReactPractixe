import React from 'react'

import CountAction from "./CountAction";
import CounterResult from "./CounterResult";

const Counter = () => {
    return (
        <>
            <div className="App-header">
                <h2>react-redux counter app</h2>
                <CountAction val='+' type='increment' />
                <CountAction val='-' type='decrement' />
                <br />
                <CountAction val='Reset' type='reset' />
                <CountAction val='Pause' type='stop' />
                <br />
                <CountAction val='5+' amount={5} type='increseby' />
            </div>
            <CounterResult />
        </>
    )
}

export default Counter