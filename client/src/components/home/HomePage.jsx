import React from "react";
import Header from "../header/Header";
import Home from "./Home";
import "./Home.css"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default HomePage;