import React from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    type:'light'
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    type:'dark'
  }
};

const ThemeContext = React.createContext({
    theme:themes.dark,
    changeTheme:()=>{}
})

export {
    themes,
    ThemeContext
}