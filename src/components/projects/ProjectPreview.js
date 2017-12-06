import React, { Component } from 'react';

class ProjectPreview extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default ProjectPreview;
