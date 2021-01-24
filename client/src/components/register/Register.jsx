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
        alert(JSON.stringify({login: login, password: password}))

        fetch("http://localhost:8080/login-register/register", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login: login, password: password})
        })
            .then(res => res.json())
            .then(result => {
                alert("22 " + result.body)
                if (result.body === "OK") {
                    window.location.replace("http://localhost:3000/");
                    alert("33")
                } else {
                    alert("55")
                    alert(result.body)
                }
            })
            .catch(error => {
                alert("44")
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
                        <input type="submit" value="Register"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;