import React from 'react';
import './Comments.css';


const Comments = props => {
    return(
        <div className="comments">
            <div className="userAnd">
            <img src={props.thePosts.thumbnailUrl} 
            className="thumbnail"
            />
            <h5 className="username">{props.thePosts.username}</h5>
            </div>
            <img src={props.thePosts.imageUrl}
            />
            <div className="likesEtc">
            <p>{props.thePosts.likes} likes</p>
            <p>{props.thePosts.timestamp}</p>
            <p>{props.thePosts.comments[0].text}</p>
            </div>
            {/* <props.thePosts.map(thepost =>) */}
        </div>
    )
};

export default Comments;