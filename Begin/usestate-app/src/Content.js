import {memo , useReducer, useEffect, useRef ,useState } from "react"


// useState 
// 1. Init state : 0 
// 2. Action  : Up - setCount(count + 1) ..

// useReducer
// 1. Init state : 0 
// 2. Action  : Up - setCount(count + 1) ..
// 3. Reducer
// 4. Dispatch

// 1. Init state 
const inistate =  0 
// 2. Action  
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// 3. Reducer
const reducer = (state , action )=>{
    switch(action){
        case DOWN_ACTION:
            return state - 1
        case UP_ACTION:
            return state + 1
        default:
            throw new Error("not a action ")  
    }
}

function Content(){
    const [count , Dispatch] = useReducer(reducer , inistate)


    return (
        <div style={{ padding : '0 20px'}}>
            <h1>{count}</h1>
            <button onClick={() => Dispatch(DOWN_ACTION)} >Down</button>
            <button onClick={() => Dispatch(UP_ACTION)} >Up</button>
        </div>
    )
}

export default memo(Content)