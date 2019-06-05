import React from 'react';

const PostPage = PostPage => LoginPage => class extends React.Component {
    render() {
        if(localStorage.getItem("LoggedOut")){
            return <LoginPage />
            }else {
                return <PostPage />
            }
        }
    }

export default PostPage;