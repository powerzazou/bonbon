import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectPage from './components/projects/ProjectPage';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.currentScroll = 0;
        this.currentParallaxPosition = 0;
        this.state = {
            displayIntroSlide: sessionStorage.getItem('displayedIntroSlide') ? false : true,
            contentClass: sessionStorage.getItem('displayedIntroSlide') ? '' : 'hidden'
        };
    }
    handleScroll (e) {
        // Attention aux perfs la hein !
        const parallaxSpeed = 0.5;
        const newScroll = (this.currentScroll - window.scrollY) * parallaxSpeed;
        this.currentParallaxPosition += newScroll;
        document.querySelector('.parallax-wrapper').style.backgroundPositionY = this.currentParallaxPosition + 'px';
        this.currentScroll = window.scrollY;
    }
    handleClickOnIntro (e) {
        console.log('click on intro');
        document.querySelector('body').style.overflow = 'auto';
        this.setState({displayIntroSlide: false, contentClass: 'shown'});
        sessionStorage.setItem('displayedIntroSlide', true);
    }
    handleMouseEnterOnArrow (e) {
        e.target.classList.add('animated-arrow');
        setTimeout(() => {
            if(document.querySelector('.animated-arrow')) {
                document.querySelector('.animated-arrow').classList.remove('animated-arrow');
            }
        }, 1000);
    }
    render () {
        const introSlideClass = this.state.displayIntroSlide ? 'shown' : 'hidden';
        const contentClass =  this.state.contentClass;
        return (
            <BrowserRouter basename='/' forceRefresh={true}>
                <div className='app'>
                    {(this.state.contentClass === 'hidden' || this.state.contentClass === 'shown') && 
                        <div id='introSlide' className={'gradient-wrapper ' + introSlideClass} onClick={(e) => this.handleClickOnIntro(e)}>
                            <div id='introSlideLogo'>
                                <img src='/images/logo_intro.png'/>
                            </div>
                            <div id='introSlideArrow' >
                                <img onMouseEnter={this.handleMouseEnterOnArrow} src='/images/arrow_intro.png'/>
                            </div>
                        </div>
                    }
                    <div className={'container ' + contentClass}>
                        <Header additionnalClasses={contentClass} />
                            <div className={'gradient-wrapper'} style={{minHeight: window.innerHeight + 'px'}}>
                                <div className='parallax-wrapper'>
                                    <div className='parallax-element'>
                                        <Route path="/" exact={true} component={HomePage}/>
                                        <Route path="/projects/:id" component={ProjectPage}/>
                                    </div>
                                </div>
                            </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        if (this.state.contentClass === 'hidden' || this.state.contentClass === 'shown') {
            document.querySelector('body').style.overflow = 'hidden';
        }
        this.currentScroll = window.scrollY;
        document.addEventListener('scroll', (e) => this.handleScroll(e));
    }
}

export default App;
