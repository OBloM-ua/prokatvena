import React, {Component} from 'react';
import './App.css';
import AppHeader from "./components/AppHeader";
import Body from "./components/Body";
import Button from "./components/Button";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <Body/>
            </div>
        );
    }
}

export default App;
