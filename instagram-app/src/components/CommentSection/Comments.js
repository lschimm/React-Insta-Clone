import React, { Component } from 'react';
import Coms from './Coms/Coms';
import './Comments.css';


// const Comments = props => {
//     return(
//         <div className="comments">
//             <div className="userAnd">
//                 <img src={props.thePosts.thumbnailUrl} 
//                 className="thumbnail" />
//                 <h5 className="username">{props.thePosts.username}</h5>
//             </div>
//             <img src={props.thePosts.imageUrl} />
//             <div className="likes">
//                 <button className="button">like</button>
//                 <button className="button">cmnt</button>
//                 <p>{props.thePosts.likes} likes</p>
//             </div>
//             <div className="date">
//             <p>{props.thePosts.timestamp}</p>
//             </div>
//             {/* <div> */}
//                 {props.thePosts.comments.map(each => {
//                     return (
//                     <div>
//                         <Coms 
//                             comm = {each}
//                             key = {each.id}
//                         />
//                     </div>
//                 )})}
//             {/* </div> */}
//             {/* <props.thePosts.map(thepost =>) */}
//         </div>
//     )
// };

class Comments extends Component{
    // constructor() {
    //     super();
    //     this.state = { 
    //         thePosts: this.props.thePosts
    //     }
    // }

    render(){
    return(
        <div className="comments">
            <div className="userAnd">
                <img src={this.props.thePosts.thumbnailUrl} 
                className="thumbnail" />
                <h5 className="username">{this.props.thePosts.username}</h5>
            </div>
            <img src={this.props.thePosts.imageUrl} />
            <div className="likes">
                <button className="button">like</button>
                <button className="button">cmnt</button>
                <p>{this.props.thePosts.likes} likes</p>
            </div>
            <div className="date">
            <p>{this.props.thePosts.timestamp}</p>
            </div>
                {this.props.thePosts.comments.map(each => {
                    return (
                    <div>
                        <Coms 
                            comm = {each}
                            key = {each.id}
                        />
                    </div>
                )})}

        </div>
    )
    }
} 

export default Comments;