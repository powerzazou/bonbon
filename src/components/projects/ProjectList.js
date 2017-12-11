import React, { Component } from 'react';
import ProjectPreview from './ProjectPreview'
import './ProjectList.css';

class ProjectList extends Component {
    render() {
        const category = this.props.category;
        return (
            <div id={'projectListCategory' + category.id} className='projectList'>
                <h2>{category.title}</h2>
                <div className='flexWrap'>
                    {window.bonbonProjects.filter((project) => {
                        return category.id === project.category;
                    }).sort((a, b) => {
                        return a.order - b.order;
                    }).map((project, index) => {
                        return <ProjectPreview 
                            key={project.id} 
                            project={project} 
                            odd={index%2 !== 0}>
                        </ProjectPreview>
                    })}
                </div>
            </div>
        );
    }
}

export default ProjectList;
