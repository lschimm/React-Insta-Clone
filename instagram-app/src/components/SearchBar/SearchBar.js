import React from 'react';
import './SearchBar.css';
import logo from './img/logo.png';
import nav from './img/nav.png';
import user from './img/user.png';
import heart from './img/heart.png';

function SearchBar() {
    return (
    <div className="search-bar">
        <img src={logo} className="logo" />
        <h2> Instaclone</h2>
        <input className="input" />
    </div>
    )
}

export default SearchBar; 