import React,{Profiler, Suspense, lazy, useEffect, useRef, useState} from 'react';
import { ThemeContext, themes } from "../context";

import RefTrans from "../components/RefTrans";
import ThemeButton from "../components/themeButton";
import UseReducer from "../components/UseReducer";

const Lazy = lazy(()=>import('../components/Lazy'))

export default function Home(props) {
    const [theme, settheme] = useState(themes.light)
    const ref_thans = useRef(null)

    function changeTheme() {
        console.log(ref_thans.current);
        settheme(theme.type==='dark' ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            <Profiler id='Profiler' onRender={(...props)=>{
                console.log(props);
            }}>
            <RefTrans ref={ref_thans}/>
            </Profiler>
            <Suspense fallback={<div>Loading....</div>}>
                <Lazy/>
            </Suspense>
            <ThemeButton/>
            <UseReducer/>
        </ThemeContext.Provider>
    )
}