import React from 'react';
import './Posts.css';
import Comments from '../CommentSection/Comments';
import Coms from '../CommentSection/Coms/Coms';


const Posts = props => {
    return (
        <div className="someposts">
            {props.thePosts.map(post => (
                <div>
                    <Comments 
                    thePosts = {post}
                    key= {post.id}
                    />
                    <form className="comm-form">
                        <input
                            type= "Add a comment..." 
                            name= "com"
                            placeholder="Add a comment..."
                        />
                    </form>
                    </div>
                ))}
                {}
            </div>
        )
    }

export default Posts;

// {props.thePosts.comments.map(comm => (
//     <div></div>
// ))