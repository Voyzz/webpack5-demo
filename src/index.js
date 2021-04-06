// import Babel from './script/Babel';
// import Fonts from './script/Fonts';
// import HMR from './script/HMR'
// import Header from './script/Header';
import "@babel/polyfill";

import React,{Component} from 'react';

import ReactDom from 'react-dom';

class App extends Component{
    render (){
        return (
            <div>hello world</div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'))

// new Header();
// new Fonts();
// new HMR();
// new Babel();

