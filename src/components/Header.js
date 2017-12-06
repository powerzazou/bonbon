import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Titre</h1>
            </div>
        );
    }
}

export default Header;
