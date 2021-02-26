import React, {Component} from 'react';

class UpNavBar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-md navbar-light bg-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="#" className="nav-link">Selected work</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">branding</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">digital experience</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">graphics design</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">custom printing</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpNavBar;