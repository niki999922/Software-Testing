import * as React from "react";
import "./Home.css"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="home-p-h">Welcome to homepage</div>
                <div className="home-p-m">In this site you can get all actual trends in the world!!!</div>
                <div className="home-p-k">Enjoy!!!</div>
            </div>
        );
    }
}

export default Home;