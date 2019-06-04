import React from 'react';
import './Comments.css';


const Comments = props => {
    return(
        <div className="comments">
            <img src={props.thePosts.thumbnailUrl} 
            className="thumbnail" />
            <p>{props.thePosts.username}</p>
            <img src={props.thePosts.imageUrl} />
            <p>{props.thePosts.likes}</p>
            <p>{props.thePosts.timestamp}</p>
            {/* <props.thePosts.map(thepost =>) */}
        </div>
    )
};

export default Comments;