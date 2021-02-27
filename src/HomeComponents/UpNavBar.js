import React, {Component} from 'react';
import styles from './up.css';
class UpNavBar extends Component {
    render() {
        return (
            <div>
                  <nav className="navbar  navbar-expand-md navbar-light bg-light align-center ml-5">
                                <ul className="navbar-nav"id="navbar-nav">
                                    <li className="nav-item"><a href="#" className="nav-link">selected work</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">branding</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">digital experience</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">graphics design</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">custom printing</a></li>
                                </ul>
                            </nav>
            </div>
        );
    }
}

export default UpNavBar;