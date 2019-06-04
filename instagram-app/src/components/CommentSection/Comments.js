import React from 'react';
import './Comments.css';


const Comments = props => {
    return(
        <div className="comments">
            <div className="userAnd">
                <img src={props.thePosts.thumbnailUrl} 
                className="thumbnail" />
                <h5 className="username">{props.thePosts.username}</h5>
            </div>
            <img src={props.thePosts.imageUrl} />
            
            <div className="likes">
                <button className="button">like</button>
                <button className="button">cmnt</button>
                <p>{props.thePosts.likes} likes</p>
            </div>
            <div className="user">
                <p>{props.thePosts.comments[0].username}
                {props.thePosts.comments[0].text}</p>
                <p>{props.thePosts.comments[1].username}
                {props.thePosts.comments[1].text}</p>
                <p>{props.thePosts.comments[2].username}
                {props.thePosts.comments[2].text}</p>
            </div>
            <div className="date">
            <p>{props.thePosts.timestamp}</p>
            </div>

            {/* <props.thePosts.map(thepost =>) */}
        </div>
    )
};

export default Comments;