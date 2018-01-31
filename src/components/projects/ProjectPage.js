import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import './ProjectPage.css';
import SliderDecorators from './SliderDecorators';


class ProjectPage extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            project: this.getProject(props.match.params.id)
        }
    }
    getProject (id) {
        return window.bonbonProjects.find((project)=> {
            return project.id === parseInt(id, 10)
        })
    }
    getCarousel (carousel) {
        return <Carousel decorators={SliderDecorators}> 
            {carousel.map((image) => {
                return <img src={image}/>
            })}
        </Carousel>
    }
    render() {
        const project = this.state.project;
        const carousel = (project.carousel) ? this.getCarousel(project.carousel) : null;
        console.log(carousel);
        if (typeof this.state.project === 'undefined') {
            return (
                <div>
                    <p>Page introuvable ...</p>
                    <Link to='/'>Retour a l'accueil</Link>
                </div>
            )
        } else {
            return (
                <div className='projectPage'>
                    {carousel}
                    <div className='projectDescription'>
                        <div>
                            <p className='projectDescription' dangerouslySetInnerHTML={{__html: project.text}}></p>
                            <p className='projectType' dangerouslySetInnerHTML={{__html: project.accroche.type}}></p>
                        </div>
                        <div>
                            <p className='projectBrand' dangerouslySetInnerHTML={{__html: project.accroche.brand}}></p>
                            {project.accroche.brandExtra &&
                                <p className='projectBrandExtra' dangerouslySetInnerHTML={{__html: project.accroche.brandExtra}}></p>
                            }
                            <p className='projectYear'>{project.accroche.year}</p>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default ProjectPage;
