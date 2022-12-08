import React from "react";
import {BrowserRounter as Rounter, Route} from 'react-router-don'

import "assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";


function App(){
    return <div className="App">
        <Router>
            <route path="/" component={LandingPage}></route>
        </Router>
    </div>;
}

export default App;