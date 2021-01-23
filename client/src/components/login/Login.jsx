import * as React from "react";
import "./Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="forma">
                <form action="#" method="post">
                    <label htmlFor="email" className="form-element">
                        <div>Login</div>
                        <input type="email" id="email" pattern=".+@.+..+" size="30" placeholder="niceDeliver@yandex.ru" required/>
                    </label>
                    <label htmlFor="password" className="form-element">
                        <div>Password</div>
                        <input type="password" id="password" required/>
                    </label>
                    <div className="submit-style">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;