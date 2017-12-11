import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor (props) {
        super(props);
        this.scrolling = false;
        this.categoriesOffset = [];
        this.state = {
            selectedCategoryId: window.bonbonCategories.sort((a, b) => {return a.order - b.order;})[0]
        }
    }
    scrollToSmooth (targetedOffset, direction, step, minScroll, maxScroll) {
        let callback = false;
        const scrollTop = window.scrollY
        if (direction === 'upward' && scrollTop - step > targetedOffset && scrollTop - step > minScroll) {
            window.scrollTo(0, scrollTop - step);
            callback = (scrollTop > targetedOffset);
        } else if (scrollTop + step < targetedOffset && scrollTop + step < maxScroll) {
            window.scrollTo(0, scrollTop + step);
            callback = (scrollTop < targetedOffset);
        }
        if (callback) {
            setTimeout(() => {this.scrollToSmooth(targetedOffset, direction, step, minScroll, maxScroll)}, 1);
        } else {
            this.scrolling = false;
        }
    }
    handleClickOnMenuItem (e) {
        if (this.scrolling) {
            return;
        }
        const categoryId = e.target.getAttribute('data-categoryid');
        const categoryOffsetTop = document.querySelector('#projectListCategory' + categoryId).offsetTop - document.querySelector('.header').offsetHeight;
        const direction = (window.scrollY <= categoryOffsetTop) ? 'downward' : 'upward';  
        const maxScroll = document.body.offsetHeight - window.innerHeight + document.querySelector('.header').offsetHeight;
        this.scrolling = true;
        this.scrollToSmooth(categoryOffsetTop, direction, 10, 0, maxScroll);
    }
    handleScroll (e) {
        // ça part tres mal ça va falloir trouver autre chose ... 
    }
    render() {
        let menuItemCount = 0;
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
                        menuItemCount++;
                        const additionnalClasses = (category.id === this.state.selectedCategoryId.id) ? ' selected' : '';
                        return (
                            <div
                                key={category.id}
                                id={'menuItem' + menuItemCount}
                                className={'menuItem' + additionnalClasses}
                                data-categoryid={category.id}
                                onClick={(e) => this.handleClickOnMenuItem(e)}>
                                {category.title}
                            </div>
                        )
                    })}
                    <div id={'menuItem' + (menuItemCount + 1)} className={'menuItem'} >About</div>
                    <div className='social'>
                </div>
                
                </div>
            </div>
        );
    }

    componentDidMount () {
        [...document.querySelectorAll('.projectList')].forEach((node) => {
            this.categoriesOffset.push = node.offsetTop;
        });
        document.addEventListener('scroll', (e) => this.handleScroll(e))
    }
}

export default Header;
