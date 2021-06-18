import React,{ useContext } from "react";

import { ThemeContext } from "../context";

export default function ThemeButton(props) {
    const themeContext = useContext(ThemeContext);
    const {theme,changeTheme} = themeContext;

    return (
        <button style={{ background: theme.background, color: theme.foreground }} onClick={changeTheme}>
        I am styled by theme context!
        </button>
    )
}