import React, { Component } from 'react';
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="footer">
                                <p className="figure-caption mr-4">Get in touch</p>
                                <label><FontAwesomeIcon icon={faFacebookF} pull="center" size="1x" className="ml-4" color="grey" /></label>
                                <label><FontAwesomeIcon icon={faLinkedinIn} pull="center" size="1x" className="ml-4" color="grey" /></label>
                                <label><FontAwesomeIcon icon={faTwitter} pull="center" size="1x" className="ml-4" color="grey" /></label>
                                <label><FontAwesomeIcon icon={faBehance} pull="center" size="1x" className="ml-4" color="grey" /></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;