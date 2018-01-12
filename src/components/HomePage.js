import React, { Component } from 'react';
import ProjectList from './projects/ProjectList'
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className='homePage'>
                <div className='flexWrap'>
                    <ProjectList>
                    </ProjectList>
                </div>
            </div>
        );
    }
}

export default HomePage;
