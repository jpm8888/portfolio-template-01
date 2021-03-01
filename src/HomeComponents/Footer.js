import React, {Component} from 'react';
import image4 from '../assets/home/facebook.svg';
import './css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid" id="footer">
                    <div className="row">
                        <div className="col">
                        <div id="div">
                        <p className="figure-caption">Get in touch</p>
                            <img src={image4} height='5px' width='25px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='25px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='25px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='25px' className="img-fluid"></img>
                        </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;