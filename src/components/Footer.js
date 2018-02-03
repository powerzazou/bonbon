import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        let classes = 'footer';
        if (this.props.additionnalClasses) {
            classes += ' ' + this.props.additionnalClasses;
        }
        return (
            <div className={classes}>
                <p>2018 Pauline Midon All rights reserved.</p>
            </div>
        );
    }
}

export default Footer;
