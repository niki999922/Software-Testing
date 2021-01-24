import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        localStorage.removeItem('user');
        window.location.replace("http://localhost:3000/");
    }

    render() {
        let user = localStorage.getItem('user');

        if (user !== undefined && user !== null) {
            return (
                <div className="header-window">
                    <Link to={'/'} id="homeL" className="link link-text">Home</Link>
                    <Link to={'/trends'} id="trendsL" className="link link-text">Trends</Link>
                    <Link to={'/about'} id="aboutL" className="link link-text">About</Link>
                    <div onClick={this.handleLogout} id="logoutL" className="link link-text">Logout</div>
                </div>
            );
        } else {
            return (
                <div className="header-window">
                    <Link to={'/'} id="homeL" className="link link-text">Home</Link>
                    <Link to={'/register'} id="registerL" className="link link-text">Register</Link>
                    <Link to={'/login'} id="loginL" className="link link-text">Login</Link>
                    <Link to={'/about'} id="aboutL" className="link link-text">About</Link>
                </div>
            );
        }

    }
}

export default Header;