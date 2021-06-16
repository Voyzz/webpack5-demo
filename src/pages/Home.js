import React from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export default function Home(props) {
    const ThemeContext = React.createContext(themes.light)

    return (
        <ThemeContext.Provider value={themes.dark}>
            
        </ThemeContext.Provider>
        // <div style={{height:'100px',width:'100vw',backgroundColor:'blue'}}></div>
    )
}