import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Cadastro from "./Routes/Cadastro";
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from "react-toasts";

class App extends Component {

    static ToastsStore = ToastsStore;

    render() {
        return (
            <div>
                <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={App.ToastsStore}/>

                <Router>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/cadastro/:especialidade/:profissional" component={Cadastro}/>
                    </div>
                </Router>
            </div>


        );
    }
}

export default App;