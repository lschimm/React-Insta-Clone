import React,{ Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';
import withAuthenticate from './components/Login/withAuthenticate';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],

      id: '',
      username: '',
      thumbnailUrl: '',
      likes: 0 ,
      timestamp: 0
    };
  }
  
  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }
  
  render(){
    return (
        <div className="App">
          <SearchBar />
          <withAuthenticate />
          <Posts 
          thePosts= {this.state.data}
          />
          <h2>---</h2>
        </div>
    )
  }
}

export default App;
