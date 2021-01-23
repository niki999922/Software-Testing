import React from "react";
import Header from "../header/Header";
import "./About.css"
import About from "./About";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <About />
            </div>
        );
    }
}

export default AboutPage;