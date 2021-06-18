import "../scss/Lazy.scss";

import React,{ useContext } from "react";

import { ThemeContext } from "../context";

export default function ThemeButton(props) {
    const themeContext = useContext(ThemeContext);
    const {theme} = themeContext;

    for(let i=0;i<100000000;i++){
        if(i === 100000000-1){
            console.log('complete');
        }
    }

    return (
        <div style={{ background: theme.background, color: theme.foreground }} className='lazy_box'>
        Lazy import
        </div>
    )
}