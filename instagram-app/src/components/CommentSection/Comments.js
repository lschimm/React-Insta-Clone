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
    constructor(props) {
        super();
        this.state = { 
            thePosts: props.thePosts.comments,

            id: 0,
            username: "Leilani",
            text: ""
        }
    }


    addNewComment = (event, index) => {
        event.preventDefault();

        // index = this.state.thePosts.comments.length();

        const newComment = {
            id: index,
            username: this.state.username,
            text: this.state.text
        };
        // creating variable 
        // assigning an object to it
        // key and the value in object references to state

        this.setState({
            thePosts: [...this.state.thePosts, newComment],
            id: 0,
            username: "",
            text: ""
        })

    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // this.setState({
    //     comments: [...this.state.comments, newComment], 
    //     id: '',
    //     username: '',
    //     text: '',
    // })

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
                {this.state.thePosts.map(each => {
                    return (
                    <div>
                        <Coms 
                            comm = {each}
                            // key = {each.id}
                        />
                    </div>
                )})}
                
                <form className="comm-form" onSubmit={this.addNewComment}>
                    <input
                        type= "text" 
                        name= "text"
                        placeholder="Add a comment..."
                        value={this.state.text}
                        onChange={this.changeHandler}
                    />
                </form>

        </div>
    )
    }
} 

export default Comments;