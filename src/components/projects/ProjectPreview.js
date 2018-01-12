import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';
import { withRouter } from 'react-router-dom';


class ProjectPreview extends Component {
    constructor (props) {
        super(props);
        this.state = {
            focusedClass: false
        }
    }
    handleMouseEnter () {
        this.setState({focusedClass: 'focused'});
    }
    handleMouseLeave () {
        this.setState({focusedClass: 'unfocused'})
    }
    handleClick () {
        this.props.history.push('/projects/' + this.props.project.id);
    }
    render() {
        const project = this.props.project;
        let cssClasses = 'projectPreview';
        if(this.props.odd) {
            cssClasses += ' odd';
        }
        const infoBlockClasses = (typeof this.state.focusedClass === 'string') ? 'infoBlock ' + this.state.focusedClass : 'infoBlock';
        // <Link to={`/projects/${project.id}`}>voir</Link>
        return (
            <div className={cssClasses}>
                <div className='container' onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}} onClick={() => (this.handleClick())}>
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

export default withRouter(ProjectPreview);
