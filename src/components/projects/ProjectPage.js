import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <div>
                    <h1>{project.title}</h1>
                </div>
            );
        }

    }
}

export default ProjectPage;
