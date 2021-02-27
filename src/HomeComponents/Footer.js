import React, {Component} from 'react';
import image4 from '../assets/home/facebook.svg';
import './css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid">
                    <div className="row-cols-1">
                        <div className="col">
                            <p className="figure-caption">Get in touch</p>
                            <img src={image4} height='5px' width='10px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='10px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='10px' className="img-fluid"></img>
                            <img src={image4} height='100px' width='50px' className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;