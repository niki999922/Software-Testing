import React from "react";
import Header from "../header/Header";
import Register from "./Register";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Register />
            </div>
        );
    }
}

export default RegisterPage;