import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-window">
                <Link to={'/'} id="homeL" className="link link-text">Home</Link>
                <Link to={'/trends'} id="trendsL" className="link link-text">Trends</Link>
                <Link to={'/register'} id="registerL" className="link link-text">Register</Link>
                <Link to={'/login'} id="loginL" className="link link-text">Login</Link>
                <Link to={'/about'} id="aboutL" className="link link-text">About</Link>
            </div>
        );
    }
}

export default Header;