import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CarReservation from "./components/CarReservation";
import DopYslugi from "./components/DopYslugi";
import OurAdvantages from "./components/OurAdvantages";

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;





class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <NavBar/>

                    <Switch>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/CarReservation' component={CarReservation} />
                        <Route exact path='/DopYslugi' component={DopYslugi} />
                        <Route exact path='/OurAdvantages' component={OurAdvantages} />

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
