import React, { Component } from 'react';
import logo from "../assets/home/img1.png";
import './css/LeftNavBar.css';


class LeftNavBar extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3" style={{ backgroundColor: "white" }}>
                    <nav className="navbar navbar-light bg-light mb-5">

                        <ul className="navbar-nav" id="navbar-nav">
                            <Logo />
                            <LiItem name={'Navigation'} href={'#'} />
                            <LiItem name={'Home'} href={'#'} />
                            <LiItem name={'Services'} href={'#'} />
                            <LiItem name={'About'} href={'#'} />
                            <LiItem name={'Blog'} href={'#'} />
                            <LiItem name={'Contact'} href={'#'} />
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

const Logo = () => {
    return (
        <img src={logo} height='150px' width='100px' className="navbar-brand img-fluid" alt={'logo'} id="logo"></img>
    )
}

const LiItem = (props) => {
    let { name, href } = props;

    return (
        <li className="nav-item"><a href={href} className="nav-link">{name}</a></li>
    )
}

export default LeftNavBar;