import React, { Component } from 'react';
import './Header.css';
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
    handleScroll (e) {
        // ça part tres mal ça va falloir trouver autre chose ...
        const scrollY = window.scrollY;
        let newSelectedCategoryNumber = this.state.selectedCategoryNumber;
        const previouslySelectedCategoryNumber = this.state.selectedCategoryNumber;
        this.categoriesOffset.forEach((categoryOffset, index) => {
            if (categoryOffset - (window.innerHeight * 2) <= scrollY) {
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
                        <img src='/images/logo_header.png' className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className='menu'>
                    <div className={'menuItem selected'}>
                        <Link to="/">
                            WORK
                        </Link>
                    </div>
                    <div id={'menuItem' + (menuItemCount + 1)} className={'menuItem'} >About</div>
                    <div className='social'>
                        <img src='/images/instagram_logo.png' alt="instagram" />
                    </div>
                    <div className='social'>
                        <img src='/images/linkedin_logo.png' alt="linkedin" />
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
