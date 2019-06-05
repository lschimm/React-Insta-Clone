import React from 'react';

const PostPage = PostPage => LoginPage => class extends React.Component {
    constructor()  {
        super();
        this.state = {
            
        }
    }


    render() {
        if(localStorage.getItem("LoggedOut")){
            return <LoginPage />
            }else {
                return <PostPage />
            }
        }
    }

export default PostPage;