import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className='aboutPage'>
                <div className='aboutTitle'> PAULINE MIDON</div>
                <div className='aboutNormal'>
                    Designer graphique basée à Paris <br/>
                    Diplômée de l'ECV Paris promotion 2013
                </div>
                <div className='aboutItalic'>
                    Direction Artistique 360° <br/>
                    Graphisme print & web <br/>
                    Motion design <br/>
                </div>
                <div className='aboutContact'>
                    <a href='mailto:paulinemidon.design@gmail.com'><img src='/images/enveloppe.png' /><br/>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default AboutPage;
