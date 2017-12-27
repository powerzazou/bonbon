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
                        <p className='projectTitle'>{project.title}</p>
                        <p className='projectDescription'>Ready to wear<br/>Spring-summer<br/>2016</p>
                        <p className='projectBrand'>BRAND : PHENIX</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPreview;
