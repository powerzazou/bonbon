import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import './ProjectPage.css';


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
    render() {
        const project = this.state.project;
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
                    <h1>{project.title}</h1>
                    <Carousel>
                        <img width='1000' height='400' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                        <img width='1000' height='400' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                        <img width='1000' height='400' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                        <img width='1000' height='400' src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                    </Carousel>
                </div>
            );
        }

    }
}

export default ProjectPage;
