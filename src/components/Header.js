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
            selectedCategoryNumber: 0,
            logoSrc: (window.innerWidth < 450) ? '/images/logo_header_mobile.png' : '/images/logo_header.png'
        };
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
                        <img src={this.state.logoSrc} className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className='menu'>
                    <div className={'menuItem selected'}>
                        <Link to="/">
                            WORK
                        </Link>
                    </div>
                    <div id={'menuItem2'} className={'menuItem'} >About</div>
                    <div id={'menuItem3'} className={'menuItem'} >
                        <a href='http://paulinemidon.tumblr.com' target='_blank'>
                            Atmosphere
                        </a>
                    </div>
                    <div className='social'>
                        <a href='https://www.instagram.com/paulinemidon/' target='_blank'>
                            <img src='/images/instagram_logo.png' alt="instagram" />
                        </a>
                    </div>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/pauline-midon-05972566/' target='_blank'>
                            <img src='/images/linkedin_logo.png' alt="linkedin" />
                        </a>
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
