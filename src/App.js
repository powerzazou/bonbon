import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectPage from './components/projects/ProjectPage';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                    <div className='parallax-wrapper'>
                        <div className='parallax-element'>
                            <Route path="/" exact={true} component={HomePage}/>
                            <Route path="/projects/:id" component={ProjectPage}/>
                            <Footer/>
                        </div>
                        <div className='parallax-element-after'></div>
                    </div>
            </div>
        </BrowserRouter>
    );
  }

  componentDidMount() {
      const parallaxHeight = document.querySelector('.parallax-element').offsetHeight;
      document.querySelector('.parallax-element-after').style.height = parallaxHeight + 'px';
  }
}

export default App;
