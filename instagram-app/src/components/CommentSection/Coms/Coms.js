import React from 'react';
// import './Comments.css';

const Coms = props => {
    return (
        <div className="user">
            <p>
            {props.comm.username}
            </p>
            <p>
            {props.comm.text}
            </p>
            {/* props.thePosts.comments && props.thePosts.username.map(e => <p>{e.username}</p> */}
        </div>
    )
}

export default Coms;