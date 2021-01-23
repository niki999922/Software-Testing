import * as React from "react";
import "./Register.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="formaR">
                <form action="#" method="post">
                    <label htmlFor="email" className="form-element">
                        <div>Login or email</div>
                        <input type="email" id="email" pattern=".+@.+..+" size="30" placeholder="niceDeliver@yandex.ru" required/>
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