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
        if (typeof project.accroche === 'undefined') {
            console.log(project);
            project.accroche = {
                image: '/images/projects/PROJET1_COUVERTURE_510x340.jpg',
                catchPhrase: ' Le camp de vacances Aigle',
                type: 'Identité visuelle',
                brand: 'Brand: Aigle',
                year: '2018'
            };
        }
        return (
            <div className={cssClasses}>
                <div className='container' onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}} onClick={() => (this.handleClick())}>
                    <img src={(project.accroche && project.accroche.image) || 'http://via.placeholder.com/510x340'}/>
                    <div className={infoBlockClasses}>
                        <p className='projectTitle'>{project.title}</p>
                        <div>
                            <p className='projectDescription' dangerouslySetInnerHTML={{__html: project.accroche.catchPhrase}}></p>
                            <p className='projectType' dangerouslySetInnerHTML={{__html: project.accroche.type}}></p>
                        </div>
                        <div>
                            <p className='projectBrand' dangerouslySetInnerHTML={{__html: project.accroche.brand}}></p>
                            <p className='projectYear'>{project.accroche.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProjectPreview);
