import React from "react";
import Header from "../header/Header";
import Trends from "./Trends";

class TrendsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Trends />
            </div>
        );
    }
}

export default TrendsPage;