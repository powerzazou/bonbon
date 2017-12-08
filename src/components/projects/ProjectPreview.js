import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectPreview extends Component {
    render() {
        const project = this.props.project;
        return (
            <div>
                <p>{project.title}</p>
                <img height='350' src='http://via.placeholder.com/350x250'/>
                <Link to={`/projects/${project.id}`}>voir</Link>
            </div>
        );
    }
}

export default ProjectPreview;
