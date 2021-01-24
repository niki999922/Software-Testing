import * as React from "react";
import "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value

        fetch("http://localhost:8080/login-register/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login: login, password: password})
        })
            .then(res => res.json())
            .then(result => {
                if (result.body === "OK") {
                    localStorage.setItem('user', login)
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
            <div className="forma">
                <form onSubmit={this.loginUser}>
                    <label htmlFor="login" className="form-element">
                        <div>Login</div>
                        <input type="email" id="login" pattern=".+@.+..+" placeholder="niceDeliver@yandex.ru"
                               required/>
                    </label>
                    <label htmlFor="password" className="form-element">
                        <div>Password</div>
                        <input type="password" id="password" required/>
                    </label>
                    <div className="submit-style">
                        <input type="submit" id="submit-log" value="Login"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;