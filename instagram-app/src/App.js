import React,{ Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      commentPosts: [],

      id: '',
      username: '',
      thumbnailUrl: '',
      likes: 0 ,
      timestamp: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      commentPosts: dummyData
    });
  }
  
  render(){
    return (
        <div className="App">
          <SearchBar />
          <Posts 
          thePosts= {this.state.commentPosts}
          />
          <h2>---</h2>
        </div>
    )
  }
}

export default App;
