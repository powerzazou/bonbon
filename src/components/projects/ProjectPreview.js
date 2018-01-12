import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';

class ProjectPreview extends Component {
    constructor (props) {
        super(props);
        this.state = {
            focused: false
        }
    }
    handleMouseEnter () {
        this.setState({focused: true});
    }
    handleMouseLeave () {
        this.setState({focused: false});
    }
    render() {
        const project = this.props.project;
        let cssClasses = 'projectPreview';
        if(this.props.odd) {
            cssClasses += ' odd';
        }
        const infoBlockClasses = (this.state.focused) ? 'infoBlock focused' : 'infoBlock';
        // <Link to={`/projects/${project.id}`}>voir</Link>
        return (
            <div className={cssClasses}>
                <div className='container' onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}}>
                    <img src='http://via.placeholder.com/510x340'/>
                    <div className={infoBlockClasses}>
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
