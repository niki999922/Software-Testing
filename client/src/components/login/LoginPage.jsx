import React from "react";
import Header from "../header/Header";
import Login from "./Login";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Login />
            </div>
        );
    }
}

export default LoginPage;