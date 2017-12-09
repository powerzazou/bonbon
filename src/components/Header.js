import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className='menu'>
                    <div className='menuItem'>Graphic Design</div>
                    <div className='menuItem'>Motion</div>
                    <div className='menuItem'>Illustration</div>
                    <div className='menuItem'>About</div>
                    <div className='social'>
                </div>
                
                </div>
            </div>
        );
    }
}

export default Header;
