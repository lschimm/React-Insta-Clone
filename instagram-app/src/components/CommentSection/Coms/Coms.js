import React from 'react';
// import './Comments.css';

const Coms = props => {
    return (
        <div className="user">
            <p className="usernames">
            {props.comm.username}
            </p>
            <p className="comment-text">
            {props.comm.text}
            </p>
        </div>
    )
}

export default Coms;