import React from 'react';

const withAuthenticate = PostPage => LoginPage => 
class extends React.Component {
    constructor() {
        super();
        this.state = {
            LoggedIn: false
        }
    }

    componentDidMount() {
        this.setState ({
            LoggedIn: true
        })
    }
    render() {
        if(localStorage.getItem("LoggedIn")) {
            return <PostPage />;
        } else {
            return <LoginPage />;
        }
    }
}

export defualt withAuthenticate;