// import HMR from './script/HMR'
// import Header from './script/Header';
import "@babel/polyfill";

import React,{Component} from 'react';

// import Babel from './script/Babel';
import Fonts from './script/Fonts';
import ReactDom from 'react-dom';

class App extends Component{
    render (){
        return (
            <Fonts/>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'))

// new Header();
// new Fonts();
// new HMR();
// new Babel();

