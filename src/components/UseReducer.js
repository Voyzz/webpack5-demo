import React,{ useContext, useReducer } from "react";

import { ThemeContext } from "../context";

export default function UseReducer(props) {
    const {theme} = useContext(ThemeContext);

    function reducer(state,action){
        switch (action.type){
            case 'SUB':
                return {count:state.count-1}
            case 'ADD':
                return {count:state.count+1}
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,{count:0})
    const themeStyle = { background: theme.background, color: theme.foreground,display:'inline' }

    return (
        <div>
            <button onClick={()=>{dispatch({type:'SUB'})}} style={themeStyle}>-</button>
            <div style={themeStyle}>{state.count}</div>
            <button onClick={()=>{dispatch({type:'ADD'})}} style={themeStyle}>+</button>
        </div>
    )
}