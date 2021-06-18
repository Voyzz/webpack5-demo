import React,{ forwardRef, useContext } from "react";

import { ThemeContext } from "../context";

const RefTrans = forwardRef((props,ref)=>{
    const themeContext = useContext(ThemeContext);
    const {theme} = themeContext;

    return (
        <div style={{ background: theme.background, color: theme.foreground,display:'inline' }} ref={ref}>Ref Transmit</div>
    )
})

export default RefTrans