import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';
import { withRouter } from 'react-router-dom';
import bowser from 'bowser';



class ProjectPreview extends Component {
    constructor (props) {
        super(props);
        this.state = {
            focusedClass: false,
            id: 'projectPreview-' + this.props.project.id
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
        const infoBlock = (bowser.tablet || bowser.mobile) ?
            ((<div className={'infoBlock mobile'}>
                <p className='projectDescription' dangerouslySetInnerHTML={{__html: project.accroche.catchPhrase}}></p>
            </div>))
            :
            (<div className={infoBlockClasses}>
                <p className='projectDescription' dangerouslySetInnerHTML={{__html: project.accroche.catchPhrase}}></p>
                <div className='projectDetails'>
                    <p className='projectType' dangerouslySetInnerHTML={{__html: project.accroche.type}}></p>
                    <p className='projectSeparator'>•</p>
                    <p className='projectBrand'>{project.accroche.brand}</p>
                    <p className='projectYear'>{project.accroche.year}</p>
                </div>
            </div>)
        ;

        return (
            <div id={this.state.id} className={cssClasses}>
                <div className='container' onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}} onClick={() => (this.handleClick())}>
                    <img src={(project.accroche && project.accroche.image) || 'http://via.placeholder.com/510x340'}/>
                    {infoBlock}
                </div>
            </div>
        );
    }
    componentDidMount () {
        this.afterRender();
    }
    componentDidUpdate () {
        this.afterRender()
    }
    afterRender () {

        // Truc relou pour caler l'image a la bonne hauteur :(
        // TODO : trouver un truc malin :(
        setTimeout(() => {
            const containerHeight  = document.querySelector('#' + this.state.id + ' > .container > img').height;
            if (containerHeight > 0) {
                document.querySelector('#'+ this.state.id).style.height = containerHeight + 'px';
            } else {
                setTimeout(() => { this.afterRender() }, 100);
            }
        }, 100);
        
    }
}

export default withRouter(ProjectPreview);
