import React from 'react';
import Login from './Login';
import PostPage from './PostPage';

const withAuthenticate = PostPage => LoginPage => 
class extends React.Component {
    constructor() {
        super();
        this.state = {
            LoggedIn: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem("LoggedIn")) {
            this.setState({
                LoggedIn: true
            });
        } else {
            this.setState({
                LoggedIn: false
            })
        }
    }
    render() {
        if (this.state.LoggedIn) {
            return <PostPage />
        } else {
            return <LoginPage />
        }
    }
}

export default withAuthenticate;