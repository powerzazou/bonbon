import React, { Component } from 'react';
import './Header.css';
// import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor (props) {
        super(props);
        this.scrolling = false;
        this.categoriesOffset = [];
        this.state = {
            previouslySelectedCategoryNumber: -1, 
            selectedCategoryNumber: 0 
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
        const scrollY = window.scrollY;
        let newSelectedCategoryNumber = this.state.selectedCategoryNumber;
        const previouslySelectedCategoryNumber = this.state.selectedCategoryNumber;
        this.categoriesOffset.forEach((categoryOffset, index) => {
            if (categoryOffset - (window.innerHeight / 2) <= scrollY) {
                newSelectedCategoryNumber = index;
            }
        });
        if (newSelectedCategoryNumber !== this.state.selectedCategoryNumber) {
            this.setState({
                previouslySelectedCategoryNumber: previouslySelectedCategoryNumber,
                selectedCategoryNumber: newSelectedCategoryNumber
            });
        }
    }
    render() {
        let menuItemCount = 0;
        let classes = 'header';
        if (this.props.additionnalClasses) {
            classes += ' ' + this.props.additionnalClasses;
        }
        return (
            <div className={classes}>
                <div className='logo'>
                    <Link to="/">
                        <img src='./images/logo_header.png' className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className='menu'>
                    {window.bonbonCategories.sort((a, b) => {
                        return a.order - b.order;
                    }).map((category, index) => {
                        menuItemCount++;
                        let additionnalClasses = (index === this.state.selectedCategoryNumber) ? ' selected' : '';
                        additionnalClasses = (index === this.state.previouslySelectedCategoryNumber) ? ' previouslySelected' : additionnalClasses;
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
        [...document.querySelectorAll('.menuItemContainer')].forEach((node) => {
            this.categoriesOffset.push(node.offsetTop);
        });
        document.addEventListener('scroll', (e) => this.handleScroll(e))
    }
}

export default Header;
