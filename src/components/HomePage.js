import React, { Component } from 'react';
import ProjectList from './projects/ProjectList'
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div className='homePage'>
                <div className='flexWrap'>
                    {window.bonbonCategories.sort((a, b) => {
                        return a.order - b.order;
                    }).map((category) => {
                        return <ProjectList 
                            key={category.id} 
                            category={category} 
                            >
                        </ProjectList>
                    })}
                </div>
            </div>
        );
    }
}

export default HomePage;
