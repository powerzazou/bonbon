import React, { Component } from 'react';
import Header from './components/Header';
import ProjectList from './components/projects/ProjectList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <ProjectList/>
        </div>
    );
  }
}

export default App;
