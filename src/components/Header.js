import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <h1>Titre</h1>
            </div>
        );
    }
}

export default Header;
