import React,{ Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import Posts from './img/'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  
  render(){
    return (
        <div className="App">
          <SearchBar />
          <h2>Starting</h2>
        </div>
    )
  }
}

export default App;
