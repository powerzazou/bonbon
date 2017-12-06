import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectPreview extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <Link to='/projects/1'>voir</Link>
            </div>
        );
    }
}

export default ProjectPreview;
