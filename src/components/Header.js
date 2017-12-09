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
                    {window.bonbonCategories.sort((a, b) => {
                        return a.order - b.order;
                    }).map((category) => {
                        return <div className='menuItem'>{category.title}</div>
                    })}
                    <div className='menuItem'>About</div>
                    <div className='social'>
                </div>
                
                </div>
            </div>
        );
    }
}

export default Header;
