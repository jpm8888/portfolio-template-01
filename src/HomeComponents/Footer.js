import React, {Component} from 'react';
import image4 from '../assets/home/facebook.svg';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"><p>Get in touch</p></div>
                        <div className="col">
                            <img src={image4} height='150px' width='50px'></img>
                            <img src={image4} height='150px' width='50px'></img>
                            <img src={image4} height='150px' width='50px'></img>
                            <img src={image4} height='150px' width='50px'></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;