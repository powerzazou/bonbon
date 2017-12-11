import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    // TODO gerer min/max scroll :) 
    scollToSmooth (scrolledElement, targetedOffset, direction, minScroll, maxScroll, step) {
        let callback = false;
        if (direction === 'upward' && scrolledElement.scrollTop - step > targetedOffset && scrolledElement.scrollTop - step > minScroll) {
            scrolledElement.scrollTop -= step;
            callback = (scrolledElement.scrollTop > targetedOffset);
        } else if (scrolledElement.scrollTop + step < targetedOffset && scrolledElement.scrollTop + step < maxScroll) {
            scrolledElement.scrollTop += step;
            callback = (scrolledElement.scrollTop < targetedOffset);
        }
        if (callback) {
            setTimeout(() => {this.scollToSmooth(scrolledElement, targetedOffset, direction, minScroll, maxScroll, step)}, 1);
        }
    }
    handleClickOnMenuItem (e) {
        const categoryId = e.target.getAttribute('data-categoryid');
        const categoryOffsetTop = document.querySelector('#projectListCategory' + categoryId).offsetTop;
        const scrolledElement = document.querySelector('.parallax-wrapper');
        const direction = (scrolledElement.scrollTop <= categoryOffsetTop) ? 'downward' : 'upward';  
        const maxScroll = scrolledElement.scrollHeight - scrolledElement.clientHeight;
        window.scrollTo(0, 0)        
        this.scollToSmooth(scrolledElement, categoryOffsetTop, direction, 0, maxScroll, 10);
    }
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
                        return (
                            <div
                                key={category.id}
                                className='menuItem'
                                data-categoryid={category.id}
                                onClick={(e) => this.handleClickOnMenuItem(e)}>
                                {category.title}
                            </div>
                        )
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
