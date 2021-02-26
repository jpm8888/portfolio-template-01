import React, {Component} from 'react';
import logo from "../assets/home/logo.jpg";

class LeftNavBar extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3" style={{ backgroundColor: "white" }}>
                    <nav className="navbar navbar-light bg-light mb-5">

                        <ul className="navbar-nav">
                            <img src={logo} height='150px' width='50px' className="navbar-brand" alt={'logo'}></img>
                            <li className="nav-item"><a href="#" className="nav-link">Navigation</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default LeftNavBar;