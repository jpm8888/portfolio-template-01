import React, { Component } from 'react';
import './css/UpNavBar.css';

class UpNavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand-md navbar-light bg-light align-center ml-5">
                    <ul className="navbar-nav" id="navbar-nav">
                        <LiItem name={'selected work'} href={'#'} />
                        <LiItem name={'branding'} href={'#'} />
                        <LiItem name={'digital experience'} href={'#'} />
                        <LiItem name={'graphic design'} href={'#'} />
                        <LiItem name={'custom printing'} href={'#'} />
                    </ul>
                </nav>
            </div>
        );
    }
}

const LiItem = (props) => {
    let { name, href } = props;

    return (
        <li className="nav-item"><a href={href} className="nav-link">{name}</a></li>
    )
}

export default UpNavBar;