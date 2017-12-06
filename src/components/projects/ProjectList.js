import React, { Component } from 'react';
import ProjectPreview from './ProjectPreview'

class ProjectList extends Component {
    render() {
        return (
            <div>
                <h2>Projets</h2>
                {window.bonbonProjects.sort((a, b) => {
                    return a.order - b.order;
                }).map((project) => {
                    return <ProjectPreview key={project.id} project={project}></ProjectPreview>
                })}
            </div>
        );
    }
}

export default ProjectList;
