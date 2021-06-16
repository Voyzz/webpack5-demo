// import HMR from './script/HMR'
// import Header from './script/Header';

import React,{Component} from 'react';

import Home from "./pages/Home";
import ReactDom from 'react-dom';

class App extends Component{
    render (){
        return (
            <>
                <Home/>
            </>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'))


