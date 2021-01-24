import * as React from "react";
import "./Register.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser() {
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value

        fetch("http://localhost:8080/login-register/register", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login: login, password: password})
        })
            .then(res => res.json())
            .then(result => {
                if (result.body === "OK") {
                    window.location.replace("http://localhost:3000/");
                } else {
                    alert(result.body)
                }
            })
            .catch(error => {
                console.log("ERROR");
                console.log(error.toString());
            })
    }

    render() {
        return (
            <div className="formaR">
                <form onSubmit={this.registerUser}>
                    <label htmlFor="login" className="form-element">
                        <div>Login or email</div>
                        <input type="email" id="login" pattern=".+@.+..+" placeholder="niceDeliver@yandex.ru" required/>
                    </label>
                    <label htmlFor="password" className="form-element">
                        <div>Password</div>
                        <input type="password" id="password" required/>
                    </label>
                    <label htmlFor="bday" className="form-element">
                        <div>Birthday</div>
                        <input type="date" name="bday" id="bday"/>
                    </label>
                    <div className="submit-style">
                        <input type="submit" id="submit-reg" value="Register"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;