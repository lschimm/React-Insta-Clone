import React from 'react';
import './Posts.css';
import Comments from '../CommentSection/Comments';
import Coms from '../CommentSection/Coms/Coms';
import PropTypes from 'prop-types';


const Posts = props => {
    return (
        <div className="someposts">
            {props.thePosts.map(post => (
                <div>
                    <Comments 
                    thePosts = {post}
                    key= {post.id}
                    />
                    </div>
                ))}
                {}
            </div>
        )
    }

Posts.propTypes = {
    thePosts: PropTypes.shape ({
        thePosts: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        //recheck these things
    })
}


export default Posts;

// {props.thePosts.comments.map(comm => (
//     <div></div>
// ))