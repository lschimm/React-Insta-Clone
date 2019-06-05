import React from 'react';

class Login extends React.Component {
    toggle = event => {
        event.preventDefault();
        if (localStorage.getItem("loggedIn")) {
            localStorage.removeItem("LoggedIn");
        } else {
            localStorage.setItem("loggedIn", true)
        }
    };

    render() {
        return (
            <div>
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="text" />
                <button onClick={this.toggle}>Login</button>
            </div>
        )
    }
}

export default Login;