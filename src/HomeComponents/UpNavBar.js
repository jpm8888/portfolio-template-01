import React, { Component } from "react";
import './css/UpNavBar.css';
export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-light ml-5" >
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu} id="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav" id="navbar-nav">
            <a className="nav-item nav-link" href="#">selected work</a>
            <a className="nav-item nav-link" href="#">branding</a>
            <a className="nav-item nav-link" href="#">digital experiences</a>
            <a className="nav-item nav-link" href="#">graphics design</a>
            <a className="nav-item nav-link" href="#">custom printing</a>
          </div>
        </div>
      </nav>
    );
  }
}