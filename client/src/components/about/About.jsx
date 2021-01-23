import * as React from "react";
import "./About.css"

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about">
                <div className="home-p-h">This page was developed by a novice front-end developer who does not understand at all in react and building projects for them. If you thought that building your project is hell, then just build a project with js and ts and try to add something. It would be better if it was Аnt.</div>
                <div className="home-p-k">But behold this creation</div>
            </div>
        );
    }
}

export default About;