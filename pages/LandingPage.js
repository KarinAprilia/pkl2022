import React, {component} from "reacht";

import Header from "parts/Header";
import Hero from "parts/Hero";

import LandingPage from "json/LandingPage.json";
export default class LandingPage extends Component {
    render() {
        return(
            <>
                <Header {...this.props}></Header>
            </>
        );
    }
}