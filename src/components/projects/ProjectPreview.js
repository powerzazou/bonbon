import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';

class ProjectPreview extends Component {
    render() {
        const project = this.props.project;
        let cssClasses = 'projectPreview';
        if(this.props.odd) {
            cssClasses += ' odd';
        }
        // <Link to={`/projects/${project.id}`}>voir</Link>
        return (
            <div className={cssClasses}>
                <div className='container'>
                    <img src='http://via.placeholder.com/510x340'/>
                    <div className='infoBlock'>
                        <p>{project.title}</p>
                        <Link to={`/projects/${project.id}`}>voir</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPreview;
