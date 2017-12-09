import React, { Component } from 'react';
import ProjectPreview from './ProjectPreview'
import './ProjectList.css';

class ProjectList extends Component {
    render() {
        return (
            <div class='projectList'>
                <h2>Projets</h2>
                <div class='flexWrap'>
                    {window.bonbonProjects.sort((a, b) => {
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
