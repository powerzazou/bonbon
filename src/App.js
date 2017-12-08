import React, { Component } from 'react';
import Header from './components/Header';
import ProjectList from './components/projects/ProjectList';
import ProjectPage from './components/projects/ProjectPage';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
              <Header/>
                <div className='parallax-wrapper'>
                    <div className='parallax-element'>
                        <Route path="/" exact={true} component={ProjectList}/>
                        <Route path="/projects/:id" component={ProjectPage}/>
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
