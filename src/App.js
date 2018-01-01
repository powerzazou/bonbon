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
            displayIntroSlide: true
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
        this.setState({displayIntroSlide: false});
    }
    render () {
        // TODO A dynamiser en fonction de l'état
        let displayIntroSlide = this.state.displayIntroSlide;
        return (
            <BrowserRouter>
                <div className='app'>
                    {displayIntroSlide && 
                        <div id='introSlide' className='gradient-wrapper' onClick={(e) => this.handleClickOnIntro(e)}>
                            <div id='introSlideLogo'>
                                <img src='./images/logo_intro.png'/>
                            </div>
                            <div id='introSlideArrow'>
                            <img src='./images/arrow_intro.png'/></div>
                        </div>
                    }
                    {!displayIntroSlide && <Header  />}
                        {!displayIntroSlide &&
                            <div className='gradient-wrapper'>
                                <div className='parallax-wrapper'>
                                    <div className='parallax-element'>
                                        <Route path="/" exact={true} component={HomePage}/>
                                        <Route path="/projects/:id" component={ProjectPage}/>
                                    </div>
                                </div>
                            </div>
                        }
                    { !displayIntroSlide && <Footer/>}
                </div>
            </BrowserRouter>
        );
    }

    componentDidMount() {
        this.currentScroll = window.scrollY;
        document.addEventListener('scroll', (e) => this.handleScroll(e))
    }
}

export default App;
