import React,{ Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';
import withAuthenticate from './components/Login/withAuthenticate';

import styled from 'styled-components'
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
      timestamp: 0,
      filteredPosts: []
    };
  }
  
  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  changeHandler = event => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  searchFilter = event => {
    const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({filteredPosts: filtered})
  }

  const 
  
  render(){
    return (
        <div className="App">
          <SearchBar 
            changeHandler={this.changeHandler}
            newSearch={this.state.search} 
            searchFilter={this.searchFilter}
            />
          
          <Posts 
          thePosts= {this.state.data}
          searchFilter={this.searchFilter}
          filteredPosts={this.state.filteredPosts}
          />
          <withAuthenticate />
        </div>
    )
  }
}

export default App;
